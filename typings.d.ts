import { DefaultSession } from "next-auth"

declare module "components/svgs/*.svg" {
  import React from "react"

  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  export default Component
}

declare module "next-auth" {
  interface Session {
    user: {
      role?: string
      id: string
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
  }
}

export interface ModalData {
  modalOpen: boolean
  modalOption?: number
}

export interface DeckData {
  id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  cards: {
    cardId: string
    front: string
    back: string
    createdAt: string
    updatedAt: string
  }[]
  user: {
    id: string
    name: string
    image: string
    role: string
  }
}

export interface User {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  emailVerified: Date | null
  image: string
  name: string
  role: Role
}

export interface userGithubData {
  name: string
  login: string
  avatarUrl: string
  url: string
  bio: string
  email: string
  repositories: {
    nodes: {
      id: string
      name: string
      stargazerCount: number
      updatedAt: string
      url: string
      homepageUrl: string
      languages: {
        totalSize: number
        edges: {
          size: number
          node: {
            color: string
            id: string
            name: string
          }
        }[]
      }
    }[]
  }
}
