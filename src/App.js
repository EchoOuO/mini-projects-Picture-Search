import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar'
import Search_page from './pages/Search_page'
import MyFav_page from './pages/MyFav_page'
import Footer from './components/Footer'

export default function App () {

    const navitem = [
        {name:'Search Page', url:'./'},
        {name:'My Favorite Pictures',url:'./myFav'}
    ]

  return (
    <>
        <BrowserRouter>
            <NavBar navitem={navitem}/>
                <Routes>
                    <Route path="/" element={<Search_page />}/>
                    <Route path="/myFav" element={<MyFav_page />}/>
                </Routes>
            <Footer />
        </BrowserRouter>
    </>
  )
};

