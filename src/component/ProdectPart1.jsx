import React, { useContext } from 'react'
import prodectimg from '../assets/prodectimg2.png'
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { GiEternalLove } from "react-icons/gi";
import { GoGitCompare } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { apiData } from './ContextApi';
import Skeleton from 'react-loading-skeleton'
const ProdectPart1 = () => {
  let prodect = useContext(apiData)
  return (
    <section>
        <div className="container mx-auto lg:py-[120px] py-[30px]">
        <h2 className=' text-[30px] ml-1 font-sans lg:text-[39px] font-[700] pb-[20px] lg:pb-[48px]'>New Arrivals</h2>
        <div className="flex justify-between flex-wrap">
        {prodect.map((prodects)=>(
                      <div className=" p-[10px] my-[5px] md:p-[0px] md:border-[0px] rounded-[5px] border-[#262626] border-[1px] w-[48%] md:w-[24%] p-[5px] bg-[#fff] Prodect_box">
                      <div  className="img relative group overflow-hidden">
                        <span className='text-[10px] py-[5px] px-[12px] absolute top-[20px] left-[24px] lg:py-[9px] lg:px-[32px] bg-[#262626] text-[#fff] lg:text-[16px] lg:font-[700]'>New</span>
                        <img  src={prodects.thumbnail} className='  w-[100%] h-[160px] lg:h-[240px] xl:h-[260px] 2xl:h-[330px]' alt="" />
                        <div className="hov bg-[#fff] items-center flex p-[5px] lg:p-[10px] pro_in_box h-[50%] absolute group-hover:bottom-0 left-0 duration-300 ease-in-out bottom-[-165px] left-0 w-[100%]">
                        <ul className="  pro_in_box bg-[rgb(255,255,255)] h-[80px] lg:h-[100px]  w-[100%]">
                          <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Wish List</span> <div className="icon inline-block"><GiEternalLove /></div> </li>
                          <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Compare</span> <div className="icon inline-block"><GoGitCompare /></div> </li>
                          <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Cart</span> <div className="icon inline-block"><FaShoppingCart/></div> </li>
                        </ul>
                        </div>
                      </div>
                      <div className="name flex justify-between">
                        <h2 className="text-[13px] lg:text-[20px] w-[70%]" >{prodects.title}<span className='block text-[12px] lg:text-[16px] font-sans text-[#767676]' >{prodects.brand}</span></h2>
                        <span className="font-[400] text-[#767676] text-[13px] lg:text-[20px]">${prodects.price}</span>
                      </div>
                    </div>
          ))}
        </div>
        </div>
    </section>
  )
}

export default ProdectPart1