import React, { useState, useContext } from "react"
import Button from "./Button"
import Context from "../Context"

export default function Image_section ({ response, downloadImg }) {

  const {saveToMyFav} = useContext(Context)

  return (
    <>
      {/* <div className="flex flex-wrap justify-center items-start gap-4 mx-4 my-2 w-full h-min"> */}
      <div className="grid grid-cols-4 gap-4 justify-items-center mx-4 my-2 p-5 w-full mb-20">
        { response ? response.map((obj)=>{
          return <div className="flex flex-col items-center gap-2 w-fit" key={obj.id}>
            <img className="min-w-64" src={obj.urls.regular}/>
            <div className="flex gap-2">
              <Button primary AddorRemove saveToMyFav={()=>saveToMyFav(obj)}></Button>
              
              <Button secondary><a href={obj.links.download} target="_blank" download>Download</a></Button>
            </div>
        </div>
        }) : null}
      </div>
    </>
  )
};

