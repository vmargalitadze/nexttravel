import React from 'react'
import Image from 'next/image'
import HeroBg from '@/public/hero/bg.png'
import shape from '@/public/hero/shape.svg'
import shape2 from '@/public/hero/shape2.svg'
import f from  '@/public/hero/1.png'
import { GoArrowUpRight } from 'react-icons/go';
import './join.css'
import Link from 'next/link'
function Join() {
  return (
    <>
    <div className="layout-pb-xl layout-pt-xl">

    <div className="cta -type-2  ">
        <div className="cta__bg">
            <img src='/hero/bg.png' alt='ds' className='bgimage' height={200} />
            <div className="cta__image">
                
            <img src='/hero/1.png' alt='f' />
            <img src='/hero/shape.svg' alt='f' />
            <img  src='/hero/shape2.svg' alt='f' />
            </div>
        </div>  
        <div className="container py-5">
    <div className="row center">
        <div className="col-12 col-md-7 col-lg-6 col-xl-5 col-xxl-4 text-center">
            <div className="cta__content py-4">
                <h2 className="join-text mb-4">შემოგვიერთდი</h2>
                <Link href="/tour-list-1" className=" join-btn d-inline-flex align-items-center">
                    დარეგისტრირდი
                    <GoArrowUpRight className="ms-2 " />
                </Link>
            </div>
        </div>
    </div>
</div>

    </div>
    </div>
    
    
    </>
  )
}

export default Join