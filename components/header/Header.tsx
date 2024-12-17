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
          <h4>მთავარი</h4>
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
            <a href="./">მთავარი</a>
          </li>
          <li>
            <a href="#">ტურები</a>
          </li>
          <li>
            <a href="#">ჩვენ შესახებ</a>
          </li>
          <li>
            <a href="./register">რეგისტრაცია</a>
          </li>
          
        </ul>
      </nav>
    
    </>
  );
};



export default Header