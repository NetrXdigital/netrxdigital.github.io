"use client";

import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { ModeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <Element
      name="top"
      className="
        sticky top-0 z-50 w-full overflow-hidden
        bg-white/85 dark:bg-gray-900/85
        backdrop-blur border-b border-black/10 dark:border-white/10
      "
    >
      <div
        className="
          mx-auto max-w-screen-xl
          flex items-center justify-between
          h-14 sm:h-16
          px-3 sm:px-4 md:px-6
        "
      >
        {/* LEFT: Logo + Nav */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Logo (height-clamped to header) */}
          <Link href="/" aria-label="NetrX Digital - Home" className="shrink-0 flex items-center">
            <Image
              src="/logo/logo.webp"
              alt="NetrX Digital Logo"
              width={120}
              height={120}
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav links (left-aligned) */}
          <nav className="flex items-center gap-3 sm:gap-5 text-sm md:text-[15px] font-medium text-gray-700 dark:text-gray-300">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/showcase" className="hover:text-blue-500">Showcase</Link>
            <Link href="/about_us" className="hover:text-blue-500">About Us</Link>
          </nav>
        </div>

        {/* RIGHT: Book a call + Theme toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/meeting"
            className="
              inline-flex items-center
              py-1 px-2.5 text-[11px] md:text-xs
              rounded-[6px] border border-black dark:border-white
              text-white bg-[#121212]
              transition duration-200 hover:bg-[#1c1c1c]
              hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0)]
              dark:hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255)]
            "
          >
            Book a call
          </Link>
          <ModeToggle />
        </div>
      </div>
    </Element>
  );
}
