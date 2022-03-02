import { objectType } from "nexus"
import { Card } from "./CardType"
import { User } from "./UserType"

export const Deck = objectType({
  name: "Deck",
  definition(t) {
    t.nonNull.id("id")
    t.nonNull.field("createdAt", {
      type: "DateTime",
    })
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    })
    t.string("title")
    t.string("description")
    t.nonNull.field("userId", {
      type: User,
      resolve: async (root, _args, ctx) => {
        return ctx.prisma.user.findUnique({
          where: {
            id: root.id,
          },
          rejectOnNotFound: true,
        })
      },
    })
    t.nonNull.list.nonNull.field("cards", {
      type: Card,
      resolve: async (root, _args, ctx) => {
        return ctx.prisma.deck
          .findUnique({
            where: {
              id: root.id,
            },
            rejectOnNotFound: true,
          })
          .cards()
      },
    })
  },
})
