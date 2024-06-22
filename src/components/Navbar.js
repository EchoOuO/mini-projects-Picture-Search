import React from "react"
import { Link } from "react-router-dom"

export default function Navbar ({navitem}) {
  return (
    <>
      <div className="fixed top-0 w-full py-2 bg-blue-400">
        <ul className="flex justify-center gap-10">
          {navitem.map((item, idx)=> {
            return <li key={idx}><Link className="text-white p-1 hover:bg-blue-600 duration-150" to={item.url}>{item.name}</Link></li>
          })}
        </ul>

      </div>
    </>
  )
};

