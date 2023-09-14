import React, { useEffect, useState } from 'react'

export default function Galarry() {
    let [x,setX]= useState("mohamed")
    let [count,setCount]= useState(0)
    function changeName() {
        setX("omar")
    }
    useEffect(()=> console.log("use state from componant did mount"),[])
    useEffect(()=> console.log("use state from componant did Update"),[x,count])
   useEffect(()=>{
    return ()=> {console.log("by by by unmount")};
   },[])

  return (
    <div>
      <h1>{x}</h1>
      <button className='btn btn-info' onClick={changeName}>change Name</button>
      <hr/>
      <h1>{count}</h1>
      <button className='btn btn-info' onClick={()=>setCount(Math.floor(Math.random()*100))}>change Number</button>
    </div>
  )
}
