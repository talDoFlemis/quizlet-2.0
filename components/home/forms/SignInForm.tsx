import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import cl from "clsx"
import GoogleIcon from "@svgs//socialMedia/google.svg"
import FacebookIcon from "@svgs//socialMedia/facebook.svg"

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

  return (
    <>
      <div className="flex justify-between">
        <button className="btn-outline btn border-2 border-[#d9dde8] text-sm normal-case hover:bg-[#016dc4]">
          <GoogleIcon className="mr-4 text-xl" />
          Continue with Google
        </button>
        <button className="btn-outline btn border-2 border-[#d9dde8] text-sm normal-case hover:bg-[#016dc4]">
          <FacebookIcon className="mr-4 text-xl" />
          Continue with Facebook
        </button>
      </div>
      <div className="divider text-sm text-[#939bb4]">email</div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-control">
        {errors.birthday ? (
          <label htmlFor="email" className="label text-[#ff725b]">
            {errors.birthday?.message}
          </label>
        ) : (
          <label htmlFor="email" className="label ">
            Birthday
          </label>
        )}
        <div className="flex">
          <select {...register("birthday.month")}>
            <option value="Month">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select {...register("birthday.day")}></select>
        </div>
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
            I accept Quizlet&apos;s Terms of Service and Privacy Policy
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
          <button className="btn bg-[#3ccfcf] hover:bg-[#31a8a8]">
            Sign up
          </button>
        )}
      </form>
    </>
  )
}

export default SignInForm
