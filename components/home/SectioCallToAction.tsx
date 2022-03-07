import Link from "next/link"
import React from "react"

function SectioCallToAction() {
  return (
    <section className="mx-auto my-12 flex flex-col items-center justify-center text-center md:w-2/3">
      <h1 className="pb-10 text-2xl font-bold text-[#303545] sm:text-3xl">
        Ready to start getting better grades?
      </h1>
      <Link href="/auth/login">
        <a>
          <button className="btn btn-lg border-none bg-[#4255ff] text-sm normal-case hover:bg-[#313fbd]">
            Get started
          </button>
        </a>
      </Link>
    </section>
  )
}

export default SectioCallToAction
