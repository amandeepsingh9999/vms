import React from "react"
import Header from "../_components/Header"
import Adds from "../_components/Adds"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Adds />
      </div>
    </div>
  )
}

export default page
