import React from "react"
import Header from "../_components/Header"
import { Newdefectentry } from "../_components/Newdefectentry"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Newdefectentry />
      </div>
    </div>
  )
}

export default page
