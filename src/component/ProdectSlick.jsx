import React from 'react'
import Slider from 'react-slick';
import prodectimg from '../assets/prodectimg.png'
const ProdectSlick = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  infinite: true,
                  dots: false,
                  slidesToShow: 2 ,
                  slidesToScroll: 2,
                }
              },
            
          ]
      };
  return (
    <div className="container mx-auto">
 <div className="slider-container">
      <Slider {...settings}>
        <div className=" h-[220px] sm:h-[240px] lg:h-[320px] bg-[#fff] xl:h-[390px] 2xl:h-[470px] p-[5px] bg-[#fff] Prodect_box">
            <img src={prodectimg} className='h-[80%] '  alt="" />
            <div className="name flex justify-between">
                <h2 className="text-[13px] md:text-[20px] w-[70%]" >Basic Crew  Neck Tee</h2>
                <span className="font-[400] text-[#767676] text-[13px] md:text-[20px]">$44.00</span>
            </div>
        </div>
        <div className=" h-[220px] sm:h-[240px] lg:h-[320px] bg-[#fff] xl:h-[390px] 2xl:h-[470px] p-[5px] bg-[#fff] Prodect_box">
            <img src={prodectimg} className='h-[80%] '  alt="" />
            <div className="name flex justify-between">
                <h2 className="text-[13px] md:text-[20px] w-[70%]" >Basic Crew  Neck Tee</h2>
                <span className="font-[400] text-[#767676] text-[13px] md:text-[20px]">$44.00</span>
            </div>
        </div>
        <div className=" h-[220px] sm:h-[240px] lg:h-[320px] bg-[#fff] xl:h-[390px] 2xl:h-[470px] p-[5px] bg-[#fff] Prodect_box">
            <img src={prodectimg} className='h-[80%] '  alt="" />
            <div className="name flex justify-between">
                <h2 className="text-[13px] md:text-[20px] w-[70%]" >Basic Crew  Neck Tee</h2>
                <span className="font-[400] text-[#767676] text-[13px] md:text-[20px]">$44.00</span>
            </div>
        </div>
        <div className=" h-[220px] sm:h-[240px] lg:h-[320px] bg-[#fff] xl:h-[390px] 2xl:h-[470px] p-[5px] bg-[#fff] Prodect_box">
            <img src={prodectimg} className='h-[80%] '  alt="" />
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