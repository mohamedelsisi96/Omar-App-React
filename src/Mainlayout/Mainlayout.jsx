import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Foot from '../Foot'

export default function Mainlayout() {
  return (
    <>
        <Navbar/>
      <Outlet/>

      <Footer/>
      <Foot/>
    </>
  )
}
