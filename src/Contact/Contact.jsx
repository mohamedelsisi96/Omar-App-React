import React from 'react'

export default function Contact() {
  return (
    <div className='w-100 py-5'>
        <div className="container">
        <h1 className='text-uppercase mb-3 fs-1 fw-bolder text-center'>conatct section</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='line bg-black pe-5'></div>
                <i class="fa-solid fa-star  p-5 text-black"></i>
                <div className='line bg-black ps-5'></div>
            </div>
            <div className="form-group w-50 mx-auto">
  <input type="text" className="form-control border-bottom w-100 p-3 my-3 rounded-5 " placeholder="User Name" name="Name" aria-label="Username" aria-describedby="basic-addon1" />
  <input type='number' className="form-control w-100 p-3 my-3 rounded-5" placeholder="User Age" name="Subject" aria-label="subject" aria-describedby="basic-addon1" />
  <input type="email" className="form-control w-100 p-3 my-3 rounded-5" placeholder="User E-mail" name="E-mail" aria-label="Useremail" aria-describedby="basic-addon1" />
  <input type="password" className="form-control w-100 p-3 my-3 rounded-5" placeholder="User Pass-word" name="password" aria-label="Useremail" aria-describedby="basic-addon1" />

  <button className="btn btn-secondary  w-auto my-3 m-auto" type="submit">Send Message</button>
</div>

        </div>
      
    </div>
  )
}
