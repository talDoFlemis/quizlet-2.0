import { enumType, objectType } from "nexus"

export const Role = enumType({
  name: "Role",
  members: ["USER", "ADMIN"],
})

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.field("createdAt", {
      type: "DateTime",
    })
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    })
    t.nonNull.string("name")
    t.nonNull.string("email")
    t.nonNull.string("image")
    t.nonNull.field("role", {
      type: "Role",
    })
    t.nonNull.list.nonNull.field("decks", {
      type: "Deck",
      resolve: (parent, _, context) => {
        return context.prisma.user
          .findUnique({
            where: { id: parent.id },
          })
          .decks()
      },
    })
  },
})
