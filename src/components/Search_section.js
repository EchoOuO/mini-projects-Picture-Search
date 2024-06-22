import React, { useRef, useContext } from "react"
import Button from './Button'

import Context from "../Context"

export default function Search_section () {

  const inputRef = useRef()
  const {response, setResponse, searchKeyword, setSearchKeyword, searchChange, searchStart} = useContext(Context);
  
  const searchClear = () => {
    setSearchKeyword("")
    setResponse(null)
    inputRef.current.value = ""
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8 w-10/12 min-w-">
        <div className="flex justify-between w-full min-w-96 max-w-xl bg-blue-100 px-8 py-2 mb-2 rounded-xl">
          <form className="w-full flex" onSubmit={searchStart}>
            <input value={searchKeyword} className="w-full min-w-48 border border-gray-500 p-2 mr-3 rounded-xl" ref={inputRef} placeholder="Search pictures" onChange={searchChange}></input>
            <Button primary outline disabled={ searchKeyword ? false : true}>{ searchKeyword ? "Go!" : "Enter Keyword"}</Button>
            <Button type="button" secondary outline onClick={searchClear}>Clear!</Button>
          </form>
        </div>
        { searchKeyword ? <h1 className="mb-5">Searching: {searchKeyword}</h1> : null }
      </div>
    </>
  )
};

