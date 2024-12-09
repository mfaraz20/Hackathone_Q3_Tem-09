
import { useState } from "react";
import { PiHandbagBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md ">
      <div className="container mx-auto px-6 lg:px-12 py-4 gap-x-10">
        {/* Top Header*/}
        <div className="flex justify-center w-[109px] h-[32px] ml-[605px]">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-[#FF9F0D]">
            Food<span className="text-white">tuck</span>
          </a>
        </div>

        {/* Bottom Section: Navigation Links */}
        <div className="mt-4 flex justify-center space-x-8 ">
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#menu" className="hover:text-orange-500 transition">
            Menu
          </a>
          <a href="#blog" className="hover:text-orange-500 transition">
            Blog
          </a>
          <a href="#pages" className="hover:text-orange-500 transition">
            Pages
          </a>
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#shop" className="hover:text-orange-500 transition">
            Shop
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center bg-gray-800 px-4 py-2 rounded-full ">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-32 lg:w-48"
              />
              <IoSearch  className="text-orange-500 ml-2" />
            </div>
            <div>
            <PiHandbagBold  className="text-white text-2xl hover:text-orange-500 transition" />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}







// import Link from 'next/link'
// import React from 'react'
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <nav className="bg-black flex justify-evenly items-center">  
//     <div className="  space-x-4 "> {/* This will add spacing between the links */}  
//     <Image src ={"/images/Foodtuck.png"} className="flex justify-center items-center rounded mx-auto m-[45px]" width={109} height = {32} alt="NICE"> 
//     </Image>
//       <Link href="/" className="text-white hover:bg-gray-600 p-2 rounded-full  ">Home</Link>  
//       <Link href="/about" className="text-white hover:bg-gray-600 p-2 rounded-full">Menu</Link>  
//       <Link href="/jobs" className="text-white hover:bg-gray-600 p-2 rounded-full">Blog</Link>  
//       <Link href="/jobs/programing" className="text-white hover:bg-gray-600 p-2 rounded-full">Page</Link>  
//       <Link href="/jobs/programing/contact" className="text-white hover:bg-gray-600 p-2 rounded-full">About</Link>  
//       <Link href="/gun" className="text-white hover:bg-gray-600 p-2 rounded-full">Shop</Link>  
//       <Link href="/services" className="text-white hover:bg-gray-600 p-2 rounded">Contact</Link>
      
//     </div>  
    
//   </nav> 
//   )
// }
