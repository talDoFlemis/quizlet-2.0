import LoggedUserLayout from "@components/layout/LoggedUserLayout"
import EditDeckForm from "@components/study-sets/EditDeckForm"
import { GetServerSideProps } from "next"
import Head from "next/head"
import React from "react"
import { DeckData } from "typings"
import prisma from "../../../prisma/prisma"

interface Props {
  deckId: string
  deck: DeckData
}

function Edit({ deck }: Props) {
  return (
    <div className="container mx-auto mt-8 2xl:max-w-7xl">
      <Head>
        <title>Editando {deck?.title}</title>
      </Head>
      <EditDeckForm deck={deck} />
    </div>
  )
}

export default Edit

Edit.PageLayout = LoggedUserLayout

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const deckId = params?.id

  const data = await prisma.deck.findUnique({
    where: {
      id: String(deckId),
    },
    include: {
      cards: true,
      user: true,
    },
  })
  const deck = JSON.parse(JSON.stringify(data))

  return {
    props: {
      deck,
    },
  }
}
