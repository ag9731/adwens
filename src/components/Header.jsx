"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerMenu = [
    { menuName: "Home", menuLink: "/" },
    { menuName: "About Us", menuLink: "/aboutus" },
    // { menuName: "Content", menuLink: "/content" },
    { menuName: "Initiatives", menuLink: "/services" },
    // { menuName: "Mentorship", menuLink: "/mentorship" },
    { menuName: "Contact", menuLink: "/contact" },
  ];

  return (
    <header className="bg-black py-6 shadow-2xl">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/assets/adwens-logo-bg-white.png"
              alt="Logo"
              width={150}
              height={55}
              className="w-[90px]  sm:w-[130px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-[#0c202c]/30 px-16 py-4 rounded-full border border-[#3d4c56] shadow-lg">
          <ul className="flex gap-10">
            {headerMenu.map((menu, index) => (
              <li
                key={index}
                className="text-white font-inter-tight text-base tracking-[1px]"
              >
                <Link href={menu.menuLink} className="hover:text-white/80">
                  {menu.menuName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <button className="bg-gradient-to-t cursor-pointer from-[#0b0d10] to-[#0e1316] px-8 py-3 rounded-full border border-[#3d4c56] text-white font-inter-tight tracking-wide hover:border-white transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile / Tablet Menu Icon */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile / Tablet Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-6 px-4">
          <div className="bg-[#0c202c]/40 border border-[#3d4c56] rounded-2xl py-6">
            <ul className="flex flex-col items-center gap-6">
              {headerMenu.map((menu, index) => (
                <li
                  key={index}
                  className="text-white font-inter-tight text-lg tracking-wide"
                >
                  <Link href={menu.menuLink} onClick={() => setMenuOpen(false)}>
                    {menu.menuName}
                  </Link>
                </li>
              ))}

              {/* Mobile Button */}
              <li className="pt-4">
                <Link href="/contact">
                  <button className="bg-gradient-to-t cursor-pointer from-[#0b0d10] to-[#0e1316] px-8 py-3 rounded-full border border-[#3d4c56] text-white font-inter-tight tracking-wide">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
