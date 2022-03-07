import { mutationField, nonNull, nullable } from "nexus"
import {
  CreateDeckCardInput,
  UpdateDeckCardWhereUniqueInput,
  UpdateDeckCardInput,
  CardWhereUniqueInput,
  RemoveCardInput,
} from "../inputs/DeckInput"
import { Card } from "../types/CardType"

export const createDeckCard = mutationField("createDeckCard", {
  type: Card,
  args: {
    input: nonNull(CreateDeckCardInput),
    where: nonNull(CardWhereUniqueInput),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.card.create({
      data: {
        ...args.input,
        deckId: args.where.deckId,
        userId: args.where.userId,
      },
    })
  },
})

export const updateDeckCard = mutationField("updateDeckCard", {
  type: nullable(Card),
  args: {
    input: nonNull(UpdateDeckCardInput),
    where: nonNull(UpdateDeckCardWhereUniqueInput),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.card.upsert({
      where: {
        cardId: args.where.cardId,
      },
      update: {
        ...args.input,
      },
      create: {
        ...args.input,
        user: {
          connect: {
            id: args.where.userId,
          },
        },
        deck: {
          connect: {
            id: args.where.deckId,
          },
        },
      },
    })
  },
})

export const removeDeckCard = mutationField("removeDeckCard", {
  type: nullable(Card),
  args: {
    where: nonNull(RemoveCardInput),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.card.delete({
      where: {
        cardId: args.where.cardId,
      },
    })
  },
})
