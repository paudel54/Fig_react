//import Data
import { navData } from "../../data";
//react icon
import { GrClose } from "react-icons/gr";

const NavMobile = ({ setNavMobile }) => {
  const handleClick = () => {
    setNavMobile(false);
  };
  return (
    <nav className="lg:hidden bg-slate-300 h-full top-0 w-80 flex justify-center items-center">
      {/* CLose buttons */}
      <div
        onClick={handleClick}
        className="absolute top-2 left-2 cursor-pointer"
      >
        {/* close icon */}
        <GrClose className="text-3xl " />
      </div>
      {/* Menu list */}
      <ul className="text-xl flex flex-col gap-y-8">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name} </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
