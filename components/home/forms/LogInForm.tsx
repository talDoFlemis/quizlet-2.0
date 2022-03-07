import GoogleIcon from "@svgs/socialMedia/google.svg"
import FacebookIcon from "@svgs/socialMedia/facebook.svg"
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import cl from "clsx"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/router"

interface Error {
  error: string
  ok: boolean
  status: number
  url: string
}

interface FormValues {
  username: string
  password: string
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

function LogInForm() {
  const router = useRouter()
  const { error: errorOauth } = router.query
  const [error, setError] = useState<Error>()
  console.log(errorOauth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const resp = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    })

    if (resp) {
      const errorHandling: Error = resp
      console.log(errorHandling)
      if (errorHandling.ok) {
        router.push("/latest")
      }
      setError(errorHandling)
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <button
        className="btn-outline btn btn-lg hover:bg-[#016dc4]"
        onClick={() => signIn("google")}
      >
        <GoogleIcon className="mr-4 text-xl" />
        Log in with Google
      </button>
      <button
        className="btn-outline btn btn-lg hover:bg-[#016dc4]"
        onClick={() => signIn("facebook")}
      >
        <FacebookIcon className="mr-4 text-xl" />
        Login in with Facebook
      </button>
      {error?.ok === false && (
        <div className="text-[#ff725b]">
          {" "}
          Please, verify your credentials. They can be found in the{" "}
          <a
            href="https://github.com/talDoFlemis/quizlet-2.0"
            className="font-bold underline"
          >
            github repository
          </a>
        </div>
      )}
      {errorOauth === "OAuthSignin" && (
        <div className="text-[#ff725b]">
          {" "}
          The OAuth autenticantion is unavailable for now
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="form-control">
        <div className="group w-full">
          <input
            placeholder="teste@quizletclone.com"
            {...register("username")}
            className="input-ghost input input-lg w-full focus:outline-none"
          />
          <span
            className={cl(
              "mt-2 block h-1 w-full bg-[#303545] group-focus-within:bg-[#ffcd1f] ",
              errors.username && "bg-[#ff725b]"
            )}
          ></span>
          {errors.username ? (
            <label>{errors.username?.message}</label>
          ) : (
            <label>username</label>
          )}
        </div>
        <div className="group w-full">
          <input
            type="password"
            placeholder="Type your password"
            {...register("password")}
            className="input-ghost input input-lg w-full focus:outline-none"
          />
          <span
            className={cl(
              "mt-2 block h-1 w-full bg-[#303545] group-focus-within:bg-[#ffcd1f] ",
              errors.password && "bg-[#ff725b]"
            )}
          ></span>
          {errors.password ? (
            <label>{errors.password?.message}</label>
          ) : (
            <label>password</label>
          )}
        </div>
        <button className="btn btn-lg mt-4 border-none bg-[#3ccfcf] hover:bg-[#33aaaa]">
          Log in
        </button>
      </form>
    </div>
  )
}

export default LogInForm
