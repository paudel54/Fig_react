import React from "react";
import Logo from "../../assets/img/Logo.png";
import Button from "../button/Button";
import Nav from "../nav/Nav";
import NavButtons from "../button/NavButtons";

const Header = () => {
  return (
    <header className="py-[20px] lg:pt-[30px] ">
      <div className="flex items-center justify-between mx-auto container">
        {/* LOGO */}
        <a href="#/">
          <img src={Logo} alt="icon" />
        </a>
        {/* Nav Buttons */}
        <div>
          {/* <Nav /> */}
          <NavButtons />
        </div>
        <Button text="GET STARTED" />
      </div>
    </header>
  );
};

export default Header;
