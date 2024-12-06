import React from "react"
import { Dashboard } from "../_components/Dashboard"
import Header from "../_components/Header"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Dashboard />
      </div>{" "}
    </div>
  )
}

export default page
