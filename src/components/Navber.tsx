"use client";

import Link from "next/link";
import Image from "next/image";
import searchicon from "../../public/searchicon.png";
import shopicon from "../../public/shopicon.png";
import li from "../../public/li.png";
import React, { useState } from "react";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="bg-[#FFFFFF] shadow-lg h-[70px] py-2 px-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl md:text-4xl font-semibold text-[#252B42]">
          <h1>Bandage</h1>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex">
          <ul className="flex space-x-5 lg:space-x-10 font-bold text-[#737373] text-base lg:text-2xl">
            <li>
              <Link href="/" className="hover:text-[#b6b5b5]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-[#b6b5b5]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#b6b5b5]">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#b6b5b5]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#b6b5b5]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-[#b6b5b5]">
                Pages
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div>
          <ul className="flex space-x-1 md:space-x-1 items-center font-bold text-sm md:text-xl">
            <li className="text-[#23A6F0]">
              <Link href="#">Login / Register</Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={searchicon}
                  alt="Search Icon"
                  className="w-7 md:w-20"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={shopicon} alt="Shop Icon" className="w-7 md:w-20" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={li}
                  alt="Notification Icon"
                  className="w-7 md:w-20"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button (Hidden on larger screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-[#252B42]">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFFFFF] p-4 shadow-lg">
          <ul className="space-y-4 font-bold text-[#737373] text-lg">
            <li>
              <Link href="/" className="hover:text-[#b6b5b5]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-[#b6b5b5]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#b6b5b5]">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#b6b5b5]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#b6b5b5]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-[#b6b5b5]">
                Pages
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navber;
