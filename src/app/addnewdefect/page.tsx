import React from "react"
import Header from "../_components/Header"
import Maintan from "../_components/Maintan"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Maintan />
      </div>
    </div>
  )
}

export default page
