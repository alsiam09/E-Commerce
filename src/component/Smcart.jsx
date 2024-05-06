import React from 'react'
import prodectlogo from '../assets/proimg.png.jpg'
import { IoMdClose } from "react-icons/io";
const Smcart = () => {
  return (
    <section>
              <div className="conatiner">
        <div className="checkout fixed left-0 bottom-0 h-[121px] pt-[14px] pl-[21px] pr-[22px] pb-[20px] bg-white w-[100%]">
          <h2 className='text-[16px] font-[400] font-sans text-[#767676]'>Subtotal: <span className='text-[#000] font-[700]'>$1292</span></h2>
          <div className="btn flex justify-between pt-[13px]">
            <span className='border-[1px] border-[#262626] py-[16px] px-[40px] font-sans font-[700] text-[14px] bg-[#262626] text-white'>View Cart</span>
            <span className='border-[1px] border-[#262626] py-[16px] px-[40px] font-sans font-[700] text-[14px] bg-[#262626] text-white'>Checkout</span>
          </div>
        </div>
        <div className="one_box mb-[121px]">
        <div className="prodect my-[5px] items-center justify-between flex w-[100%] h-[120px] bg-[#F5F5F3] p-[20px]">
        <img className='h-[80px] w-[80px]' src={prodectlogo} alt="" />
        <div className="detal items-center px-[20px]">
          <h2 className='font-sans text-[14px] font-[700]'>i Phone 15 Pro Max</h2>
          <span className='font-sans text-[14px] font-[700]'>$1292</span>
        </div>
        <div className="delet_item "><IoMdClose /></div>
      </div>
        </div>
      </div>

    </section>
  )
}

export default Smcart