import { Link } from "react-router-dom";
import { useState } from "react";
import { NavbarLinks } from "../../data/navbar-link";
import { MdAddShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import ProfileDropdown from "../ProfileDropdown";

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Add console.log to check the value of the token
  console.log("Token:", token);

  return (
    <div className="bg-white relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? (
                <MdClose className="text-gray-900 text-4xl" />
              ) : (
                <MdMenu className="text-gray-900 text-4xl mb-3 items-center" />
              )}
            </button>
            <nav className={`md:block mb-8 ${isMenuOpen ? "block" : "hidden"}`}>
              <ul
                className={`flex flex-col md:flex-row gap-y-4 md:gap-x-6 md:gap-y-0 absolute ${
                  isMenuOpen
                    ? " bg-gray-500 mt-12 pl-4 p-4 w-full h-auto z-40 -ml-[52px] "
                    : ""
                }`}
              >
                {NavbarLinks.map((link, index) => (
                  <li key={index} className="">
                    <Link to={link.path}>
                      <p
                        className={
                          link.title === "dribbble"
                            ? "font-bold italic text-pink-300 text-xl cursor-pointer font-sans"
                            : "text-gray-600 text-xl cursor-pointer font-sans"
                        }
                      >
                        {link.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-1 mr-3 flex-wrap">
            <div className="relative  items-center bg-slate-200 rounded-lg p-2 md:mb-0 mb-4 ">
              <IoSearchOutline className="absolute mt-1" />
              <input
                type="search"
                placeholder="Search"
                className="md:w-full w-[40px]   bg-slate-200 border-0 outline-none"
              />
            </div>
            <div className="">
              <div className="text-4xl cursor-pointer">
                <MdAddShoppingCart className="rounded-3xl p-2" />
              </div>
            </div>

            {token !== null && <ProfileDropdown />}
            <div className="">
              <button
                style={{ backgroundColor: "#f43f5e" }}
                className="w-full p-1.5 px-3 text-white rounded-lg"
              >
                <Link to="/profile">Upload</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
