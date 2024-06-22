import React, { useState } from "react"
import className from 'classnames'
import {twMerge} from 'tailwind-merge'

export default function Button ({
  children,
  type,
  AddorRemove,
  primary,
  secondary,
  outline,
  saveToMyFav,
  ...rest
}) {

  const [btnClick, setBtnClick] = useState(false)
  const btnChangeHandler = () => {
    setBtnClick(!btnClick)
  }
  const btnChangeAndSaveImgHandler = () => {
    setBtnClick(!btnClick)
    saveToMyFav()
  }

  const classes = twMerge(className('px-3 py-0.5 mx-1 border border-black rounded-2xl text-white duration-150 text-nowrap', {
    'bg-blue-600 hover:bg-blue-500': primary,
    'bg-gray-500 hover:bg-gray-400': secondary,
    'bg-white text-blue-700 border-blue-500 hover:bg-blue-500 hover:text-white': outline && primary,
    'bg-white text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white': outline && secondary,
  }))

  return (
    <>
      <button 
        {...rest} 
        onClick={saveToMyFav ? btnChangeAndSaveImgHandler : btnChangeHandler} 
        type={type} 
        className={classes}>{AddorRemove ? (btnClick ? "Remove" : "Add") : children}
      </button>
    </>
  )
};

