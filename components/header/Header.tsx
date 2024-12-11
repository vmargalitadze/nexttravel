"use client"
import { useEffect, useState } from "react";
import Logo from '@/public/2/logo.jpg'
import Image from "next/image";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [navBlack, setNavBlack] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavBlack(true);
      } else {
        setNavBlack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
     <div className="responsive-bar">
        <div className="logo">
        <Image
  src={Logo}
  className="image"
  alt="logo"
  width={50}
  height={50}
/>
        </div>
        <div className="menu" onClick={toggleMenu}>
          <h4>Menu</h4>
        </div>
      </div>
      <nav className={navBlack ? "black" : ""}>
        <div className="logo">
        <Image
  src={Logo}
  className="image"
  alt="logo"
  width={50}
  height={50}
/>
        </div>
        <ul className={menuActive ? "active" : ""}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    
    </>
  );
};



export default Header