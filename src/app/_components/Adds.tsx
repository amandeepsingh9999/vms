import Link from "next/link"
import React from "react"

type Props = {}

const Adds = (props: Props) => {
  return (
    <div className="bg-[url('/16.jpg')] bg-cover bg-center h-screen w-full flex items-center justify-center">
      <div className="mb-96 text-left font-bold text-xl">
        <div>Type of Repairing... (click on type)</div>

        <div>
          <Link href="/maintan">1. Normal work</Link>
        </div>
        <div>
          <Link href="/accident">2. Accident</Link>
        </div>
        <div>
          <Link href="/entry">3. Servicing</Link>
        </div>
      </div>
    </div>
  )
}

export default Adds
