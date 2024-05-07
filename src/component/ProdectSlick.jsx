import React from 'react'
import Slider from 'react-slick';
import prodectimg from '../assets/prodectimg.png'
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="h-[40px] text-[20px] text-[#fff] absolute top-[50%] left-[10px] transform-y-[-50%] w-[40px] flex justify-center items-center rounded-[50%] bg-[#c4c4c4]"
      onClick={onClick}>
        <IoIosArrowBack/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div 
      className="h-[40px] text-[20px] text-[#fff] absolute top-[50%] z-[3] right-[10px] transform-y-[-50%] w-[40px] flex justify-center items-center rounded-[50%] bg-[#c4c4c4]"
      onClick={onClick}
      ><GrFormNext/></div>
    );
  }
const ProdectSlick = () => {
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
                  slidesToShow: 2 ,
                  slidesToScroll: 2,
                  arrows:false,
                }
              },
            
          ]
      };
  return (
    <div className="container mx-auto">
 <div className="slider-container">
      <Slider {...settings}>
        <div className=" relative p-[5px] bg-[#fff] Prodect_box">
            <span className='text-[10px] py-[5px] px-[12px] absolute top-[20px] left-[24px] md:py-[9px] md:px-[32px] bg-[#262626] text-[#fff] md:text-[16px] md:font-[700]'>New</span>
            <img src={prodectimg} className=' '  alt="" />
            <div className="name flex justify-between">
                <h2 className="text-[13px] md:text-[20px] w-[70%]" >Basic Crew  Neck Tee</h2>
                <span className="font-[400] text-[#767676] text-[13px] md:text-[20px]">$44.00</span>
            </div>
        </div>
        <div className=" relative p-[5px] bg-[#fff] Prodect_box">
            <span className='text-[10px] py-[5px] px-[12px] absolute top-[20px] left-[24px] md:py-[9px] md:px-[32px] bg-[#262626] text-[#fff] md:text-[16px] md:font-[700]'>New</span>
            <img src={prodectimg} className=' '  alt="" />
            <div className="name flex justify-between">
                <h2 className="text-[13px] md:text-[20px] w-[70%]" >Basic Crew  Neck Tee</h2>
                <span className="font-[400] text-[#767676] text-[13px] md:text-[20px]">$44.00</span>
            </div>
        </div>
        <div className=" relative p-[5px] bg-[#fff] Prodect_box">
            <span className='text-[10px] py-[5px] px-[12px] absolute top-[20px] left-[24px] md:py-[9px] md:px-[32px] bg-[#262626] text-[#fff] md:text-[16px] md:font-[700]'>New</span>
            <img src={prodectimg} className=' '  alt="" />
            <div className="name flex justify-between">
                <h2 className="text-[13px] md:text-[20px] w-[70%]" >Basic Crew  Neck Tee</h2>
                <span className="font-[400] text-[#767676] text-[13px] md:text-[20px]">$44.00</span>
            </div>
        </div>
        <div className=" relative p-[5px] bg-[#fff] Prodect_box">
            <span className='text-[10px] py-[5px] px-[12px] absolute top-[20px] left-[24px] md:py-[9px] md:px-[32px] bg-[#262626] text-[#fff] md:text-[16px] md:font-[700]'>New</span>
            <img src={prodectimg} className=' '  alt="" />
            <div className="name flex justify-between">
                <h2 className="text-[13px] md:text-[20px] w-[70%]" >Basic Crew  Neck Tee</h2>
                <span className="font-[400] text-[#767676] text-[13px] md:text-[20px]">$44.00</span>
            </div>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default ProdectSlick