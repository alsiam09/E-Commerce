import React from 'react'
import add1 from '../assets/Add1.png'
import add2 from '../assets/Add2.png'
import add3 from '../assets/Add3.png'
const Adds = () => {
  return (
    <section className='lg:pt-[174px] lg:pb-[128px] py-[50px]'>
        <div className="container items-center flex h-[175px] sm:h-[275px] md:h-[400px] lg:h-[500px] xl:h-[780px] justify-between mx-auto">
            <div className="Add_div w-[49%] h-[100%]">
                <img className='h-[100%]' src={add1} alt="" />
            </div>
            <div className="Add_div w-[49%] h-[100%]">
                <div className="add md:pb-[10px] pb-[5px] w-[100%] h-[50%]">
                    <img className='w-[100%] h-[100%]' src={add2} alt="" />
                </div>
                <div className="add md:pt-[10px] w-[100%] pt-[5px] h-[50%]">
                    <img className=' h-[100%] w-[100%]' src={add3} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Adds