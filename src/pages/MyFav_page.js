import React, { useContext } from "react"
import Context from "../Context"
import Search_section from '../components/Search_section'
import Image_section from "../components/Image_section"

export default function MyFav_page (props) {

  const {tmpFavImg} = useContext(Context)

  return (
    <>
      <div className="min-h-[96vh] flex flex-col items-center">
        <h1 className="text-4xl mt-20">Your Favorite Pictures</h1>
        <Image_section response={tmpFavImg}/>
      </div>
    </>
  )
};

