
import React from 'react'
import './reg.css'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { SubmitButton } from '@/components/ui/subButton'
import { registerUser } from '@/utils/actions'
import FormContainer from '@/components/ui/FormContainer'
function page() {
  return (
   <>
   <div className="header">
   <div className="container">
          <div className="page-banner-content">
            <h2 className="allh2">რეგისტრაცია</h2>

            <p className="allp">
              <Link className="allLink" href="/">მთავარი</Link> <BiChevronRight />  რეგისტრაცია
            </p>
          </div>
        </div>
   </div>
    <div className="map-shapes d-none d-md-block">
      <div className="map-shape map-shape-2 map-shape-vertical-top">
        <img src="/images/map-2.png" className='formImage' alt="image" />
      </div>
    </div>
   <div className="container">
    <div className="row form-items">
      <div className="reg-header">
        <h1 className='text_header'>რეგისტრაცია</h1>
      </div>
   <div className="authentication-box">

   <div className="authentication-section pb-100 position-relative">
  <div className="authentication-form mb-20">
      < FormContainer action={registerUser}  apiRoute="/api/register" >
      <div className="input-group input-group-bg mb-20">
            <input name='name' type="text" className="form-control" placeholder="სახელი"  />
      </div>

      <div className="input-group input-group-bg mb-20">
            <input name='email' type="text" className="form-control" placeholder="ემეილი"  />
      </div>
      <div className="input-group input-group-bg mb-20">
            <input name='password' type="text" className="form-control" placeholder="პაროლი"  />
      </div>

      <SubmitButton text='დარეგისტრირდი' />
      </ FormContainer>

  </div>
    </div>
   </div>
    </div>
   </div>

   </>
  )
}

export default page