import LoggedUserLayout from "@components/layout/LoggedUserLayout"
import LinkButton from "@components/user/LinkButton"
import { GetStaticPaths, GetStaticProps } from "next"
import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import { Swiper, SwiperSlide } from "swiper/react"

import {
  DuplicateIcon,
  AcademicCapIcon,
  PencilIcon,
  VolumeUpIcon,
  DocumentDuplicateIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline"
import "swiper/css"
import "swiper/css/keyboard"
import "swiper/css/effect-coverflow"
import { Keyboard, Navigation, EffectCoverflow } from "swiper"
import { useSwiperRef } from "hooks/useSwiperRef"
import request, { gql } from "graphql-request"
import Image from "next/image"
import { useRouter } from "next/router"
import DropdownDeleteMenu from "@components/study-sets/DropdownDeleteMenu"
import DeleteModal from "@components/study-sets/DeleteModal"
import { DeckData } from "typings"

interface SwiperData {
  allSlides: number
  currentSlideIndex: number
}

function StudySet({ deck }: { deck: DeckData }) {
  const [flip, setFlip] = useState(false)
  const [swipper, setSwipper] = useState<SwiperData>({
    allSlides: 1,
    currentSlideIndex: 0,
  })
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>()
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>()

  const router = useRouter()

  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  return (
    <div className="mx-auto text-[#303545] md:w-fit">
      <h1 className="mt-16 text-3xl font-bold">{deck.title}</h1>
      <div className="mt-8 flex space-x-4">
        <aside className="flex flex-col">
          <h3 className="text-xs text-[#93a6d3]">STUDY</h3>
          <LinkButton
            text="Flashcard"
            Icon={DuplicateIcon}
            link="/flashcards"
            className="text-[#4257b2]"
          />
          <LinkButton
            text="Learn"
            Icon={AcademicCapIcon}
            link="/flashcards"
            className="text-[#4257b2]"
          />
          <LinkButton
            text="Write"
            Icon={PencilIcon}
            link="/flashcards"
            className="text-[#4257b2]"
          />
          <LinkButton
            text="Spell"
            Icon={VolumeUpIcon}
            link="/flashcards"
            className="text-[#4257b2]"
          />
          <LinkButton
            text="Test"
            Icon={DocumentDuplicateIcon}
            link="/flashcards"
            className="text-[#4257b2]"
          />
        </aside>
        <div className="flex h-max w-max flex-col">
          <Swiper
            className="h-[360px] w-[600px] cursor-pointer"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            keyboard
            noSwiping
            noSwipingClass="swiper-slide"
            navigation={{ prevEl, nextEl }}
            modules={[Navigation, Keyboard, EffectCoverflow]}
            onAfterInit={(swipperData) =>
              setSwipper({
                allSlides: swipperData.slides.length,
                currentSlideIndex: swipperData.activeIndex,
              })
            }
            onSlideChange={(currentSlide) => {
              setSwipper({
                allSlides: currentSlide.slides.length,
                currentSlideIndex: currentSlide.activeIndex,
              })
              setFlip(false)
            }}
          >
            {deck?.cards?.map((card) => (
              <SwiperSlide key={card.cardId}>
                <ReactCardFlip
                  isFlipped={flip}
                  flipDirection="vertical"
                  cardZIndex="8"
                  containerClassName="m-2 h-full p-3"
                >
                  <div
                    onClick={() => setFlip(!flip)}
                    className="shadowTotal card h-full"
                  >
                    <div className="card-body items-center justify-center text-4xl ">
                      {card.front}
                    </div>
                  </div>
                  <div
                    onClick={() => setFlip(!flip)}
                    className="shadowTotal card h-full"
                  >
                    <div className="card-body items-center justify-center text-2xl ">
                      {card.back}
                    </div>
                  </div>
                </ReactCardFlip>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-4 flex items-center justify-center space-x-16">
            <button ref={prevElRef}>
              {swipper.currentSlideIndex - 1 >= 0 ? (
                <ArrowLeftIcon className="h-6 w-6 cursor-pointer" />
              ) : (
                <ArrowLeftIcon className="h-6 w-6 text-[#b19db4]" />
              )}
            </button>
            <h3 className="text-xs font-bold">
              {swipper?.currentSlideIndex + 1} / {swipper?.allSlides}
            </h3>
            <button ref={nextElRef}>
              {swipper.currentSlideIndex + 2 <= swipper.allSlides ? (
                <ArrowRightIcon className="h-6 w-6 cursor-pointer" />
              ) : (
                <ArrowRightIcon className="h-6 w-6 text-[#b19db4]" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="mask mask-circle relative h-14 w-14">
            <Image
              src={deck?.user.image}
              alt={deck?.user.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <h3 className="text-xs text-[#abacd5]">Created by</h3>
            <h1>{deck?.user.name}</h1>
          </div>
        </div>
        <div className="flex space-x-4">
          <PencilIcon
            className="h-6 w-6 cursor-pointer hover:text-[#ffcd1f]"
            onClick={() =>
              router.push({
                pathname: "/study-sets/[id]/edit",
                query: { id: deck.id },
              })
            }
          />
          <DropdownDeleteMenu setDeleteModalVisible={setDeleteModalVisible} />
        </div>
      </div>
      <DeleteModal
        deleteModalVisible={deleteModalVisible}
        setDeleteModalVisible={setDeleteModalVisible}
        deck={deck}
      />
    </div>
  )
}

export default StudySet

StudySet.PageLayout = LoggedUserLayout

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Decks {
      decks {
        id
      }
    }
  `

  const resp = await request(
    `${process.env.NEXTAUTH_URL as string}/api/graphql`,
    query
  )
  const paths = resp.decks.map((deck: DeckData) => ({
    params: { id: deck.id },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = gql`
    query Deck($deckId: String!) {
      deck(id: $deckId) {
        id
        title
        description
        user {
          name
          image
          id
        }
        cards {
          cardId
          front
          back
          updatedAt
          createdAt
        }
        createdAt
        updatedAt
      }
    }
  `
  const variables = {
    deckId: `${params?.id}`,
  }

  const data = await request(
    `${process.env.NEXTAUTH_URL as string}/api/graphql`,
    query,
    variables
  )

  return {
    props: {
      deck: data.deck,
    },
  }
}
