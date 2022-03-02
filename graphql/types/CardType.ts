import { objectType } from "nexus"
import { Deck } from "./DeckType"
import { User } from "./UserType"

export const Card = objectType({
  name: "Card",
  definition(t) {
    t.nonNull.id("cardId")
    t.nonNull.id("deckId")
    t.nonNull.id("userId")
    t.field("createdAt", {
      type: "DateTime",
    })
    t.field("updatedAt", {
      type: "DateTime",
    })
    t.string("front")
    t.string("back")
    t.nonNull.field("deck", {
      type: Deck,
      resolve: async (root, _args, ctx) => {
        return ctx.prisma.deck.findUnique({
          where: {
            id: root.deckId,
          },
          rejectOnNotFound: true,
        })
      },
    })
    t.nonNull.field("user", {
      type: User,
      resolve: async (root, _args, ctx) => {
        return ctx.prisma.user.findUnique({
          where: {
            id: root.userId,
          },
          rejectOnNotFound: true,
        })
      },
    })
  },
})
