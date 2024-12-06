import React from "react"
import Header from "./_components/Header"
import Footer from "./_components/Footer"
import { Dashboard } from "./_components/Dashboard"
import { Newdefectentry } from "./_components/Newdefectentry"
import Maintan from "./_components/Maintan"
import Accident from "./_components/Accident"
import Add from "./_components/Add"
import Adds from "./_components/Adds"
import Insurance from "./_components/Insurance"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <div>
        <Dashboard />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Insurance />
      </div>
    </div>
  )
}

export default page
