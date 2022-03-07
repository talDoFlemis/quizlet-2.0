import React from "react"
import Spinner from "@svgs/trailSpinner.svg"

function Loading() {
  return (
    <div className="my-auto mx-auto">
      <Spinner className="h-16 w-16 text-red-500" />{" "}
    </div>
  )
}

export default Loading
