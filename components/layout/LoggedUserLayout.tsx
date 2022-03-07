import Header from "@components/user/Header"

function LoggedUserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f7fb] text-[#303545]">
      <Header />
      {children}
    </div>
  )
}

export default LoggedUserLayout
