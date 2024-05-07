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
        <div className="w-1/2 h-[190px] lg:h-[250px] xl:h-[310px] 2xl:h-[380px] p-[5px] bg-[#fff] Prodect_box">
            <img src={prodectimg} className='h-[100%]' alt="" />
        </div>
        <div className="w-1/2 h-[190px] lg:h-[250px] xl:h-[310px] 2xl:h-[380px] p-[5px] bg-[#fff] Prodect_box">
            <img src={prodectimg} className='h-[100%]' alt="" />
        </div>
        <div className="w-1/2 h-[190px] lg:h-[250px] xl:h-[310px] 2xl:h-[380px] p-[5px] bg-[#fff] Prodect_box">
            <img src={prodectimg} className='h-[100%]' alt="" />
        </div>
        <div className="w-1/2 h-[190px] lg:h-[250px] xl:h-[310px] 2xl:h-[380px] p-[5px] bg-[#fff] Prodect_box">
            <img src={prodectimg} className='h-[100%]' alt="" />
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default ProdectSlick