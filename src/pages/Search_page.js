import React, { useContext } from "react"
import Search_section from '../components/Search_section'
import Image_section from "../components/Image_section"
import Context from "../Context"

export default function Search_page (props) {

  const {response} = useContext(Context)

  return (
    <>
      <div className="min-h-[96vh] flex flex-col items-center">
        <h1 className="text-4xl mt-20">Get Any Pictures You Want!</h1>
        <Search_section />
        <Image_section response={response}/>
      </div>
    </>
  )
};

