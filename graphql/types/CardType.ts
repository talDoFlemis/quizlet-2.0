import { objectType } from "nexus"

export const Card = objectType({
  name: "Card",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.field("createdAt", {
      type: "DateTime",
    })
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    })
    t.nonNull.field("deck", {
      type: "Deck",
      resolve: async (root, _args, ctx) => {
        return ctx.prisma.card
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .deck()
      },
    })
    t.nonNull.string("front")
    t.nonNull.string("back")
  },
})
