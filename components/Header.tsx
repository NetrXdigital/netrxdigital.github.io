"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/showcase", label: "Showcase" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about_us", label: "About Us" },
];

const PHI = 1.618;
const HEADER_HEIGHT = 50 * PHI; // approx 81px
const HEADER_HEIGHT_SCROLLED = 40 * PHI; // approx 65px

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <motion.header
        id="top"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Apple-like ease
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500",
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
        style={{
          height: scrolled ? HEADER_HEIGHT_SCROLLED : HEADER_HEIGHT,
        }}
      >
        <div className="mx-auto flex h-full max-w-[1618px] items-center justify-between px-6 md:px-[42px]">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2 shrink-0">
            <Image
              src="/logo/logo.webp"
              alt="NetrX Digital Logo"
              width={120}
              height={40}
              className="h-8 w-auto sm:h-10 object-contain transition-transform hover:scale-105 duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:text-black dark:hover:text-white"
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <span className="relative z-10">{item.label}</span>
                {item.href === hoveredPath && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 rounded-full bg-gray-100/80 dark:bg-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/meeting"
              className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-8 font-medium text-neutral-50 duration-300 hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <span className="text-sm">Book a call</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5 md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black dark:bg-white block rounded-full"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-black dark:bg-white block rounded-full"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black dark:bg-white block rounded-full"
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 top-0 z-40 flex flex-col bg-white/95 dark:bg-black/95 backdrop-blur-xl md:hidden pt-24"
            >
              <nav className="flex flex-col items-center gap-6 p-8">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-3xl font-medium transition-colors",
                        pathname === item.href
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    href="/meeting"
                    onClick={() => setOpen(false)}
                    className="px-10 py-4 text-lg font-medium text-white bg-black rounded-full dark:bg-white dark:text-black shadow-xl"
                  >
                    Book a call
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
