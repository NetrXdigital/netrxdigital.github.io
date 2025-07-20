"use client";

import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { ModeToggle } from "@/components/theme-toggle";

export default function Header() {
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
          className="w-24 sm:w-28 md:w-32"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-grow justify-center">
        <div className="flex gap-x-4 sm:gap-x-6 md:gap-x-10 items-center text-gray-700 dark:text-gray-300 font-medium text-base sm:text-lg cursor-pointer">
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

      {/* Right side - Book a call button and theme toggle */}
      <div className="flex items-center gap-x-4">
        {/* Book a Call Button */}
        <Link
          href={"/meeting"}
          className="
py-2 px-4 text-sm
sm:py-3 sm:px-6 md:text-lg
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
        <ModeToggle />
      </div>
    </Element>
  );
}