import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full flex justify-between items-center bg-gray-700/80 text-white min-h-[50px] absolute z-10">
      <ul className="hidden sm:flex px-4">
        <li className="p-4">
          <a href="/">Home</a>
        </li>
        <li className="p-4">
          <a href="#gallery">Gallery</a>
        </li>
        <li className="p-4">
          <a href="#deals">Deals</a>
        </li>
        <li className="p-4">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      <div className="sm:hidden z-10" onClick={handleNav}>
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col w-full"
            : "absolute top-0 left-[-100%] h-screen ease-in duration-500"
        }
      >
        <ul className="w-full h-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Galleryt</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-2xl py-8">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
