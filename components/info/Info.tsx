import Image from 'next/image'
import React from 'react'
import first from '@/public/2/ticket.svg'
import sec from '@/public/2/hot-air-balloon.svg'
import mesame from '@/public/2/diamond.svg'
import meotxe from '@/public/2/medal.svg'
function Info() {
  return (
   <>
   <div className="layout-pt-xl layout-pb-xl">
    <div className="container">
        <div className="row">
        <div className="col-auto">
            <h2 data-aos="fade-up" className="text_header text-30 md:text-24 aos-init aos-animate">რატომ უნდა იმოგზაუროთ ჩვენთან ერთად? </h2></div>
        </div>
            <div data-aos="fade-up" className="row md:x-gap-20 pt-40 sm:pt-20 mobile-css-slider -w-280 aos-init aos-animate">
        <div className="col-lg-3 col-sm-6">
        <div className="featureIcon -type-1 pr-40 md:pr-0">
            <div className="featureIcon__icon">
                <Image  width={50} height={50} src={first} alt="icon" /></div>
                <h3 className="featureIcon__title text-18 fw-500 mt-30">მისაღები ფასები</h3>
                <p className="featureIcon__text mt-10">ჩვენი შეთავაზებები გათვლილია ყველა ბიუჯეტზე.</p></div>
        </div>
        <div className="col-lg-3 col-sm-6">
        <div className="featureIcon -type-1 pr-40 md:pr-0">
            <div className="featureIcon__icon">
                <Image width={50} height={50} src={sec} alt="icon" /></div>
                <h3 className="featureIcon__title text-18 fw-500 mt-30">დაუვიწყარი გამოცდილებები</h3>
                <p className="featureIcon__text mt-10">ჩვენ ვუზრუნველყოფთ საუკეთესო მოგონებებს.</p></div>
        </div>
        <div className="col-lg-3 col-sm-6">
        <div className="featureIcon -type-1 pr-40 md:pr-0">
            <div className="featureIcon__icon">
                <Image width={50} height={50} src={mesame} alt="icon" /></div>
                <h3 className="featureIcon__title text-18 fw-500 mt-30">ხარისხი </h3>
                <p className="featureIcon__text mt-10">ხარისხი არის ჩვენი სერვისის მთავარი პრიორიტეტი.</p></div>
        </div>
        <div className="col-lg-3 col-sm-6">
        <div className="featureIcon -type-1 pr-40 md:pr-0">
            <div className="featureIcon__icon">
                <Image width={50} height={50} src={meotxe} alt="icon" /></div>
                <h3 className="featureIcon__title text-18 fw-500 mt-30">მუდმივი მხარდაჭერა </h3>
                <p className="featureIcon__text mt-10">ჩვენ აქ ვართ, რათა დავეხმაროთ ნებისმიერ დროს.</p></div>
        </div>
            </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Info