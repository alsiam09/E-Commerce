import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/Logo.png'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    let [show, setshow] = useState(false)

    let showref = useRef()

    useEffect(()=>{
        document.addEventListener( "click" , (e)=>{
            if (showref.current.contains(e.target) == true) {
                setshow(!show);
            }else{
                setshow(false)
            }
        })
    },[show])

    return (
        <section>
            <div className="container h-[80px]  items-center flex mx-auto">
                <div className=" lg:mx-[0px] mx-auto">
                    <img className='lg:w-[65px] w-[80px]' src={logo} alt="" />
                </div>
                <div ref={showref} className="icon text-[30px] fixed top-[23px] right-[20px] z-[1] md:hidden">
                    {show == true ? <IoMdClose /> : <FaBars />}
                </div>
               <ul className={`lg:block hidden lg:flex absolute items-center md:static mx-auto `}>
                    <li className=' font-sans text-[14px] font-[700] text-[#767676] hover:font-[700] hover:text-[#262626] px-[20px]'>Home</li>
                    <li className=' font-sans text-[14px] font-[700] text-[#767676] hover:font-[700] hover:text-[#262626] px-[20px]'>Shop</li>
                    <li className=' font-sans text-[14px] font-[700] text-[#767676] hover:font-[700] hover:text-[#262626] px-[20px]'>About</li>
                    <li className=' font-sans text-[14px] font-[700] text-[#767676] hover:font-[700] hover:text-[#262626] px-[20px]'>Contacts</li>
                    <li className=' font-sans text-[14px] font-[700] text-[#767676] hover:font-[700] hover:text-[#262626] px-[20px]'>Journal</li>
                </ul>
                {show == true ?
                    <div className="ease-in duration-300  w-[60%] fixed items-center flex top-0 right-0 h-[100%] bg-[rgb(238,238,238)] ">
                        <ul className="h-[70%] w-[100%] items-center">
                            <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Home</li>
                            <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Shop</li>
                            <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>About</li>
                            <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Contacts</li>
                            <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Journal</li>
                        </ul>
                    </div>:
                    <div className="ease-in duration-300 lg:hidden w-[60%] fixed items-center flex top-0 right-[-460px] h-[100%] bg-[rgb(238,238,238)] ">
                    <ul className="h-[70%] w-[100%] items-center">
                        <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Home</li>
                        <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Shop</li>
                        <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>About</li>
                        <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Contacts</li>
                        <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Journal</li>
                    </ul>
                </div>
                }

            </div>
        </section>
    )
}

export default Header