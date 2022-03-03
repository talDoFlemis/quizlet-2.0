import { mutationField, nonNull, nullable } from "nexus"
import { User } from "../types/UserType"
import { Deck } from "../types/DeckType"
import {
  CreateUserDeckInput,
  CreateUserInput,
  UserWhereUniqueInput,
  UpdateUserInput,
} from "../inputs/UserInput"

import { DeckWhereUniqueInput } from "../inputs/DeckInput"

export const createUser = mutationField("createUser", {
  type: nullable(User),
  args: {
    input: nonNull(CreateUserInput),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.user.create({
      data: {
        ...args.input,
      },
    })
  },
})

export const updateUser = mutationField("updateUser", {
  type: nullable(User),
  args: {
    input: nonNull(UpdateUserInput),
    where: nonNull(UserWhereUniqueInput),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.user.update({
      where: {
        id: args.where.id,
      },
      data: {
        ...args.input,
      },
    })
  },
})

export const createUserDeck = mutationField("createUserDeck", {
  type: Deck,
  args: {
    input: nonNull(CreateUserDeckInput),
    where: nonNull(UserWhereUniqueInput),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.deck.create({
      data: {
        ...args.input,
        userId: args.where.id,
        cards: {
          createMany: {
            data: args.input.cards.map((card) => {
              return {
                userId: args.where.id,
                front: card.front,
                back: card.back,
              }
            }),
          },
        },
      },
    })
  },
})

export const removeUserDeck = mutationField("removeUserDeck", {
  type: nullable(Deck),
  args: {
    where: nonNull(DeckWhereUniqueInput),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.deck.delete({
      where: { id: args.where.id },
    })
  },
})
