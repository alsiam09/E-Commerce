import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/Logo.png'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle,FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
        <section className=''>
            <div className="  container   mx-auto">
                <div className="container bg-[white] fixed top-0 w-[100%] z-[999] h-[80px]  items-center flex left-[50%] translate-x-[-50%] ">
                <Link to={"/cart"} className="md:hidden text-[30px] absolute left-[20px] cart"><FaShoppingCart/></Link>
                <div className=" md:absolute md:mx-[0px] mx-auto">
                    <img className='lg:w-[65px] w-[80px]' src={logo} alt="" />
                </div>
                <div ref={showref} className="icon text-[30px] absolute top-[23px] right-[20px] z-[999] md:hidden">
                    <FaBars/>
                </div>
                <ul className={`md:block hidden md:flex mx-auto items-center sm:static`}>
                    <li className=' font-sans text-[14px] font-[700] text-[#767676] hover:font-[700] hover:text-[#262626] px-[20px]'>Home</li>
                    <li className=' font-sans text-[14px] font-[700] text-[#767676] hover:font-[700] hover:text-[#262626] px-[20px]'>Shop</li>
                    <li className=' font-sans text-[14px] font-[700] text-[#767676] hover:font-[700] hover:text-[#262626] px-[20px]'>About</li>
                    <li className=' font-sans text-[14px] font-[700] text-[#767676] hover:font-[700] hover:text-[#262626] px-[20px]'>Contacts</li>
                    <li className=' font-sans text-[14px] font-[700] text-[#767676] hover:font-[700] hover:text-[#262626] px-[20px]'>Journal</li>
                </ul>
                </div>
                {show == true ?
                    <div className=" ease-in duration-300 z-[998] w-[60%] fixed items-center flex top-0 right-0 h-[100%] bg-[rgb(238,238,238)] ">
                        <ul className="h-[70%] relative w-[100%] items-center">
                        <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>My Account</li>
                            <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'><Link to={"/"}>Home</Link></li>
                            <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Shop</li>
                            <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>About</li>
                            <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Contacts</li>
                            <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>Journal</li>
                        </ul>
                        <li className=' px-[20px]  py-[13px] bg-[#000] text-[#fff] absolute bottom-[30px] left-[50%] translate-x-[-50%] list-none flex justify-center rounded-[20px] font-[700] w-[150px] '>Log Out</li>
                    </div>:
                    <div className="ease-in z-[998] duration-300 md:hidden w-[60%] fixed items-center flex top-0 right-[-460px] h-[100%] bg-[rgb(238,238,238)] ">
                    <ul className="h-[70%] w-[100%] items-center">
                    <li className=' px-[30px] hover:bg-[#fff] mx-[10px] rounded-[20px] my-[2px] py-[10px] font-sans text-[16px] font-[700] text-[#000000] hover:font-[700] hover:text-[#262626] px-[20px]'>My Account</li>
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