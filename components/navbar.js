import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex justify-between items-center bg-white p-4 shadow-md">
      <h1 className="text-2xl font-bold text-indigo-800">CV Online</h1>

      {/* Menu Toggle for Mobile */}
      <button onClick={handleMenuToggle} className="lg:hidden text-2xl text-indigo-800">
        &#9776;
      </button>

      {/* Navbar Links */}
      <div className={`lg:flex space-x-6 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
        <Link href="/about">
          <span className="text-lg text-indigo-700 hover:text-indigo-900">About Me</span>
        </Link>
        <Link href="/skills">
          <span className="text-lg text-indigo-700 hover:text-indigo-900">Skills</span>
        </Link>
        <Link href="/services">
          <span className="text-lg text-indigo-700 hover:text-indigo-900">Services</span>
        </Link>
        <Link href="/portfolio">
          <span className="text-lg text-indigo-700 hover:text-indigo-900">Portfolio</span>
        </Link>
        <Link href="/contact">
          <span className="text-lg text-indigo-700 hover:text-indigo-900">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
