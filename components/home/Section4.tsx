import Image from "next/image"
import React from "react"

function Section4() {
  return (
    <section className="mx-auto mt-16 flex w-11/12 flex-col-reverse items-center justify-center text-center md:flex-row lg:w-2/3">
      <div className="md:w-5/12">
        <h1 className="pb-10 text-2xl font-bold text-[#303545] sm:text-3xl">
          Whether you plan or cram, find your study jam.
        </h1>
        <p className="font-light sm:text-xl">
          Early morning? All-nighter? With teaching methods backed by learning
          science, Quizlet is designed to save you time.
        </p>
      </div>
      <div className="md:ml-16">
        <Image src="/homeSections/section4.png" width={500} height={400} />
      </div>
    </section>
  )
}

export default Section4
