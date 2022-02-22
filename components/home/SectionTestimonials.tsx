import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import AspasTop from "../svgs/aspasTop.svg"
import AspasBottom from "../svgs/aspasBottom.svg"

function SectionTestimonials() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      // modules={[Autoplay]}
      loop={true}
      className="my-32 mx-auto w-11/12"
    >
      {hardCodedTestimonials.map((test) => (
        <SwiperSlide key={test.author}>
          <h1 className="text-center text-2xl font-bold text-[#303545] sm:text-3xl lg:pb-10">
            <span className="inline-block">
              <AspasTop className="text-5xl" />
            </span>
            {test.header}
            <span className="relative -bottom-4 inline-block">
              <AspasBottom className="text-5xl" />
            </span>
          </h1>
          <p className="text-center font-bold text-[#aec1de]">
            {test.author}, Age {test.age}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SectionTestimonials

const hardCodedTestimonials = [
  {
    header:
      "Quizlet is a great way to study. I introduced it to my friends and we are all improving. Whenever I think of Quizlet, I think of the pure joy of studying in a few minutes instead of hours.!",
    author: "Agentdolly",
    age: "29",
  },
  {
    header:
      "Quizlet has helped me to understand just how fun and important and fun studying can be! This school year, in chemistry class I put my terms on Quizlet and I already feel better about my upcoming test.",
    author: "LittleButtercup",
    age: "17",
  },
  {
    header:
      "Quizlet helped my grades sooooo much. Thank you for making studying fun and productive!",
    author: "NicoleB18",
    age: "19",
  },
]
