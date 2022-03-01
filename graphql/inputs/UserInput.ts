import { inputObjectType } from "nexus"

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
    t.nonNull.field("role", {
      type: "Role",
    })
    t.string("email")
    t.string("image")
  },
})

export const UpdateUserInput = inputObjectType({
  name: "UpdateUserInput",
  definition(t) {
    t.nonNull.string("name")
    t.nonNull.field("role", {
      type: "Role",
    })
    t.string("email")
    t.string("image")
  },
})

export const CreateUserDeckInput = inputObjectType({
  name: "CreateUserDeckInput",
  definition(t) {
    t.nonNull.string("title")
  },
})
