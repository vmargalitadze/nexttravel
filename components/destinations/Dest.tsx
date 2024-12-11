import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

function Dest() {
  return (
    <>
      <div className="layout-pb-xl layout-pt-xl">
        <div className="container">
          <div className="row arrow">
            <div className="col-auto">
              <h2 data-aos="fade-up" className="text_header text-30 md:text-24">მიმართულებები</h2>
            </div>
            <Link className="buttonArrow all col-auto d-flex items-center" href="/all">
              <span>ყველა</span><GoArrowUpRight />
            </Link>
          </div>

          <div className="row">
           
            <div className="col-md-2  col-sm-6 col-xs-12">
              <figure className="destination">

              <Link className='dest' href={'/'}>
              
                <img   className=" destImages " src="/images/460482863_8182527035118261_8661955846024105159_n.jpg" alt="image" />
              </Link>

              <h1  className='dest-text' > Paris</h1>
              </figure>
            </div>

           
            <div className="col-md-2 col-sm-6 col-xs-12">
              <figure className="destination">

              <Link className='dest' href={'/'}>
                <img   className=" destImages  " src="/images/460486954_8182527288451569_7463803226832930877_n.jpg" alt="image" />
              
              </Link>

              <h1  className='dest-text' > Paris</h1>
              </figure>
            </div>

           
            <div className="col-md-2 col-sm-6 col-xs-12">
              <figure className="destination">
              <Link className='dest' href={'/'}>
              
                <img   className=" destImages " src="/images/463640673_1281796299477065_3024425948860021280_n.jpg" alt="image" />
              </Link>
              <h1  className='dest-text' > Paris</h1>
              </figure>
            </div>

           
            <div className="col-md-2 col-sm-6 col-xs-12">
              <figure className="destination">
        <Link className='dest' href={'/'}>
                <img   className="destImages " src="/images/464581863_586317453750757_3358658675031361046_n.jpg" alt="image" />
        
        </Link>

        <h1  className='dest-text' > Paris</h1>
              </figure>
            </div>

     
            <div className="col-md-2 col-sm-6 col-xs-12">
              <figure className="destination">
              <Link className='dest' href={'/'}> 
              
                <img   className=" destImages " src="/images/465590205_593706929678476_3629098810140220069_n.jpg" alt="image" />
              </Link>

              <h1  className='dest-text' > Paris</h1>
              </figure>
            </div>

      
            <div className="col-md-2 col-sm-6 col-xs-12">
              <figure className="destination">
             <Link className='dest' href={'/'}>
             
             <img   className=" destImages  " src="/images/469179338_1360668048654502_5110389964310705444_n.jpg" alt="image" />
             </Link>   
                <h1  className='dest-text' > Paris</h1>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dest;
