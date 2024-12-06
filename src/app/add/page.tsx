import React from "react"
import Header from "../_components/Header"
import Add from "../_components/Add"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Add />
      </div>
    </div>
  )
}

export default page
