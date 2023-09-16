import logo from "../assets/img/Logo.png";
import { navData } from "../data";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-[25px] bg-[#0D0D0D] text-white ">
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto container mb-6">
        <img
          src={logo}
          alt="logo"
          className="opacity-80 scale-50 lg:scale-75"
        />
        <nav>
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-11 ">
            {navData.map((item, index) => {
              return (
                <li className="border-b-2  text-white opacity-80 border-transparent hover:border-white transition-all duration-300">
                  <a href={item.href}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <FaFacebookSquare className=" opacity-80" />
          <FaInstagram className="opacity-80" />
          <FaTwitterSquare className="opacity-80" />
        </div>
      </div>
      <div className="border-b-[1px] container mx-auto mb-8 opacity-80"></div>
      <div className="flex items-center justify-between lg:mx-auto container opacity-80 px-4 text-sm lg:textlg">
        <div>© 2021 Company</div>
        <div className="flex gap-8">
          <div>Privacy policy </div>
          <div>Term of service</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
