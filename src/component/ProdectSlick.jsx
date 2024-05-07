import React, { useEffect, useRef, useState, } from 'react'
import Slider from 'react-slick';
import prodectimg from '../assets/prodectimg.png'
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { GiEternalLove } from "react-icons/gi";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="h-[40px] text-[20px] text-[#fff] absolute top-[50%] left-[10px] transform-y-[-50%] w-[40px] flex justify-center items-center rounded-[50%] bg-[#c4c4c4]"
      onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="h-[40px] text-[20px] text-[#fff] absolute top-[50%] z-[3] right-[10px] transform-y-[-50%] w-[40px] flex justify-center items-center rounded-[50%] bg-[#c4c4c4]"
      onClick={onClick}
    ><GrFormNext /></div>
  );
}
const ProdectSlick = () => {
  let [show, setshow] = useState(false);
  function onclick() {
    setshow(!show)
    console.log("ami");
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },

    ]
  };
  return (
    <div className="container mx-auto">
      <div className="slider-container">
        <Slider {...settings}>
          <div onClick={onclick} className=" p-[5px] bg-[#fff] Prodect_box">
            <div  className="img relative">
              <span className='text-[10px] py-[5px] px-[12px] absolute top-[20px] left-[24px] lg:py-[9px] lg:px-[32px] bg-[#262626] text-[#fff] lg:text-[16px] lg:font-[700]'>New</span>
              <img  src={prodectimg} className=' ' alt="" />
              {show == true && <ul className="p-[5px] lg:p-[10px] pro_in_box bg-[#fff] h-[45%] absolute bottom-0 left-0 w-[100%]">
                <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Wish List</span> <div className="icon inline-block"><GiEternalLove /></div> </li>
                <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Wish List</span> <div className="icon inline-block"><GiEternalLove /></div> </li>
                <li className=' items-center flex justify-end ' > <span className='pr-[5px] text-[12px] lg:text-[16px] font-[700] text-[#767676] hover:text-[#000] py-[3px] font-sans'>Add to Wish List</span> <div className="icon inline-block"><GiEternalLove /></div> </li>
              </ul>}
            </div>
            <div className="name flex justify-between">
              <h2 className="text-[13px] lg:text-[20px] w-[70%]" >Basic Crew  Neck Tee <span className='block text-[12px] lg:text-[16px] font-sans text-[#767676]' >Back</span></h2>
              <span className="font-[400] text-[#767676] text-[13px] lg:text-[20px]">$44.00</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ProdectSlick