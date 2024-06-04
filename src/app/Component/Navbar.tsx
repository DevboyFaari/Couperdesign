import Image from 'next/image';
import React from 'react';
import { Montserrat, Pacifico } from "next/font/google";
const monty = Montserrat({
    subsets: ["latin"],
    weight: "400",
  });
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  return (
    <nav className="nice py-3">
    <div className="container mx-auto px-6 flex justify-center items-center">
      <span className={`text-xl font-bold ${pacifico.className} relative right-[310px] text-white`}>Ores Kitchen</span>
      <div className={`flex space-x-4 ${monty.className} text-white`}>
        <a href="/" className=" hover:text-gray-600">Home</a>
        <a href="/about" className=" hover:text-gray-600">About</a>
        <a href="/services" className="hover:text-gray-600">Services</a>
        <a href="/contact" className="hover:text-gray-600">Contact</a>
      </div>
      
    </div>
  </nav>
  );
};

export default Navbar;
