import React from 'react'
import Header from '../component/Header'
import Navitem from '../component/Navitem'
import Banner from '../component/Banner'
import Adds from '../component/Adds'
import ProdectSlick from '../component/ProdectSlick'
import ProdectPart1 from '../component/ProdectPart1'

const Home = () => {
  return (
    <>
        <Header/>
        <Navitem/>
        <Banner/>
        <Adds/>
        <ProdectSlick/>
        <ProdectPart1/>
    </>
  )
}

export default Home