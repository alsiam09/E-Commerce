import React, { useContext, useEffect, useState } from 'react'
import { apiData } from '../ContextApi'
import { GiEternalLove } from "react-icons/gi";
import { GoGitCompare } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../slice/prodectslice';
const Post = ({ AllData, List, add }) => {

  let usedispatch = useDispatch()

  let handleAddToCart = (item) => {
    usedispatch(AddToCart({ ...item, qun: 1 }))
  }

  let [showCat, setShowcat] = useState([])
  let [show, setShow] = useState(false)
  useEffect(() => {
    let FilterCat = add.slice(0, 5)
    setShowcat(FilterCat)
  }, [add])

  let HandleShowAll = () => {
    setShowcat(add)
    setShow(true)

  }
  let HandleHide = () => {
    let FilterCat = add.slice(0, 5)
    setShowcat(FilterCat)
    setShow(false)
  }
  console.log(List);

  return (
    <>
      {add.length > 0 ?
        <div className="">
          <div className="main flex flex-wrap">
          <div className={` ${List === "activeList" ? "" : "flex flex-wrap"} `}>{
          showCat.map((prodect) => (
            <div to={`/prodect/${prodect.id}`} className={` ${List === "activeList" ? " w-[100%] " : " p-[10px] my-[5px] md:p-[0px] md:border-[0px] rounded-[5px] border-[#262626] border-[1px] w-[48%] md:w-[33.3333%] md:p-[10px] p-[5px] bg-[#fff] Prodect_box"} `}>
              <div className="img relative group overflow-hidden">
                <span className='text-[10px] py-[5px] px-[12px] absolute top-[20px] left-[24px] lg:py-[9px] lg:px-[32px] bg-[#262626] text-[#fff] lg:text-[16px] lg:font-[700]'>New</span>
                <Link to={`/prodect/${prodect.id}`}>
                  <img src={prodect.thumbnail} className={` ${List === "activeList" ? "w-[160px] h-[240px]" : "'  w-[100%] h-[160px] lg:h-[240px] xl:h-[260px] 2xl:h-[330px]'"} `} alt="" />
                </Link>
                <div className="hov bg-[#fff] items-center flex p-[5px] lg:p-[10px] pro_in_box h-[50%] absolute group-hover:bottom-0 left-0 duration-300 ease-in-out bottom-[-165px] left-0 w-[100%]">
                  <ul className="  pro_in_box bg-[rgb(255,255,255)] h-[80px] lg:h-[100px]  w-[100%]">
                    <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Wish List</span> <div className="icon inline-block"><GiEternalLove /></div> </li>
                    <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Compare</span> <div className="icon inline-block"><GoGitCompare /></div> </li>
                    <li onClick={() => handleAddToCart(prodect)} className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Cart</span> <div className="icon inline-block"><FaShoppingCart /></div> </li>
                  </ul>
                </div>

              </div>
              <div className="name flex justify-between">
                <h2 className="text-[13px] lg:text-[20px] w-[70%]" >{prodect.title}<span className='block text-[12px] lg:text-[16px] font-sans text-[#767676]' >{prodect.brand}</span></h2>
                <span className="font-[400] text-[#767676] text-[13px] lg:text-[20px]">${prodect.price}</span>
              </div>
            </div>


          ))
        }</div>

          </div>
          {show == false ? add.length > 5 && 
            <button onClick={HandleShowAll} className='w-[100px] h-[40px] flex items-center justify-center text-[19px] bg-[#262626] text-[#fff]' >Show All</button>

            :
            <button onClick={HandleHide} className='w-[100px] h-[40px] flex items-center justify-center text-[19px]  bg-[#262626] text-[#fff]' >Hide</button>

          }

        </div>
        :
            <div className={` ${List === "activeList" ? "" : "flex flex-wrap"} `}>{
          AllData.map((prodect) => (
            <div to={`/prodect/${prodect.id}`} className={` ${List === "activeList" ? " w-[100%] " : " p-[10px] my-[5px] md:p-[0px] md:border-[0px] rounded-[5px] border-[#262626] border-[1px] w-[48%] md:w-[33.3333%] md:p-[10px] p-[5px] bg-[#fff] Prodect_box"} `}>
              <div className="img relative group overflow-hidden">
                <span className='text-[10px] py-[5px] px-[12px] absolute top-[20px] left-[24px] lg:py-[9px] lg:px-[32px] bg-[#262626] text-[#fff] lg:text-[16px] lg:font-[700]'>New</span>
                <Link to={`/prodect/${prodect.id}`}>
                  <img src={prodect.thumbnail} className={` ${List === "activeList" ? "w-[160px] h-[240px]" : "'  w-[100%] h-[160px] lg:h-[240px] xl:h-[260px] 2xl:h-[330px]'"} `} alt="" />
                </Link>
                <div className="hov bg-[#fff] items-center flex p-[5px] lg:p-[10px] pro_in_box h-[50%] absolute group-hover:bottom-0 left-0 duration-300 ease-in-out bottom-[-165px] left-0 w-[100%]">
                  <ul className="  pro_in_box bg-[rgb(255,255,255)] h-[80px] lg:h-[100px]  w-[100%]">
                    <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Wish List</span> <div className="icon inline-block"><GiEternalLove /></div> </li>
                    <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Compare</span> <div className="icon inline-block"><GoGitCompare /></div> </li>
                    <li onClick={() => handleAddToCart(prodect)} className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Cart</span> <div className="icon inline-block"><FaShoppingCart /></div> </li>
                  </ul>
                </div>

              </div>
              <div className="name flex justify-between">
                <h2 className="text-[13px] lg:text-[20px] w-[70%]" >{prodect.title}<span className='block text-[12px] lg:text-[16px] font-sans text-[#767676]' >{prodect.brand}</span></h2>
                <span className="font-[400] text-[#767676] text-[13px] lg:text-[20px]">${prodect.price}</span>
              </div>
            </div>


          ))
        }</div>


      }

        </>
  )
}

      export default Post