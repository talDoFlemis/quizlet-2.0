import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: "joaozinhodograu",
      role: "ADMIN",
      email: "joaozinhodograu@flemis.xyz",
      image: "image ponto jpeg",
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
