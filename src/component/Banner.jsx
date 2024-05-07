import React from 'react'
import Bannerlogo from '../assets/Banner.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { RiNumber2 } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdRefresh } from "react-icons/md";
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplayspeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
          <div
            style={{

            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
            }}
          >
            0{i + 1}
          </div>
        )
      };
    return (
        <section>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="img_box">
                        <img  className='w-[100%]' src={Bannerlogo} alt="" />
                    </div>
                    <div className="img_box">
                        <img  className='w-[100%]' src={Bannerlogo} alt="" />
                    </div>
                    <div className="img_box">
                        <img  className='w-[100%]' src={Bannerlogo} alt="" />
                    </div>
                </Slider>
            </div>
            <div className="md:py-[30px] py-[20px] border-b-[1px] border-[#F0F0F0]">
            <div className="container  mx-auto flex items-center justify-between">
            <div className="item flex  items-center"><div className=" pr-[10px] icon font-bold text-[20px] md:text-[30px] text-[#000]"><RiNumber2/></div><span className=' text-[10px] md:text-[16px] text-[#000] font-sans'>Two years warranty</span></div>
            <div className="item flex  items-center"><div className=" pr-[10px] icon font-bold text-[20px] md:text-[30px] text-[#000]"><TbTruckDelivery/></div><span className=' text-[10px] md:text-[16px] text-[#000] font-sans'>Free shipping</span></div>
            <div className="item flex  items-center"><div className=" pr-[10px] icon font-bold text-[20px] md:text-[30px] text-[#000]"><MdRefresh/></div><span className=' text-[10px] md:text-[16px] text-[#000] font-sans'>Return policy in 30 days</span></div>
            </div>
            </div>
        </section>
    )
}

export default Banner