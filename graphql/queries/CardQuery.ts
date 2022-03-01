import { Card } from "./../types/CardType"
import { list, nonNull, queryField, stringArg } from "nexus"

export const cards = queryField("cards", {
  type: nonNull(list(nonNull(Card))),
  resolve: async (_root, _args, ctx) => {
    return ctx.prisma.card.findMany()
  },
})

export const card = queryField("card", {
  type: nonNull(Card),
  args: {
    id: nonNull(stringArg()),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.card.findUnique({
      where: { id: args.id },
    })
  },
})
