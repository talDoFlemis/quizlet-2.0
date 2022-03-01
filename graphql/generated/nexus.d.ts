/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/ban-types */
/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type { Context } from "./../context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void // "DateTime";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateUserDeckInput: {
    // input type
    title: string // String!
  }
  CreateUserInput: {
    // input type
    email?: string | null // String
    image?: string | null // String
    name: string // String!
    role: NexusGenEnums["Role"] // Role!
  }
  DeckWhereUniqueInput: {
    // input type
    id: string // ID!
  }
  UpdateUserInput: {
    // input type
    email?: string | null // String
    image?: string | null // String
    name: string // String!
    role: NexusGenEnums["Role"] // Role!
  }
  UserWhereUniqueInput: {
    // input type
    id: string // ID!
  }
}

export interface NexusGenEnums {
  Role: "ADMIN" | "USER"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Card: {
    // root type
    back: string // String!
    createdAt: NexusGenScalars["DateTime"] // DateTime!
    front: string // String!
    id: string // String!
    updatedAt: NexusGenScalars["DateTime"] // DateTime!
  }
  Deck: {
    // root type
    createdAt: NexusGenScalars["DateTime"] // DateTime!
    id: string // String!
    title: string // String!
    updatedAt: NexusGenScalars["DateTime"] // DateTime!
  }
  Mutation: {}
  Query: {}
  User: {
    // root type
    createdAt: NexusGenScalars["DateTime"] // DateTime!
    email: string // String!
    id: string // String!
    image: string // String!
    name: string // String!
    role: NexusGenEnums["Role"] // Role!
    updatedAt: NexusGenScalars["DateTime"] // DateTime!
  }
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes &
  NexusGenScalars &
  NexusGenEnums

export interface NexusGenFieldTypes {
  Card: {
    // field return type
    back: string // String!
    createdAt: NexusGenScalars["DateTime"] // DateTime!
    deck: NexusGenRootTypes["Deck"] // Deck!
    front: string // String!
    id: string // String!
    updatedAt: NexusGenScalars["DateTime"] // DateTime!
  }
  Deck: {
    // field return type
    cards: NexusGenRootTypes["Card"][] // [Card!]!
    createdAt: NexusGenScalars["DateTime"] // DateTime!
    deckOwner: NexusGenRootTypes["User"] // User!
    id: string // String!
    title: string // String!
    updatedAt: NexusGenScalars["DateTime"] // DateTime!
  }
  Mutation: {
    // field return type
    createUser: NexusGenRootTypes["User"] | null // User
    createUserDeck: NexusGenRootTypes["Deck"] | null // Deck
    removeUserDeck: NexusGenRootTypes["Deck"] | null // Deck
    updateUser: NexusGenRootTypes["User"] | null // User
  }
  Query: {
    // field return type
    card: NexusGenRootTypes["Card"] // Card!
    cards: NexusGenRootTypes["Card"][] // [Card!]!
    deck: NexusGenRootTypes["Deck"] // Deck!
    decks: NexusGenRootTypes["Deck"][] // [Deck!]!
    user: NexusGenRootTypes["User"] // User!
    users: Array<NexusGenRootTypes["User"] | null> | null // [User]
  }
  User: {
    // field return type
    createdAt: NexusGenScalars["DateTime"] // DateTime!
    decks: NexusGenRootTypes["Deck"][] // [Deck!]!
    email: string // String!
    id: string // String!
    image: string // String!
    name: string // String!
    role: NexusGenEnums["Role"] // Role!
    updatedAt: NexusGenScalars["DateTime"] // DateTime!
  }
}

export interface NexusGenFieldTypeNames {
  Card: {
    // field return type name
    back: "String"
    createdAt: "DateTime"
    deck: "Deck"
    front: "String"
    id: "String"
    updatedAt: "DateTime"
  }
  Deck: {
    // field return type name
    cards: "Card"
    createdAt: "DateTime"
    deckOwner: "User"
    id: "String"
    title: "String"
    updatedAt: "DateTime"
  }
  Mutation: {
    // field return type name
    createUser: "User"
    createUserDeck: "Deck"
    removeUserDeck: "Deck"
    updateUser: "User"
  }
  Query: {
    // field return type name
    card: "Card"
    cards: "Card"
    deck: "Deck"
    decks: "Deck"
    user: "User"
    users: "User"
  }
  User: {
    // field return type name
    createdAt: "DateTime"
    decks: "Deck"
    email: "String"
    id: "String"
    image: "String"
    name: "String"
    role: "Role"
    updatedAt: "DateTime"
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: {
      // args
      input: NexusGenInputs["CreateUserInput"] // CreateUserInput!
    }
    createUserDeck: {
      // args
      input: NexusGenInputs["CreateUserDeckInput"] // CreateUserDeckInput!
      where: NexusGenInputs["UserWhereUniqueInput"] // UserWhereUniqueInput!
    }
    removeUserDeck: {
      // args
      where: NexusGenInputs["DeckWhereUniqueInput"] // DeckWhereUniqueInput!
    }
    updateUser: {
      // args
      input: NexusGenInputs["UpdateUserInput"] // UpdateUserInput!
      where: NexusGenInputs["UserWhereUniqueInput"] // UserWhereUniqueInput!
    }
  }
  Query: {
    card: {
      // args
      id: string // String!
    }
    deck: {
      // args
      id: string // String!
    }
    user: {
      // args
      id: string // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects

export type NexusGenInputNames = keyof NexusGenInputs

export type NexusGenEnumNames = keyof NexusGenEnums

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = keyof NexusGenScalars

export type NexusGenUnionNames = never

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never

export type NexusGenAbstractsUsingStrategyResolveType = never

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  fieldTypeNames: NexusGenFieldTypeNames
  allTypes: NexusGenAllTypes
  typeInterfaces: NexusGenTypeInterfaces
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes:
    | NexusGenTypes["inputNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["scalarNames"]
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["scalarNames"]
  allNamedTypes:
    | NexusGenTypes["allInputTypes"]
    | NexusGenTypes["allOutputTypes"]
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"]
  abstractTypeMembers: NexusGenAbstractTypeMembers
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType
  features: NexusGenFeaturesConfig
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginInputFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
