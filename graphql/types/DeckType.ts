import { objectType } from "nexus"

export const Deck = objectType({
  name: "Deck",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.field("createdAt", {
      type: "DateTime",
    })
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    })
    t.nonNull.string("title")
    t.nonNull.field("deckOwner", {
      type: "User",
      resolve: async (root, _args, ctx) => {
        return ctx.prisma.deck
          .findUnique({
            where: {
              id: root.id || undefined,
            },
          })
          .deckOwner()
      },
    })
    t.nonNull.list.nonNull.field("cards", {
      type: "Card",
      resolve: async (root, _args, ctx) => {
        return ctx.prisma.deck
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .cards()
      },
    })
  },
})
