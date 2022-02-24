import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "testeuser",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        // database look up
        if (
          credentials?.username === "testeuser" &&
          credentials?.password === "test"
        ) {
          return {
            id: 2,
            name: "John",
            email: "johndoe@test.com",
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id
      }

      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id
      }

      return session
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 2,
  },

  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  // },
})
