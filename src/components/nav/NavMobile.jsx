//import Data
import { navData } from "../../data";
//react icon
import { GrClose } from "react-icons/gr";
import Button from "../button/Button";
import LogoImg from "../../assets/img/Logo.png";
const NavMobile = ({ setNavMobile }) => {
  const handleClick = () => {
    setNavMobile(false);
  };
  return (
    <nav className="lg:hidden bg-indigo-400 text-white  h-full top-0 w-80 flex justify-center items-center">
      {/* CLose buttons */}
      <div
        onClick={handleClick}
        className="absolute top-2 left-2 cursor-pointer"
      >
        {/* close icon */}
        <GrClose className="text-3xl relative left-5 top-5" />
        <img
          src={LogoImg}
          alt="icon"
          className="scale-[80%] md:scale-[90%] mt-20 md:mt-26 ml-4"
        />
      </div>
      {/* Menu list */}

      <ul className=" flex flex-col gap-y-8  text-xl md:text-2xl font-bold -mt-14 -md:mt-50">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name} </a>
            </li>
          );
        })}
        <Button text="GET STARTED" />
        {/* <h1 className="top-0">Icon</h1>
        <LogoImg/> */}
      </ul>
    </nav>
  );
};

export default NavMobile;
