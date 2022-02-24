// import { signIn, signOut } from "next-auth/react"
import { getCsrfToken } from "next-auth/react"
function signin({ csrfToken }: any) {
  return (
    <div className="flex flex-col">
      <form
        action="/api/auth/callback/credentials"
        className="form flex flex-col"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Username
          <input name="username" type="text" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default signin

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
