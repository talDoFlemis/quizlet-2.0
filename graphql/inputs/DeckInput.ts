import { inputObjectType } from "nexus"

export const DeckWhereUniqueInput = inputObjectType({
  name: "DeckWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id")
  },
})

export const UpdateDeckInput = inputObjectType({
  name: "UpdateDeckInput",
  definition(t) {
    t.nonNull.id("id")
  },
})

export const CreateDeckCardInput = inputObjectType({
  name: "CreateDeckCardInput",
  definition(t) {
    t.nonNull.string("front")
    t.nonNull.string("back")
  },
})

export const CardWhereUniqueInput = inputObjectType({
  name: "CardWhereUniqueInput",
  definition(t) {
    t.nonNull.id("userId")
    t.nonNull.id("deckId")
  },
})

export const UpdateDeckCardInput = inputObjectType({
  name: "UpdateDeckCardInput",
  definition(t) {
    t.nonNull.string("front")
    t.nonNull.string("back")
  },
})

export const UpdateDeckCardWhereUniqueInput = inputObjectType({
  name: "UpdateDeckCardWhereUniqueInput",
  definition(t) {
    t.nonNull.string("cardId")
    t.nonNull.string("userId")
    t.nonNull.string("deckId")
  },
})

export const RemoveCardInput = inputObjectType({
  name: "RemoveCardInput",
  definition(t) {
    t.nonNull.string("cardId")
  },
})
