import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    id: String
    createdAt: Date
    updatedAt: Date
    email: String
    image: String
    name: String
  }

  type Query {
    links: [Link]!
  }
`
