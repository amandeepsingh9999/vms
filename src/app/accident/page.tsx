import React from "react"
import Header from "../_components/Header"
import Accident from "../_components/Accident"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Accident />
      </div>
    </div>
  )
}

export default page
