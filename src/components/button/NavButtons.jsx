// importing data
import { navData } from "../../data";

const NavButtons = () => {
  return (
    <nav>
      <ul className="flex items-center gap-11">
        {navData.map((item, index) => {
          return (
            <li className="border-b-2  text-white border-transparent hover:border-white transition-all duration-300">
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavButtons;
