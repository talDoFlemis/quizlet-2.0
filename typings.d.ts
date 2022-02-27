import { DefaultSession } from "next-auth"

declare module "components/svgs/*.svg" {
  import React from "react"

  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  export default Component
}

declare module "next-auth" {
  interface Session {
    user: {
      address: string
    } & DefaultSession["user"]
  }
}

export interface ModalData {
  modalOpen: boolean
  modalOption?: number
}
