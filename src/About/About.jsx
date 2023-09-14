import React from 'react'

export default function About() {
  return (
    <div className='w-100 py-5  main-color'>
        <div className='container py-5'>
            <div className='w-50 mx-auto'>
            <h1 className='text-uppercase mb-3 fs-1 fw-bolder text-center'>about component</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='line bg-black pe-5'></div>
                <i class="fa-solid fa-star  p-5 text-black"></i>
                <div className='line bg-black ps-5'></div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Omar El-sisi. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Omar El-sisi. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}
