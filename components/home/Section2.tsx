import Image from "next/image"
import React from "react"

function Section2() {
  return (
    <section className="mx-auto flex w-11/12 flex-col-reverse items-center justify-center text-center md:flex-row lg:w-2/3">
      <div className="md:w-5/12">
        <h1 className="pb-10 text-2xl font-extrabold text-[#303545] sm:text-3xl">
          Explanations you can trust.
        </h1>
        <p className="font-light sm:text-xl">
          Quizlet explanations show you step-by-step approaches to solve tough
          problems. Find solutions in 64 subjects, all written and verified by
          experts.
        </p>
      </div>
      <div className="md:ml-16">
        <Image
          src="/homeSections/section2.png"
          width={500}
          height={400}
          alt=""
        />
      </div>
    </section>
  )
}

export default Section2
