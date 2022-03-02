import { inputObjectType } from "nexus"
export const CardInputType = inputObjectType({
  name: "CardInputType",
  definition(t) {
    t.nonNull.string("front")
    t.nonNull.string("back")
  },
})
