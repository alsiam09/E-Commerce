import React from 'react'
import { Link } from 'react-router-dom'
const Crat = () => {
  return (
    <h1 className='font-sans p-[20px] text-[70px] text-[red]'>404 <p className='text-[30px] text-[#000]'>Page is not found</p>
        <Link className='text-[40px] underline text-[blue]' to={"/"}>Go Back</Link>
    </h1>
  )
}

export default Crat