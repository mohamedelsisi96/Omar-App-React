import React from 'react'
import { NavLink , Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
  
     
<nav className="navbar navbar-expand-lg second-color fixed-top text-white">
  <div className="container">
    <NavLink className="navbar-brand text-white" to="/">Start Framework </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link  text-uppercase text-white"  to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase text-white" to="/portofolio">portofolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase text-white" to="/productes">Productes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase text-white" to="/contact">contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


   
    </div>
  )
}
