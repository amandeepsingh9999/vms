import React from "react"
import { Signup } from "../_components/Signup"
import Header from "../_components/Header"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Signup />
      </div>
    </div>
  )
}

export default page
