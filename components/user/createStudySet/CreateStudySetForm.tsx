import { yupResolver } from "@hookform/resolvers/yup"
import * as React from "react"
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form"
import * as yup from "yup"
import cl from "clsx"
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/outline"
import { Session } from "next-auth"
import { gql, request } from "graphql-request"
import { useRouter } from "next/router"

type FormValues = {
  title: string
  description: string
  cards: {
    front: string
    back: string
  }[]
}

const schema = yup
  .object({
    title: yup.string().required("Title is a required field"),
    description: yup.string(),
    cards: yup.array().of(
      yup.object().shape({
        front: yup.string().required("Term is a required field"),
        back: yup.string().required("Definition is a required field"),
      })
    ),
  })
  .required()

const Total = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: "cards",
    control,
  })

  const totalCard = formValues.length
  return (
    <div className="mx-auto flex flex-col items-center justify-center space-y-2">
      <h1 className="text-2xl">Amount of cards</h1>{" "}
      <h2 className="text-6xl">{totalCard}</h2>
    </div>
  )
}

interface Props {
  session: Session | null
}

function CreateStudySet({ session }: Props) {
  const router = useRouter()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      cards: [{ front: "", back: "" }],
    },
    mode: "onBlur",
  })
  const { fields, append, remove } = useFieldArray({
    name: "cards",
    control,
  })

  const createDeck = (data: FormValues) => {
    const main = async () => {
      const mutation = gql`
        mutation CreateUserDeck(
          $input: CreateUserDeckInput!
          $where: UserWhereUniqueInput!
        ) {
          createUserDeck(input: $input, where: $where) {
            cards {
              back
              front
            }
            title
            description
            id
          }
        }
      `

      const variables = {
        input: {
          title: data.title,
          description: data.description,
          cards: data.cards.map((card) => {
            return {
              front: card.front,
              back: card.back,
            }
          }),
        },
        where: {
          id: session?.id,
        },
      }
      const endpoint = `${
        process.env.NEXT_PUBLIC_BASE_URL as string
      }/api/graphql`

      request(endpoint, mutation, variables).then(() => router.push("/latest"))
    }

    main().catch((err) => console.log(err))
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(createDeck)}
        className="form-control"
        id="hook-form"
      >
        <div className="flex">
          <div className="w-3/5">
            <div className="group w-full">
              <input
                placeholder="Enter a title like Biology"
                {...register("title")}
                className="input-ghost input input-lg w-full focus:outline-none"
              />
              <span
                className={cl(
                  "mt-2 block h-1 w-full bg-[#303545] group-focus-within:bg-[#ffcd1f] ",
                  errors.title && "bg-[#ff725b]"
                )}
              ></span>
              {errors.title ? (
                <label htmlFor="title" className="label text-[#ff725b]">
                  {errors.title?.message}
                </label>
              ) : (
                <label htmlFor="title" className="label">
                  Title
                </label>
              )}
            </div>
            <div className="group w-full">
              <input
                placeholder="Description of the Set"
                {...register("description")}
                className="input-ghost input input-lg w-full focus:outline-none"
              />
              <span
                className={cl(
                  "mt-2 block h-1 w-full bg-[#303545] group-focus-within:bg-[#ffcd1f] ",
                  errors.description && "bg-[#ff725b]"
                )}
              ></span>
              {errors.description ? (
                <label htmlFor="description" className="label text-[#ff725b]">
                  {errors.description?.message}
                </label>
              ) : (
                <label htmlFor="description" className="label">
                  Description
                </label>
              )}
            </div>
          </div>
          <Total control={control} />
        </div>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <section
                key={field.id}
                className="mb-8 w-full rounded-md bg-white p-8 shadow-lg"
              >
                <div className="text-xl text-[#939bb4]">{index + 1}</div>
                <div className="flex space-x-8">
                  <div className="group w-1/2">
                    <input
                      placeholder="Great term to remember"
                      {...register(`cards.${index}.front` as const, {
                        required: true,
                      })}
                      className="input-ghost input input-lg w-full focus:outline-none"
                    />
                    <span
                      className={cl(
                        "mt-2 block h-1 w-full bg-[#303545] group-focus-within:bg-[#ffcd1f] ",
                        errors?.cards?.[index]?.front && "bg-[#ff725b]"
                      )}
                    ></span>
                    {errors?.cards?.[index]?.front ? (
                      <label htmlFor="term" className="label text-[#ff725b]">
                        {errors?.cards?.[index]?.front?.message}
                      </label>
                    ) : (
                      <label htmlFor="term" className="label">
                        Term
                      </label>
                    )}
                  </div>
                  <div className="group w-1/2">
                    <input
                      placeholder="A cool definition"
                      {...register(`cards.${index}.back` as const, {
                        required: true,
                      })}
                      className="input-ghost input input-lg w-full focus:outline-none"
                    />
                    <span
                      className={cl(
                        "mt-2 block h-1 w-full bg-[#303545] group-focus-within:bg-[#ffcd1f] ",
                        errors?.cards?.[index]?.back && "bg-[#ff725b]"
                      )}
                    ></span>
                    {errors?.cards?.[index]?.back ? (
                      <label
                        htmlFor="definition"
                        className="label text-[#ff725b]"
                      >
                        {errors?.cards?.[index]?.back?.message}
                      </label>
                    ) : (
                      <label htmlFor="definition" className="label">
                        Definition
                      </label>
                    )}
                  </div>
                  <button type="button" onClick={() => remove(index)}>
                    <TrashIcon className="h-8 w-8 rounded-md transition-colors hover:bg-[#ff715b49] hover:text-[#ff725b]" />
                  </button>
                </div>
              </section>
            </div>
          )
        })}
        <PlusCircleIcon
          className="mx-auto mb-8 h-12 w-12 cursor-pointer rounded-md hover:bg-green-500/40 hover:text-green-500"
          onClick={() =>
            append({
              front: "",
              back: "",
            })
          }
        />
        <button className="btn mx-auto w-56 border-none bg-[#3ccfcf] normal-case hover:bg-[#2f9b9b]">
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateStudySet
