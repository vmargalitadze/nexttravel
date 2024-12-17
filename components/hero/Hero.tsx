import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function Hero() {
  return (
    <div className="sec1">
    <div className="parallax  img1">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
            <div className="row">
                <div className="col-lg-8 heroItems col-md-10">
                    <h1 className="hero-title">იმოგზაურეთ <br />ჩვენთან ერთად</h1>
                    
                    <Link href="/register" className=" join-btn w d-inline-flex align-items-center">
                    დარეგისტრირდი
                    <GoArrowUpRight className="ms-2 arrow" />
                </Link>
                    
                  
                </div>
            </div>
        </div>
</div>

    </div>
  )
}

export default Hero