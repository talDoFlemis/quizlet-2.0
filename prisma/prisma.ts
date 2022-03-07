/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PrismaClient } from "@prisma/client"

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
  console.log("Production: Created prisma connection.")
} else {
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient()
    console.log("Development: Created prisma connection.")
  }

  // @ts-ignore
  prisma = global.prisma
}

export default prisma
