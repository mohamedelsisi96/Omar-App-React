import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './../Product/Product';

export default function Productes() {
    let [myprod,setMyprod] = useState([])
    let [loading,setLoading]= useState(true)
    async function catchaproduct(){
        let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/products')
        setMyprod(data.data)
        setLoading(false)
    }
    useEffect(()=>{ catchaproduct()},[])
  return (
    <>
      <div className='container'>
      {loading?<div className="spinner vh-100">
  <div className="bounce1" />
  <div className="bounce2" />
  <div className="bounce3" />
</div>

:null}
        <div className="row">
      
            {myprod .map((elm) =>
                <Product key={elm.id} prod={elm} />
            )}
        </div>
      </div>
    </>
  )
}
