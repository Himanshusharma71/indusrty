import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[45px] flex justify-between items-center px-6 bg-gray-800">
      
      {/* TaskBuddy Title on Left */}
      <h1 className="text-white font-bold text-xl">
        Task<span className="text-red-500">B</span>uddy
      </h1>

      {/* Navigation Links on Right */}
      <div className="flex gap-x-5">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold text-xl"
                : "text-white font-medium text-xl"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default Navbar;
