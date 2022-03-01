import { User } from "./../types/UserType"
import { list, nonNull, queryField, stringArg } from "nexus"

export const users = queryField("users", {
  type: list(User),
  resolve: async (_root, _args, ctx) => {
    return ctx.prisma.user.findMany()
  },
})

export const user = queryField("user", {
  type: nonNull(User),
  args: {
    id: nonNull(stringArg()),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.user.findUnique({
      where: { id: args.id },
    })
  },
})
