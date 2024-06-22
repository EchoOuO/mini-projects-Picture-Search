import React, { createContext, useState } from "react"
import axios from "axios";

const Context = createContext();

function Provider({children}){
    const [searchKeyword, setSearchKeyword] = useState("")
    const [response, setResponse] = useState("")
    const searchChange = (e) => {
      setSearchKeyword(e.target.value)
    }

    const searchStart = async(e) => {
        e.preventDefault()
        const response = await axios.get(`https://api.unsplash.com/search/photos/`,
            {
              headers:{
                  Authorization: 'Client-ID MuABsY3WjNXGyI6OlVllu7tbhGfYO1Q83TZSskHE0GQ'
              },
              params:{
                  query: searchKeyword,
                  page: 2,
                  per_page: 20,
              },  
            }
        )
        setResponse(response.data.results)
        console.log(response)
    }

    const [tmpFavImg, setTmpFavImg] = useState([])
    const saveToMyFav = (obj) => {
        setTmpFavImg(()=>[...tmpFavImg, obj])
    }
    
    return (
        <Context.Provider value = {{response, setResponse, searchKeyword, setSearchKeyword, searchChange, searchStart, tmpFavImg, saveToMyFav}}>
            {children}
        </Context.Provider>
    )
}

export {Provider};
export default Context;