import React from "react";
import Logo from "../../assets/img/Logo.png";
import Button from "../button/Button";
import Nav from "../nav/Nav";
import NavButtons from "../button/NavButtons";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ setNavMobile }) => {
  // to open drawer
  const handleClick = () => {
    setNavMobile(true);
  };
  return (
    //className="py-[20px] lg:pt-[30px] className="sticky top-0 z-30 w-full px-2 py-4  border-2 bg-red-300 sm:px-4 shadow-xl""

    <header
      data-aos="fade-down"
      data-aos-delay="400"
      data-aos-duration="2000"
      className="py-[20px] lg:pt-[30px]"
    >
      <div className="flex items-center justify-between mx-auto container">
        {/* LOGO */}
        <a href="#/">
          <img src={Logo} alt="icon" className="scale-75 lg:scale-100" />
        </a>
        {/* Nav Buttons */}
        <div className="hidden lg:flex gap-x-[14rem] items-center justify-center">
          {/* <Nav /> */}
          <NavButtons />
          <Button text="GET STARTED" />
        </div>
        {/* Open nav Buttons */}
        <div onClick={handleClick} className="lg:hidden cursor-pointer">
          <RxHamburgerMenu className="text-2xl text-white mr-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
