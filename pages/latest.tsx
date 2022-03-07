import Loading from "@components/layout/Loading"
import LoggedUserLayout from "@components/layout/LoggedUserLayout"
import { useQuery } from "hooks/useQuery"
import { gql } from "graphql-request"
import Link from "next/link"
import Image from "next/image"
import { DeckData } from "typings"
import Head from "next/head"

//TODO Change all prisma connection to use the prisma.ts
function UserHomePage() {
  const query = gql`
    query Decks {
      decks {
        id
        title
        description
        updatedAt
        cards {
          cardId
        }
        user {
          name
          image
        }
      }
    }
  `

  const { data, error } = useQuery(query)

  if (!data && !error) {
    return <Loading />
  }
  const decks: DeckData[] = data.decks

  const sortedDecks = decks.sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  })

  return (
    <div className="container mx-auto 2xl:w-5/6">
      <Head>
        <title>Your Sets | Quizlet</title>
      </Head>
      <h1 className="mt-8 text-xl font-bold">Recent</h1>
      <div className="mt-8 grid grid-cols-3 gap-8">
        {sortedDecks.map((deck: DeckData) => (
          <Link href={`study-sets/${deck.id}`} key={deck.id}>
            <a>
              <div className="card cursor-pointer bg-white text-sm shadow-md">
                <div className="card-body">
                  <div className="text-md card-title">{deck.title}</div>
                  <div className="text-sm font-bold text-[#939bbf]">
                    {deck.cards.length > 1 ? (
                      <p>{deck.cards.length} Flashcards</p>
                    ) : (
                      <p>{deck.cards.length} Flashcard</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="mask mask-circle relative mx-auto h-10 w-10">
                      <Image
                        src={deck.user.image}
                        layout="fill"
                        objectFit="contain"
                        alt="user_icon"
                      />
                    </div>
                    <p className="text-md">{deck.user.name}</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default UserHomePage

UserHomePage.PageLayout = LoggedUserLayout
