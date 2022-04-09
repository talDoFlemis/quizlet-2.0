import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import cl from "clsx"
import GoogleIcon from "@svgs//socialMedia/google.svg"
import FacebookIcon from "@svgs//socialMedia/facebook.svg"
import { useState } from "react"
import ModalNotImplemented from "@components/layout/ModalNotImplemented"

interface FormValues {
  username: string
  password: string
  email: string
  termsandconditions: boolean
  birthday: { month: string; day: number; year: number }
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().min(8).required(),
    email: yup.string().email().required(),
    termsandconditions: yup
      .bool()
      .oneOf(
        [true],
        "PLEASE ACCEPT QUIZLET'S TERMS OF SERVICE AND PRIVACY POLICY TO CONTINUE."
      ),
  })
  .required()

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <>
      <div className="flex justify-between">
        <button className="btn-outline btn border-2 border-[#d9dde8] text-sm normal-case hover:bg-[#016dc4]">
          <GoogleIcon className="text-xl sm:mr-4" />
          <p className="hidden sm:inline-flex">Continue with Google</p>
        </button>
        <button className="btn-outline btn border-2 border-[#d9dde8] text-sm normal-case hover:bg-[#016dc4]">
          <FacebookIcon className="text-xl sm:mr-4" />
          <p className="hidden sm:inline-flex">Continue with Facebook</p>
        </button>
      </div>
      <div className="divider text-sm text-[#939bb4]">email</div>
      <ModalNotImplemented
        text="The capability of creating users with Graphql is alredy made, but I don't know how to save passwords safe in a postgresql table"
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="form-control">
        {errors.email ? (
          <label htmlFor="email" className="label text-[#ff725b]">
            {errors.email?.message}
          </label>
        ) : (
          <label htmlFor="email" className="label ">
            Email
          </label>
        )}
        <input
          type="email"
          placeholder="user@quizlet.com"
          {...register("email")}
          className={cl(
            "input-bordered input input-md border-2  focus:outline-none",
            errors.password ? "border-[#ff725b]" : "focus:border-[#ffcd1f]"
          )}
        />
        {errors.username ? (
          <label htmlFor="username" className="label text-[#ff725b]">
            {errors.username?.message}
          </label>
        ) : (
          <label htmlFor="username" className="label">
            Username
          </label>
        )}
        <input
          type="username"
          placeholder="andrew123"
          {...register("username")}
          className={cl(
            "input-bordered input input-md border-2  focus:outline-none",
            errors.password ? "border-[#ff725b]" : "focus:border-[#ffcd1f]"
          )}
        />
        {errors.password ? (
          <label htmlFor="password" className="label text-[#ff725b]">
            {errors.password?.message}
          </label>
        ) : (
          <label htmlFor="password" className="label ">
            Passoword
          </label>
        )}
        <input
          placeholder="●●●●●●●●"
          type="password"
          {...register("password")}
          className={cl(
            "input-bordered input input-md border-2  focus:outline-none",
            errors.password ? "border-[#ff725b]" : "focus:border-[#ffcd1f]"
          )}
        />
        <label className="label mt-4 flex cursor-pointer justify-start space-x-8">
          <input
            type="checkbox"
            className="checkbox border-2 border-[#939bb4] checked:border-[#ffcd1f]"
            {...register("termsandconditions")}
          />
          <span
            className={cl(
              "label-text",
              errors.termsandconditions && "text-[#ff725b]"
            )}
          >
            I accept Quizlet Clone Terms of Service and Privacy Policy
          </span>
        </label>
        {errors.termsandconditions && (
          <p className="mb-4 border-2 border-[#ff725b] px-4 py-2 text-sm font-bold text-[#ff725b]">
            {errors.termsandconditions?.message}
          </p>
        )}
        {errors.username ||
        errors.password ||
        errors.termsandconditions ||
        errors.email ? (
          <button disabled className="btn-disabled btn">
            Sign up
          </button>
        ) : (
          <button
            className="btn bg-[#3ccfcf] hover:bg-[#31a8a8]"
            onClick={() => setModalVisible(true)}
          >
            Sign up
          </button>
        )}
      </form>
    </>
  )
}

export default SignInForm
