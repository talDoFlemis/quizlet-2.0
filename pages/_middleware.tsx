import { NextApiRequest } from "next"
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req: NextApiRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET as string,
    secureCookie: process.env.NODE_ENV === "production",
  })

  const url = req.url as string
  const parsedUrl = new URL(url)

  if (!token && parsedUrl.pathname === "/latest") {
    parsedUrl.pathname = "/"
    return NextResponse.redirect(parsedUrl)
  }

  if (token && parsedUrl.pathname === "/auth/login") {
    parsedUrl.pathname = "/latest"
    return NextResponse.redirect(parsedUrl)
  }

  if (token && parsedUrl.pathname === "/") {
    parsedUrl.pathname = "/latest"
    return NextResponse.redirect(parsedUrl)
  }
}
