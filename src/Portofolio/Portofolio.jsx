import React from 'react'

export default function Portofolio() {
  return (
    <div className='py-5'>
        <div className="container pt-5">
        <h1 className='text-uppercase mb-3 fs-1 fw-bolder text-center'>portfolio component</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='line bg-black pe-5'></div>
                <i class="fa-solid fa-star  p-5 text-black"></i>
                <div className='line bg-black ps-5'></div>
            </div>
            <div className="row g-5">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="ineer rounded-2">
                    <img src="pic/poert1.png" className='w-100 rounded-4' height="300" alt="" />
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="ineer rounded-2">
                    <img src="pic/port2.png" className='w-100 rounded-4' height="300" alt="" />
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="ineer rounded-2">
                    <img src="pic/port3.png" className='w-100 rounded-4' height="300" alt="" />
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="ineer rounded-2">
                    <img src="pic/poert1.png" className='w-100 rounded-4' height="300" alt="" />
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="ineer rounded-2">
                    <img src="pic/port2.png" className='w-100 rounded-4' height="300" alt="" />
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="ineer rounded-2">
                    <img src="pic/port3.png" className='w-100 rounded-4' height="300" alt="" />
                </div>
                </div> 
            </div>
        </div>
      
    </div>
  )
}
