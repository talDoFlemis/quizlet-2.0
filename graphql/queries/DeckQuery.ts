import { Deck } from "./../types/DeckType"
import { list, nonNull, queryField, stringArg } from "nexus"

export const decks = queryField("decks", {
  type: nonNull(list(nonNull(Deck))),
  resolve: async (_root, _args, ctx) => {
    return ctx.prisma.deck.findMany()
  },
})

export const deck = queryField("deck", {
  type: nonNull(Deck),
  args: {
    id: nonNull(stringArg()),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.deck.findUnique({
      where: { id: args.id },
    })
  },
})
