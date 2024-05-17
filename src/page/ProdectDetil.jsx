import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProdectDetil = () => {
    let ProdectId = useParams()
    let [singdata , setsingdata] = useState([])

    let getdata = () =>{
        axios.get(` https://dummyjson.com/products/${ProdectId.id} `).then((Response)=>{
            setsingdata(Response.data);
        })
    }
    useEffect(()=>{
        getdata()
    })
    console.log(singdata);
      return (
    <div>ProdectDetil</div>
  )
}

export default ProdectDetil