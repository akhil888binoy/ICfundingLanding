import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl bg-transparent backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg">
      <div className="px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl font-extralight font-antic italic text-white">
          IC Funding
        </h1>

        {/* Navigation Links for medium+ screens */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-200">
          <li>
            <a
              href="#home"
              className="hover:text-white font-dmsans tracking-[1px] transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-white font-dmsans tracking-[1px] transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-white font-dmsans tracking-[1px] transition-colors"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-white font-dmsans tracking-[1px] transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger / Close Button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="#"
          className="hidden md:inline-block px-4 py-2 rounded-lg font-dmsans tracking-[1px] bg-[#A855F7] text-sm font-medium text-slate-200 shadow hover:opacity-90 transition"
        >
          Connect Wallet
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-3 text-sm font-medium text-gray-200">
          <a
            href="#home"
            className="hover:text-white font-dmsans tracking-[1px] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#features"
            className="hover:text-white font-dmsans tracking-[1px] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-white font-dmsans tracking-[1px] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="hover:text-white font-dmsans tracking-[1px] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-lg font-dmsans tracking-[1px] bg-[#A855F7] text-sm font-medium text-slate-200 shadow hover:opacity-90 transition"
            onClick={() => setIsOpen(false)}
          >
            Connect Wallet
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
