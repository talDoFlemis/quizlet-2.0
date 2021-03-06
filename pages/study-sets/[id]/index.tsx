import LoggedUserLayout from "@components/layout/LoggedUserLayout"
import { GetServerSideProps } from "next"
import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import { Swiper, SwiperSlide } from "swiper/react"
import prisma from "../../../prisma/prisma"
import Image from "next/image"
import { useRouter } from "next/router"
import DropdownDeleteMenu from "@components/study-sets/DropdownDeleteMenu"
import DeleteModal from "@components/study-sets/DeleteModal"
import { DeckData } from "typings"
import ModalNotImplemented from "@components/layout/ModalNotImplemented"

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
import Head from "next/head"

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
  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <div className="mx-auto text-[#303545] md:w-fit">
      <Head>
        <title>{deck.title} | Quizlet Clone</title>
      </Head>
      <ModalNotImplemented
        text="Due to limited time, and just one guy working on the project, this functionality was not made yet"
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <h1 className="mt-16 text-3xl font-bold">{deck.title}</h1>
      <div className="mt-8 flex space-x-4">
        <aside className="hidden flex-col md:flex">
          <h3 className="text-xs text-[#93a6d3]">STUDY</h3>
          <a
            className="flex cursor-pointer items-center space-x-4 rounded-md py-1 px-2 font-bold hover:bg-[#ffcd1f]"
            onClick={() => setModalVisible(true)}
          >
            <DuplicateIcon className="h-8 w-8 text-[#4257b2]" />
            <p>Flashcard</p>
          </a>
          <a
            className="flex cursor-pointer items-center space-x-4 rounded-md py-1 px-2 font-bold hover:bg-[#ffcd1f]"
            onClick={() => setModalVisible(true)}
          >
            <AcademicCapIcon className="h-8 w-8 text-[#4257b2]" />
            <p>Learn</p>
          </a>
          <a
            className="flex cursor-pointer items-center space-x-4 rounded-md py-1 px-2 font-bold hover:bg-[#ffcd1f]"
            onClick={() => setModalVisible(true)}
          >
            <PencilIcon className="h-8 w-8 text-[#4257b2]" />
            <p>Write</p>
          </a>
          <a
            className="flex cursor-pointer items-center space-x-4 rounded-md py-1 px-2 font-bold hover:bg-[#ffcd1f]"
            onClick={() => setModalVisible(true)}
          >
            <VolumeUpIcon className="h-8 w-8 text-[#4257b2]" />
            <p>Spell</p>
          </a>
          <a
            className="flex cursor-pointer items-center space-x-4 rounded-md py-1 px-2 font-bold hover:bg-[#ffcd1f]"
            onClick={() => setModalVisible(true)}
          >
            <DocumentDuplicateIcon className="h-8 w-8 text-[#4257b2]" />
            <p>Test</p>
          </a>
        </aside>
        <div className="flex h-max w-max flex-col">
          <Swiper
            className="h-[300px] w-[400px] cursor-pointer sm:h-[360px] sm:w-[600px]"
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
      <p className="px-8 py-4 text-sm">{deck.description}</p>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await prisma.deck.findUnique({
    where: { id: String(params?.id) },
    include: {
      user: true,
      cards: true,
    },
  })
  const deck = JSON.parse(JSON.stringify(data))

  return {
    props: {
      deck,
    },
  }
}
