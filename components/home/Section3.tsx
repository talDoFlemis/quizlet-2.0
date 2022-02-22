import Image from "next/image"
import React from "react"

function Section3() {
  return (
    <section className="mx-auto mt-16 flex w-11/12 flex-col items-center justify-center text-center md:flex-row lg:w-2/3">
      <div className="md:mr-16">
        <Image src="/homeSections/section3.png" width={500} height={400} />
      </div>
      <div className="md:w-5/12">
        <h1 className="pb-10 text-2xl font-extrabold text-[#303545] sm:text-3xl">
          Flashcards on repeat. Study modes on shuffle.
        </h1>
        <p className="font-light sm:text-xl">
          Mixed with smart study tools, our flashcards have been helping
          students ace their toughest exams since 2005.1
        </p>
      </div>
    </section>
  )
}

export default Section3
