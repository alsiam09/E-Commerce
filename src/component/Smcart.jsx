import React, { } from 'react'
import prodectlogo from '../assets/proimg.png.jpg'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import { qunIce , qunDce ,ProRem } from './slice/prodectslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Smcart = () => {
  let dispatch = useDispatch()
  let data = useSelector((state) => state.prodect.CartItem)
  let handelincremant = (index)=>{
    dispatch(qunIce(index))
  }
  let handelDncremant = (index)=>{
    dispatch(qunDce(index))
  }
  let handleRemove = (index) =>{
    dispatch(ProRem(index));
  }
  let navigate = useNavigate()
  const { totalPrice , totalquantity } = data.reduce((acc , item)=>{
    acc.totalPrice += item.price * item.qun
    acc.totalquantity += item.qun
    return acc
  },{totalPrice:0 , totalquantity:0})
  let handleCheckout = () =>{
    toast("wow so easy")
    setTimeout(()=>{
      navigate("/checkout")
    },2000)
  }
  return (
    <section>
      <div className="container mx-auto">
      <div className="headName py-[80px]">
          <h2 className=' font-sans text-[30px] font-[700] '>Cart</h2>
          <span className=' font-[400] text-[15px] '>Home  cart</span>
        </div>
        <div className="ProdectNPQ flex w-[100%] h-[50px] items-center justify-between px-[20px] bg-[#F5F5F3] my-[20px]">
          <h2 className='w-[25%]'>Prodect</h2>
          <h2 className='w-[25%]'>Price</h2>
          <h2 className='w-[25%]'>Quantity</h2>
          <h2 className='w-[25%] flex justify-end'>Total</h2>
        </div>
        {data.map((item , index)=>(

        <div className="Prodects flex w-[100%] h-[80px] items-center justify-between px-[20px] my-[10px] ">
          <div className="name flex items-center w-[25%]">
            <icon onClick={()=>handleRemove(index)} ><IoMdClose /></icon>
            <img src={item.thumbnail} className='h-[80px]' alt="" />
            <h2>{item.title}</h2>
          </div>
          <div className="proce w-[25%]">
            <h2>{item.price}</h2>
          </div>
          <div className="Quantity flex items-cente w-[25%]">
            <h2 onClick={()=>handelDncremant(index)} className='mt-[-1px] pr-[10px] text-[20px]'>-</h2>
            <h2 className='px-[10px] text-[20px]'>{item.qun}</h2>
            <h2 onClick={()=>handelincremant(index)} className='px-[10px] text-[20px]' >+</h2>
          </div>
          <div className="Total w-[25%] flex justify-end">
            <h2>{(item.qun)*(item.price)}</h2>
          </div>
        </div>
        ))}
        <div className=" flex justify-end w-[100%] ">
          <div className="main m-[10px]  w-[300px]">
          <div className="allItemcheck">
          <div className="Subtotal w-[300px] flex  h-[40px] border-[1px] border-b-[0px] border-[#262626]">
            <h2 className=" items-center   flex justify-center w-[50%] border-r-[1px] h-[40px] border-[#262626] ">Quantity</h2>
            <h2 className=" items-center   flex justify-center w-[50%] h-[40px]">{totalquantity}</h2>

          </div>                                                                           
        </div>
        <div className="allItemcheck">
        <div className="Subtotal w-[300px] flex  h-[40px] border-[1px] border-[#262626]">
            <h2 className=" items-center flex   justify-center w-[50%] border-r-[1px] h-[40px] border-[#262626] ">Total</h2>
            <h2 className=" items-center flex   justify-center w-[50%] h-[40px]">{totalPrice}</h2>

          </div>                                                                          
        </div>
        <div className=" flex justify-end mt-3">
          <h2 onClick={handleCheckout} className="flex font-[700] text-[#fff] text-[18px] justify-center items-center  w-[300px] h-[50px] bg-[#262626] ">Proceed to Checkout</h2>
        </div>
          </div>
        </div>
        <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

      </div>
    </section>
  )
}

export default Smcart