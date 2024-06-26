import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Navitem from '../component/Navitem'
import Banner from '../component/Banner'
import Adds from '../component/Adds'
import ProdectSlick from '../component/ProdectSlick'
import ProdectPart1 from '../component/ProdectPart1'
import Loading from '../component/Loading'
import Add_2 from '../component/Add_2'
import Footer from '../component/Footer'

const Home = () => {
  let [loading , setloading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },2000)
  },)
  return (
    <>
        <Banner/>
        <Adds/>
        <ProdectSlick/>
        <ProdectPart1/>
        <Add_2/>
        <ProdectPart1/>
    </>
  )
}

export default Home