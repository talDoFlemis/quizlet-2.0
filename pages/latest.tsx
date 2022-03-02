import LoggedUserLayout from "@components/layout/LoggedUserLayout"
import Recent from "@components/user/Recent"
import { useSession } from "next-auth/react"

function UserHomePage() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f7fb] text-[#303545]">
      <div className="container mx-auto 2xl:w-5/6">
        <Recent />
      </div>
    </div>
  )
}

export default UserHomePage

UserHomePage.PageLayout = LoggedUserLayout
