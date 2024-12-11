'use client';
import { useRef, useEffect, useState } from 'react';
import { BiStar } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { BiMapPin } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import { BiMoon } from 'react-icons/bi';
import './image.css'
function SliderContainer() {
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1); // Number of slides visible
  const carousel = useRef();

  const slides = [
    { src: '/images/460482863_8182527035118261_8661955846024105159_n.jpg', title: 'Rome' },
    { src: '/images/460486954_8182527288451569_7463803226832930877_n.jpg', title: 'Rome' },
    { src: '/images/463640673_1281796299477065_3024425948860021280_n.jpg', title: 'Rome' },
    { src: '/images/464581863_586317453750757_3358658675031361046_n.jpg', title: 'Rome' },
    { src: '/images/465590205_593706929678476_3629098810140220069_n.jpg', title: 'Rome' },
    
  ];

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1200) {
        setVisibleSlides(3); // Large screens
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2); // Medium screens
      } else {
        setVisibleSlides(1); // Small screens
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const totalDots = Math.ceil(slides.length / visibleSlides);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    carousel.current.scrollTo({
      left: index * carousel.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <motion.div ref={carousel} className="carousel ">
        <motion.div
         
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {slides.map((slide, index) => (
            <motion.div
              className={`item col-${12 / visibleSlides} ${activeIndex === index ? 'active' : ''}`}
              key={index}
            >
              <div className="">
        <div className="feature-box">
          <div className="feature-img">
            <img src="https://i.ibb.co/HKnLQhv/3.jpg" alt="" />
            <div className="price">
              <p>₹ 5000</p>
            </div>
            <div className="rating">
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
            </div>
          </div>
          <div className="feature-details">
            <h4>USA</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas, quidem. Est eum molestias eius quidem quis. Nostrum
              officia dolores nihil, at sed, hic, commodi dolorum ex ipsum
              magni aut aliquid.
            </p>
            <div className='slider-icons'>
            <p> <span> <BiMapPin />  </span>  USA </p>    
             <p> <span><BiSun /></span> 4 Days </p>  
            <p> <span><BiMoon /></span> 3 Nights </p>  
            </div>
          </div>
        </div>
      </div>
            
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="pagination ">
        {[...Array(totalDots)].map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </>
  );
}

export default SliderContainer;
