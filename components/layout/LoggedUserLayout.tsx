import Header from "@components/user/Header"

function LoggedUserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
    </div>
  )
}

export default LoggedUserLayout
