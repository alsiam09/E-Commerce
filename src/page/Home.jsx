import React from 'react'
import Header from '../component/Header'
import Navitem from '../component/Navitem'
import Banner from '../component/Banner'
import Adds from '../component/Adds'
import ProdectSlick from '../component/ProdectSlick'

const Home = () => {
  return (
    <>
        <Header/>
        <Navitem/>
        <Banner/>
        <Adds/>
        <ProdectSlick/>
    </>
  )
}

export default Home