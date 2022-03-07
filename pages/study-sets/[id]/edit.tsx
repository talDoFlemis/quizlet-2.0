import LoggedUserLayout from "@components/layout/LoggedUserLayout"
import EditDeckForm from "@components/study-sets/EditDeckForm"
import request, { gql } from "graphql-request"
import { GetServerSideProps } from "next"
import Head from "next/head"
import React from "react"
import { DeckData } from "typings"

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const deckId = context?.params?.id

  const query = gql`
    query Deck($deckId: String!) {
      deck(id: $deckId) {
        id
        title
        description
        user {
          id
        }
        cards {
          front
          back
          cardId
        }
      }
    }
  `
  const variables = {
    deckId: deckId,
  }

  const data = await request(
    `${process.env.NEXTAUTH_URL}/api/graphql`,
    query,
    variables
  )

  return {
    props: {
      deck: data.deck,
    },
  }
}
