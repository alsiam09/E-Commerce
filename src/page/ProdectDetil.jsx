import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../component/slice/prodectslice';


const ProdectDetil = () => {
  let ProdectId = useParams()
  let dispatch = useDispatch()
  let [singdata, setsingdata] = useState([])
  let [imgitem , setimgitem] = useState([])
  let getdata = () => {
    axios.get(` https://dummyjson.com/products/${ProdectId.id} `).then((Response) => {
      setsingdata(Response.data);
      setimgitem(Response.data.images)
    })
    
  }
  useEffect(() => {
    getdata()
  })

  let cliendreating = Array.from({length:5},(elm , index)=>{
    let ratingNumder = index + 0.5 
    return(
      singdata.rating >= index + 1 ? <FaStar/> : ratingNumder > singdata.rating ? "" : <FaStarHalf/>
    )
  })

  let HandleAddToCart =(item)=>{
    dispatch(AddToCart({...item , qun: 1}))
  }

  return (
    <section>
      <div className="container mx-auto">
         <div className="proimgsbox flex flex-wrap">
          { imgitem.map((imgs)=>(
            <img className='w-[50%] h-[500px] p-[10px]'  src={imgs} alt="" />
          ))}
         </div>
         <div className="ProD px-[10px]">
          <h2 className=' font-sans font-[700] text-[39px] py-[10px] text-[#262626]'>Prodect</h2>
          <div className="RatRev flex items-center">
            <div className="reating flex item-center">
              {cliendreating}
            </div>
            <div className="review">
              <span className='text-[#767676] ml-[10px] text-[14px]'>1 Review</span>
            </div>
          </div>
          <div className="price py-[10px]">
            <h2 className='text-[30px] text-[#262626] font-[700]'>Price : <span className='text-[#767676] font-[400]'>{singdata.price}$</span></h2>
          </div>
          <div className="QUANTITY py-[10px]">
            <div className="onBox flex items-center">
              <h2 className='text-[25px] text-[#262626] mr-[10px]'>QUANTITY:</h2>
              <ul className='flex w-[100px] item-center py-[0px] border-[1px] border-[#767676]'>
                <li className='text-[18px] flex items-center w-[33.33333333%] justify-center'>-</li>
                <li className='text-[18px] flex items-center w-[33.33333333%] justify-center border-x-[1px] border-[#767676]'>0</li>
                <li className='text-[18px] flex items-center w-[33.33333333%] justify-center'>+</li>
              </ul>
            </div>
          </div>
          <div className="stock">
          <h2 className='text-[30px] flex items-center text-[#262626] font-[700]'>stock :<span className='text-[#767676] font-[400]'>{singdata.stock}</span></h2>
          </div>
          <ul className="flex items-center button gap-[20px] py-[20px]">
            <li className='flex items-center justify-center w-[200px] h-[50px] border-[3px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] text-[15px] font-[700]'>Add to Wish List</li>
            <Link to={"/Cart"} onClick={()=>HandleAddToCart(singdata)}>
            <li className='flex items-center justify-center w-[200px] h-[50px] border-[3px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] text-[15px] font-[700]'>Add to crat</li>
            </Link>
          </ul>
         </div>
      </div>
    </section>
  )
}

export default ProdectDetil