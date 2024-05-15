import React, { useContext, useState } from 'react'
import { apiData } from './ContextApi'
import { GiEternalLove } from "react-icons/gi";
import { GoGitCompare } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown , IoMdArrowDropup ,IoIosAdd } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";


const ProdectPageItem = () => {
  let prodects = useContext(apiData)
  let [colshow , setcolshow] = useState(false)
  let color =()=>{
    setcolshow(!colshow)
  }
  let [brandshow , setbrandshow] = useState(false)
  let brand =()=>{
    setbrandshow(!brandshow)
  }
  return (
    <section>
      <div className="container mx-auto">
        <div className="Page_head_line py-[40px] md:py-[130px]">
          <h1 className=' font-sans font-[700] text-[40px] md:text-[49px] text-[#262626] ' >Prodect</h1>
          <span className='text-[12px] font-[400] font-sans text-[#767676]' >Home > Prodect</span>
        </div>
        <div className="main_box flex justify-between">
          <div className="catagory md:w-[30%]">
              <ul>
                <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' >Shop by Category</li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
              </ul>
              <ul>
                <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' onClick={color} >{colshow == true ? <div className="H  flex items-center justify-between w-[90%]">Shop by Category <IoMdArrowDropup /> </div> : <div className="h  flex items-center justify-between w-[90%]">Shop by Category<IoMdArrowDropdown/></div> }</li>
                {colshow == true && <div className="one">
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center'><div className=" mr-[10px] color h-[10px] w-[10px] rounded-[50%] bg-[#123289]"></div>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center'><div className=" mr-[10px] color h-[10px] w-[10px] rounded-[50%] bg-[#123289]"></div>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center'><div className=" mr-[10px] color h-[10px] w-[10px] rounded-[50%] bg-[#123289]"></div>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center'><div className=" mr-[10px] color h-[10px] w-[10px] rounded-[50%] bg-[#123289]"></div>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center'><div className=" mr-[10px] color h-[10px] w-[10px] rounded-[50%] bg-[#123289]"></div>Category 2</span><IoIosAdd /></li>
                </div> }
              </ul>
              <ul>
                <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' onClick={brand} >{brand == true ? <div className="H  flex items-center justify-between w-[90%]">Shop by Category <IoMdArrowDropup /> </div> : <div className="h  flex items-center justify-between w-[90%]">Shop by Category<IoMdArrowDropdown/></div> }</li>
                {brandshow == true && <div className="one">
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                </div> }
              </ul>
              <ul>
                <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' >Shop by Category</li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
              </ul>
          </div>
          <div className="prodect_item md:w-[70%]">
            <div className="sistambtn flex justify-between">
              <div className="gridmain ml-[10px] justify-between flex w-[12%]">
                <div className="grid1 text-[20px] p-[10px] border-[1px] border-[#262626] hover:text-[#fff] hover:bg-[#262626]"><BsGridFill /></div>
                <div className="grid2 text-[20px] p-[10px] border-[1px] border-[#262626] hover:text-[#fff] hover:bg-[#262626]"><CiGrid2H /></div>
              </div>
              <div className="op flex justify-between w-[40%]">
                <div className="one items-center flex">
                  <h2 className='mr-[10px] font-sans'>Sort by :</h2>
                  <select className='p-[5px] border-[1px] border-[#262626] outline-none rounded-[7px]'>
                    <option>Featured</option>
                    <option >Price</option>
                    <option >Category</option>   
                  </select>
                </div>
                <div className="one items-center flex">
                  <h2 className='mr-[10px] font-sans'>Sort by :</h2>
                  <select className='p-[5px] border-[1px] border-[#262626] outline-none rounded-[7px]'>
                    <option>Featured</option>
                    <option >Price</option>
                    <option >Category</option>   
                  </select>
                </div>
              </div>
            </div>
            <div className="prodects flex flex-wrap">
              {prodects.map((prodect) => (
                <div className=" p-[10px] my-[5px] md:p-[0px] md:border-[0px] rounded-[5px] border-[#262626] border-[1px] w-[48%] md:w-[33.3333%] md:p-[10px] p-[5px] bg-[#fff] Prodect_box">
                  <div className="img relative group overflow-hidden">
                    <span className='text-[10px] py-[5px] px-[12px] absolute top-[20px] left-[24px] lg:py-[9px] lg:px-[32px] bg-[#262626] text-[#fff] lg:text-[16px] lg:font-[700]'>New</span>
                    <img src={prodect.thumbnail} className='  w-[100%] h-[160px] lg:h-[240px] xl:h-[260px] 2xl:h-[330px]' alt="" />
                    <div className="hov bg-[#fff] items-center flex p-[5px] lg:p-[10px] pro_in_box h-[50%] absolute group-hover:bottom-0 left-0 duration-300 ease-in-out bottom-[-165px] left-0 w-[100%]">
                      <ul className="  pro_in_box bg-[rgb(255,255,255)] h-[80px] lg:h-[100px]  w-[100%]">
                        <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Wish List</span> <div className="icon inline-block"><GiEternalLove /></div> </li>
                        <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Compare</span> <div className="icon inline-block"><GoGitCompare /></div> </li>
                        <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Cart</span> <div className="icon inline-block"><FaShoppingCart /></div> </li>
                      </ul>
                    </div>
                  </div>
                  <div className="name flex justify-between">
                    <h2 className="text-[13px] lg:text-[20px] w-[70%]" >{prodect.title}<span className='block text-[12px] lg:text-[16px] font-sans text-[#767676]' >{prodect.brand}</span></h2>
                    <span className="font-[400] text-[#767676] text-[13px] lg:text-[20px]">${prodect.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProdectPageItem