'use client';
import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'swiper';

import SwiperContainer from '../imageSlider/SliderContainer';
function Popular() {
  
  return (
   <>
   <div className="layout-pb-xl bg-light-1 layout-pt-xl relative">

    <div className="container ">
    <div className="row arrow">
            <div className="col-auto">
              <h2 data-aos="fade-up" className="text_header text-30 md:text-24">ახალი ტურები</h2>
            </div>
            <Link className="buttonArrow all col-auto d-flex items-center" href="/all">
              <span>ყველა</span><GoArrowUpRight />
            </Link>
          </div>

       
          <SwiperContainer />
    </div>

   </div>
   
   
   </>
  )
}

export default Popular