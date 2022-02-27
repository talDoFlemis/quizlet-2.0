import LoggedUserLayout from "@components/layout/LoggedUserLayout"
import LinkButton from "@components/user/LinkButton"
import axios from "axios"
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

interface UserData {
  id: number
  username: string
  email: string
}

interface SwiperData {
  allSlides: number
  currentSlideIndex: number
}

function StudySet({ card }: { card: UserData[] }) {
  const [flip, setFlip] = useState(false)
  const [swipper, setSwipper] = useState<SwiperData>({
    allSlides: 1,
    currentSlideIndex: 0,
  })
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>()
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>()

  return (
    <div className="mx-auto text-[#303545] md:w-fit">
      <h1 className="mt-16 text-3xl font-bold">{card[0].email}</h1>
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
            {card.map((card) => (
              <SwiperSlide key={card.id}>
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
                      {card.email}
                    </div>
                  </div>
                  <div
                    onClick={() => setFlip(!flip)}
                    className="shadowTotal card h-full"
                  >
                    <div className="card-body items-center justify-center text-2xl ">
                      {card.username}
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
    </div>
  )
}

export default StudySet

StudySet.PageLayout = LoggedUserLayout

export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((r) => r.data)
  const paths = resp.map((user: UserData) => ({
    params: { slug: user.id.toString() },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
  const card = resp.data

  return {
    props: {
      card,
    },
  }
}
