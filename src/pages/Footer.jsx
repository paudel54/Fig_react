import logo from "../assets/img/Logo.png";
import { navData } from "../data";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-[25px] bg-[#0D0D0D] text-white ">
      <div className="flex items-center justify-between mx-auto container mb-6">
        <img src={logo} alt="logo" className="opacity-80" />
        <nav>
          <ul className="flex items-center gap-11 ">
            {navData.map((item, index) => {
              return (
                <li className="border-b-2  text-white opacity-80 border-transparent hover:border-white transition-all duration-300">
                  <a href={item.href}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex gap-5">
          <FaFacebookSquare className=" opacity-80" />
          <FaInstagram className="opacity-80" />
          <FaTwitterSquare className="opacity-80" />
        </div>
      </div>
      <div className="border-b-[1px] container mx-auto mb-8 opacity-80"></div>
      <div className="flex items-center justify-between mx-auto container opacity-80">
        <div>© 2021 Company</div>
        <div className="flex gap-8">
          <div>Provacy policy </div>
          <div>Term of service</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
