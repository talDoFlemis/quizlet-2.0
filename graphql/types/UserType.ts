import { enumType, objectType } from "nexus"
import { DateTime } from "./DateTimeType"
import { Deck } from "./DeckType"

export const Role = enumType({
  name: "Role",
  members: ["USER", "ADMIN", "PROF"],
})

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.field("createdAt", {
      type: DateTime,
    })
    t.nonNull.field("updatedAt", {
      type: DateTime,
    })
    t.string("name")
    t.string("email")
    t.string("image")
    t.field("role", {
      type: Role,
    })
    t.nonNull.list.nonNull.field("decks", {
      type: Deck,
      resolve: async (root, _args, ctx) => {
        return ctx.prisma.user
          .findUnique({
            where: {
              id: root.id,
            },
            rejectOnNotFound: true,
          })
          .decks()
      },
    })
  },
})
