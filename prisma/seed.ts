import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: "testeuser",
      role: "ADMIN",
      email: "teste@quizletclone.com",
      image:
        "https://imgs.search.brave.com/sGCjjyEi-M1k_1Cl5yR_nR_H6-wdb7pmlC1h-pcDwkM/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI3L2Jl/LzY5LzI3YmU2OTIw/YmUzNmJmMGM3OWY2/YWI3MmYwMDc1NWMz/LmpwZw",
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
