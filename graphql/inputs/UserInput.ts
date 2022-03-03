import { inputObjectType } from "nexus"
import { CardInputType } from "./CardInput"

export const UserWhereUniqueInput = inputObjectType({
  name: "UserWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id")
  },
})

export const CreateUserInput = inputObjectType({
  name: "CreateUserInput",
  definition(t) {
    t.nonNull.string("name")
    t.nonNull.string("email")
    t.nonNull.string("image")
    t.nonNull.field("role", {
      type: "Role",
    })
  },
})

export const UpdateUserInput = inputObjectType({
  name: "UpdateUserInput",
  definition(t) {
    t.nonNull.string("name")
    t.nonNull.field("role", {
      type: "Role",
    })
    t.nonNull.string("email")
    t.nonNull.string("image")
  },
})

export const CreateUserDeckInput = inputObjectType({
  name: "CreateUserDeckInput",
  definition(t) {
    t.nonNull.string("title")
    t.nonNull.string("description")
    t.nonNull.list.nonNull.field("cards", { type: CardInputType })
  },
})
