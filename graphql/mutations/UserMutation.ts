import { mutationField, nonNull, nullable } from "nexus"
import { User, Deck } from "../types/"
import {
  CreateUserDeckInput,
  CreateUserInput,
  DeckWhereUniqueInput,
  UserWhereUniqueInput,
  UpdateUserInput,
} from "../inputs"

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
        ownerId: args.where.id,
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
      where: args.where,
    })
  },
})
