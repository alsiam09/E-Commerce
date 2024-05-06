import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle,FaShoppingCart } from "react-icons/fa";
import prodectlogo from '../assets/proimg.png.jpg'
import { IoMdClose } from "react-icons/io";
const Navitem = () => {
  let [showcate , setshowcate] = useState(false);
  let [showcart , setshowcart] = useState(false);
  let [showpro , setshowpro] = useState(false);

  let cateref = useRef();
  let proref = useRef();
  let cartref = useRef();

  useEffect(()=>{
    document.addEventListener("click" , (e)=>{
      if (cateref.current.contains(e.target)) {
        setshowcate(!showcate)
      }else{
        setshowcate(false)
      }
      if (proref.current.contains(e.target)) {
        setshowpro(!showpro)
      }else{
        setshowpro(false)
      }
      if (cartref.current.contains(e.target)) {
        setshowcart(!showcart)
      }else{
        setshowcart(false)
      }
    })
  },[showcate,showpro,showcart])
  return (
    <section className='bg-[#F5F5F3]'>
        <div className="container justify-center md:p-0 p-[20px] md:h-[100px] md:justify-between md:flex mx-auto">
        <div ref={cateref} className="Category md:w-[25%] justify-center mb-[20px] md:mb-0 md:justify-start items-center gap-x-[10px] flex relative " >
            <div className="icon"><FaBars/></div>
            <h2 className=' font-sans '>Shop by Category</h2>
            {showcate  && <ul className="cates absolute top-[30px] rounded-[10px] md:rounded-none left-[50%] translate-x-[-50%] md:translate-x-0 md:top-[65px] md:left-[0]  w-[263px] overflow-y-hidden h-[300px] z-[999] bg-[#262626]">
              <li className=' border-b-[1px] border-b-[#2D2D2D] w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)] flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400]  hover:text-[white]'>Accesories</li>
              <li className=' border-b-[1px] border-b-[#2D2D2D] w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)] flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400]  hover:text-[white]'>Furniture</li>
              <li className=' border-b-[1px] border-b-[#2D2D2D] w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)] flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400]  hover:text-[white]'>Electronics</li>
              <li className=' border-b-[1px] border-b-[#2D2D2D] w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)]  flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400] hover:text-[white] '>Clothes</li>
              <li className=' border-b-[1px] border-b-[#2D2D2D] w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)] flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400]  hover:text-[white]'>Bags</li>
              <li className='w-[100%] h-[50px] pl-[20px]  text-[rgb(222,222,222)] flex items-center hover:duration-300 hover:pl-[40px] font-sans text-[14px] hover:font-[700] font-[400]  hover:text-[white]'>Home appliances</li>
            </ul>} 
        </div>
        <div className="Search relative flex md:w-[50%] items-center mx-auto">
            <input type="text" className=' h-[50px] w-[100%] outline-none pl-[21px] font-sans' placeholder='Search Products'/>
            <div className="icon absolute z-[1] right-[10px]"><IoSearchOutline/></div>
        </div>
        <div className="md:block hidden user_and_cart md:w-[25%] md:flex gap-4 items-center justify-end ">
            <div ref={proref} className="user relative text-[20px]"><FaUserCircle/>
            {showpro && <ul className="cates absolute translate-x-[-50%] md:translate-x-0 md:top-[65px] md:right-[0px] w-[200px] h-[100px] z-[999] ">
              <li className=' justify-center w-[200px] font-[#000] h-[50px] bg-[#fff] border-[2px] border-b-0 border-[#000] flex items-center hover:duration-300  font-sans text-[14px]  font-[400] hover:font-[700] hover:bg-[#000] hover:text-[#fff] '>My Account</li>
              <li className=' justify-center w-[200px] bg-[#fff] border-[2px] border-[#000] h-[50px] text-[#000)] flex items-center hover:duration-300  font-sans text-[14px]  font-[400] hover:font-[700] hover:bg-[#000] hover:text-[#fff] '>Log Out</li>
            </ul>} 
            </div>
            <div ref={cartref} className="cart relative text-[20px]"><FaShoppingCart/>
              {showcart && <div className=" w-[360px] absolute top-[60px] right-0 p-[1px] bg-[#F0F0F0]">
                <div className="prodect items-center justify-between flex w-[100%] h-[120px] bg-[#F5F5F3] p-[20px]">
                  <img className='h-[80px] w-[80px]' src={prodectlogo} alt="" />
                  <div className="detal items-center px-[20px]">
                    <h2 className='font-sans text-[14px] font-[700]'>i Phone 15 Pro Max</h2>
                    <span className='font-sans text-[14px] font-[700]'>$1292</span>
                  </div>
                  <div className="delet_item "><IoMdClose/></div>
                </div>
                <div className="checkout h-[121px] pt-[14px] pl-[21px] pr-[22px] pb-[20px] bg-white w-[100%]">
                  <h2 className='text-[16px] font-[400] font-sans text-[#767676]'>Subtotal: <span className='text-[#000] font-[700]'>$1292</span></h2>
                  <div className="btn flex justify-between pt-[13px]">
                  <span className='border-[1px] border-[#262626] py-[16px] px-[40px] font-sans font-[700] text-[14px] hover:bg-[#262626] hover:text-white'>View Cart</span>
                  <span className='border-[1px] border-[#262626] py-[16px] px-[40px] font-sans font-[700] text-[14px] hover:bg-[#262626] hover:text-white'>Checkout</span>
                  </div>
                </div>
              </div> }
            </div>
        </div>
    </div>
    </section>
  )
}

export default Navitem