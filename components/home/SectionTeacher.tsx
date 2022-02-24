import Image from "next/image"
import React from "react"

function SectionTeacher() {
  return (
    <section className="flex flex-col-reverse items-center justify-center bg-[#dbdfff] px-8 py-8 text-center md:flex-row lg:px-32 lg:py-4">
      <div className="flex flex-col md:w-4/12">
        <h2 className="font-bold uppercase text-[#303545] sm:text-xl">
          Teachers
        </h2>
        <h1 className="pb-10 text-2xl font-bold text-[#303545] md:text-3xl">
          Empower your students.
        </h1>
        <p className="font-light sm:text-xl">
          Help every student confidently learn anything, no matter what they’re
          striving to achieve. Using Quizlet’s free study sets, study modes and
          in-class game, you can instantly create a more engaged classroom.
        </p>
        <div className="mx-auto mt-16 w-1/3 cursor-pointer rounded-md border-b-8 border-[#3ccfcf] pb-4 text-sm font-bold text-[#303545] transition-colors hover:border-[#ffcd1f] hover:text-[#ffcd1f] md:w-full md:text-xl lg:w-72">
          Bring Quizlet to your class
        </div>
      </div>
      <div className="md:ml-16">
        <Image
          src="/homeSections/sectionTeacher.png"
          width={500}
          height={400}
          alt=""
        />
      </div>
    </section>
  )
}

export default SectionTeacher
