import LoggedUserLayout from "@components/layout/LoggedUserLayout"
import CreateStudySetForm from "@components/user/createStudySet/CreateStudySetForm"
import { useSession } from "next-auth/react"
import Head from "next/head"

function CreateSet() {
  const { data: session } = useSession()
  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <Head>
        <title>Create a New Study Set | Quizlet</title>
      </Head>
      <div className="container mx-auto 2xl:max-w-7xl">
        <div className="item-center mt-8 flex justify-between">
          <h1 className="text-3xl font-bold text-[#303545]">
            Create a new study set
          </h1>{" "}
          <button
            className="btn border-none bg-[#3ccfcf] hover:bg-[#2ea5a5]"
            type="submit"
            form="hook-form"
          >
            Create
          </button>
        </div>
        <CreateStudySetForm session={session} />
      </div>
    </div>
  )
}

export default CreateSet

CreateSet.PageLayout = LoggedUserLayout
