import React from 'react'
import Header from '../component/Header'
import Navitem from '../component/Navitem'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'
const Rootlayout = () => {
  return (
    <>
    <Header/>
    <Navitem/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Rootlayout