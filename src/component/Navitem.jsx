import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle,FaShoppingCart } from "react-icons/fa";
const Navitem = () => {
  let [showcate , setshowcate] = useState(false);

  let cateref = useRef();

  useEffect(()=>{
    document.addEventListener("click" , (e)=>{
      if (cateref.current.contains(e.target)) {
        setshowcate(!showcate)
      }else{
        setshowcate(false)
      }
    })
  },[showcate])
  return (
    <section className='bg-[#F5F5F3]'>
        <div className="container justify-center md:p-0 p-[20px] md:h-[100px] md:justify-between md:flex mx-auto">
        <div ref={cateref} className="Category md:w-[25%] justify-center mb-[20px] md:mb-0 md:justify-start items-center gap-x-[10px] flex relative " >
            <div className="icon"><FaBars/></div>
            <h2 className=' font-sans '>Shop by Category</h2>
            {showcate == true && <ul className="cates absolute top-[30px] rounded-[10px] md:rounded-none left-[50%] translate-x-[-50%] md:translate-x-0 md:top-[65px] md:left-[0]  w-[263px] overflow-y-hidden h-[300px] z-[999] bg-[#262626]">
              <li className='w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)] flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400]  hover:text-[white]'>Accesories</li>
              <li className='w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)] flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400]  hover:text-[white]'>Furniture</li>
              <li className='w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)] flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400]  hover:text-[white]'>Electronics</li>
              <li className='w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)]  flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400] hover:text-[white] '>Clothes</li>
              <li className='w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)] flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400]  hover:text-[white]'>Bags</li>
              <li className='w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)] flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400]  hover:text-[white]'>Home appliances</li>
            </ul>} 
        </div>
        <div className="Search relative flex md:w-[50%] items-center mx-auto">
            <input type="text" className=' h-[50px] w-[100%] outline-none pl-[21px] font-sans' placeholder='Search Products'/>
            <div className="icon absolute z-[1] right-[10px]"><IoSearchOutline/></div>
        </div>
        <div className="md:block hidden user_and_cart md:w-[25%] md:flex gap-4 items-center justify-end ">
            <div className="user text-[20px]"><FaUserCircle/></div>
            <div className="cart text-[20px]"><FaShoppingCart/></div>
        </div>
    </div>
    </section>
  )
}

export default Navitem