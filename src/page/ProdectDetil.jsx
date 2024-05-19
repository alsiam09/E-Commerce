import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProdectDetil = () => {
  let ProdectId = useParams()
  let [singdata, setsingdata] = useState([])
  let [imgitem , setimgitem] = useState([])

  let getdata = () => {
    axios.get(` https://dummyjson.com/products/${ProdectId.id} `).then((Response) => {
      setsingdata(Response.data);
      setimgitem(Response.data.images)
      console.log(imgitem);
    })
  }
  useEffect(() => {
    getdata()
  })

  return (
    <section>
      <div className="container mx-auto">
         <div className="proimgsbox flex flex-wrap">
          {imgitem.map((imgs)=>(
            <img className='w-[50%] p-[10px]'  src={imgs} alt="" />
          ))}
         </div>
      </div>
    </section>
  )
}

export default ProdectDetil