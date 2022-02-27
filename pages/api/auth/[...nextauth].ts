import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

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
        if (
          credentials?.username === "teste@quizletclone.com" &&
          credentials?.password === "test"
        ) {
          return {
            id: 22,
            name: "testuser",
            email: "teste@quizletclone.com",
          }
        }

        return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],
  pages: {},
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
})
