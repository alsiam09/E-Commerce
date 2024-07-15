import React, { useContext, useEffect, useState } from 'react'
import { GiEternalLove } from "react-icons/gi";
import { GoGitCompare } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown , IoMdArrowDropup ,IoIosAdd } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Post from './pagination/Post';
import { apiData } from './ContextApi';
import PageNasion from "./pagination/PageNasion";
import { useDispatch, useSelector } from 'react-redux';
const ProdectPageItem = () => {
  let data = useContext(apiData)
  let [currentPage , setCurrentPage] = useState(1)
  let [perPage , setPerpage] = useState(6)
  let [ catagory , setcatagory ] = useState([])

  let [ add , setAdd ] = useState([])

  let lastPage = currentPage * perPage

  let firstPage = lastPage - perPage 

  let AllData = data.slice( firstPage , lastPage)

  let PageNumder = [];

  
  for ( let i = 0 ; i < Math.ceil( add.length > 0 ? add :  data.length / perPage); i++) {
    PageNumder.push(i)
  };

  let paginate = (PageNumber) => {
    setCurrentPage(PageNumber + 1);
  }


  let [colshow , setcolshow] = useState(false)
  let color =()=>{
    setcolshow(!colshow)
  }
  let [brandshow , setbrandshow] = useState(false)
  let brand =()=>{
    setbrandshow(!brandshow)
  }

  useEffect(()=>{
    setcatagory([ ...new Set(data.map((item)=>item.category)) ])
  },[data])

  let addhandle = (citem) => {
    let CatogoryFilter = data.filter((item)=> item.category == citem)
    setAdd(CatogoryFilter)
  }


  let [ List , setList ] = useState('')

  let handleChange = () => {
    setList("activeList");
  }
  

  return (
    <section>
      <div className="container mx-auto">
        <div className="Page_head_line py-[40px] md:py-[130px]">
          <h1 className=' font-sans font-[700] text-[40px] md:text-[49px] text-[#262626] ' >Prodect</h1>
          <span className='text-[12px] font-[400] font-sans text-[#767676]' >Home Prodect</span>
        </div>
        <div className="main_box flex justify-between">
          <div className="catagory md:w-[30%]">
   
              <ul>
                <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' onClick={color} >{colshow == true ? <div className="H  flex items-center justify-between w-[90%]">Shop by Category <IoMdArrowDropup /> </div> : <div className="h  flex items-center justify-between w-[90%]">Shop by Category<IoMdArrowDropdown/></div> }</li>
                {colshow == true && <div className="one">
                  {catagory.map((item)=>(
                      <li onClick={()=>addhandle(item)} className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center capitalize'><div className=" mr-[10px] color "></div>{item}</span></li>
                        
                    
                  ))}
                </div> }
              </ul>
       
          </div>
          <div className="prodect_item md:w-[70%]">
            <div className="sistambtn flex justify-between">
              <div className="gridmain ml-[10px] justify-between flex w-[12%]">
                <div onClick={()=>setList("")} className={` ${List === "" ? "grid2 text-[20px] p-[10px] border-[1px] bg-[#262626] text-[#fff] border-[#262626] hover:text-[#fff] hover:bg-[#262626]" : "grid2 text-[20px] p-[10px] border-[1px] border-[#262626] hover:text-[#fff] hover:bg-[#262626]"} `}><BsGridFill /></div>
                <div onClick={handleChange} className={` ${List === "activeList" ? "grid2 text-[20px] p-[10px] border-[1px] bg-[#262626] text-[#fff] border-[#262626] hover:text-[#fff] hover:bg-[#262626]" : "grid2 text-[20px] p-[10px] border-[1px] border-[#262626] hover:text-[#fff] hover:bg-[#262626]"} `}><CiGrid2H /></div>
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
              <Post List={List} AllData={AllData} add={add}/>
            <PageNasion PageNumder={PageNumder} paginate={paginate} currentPage={currentPage}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProdectPageItem