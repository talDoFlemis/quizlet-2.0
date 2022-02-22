import React from "react"

function EntryPage() {
  return (
    <div className="bg-[#4255ff]">
      <div className="entrypage flex h-[80vh] w-full items-center justify-center lg:h-screen">
        <div className="entrypage_container mx-6 flex h-5/6 w-full flex-col justify-end  gap-x-12 rounded-2xl px-8 py-6 sm:mx-12 sm:flex-row md:px-16 md:py-12 lg:mx-40 lg:my-32 lg:gap-40">
          <div className="sm:place-self-end">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Learn it. Own it. Quizlet.
            </h1>
            <p className="mt-4 text-base font-extralight text-white sm:mt-8 md:text-xl">
              With new expert explanations, an AI Learning Assistant and our
              ever-effective flashcards, get a suite of science-backed study
              tools at your fingertips.
            </p>
          </div>
          <button className="btn btn-lg mt-4 w-40 bg-[#4255ff] text-sm normal-case hover:bg-[#313fbd] sm:w-1/5 sm:place-self-end lg:w-40">
            Get started
          </button>
        </div>
      </div>
    </div>
  )
}

export default EntryPage
