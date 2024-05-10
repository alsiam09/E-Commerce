import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Smcart from '../component/Smcart';
import Loading from '../component/Loading';
const Crat = () => {
  let [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2000)
  },)
  return (
    <section>
      {loading == false
        ? <>
          <Header />
          <Smcart /></>
        : <Loading/>
      }
    </section>
  )
}

export default Crat