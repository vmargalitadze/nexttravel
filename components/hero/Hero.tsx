import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className="sec1">
    <div className="parallax  img1">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
            <div className="row">
                <div className="col-lg-8 heroItems col-md-10">
                    <h1 className="hero-title">იმოგზაურეთ <br />ჩვენთან ერთად</h1>
                    
                    <Link href="/all" className="login-btn">შემოგვიერთდი</Link>
                    
                  
                </div>
            </div>
        </div>
</div>

    </div>
  )
}

export default Hero