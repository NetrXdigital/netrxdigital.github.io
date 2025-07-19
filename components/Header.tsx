"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { ModeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Element
      name="top"
      className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-white dark:bg-gray-900 flex items-center 
   justify-between py-6 px-4 md:px-8 mx-6"
    >
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/logo/logo.webp"}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-28"
        />
      </Link>

      {/* Desktop Navigation - Centered */}
      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 items-center text-gray-700 dark:text-gray-300 font-medium text-lg cursor-pointer">
          <Link href={"/"} className="hover:text-blue-500">
            Home
          </Link>

          <Link href={"/showcase"} className="hover:text-blue-500">
            Showcase
          </Link>

          <Link href={"/about_us"} className="hover:text-blue-500">
            About Us
          </Link>
        </div>
      </div>

      {/* Right side - Book a call button and mobile menu */}
      <div className="flex items-center gap-x-4">
        {/* Book a Call Button */}
        <Link
          href={"/meeting"}
          className="
py-3 
px-6
text-lg 
hover:bg-[#abcbff]
rounded-[6px]
border-2
border-black
dark:border-white
text-white
bg-[#121212]
transition
duration-200
   hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
        >
          Book a call
        </Link>

        {/* Mobile hamburger menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {/* Hamburger icon with animation */}
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}
            />
            <span
              className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}
            />
          </div>
        </button>
        <ModeToggle />
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg rounded-b-[6px] z-50">
          <div className="px-4 py-3 space-y-1">
            <Link
              href={"/"}
              className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              href={"/showcase"}
              className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={closeMenu}
            >
              Showcase
            </Link>

            <Link
              href={"/about_us"}
              className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={closeMenu}
            >
              About Us
            </Link>
          </div>
        </div>
      )}

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={closeMenu}
        />
      )}
    </Element>
  );
}