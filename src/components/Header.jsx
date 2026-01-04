import React from 'react'
import Link from "next/link";


const Header = () => {

    const headerMenu = [
      {
        menuName: "Home",
        menuLink: "/",
      },
      {
        menuName: "About Us",
        menuLink: "/aboutus",
      },
      {
        menuName: "Content",
        menuLink: "/content",
      },
      {
        menuName: "Services",
        menuLink: "/services",
      },
      {
        menuName: "Mentorship",
        menuLink: "/mentorship",
      },
      {
        menuName: "Contact",
        menuLink: "/contact",
      },
    ];

  return (
    <>
      <div className="bg-black py-8">
        <div className="flex  container mx-auto justify-between items-center">
          {/* Logo */}
          <div className="">
            <h1 className="text-white font-inter-tight">LOGO</h1>
          </div>

          {/* Menu */}
          <div className="bg-[#0c202c]/30 px-60 rounded-full py-4 shadow-lg border border-[#3d4c56]">
            <ul className="flex gap-[40px]">
              {headerMenu.map((menu, index) => (
                <li
                  className="text-white cursor-pointer font-inter-tight text-lg tracking-[1px]"
                  key={index}
                >
                  <Link href={menu.menuLink}>{menu.menuName}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="text-white flex gap-2 relative items-center">
            <button className="bg-gradient-to-t from-[#0b0d10] to-[#0e1316]-600 py-4 px-8 text-white rounded-full border border-[#3d4c56] font-inter-tight tracking-[1px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header