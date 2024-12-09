"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";

export default function header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="hidden md:flex flex-col h-[58px] md:flex-row items-center justify-between bg-[#252B42] px-4 py-2 text-sm">
        {/* Contact Info Section */}
        <div className="flex items-center space-x-2 text-white font-bold">
          {/* Phone Number */}
          <FaPhoneAlt className="text-lg" />
          <a href="#" className="hover:text-cyan-400">
            (225) 555-0118
          </a>
          {/* Email Address */}
          <MdOutlineMailOutline className="text-lg" />
          <a href="#" className="hover:text-cyan-400">
            michelle.rivera@example.com
          </a>
        </div>

        {/* Promotional Message */}
        <div className="flex items-center space-x-2 text-white font-bold">
          <a href="#" className="font-bold hover:text-cyan-400">
            Follow Us and get a chance to win 80% off
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-3 text-white">
          <span className="hover:text-cyan-400">Follow Us:</span>
          {/* Facebook */}
          <a href="#">
            <FaFacebook className="text-lg hover:text-cyan-400" />
          </a>
          {/* YouTube */}
          <a href="#">
            <FaYoutube className="text-lg hover:text-cyan-400" />
          </a>
          {/* Instagram */}
          <a href="#">
            <FaInstagram className="text-lg hover:text-cyan-400" />
          </a>
          {/* Twitter */}
          <a href="#">
            <FaTwitter className="text-lg hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
