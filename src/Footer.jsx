import React from 'react'

export default function Footer() {
  return (
    <div className='w-100 second-color text-white'>
        <div className="container">
            <div className="row py-5">
                <div className="col-md-4 text-center">
                 <h1>LOCATION</h1>
                 <p>2215 John Daniel Drive</p>
                 <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 text-center">
                 <h1>AROUND THE WEB</h1>
               <div className="d-flex justify-content-center align-items-center py-3 ">
  <div className="contact__card d-flex justify-content-center align-items-center ">
<a href="#" className='myi text-white'><i className="fa-brands fa-facebook-f  text-white" /></a>
  </div>
  <div className="contact__card d-flex justify-content-center align-items-center ">
<a href="#" className='myi text-white'><i className="fa-brands fa-youtube"></i></a>
  </div>
  <div className="contact__card d-flex justify-content-center align-items-center ">
<a href="#" className='myi text-white'><i className="fa-brands fa-linkedin-in"></i></a>
  </div>
  <div className="contact__card d-flex justify-content-center align-items-center  ">
<a href="#" className='myi text-white'><i className="fa-brands fa-g myi" /></a>
  </div>
</div>

                </div>
                <div className="col-md-4 text-center">
                 <h1>ABOUT FREELANCER</h1>
                 <p>Freelance is a free to use, licensed Bootstrap theme created by Omar El-sisi</p>
                
                </div>
            </div>
        </div>
      
    </div>
  )
}
