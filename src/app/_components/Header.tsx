import Image from "next/image"
import React from "react"

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <header className="bg-orange-300 border-gray-200 px-4 py-2.5 dark:bg-gray-800 shadow-black">
        <div className="grid grid-cols-3 items-center px-4">
          <a href="#" className="col-span-1  ">
            <Image
              src={"/15.png"}
              className="  lg:ml-9 md:ml-7 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-24 lg:w-24 "
              alt="Logo"
              height={1000}
              width={1000}
            />
          </a>
          <a className="self-center text-xl sm:text-base md:text-2xl lg:text-3xl font-semibold text-center whitespace-normal dark:text-white col-span-1">
            VEHICLE MANAGEMENT SYSTEM
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header
