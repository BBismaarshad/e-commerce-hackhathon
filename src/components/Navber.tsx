"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// State to toggle the mobile menu
export default function Navber() {
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle menu state
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Function to close the menu
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className=" w-screen h-[65px] flex justify-center
       items-center"
      >
        <div className=" w-[1049px] flex items-center justify-around md:justify-between h-[58px]">
          <div className="logo">
            <h1 className="font-bold text-[25px] text-[#252B42]">Bandage</h1>
          </div>
          <div className="nav hidden md:flex text-[#737373] ">
            <ul className=" flex gap-5">
              <Link href={"/home"}>
                <li>Home</li>
              </Link>

              <div className="flex items-center space-x-1 cursor-pointer">
                <a href="#" className="text-slate-600 ">
                  Shop
                </a>
                <MdOutlineKeyboardArrowDown className="text-slate-600 " />
              </div>
              <Link href={"/about"}>
                <li>About</li>
              </Link>
              <Link href={"/pricing"}>
                <li>Blog</li>
              </Link>
              <Link href={"/contact"}>
                <li>Contact</li>
              </Link>
              <Link href={"/product"}>
                <li>Pages</li>
              </Link>
            </ul>
          </div>
          <div className="links flex gap-4 text-[#23A6F0]">
            <p className="font-bold text-[#23A6F0] md:flex hidden">
              Login / Register
            </p>
            <div className=" flex justify-center items-center gap-4">
              <i className="">
                <IoIosSearch />
              </i>
              <i className="">
                <IoCartOutline />
              </i>
              <i className="">
                <FaRegHeart />
              </i>
              <i onClick={handleMenu} className="alt-right md:hidden">
                <IoMenu />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bar md:hidden bg-white ${
          isOpen ? " h-[350px] opacity-100" : "h-0 opacity-0"
        } `}
      >
        <ul className="  grid gap-10 mt-10 ">
          <Link href={"/home"}>
            <li onClick={handleClose} className="text-2xl text-center ">
              Home
            </li>
          </Link>
          <Link href={"/product"}>
            <li onClick={handleClose} className="text-2xl text-center ">
              Product
            </li>
          </Link>
          <Link href={"/pricing"}>
            <li onClick={handleClose} className="text-2xl text-center">
              Pricing
            </li>
          </Link>

          <Link href={"/contact"}>
            <li onClick={handleClose} className="text-2xl text-center ">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
