import { inputObjectType } from "nexus"

export const DeckWhereUniqueInput = inputObjectType({
  name: "DeckWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id")
  },
})
