import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET as string,
    secureCookie: process.env.NODE_ENV === "production",
  })

  const { pathname } = req.nextUrl
  const url = req.nextUrl.clone()

  if (!token && pathname === "/latest") {
    url.pathname = "/"
    return NextResponse.redirect(url)
  }

  if (token && pathname === "/") {
    url.pathname = "/latest"
    return NextResponse.redirect(url)
  }
}
