import Image from "next/image"
import React from "react"

function Section5() {
  return (
    <section className="mx-auto mt-16 flex w-11/12 flex-col items-center justify-center text-center md:flex-row lg:w-2/3">
      <div className="md:mr-16">
        <Image src="/homeSections/section5.png" width={500} height={400} alt=""/>
      </div>
      <div className="md:w-5/12">
        <h1 className="pb-10 text-2xl font-bold text-[#303545] sm:text-3xl">
          Millions of study sets.
        </h1>
        <p className="font-light sm:text-xl">
          Early morning? All-nighter? With teaching methods backed by learning
          science, Quizlet is designed to save you time.
        </p>
      </div>
    </section>
  )
}

export default Section5
