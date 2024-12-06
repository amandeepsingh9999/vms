import React from "react"
import { LoginForm } from "../_components/LoginForm"
import Header from "../_components/Header"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  )
}

export default page
