import React from 'react'
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle,FaShoppingCart } from "react-icons/fa";
const Navitem = () => {
  return (
    <section className='bg-[#F5F5F3]'>
        <div className="container h-[100px] justify-between flex mx-auto">
        <div className="Category md:w-[25%] items-center gap-x-[10px] flex">
            <div className="icon"><FaBars/></div>
            <h2 className=' font-sans '>Shop by Category</h2>
        </div>
        <div className="Search relative flex md:w-[50%] items-center mx-auto">
            <input type="text" className=' h-[50px] w-[100%] outline-none pl-[21px] font-sans' placeholder='Search Products'/>
            <div className="icon absolute z-[1] right-[10px]"><IoSearchOutline/></div>
        </div>
        <div className="user_and_cart md:w-[25%] flex gap-3 items-center justify-end ">
            <div className="user"><FaUserCircle/></div>
            <div className="cart"><FaShoppingCart/></div>
        </div>
    </div>
    </section>
  )
}

export default Navitem