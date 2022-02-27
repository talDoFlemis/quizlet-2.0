import Image from "next/image"
import Link from "next/link"
import React from "react"

function Recent() {
  return (
    <div>
      <h1 className="mt-8 text-sm font-bold">Recent</h1>
      <div className="mt-8 grid grid-cols-3 gap-8">
        <Link href="study-sets/1">
          <a>
            <div className="card cursor-pointer bg-white text-sm shadow-md">
              <div className="card-body">
                <div className="text-md card-title">Hardcoded card</div>
                <div className="text-sm font-bold text-[#939bbf]">
                  Flashcard count hardcoded
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative mx-auto h-8 w-8">
                    <Image
                      src="/favicon.ico"
                      layout="fill"
                      objectFit="contain"
                      alt="user_icon"
                    />
                  </div>
                  <p>username hardcoded</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Recent
