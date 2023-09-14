import React from 'react'

export default function Product(props) {
    let {imageCover,title,description,price}=props.prod
  return (
    <>
    <div className="col-md-4">
        <img className='w-100' src={imageCover}/>
        <h5>{title} | {price}</h5>
        <p>{description.split(" ").slice(0,20).join(" ")}</p>
    </div>
      
    </>
  )
}
