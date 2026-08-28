"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { pushGtmEvent } from "@/lib/gtm";
import { BorderBeam } from "@/components/ui/border-beam";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/showcase-our-work", label: "Showcase" },
  { href: "/blogs-digital-and-performace-marketing", label: "Blogs" },
  { href: "/about-netrx-digital", label: "About Us" },
];

const productNavItems = [
  { href: "/", label: "Home" },
  { href: "#what-you-get", label: "What it checks" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const AUDITOR_URL = "https://websiteaudit.netrxai.com";

const PHI = 1.618;
const HEADER_HEIGHT = 50 * PHI; // approx 81px
const HEADER_HEIGHT_SCROLLED = 40 * PHI; // approx 65px

export default function Header() {
  const pathname = usePathname();
  const isProductsPage = pathname === "/products";
  const currentNavItems = isProductsPage ? productNavItems : navItems;
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
            ? isProductsPage
              ? "border-b border-white/10 bg-[#070816]/[0.88] shadow-lg backdrop-blur-xl"
              : "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm"
            : isProductsPage
              ? "border-b border-white/5 bg-[#070816]/25 backdrop-blur-md"
              : "bg-transparent border-b border-transparent"
        )}
        style={{
          height: scrolled ? HEADER_HEIGHT_SCROLLED : HEADER_HEIGHT,
        }}
      >
        <BorderBeam size={250} duration={12} delay={9} />
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
            {currentNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-5 py-2.5 text-sm font-medium transition-colors",
                  isProductsPage
                    ? "text-white/70 hover:text-white"
                    : "text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white",
                )}
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
                {!isProductsPage && pathname === item.href && (
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
            {isProductsPage ? (
              <a
                href={AUDITOR_URL}
                onClick={() => pushGtmEvent("product_cta_click", { cta_placement: "header" })}
                className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-white px-7 font-medium text-[#11142b] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-[#7c9bff]/20" />
                </div>
                <span className="relative text-sm">Run free audit</span>
              </a>
            ) : (
              <Link
                href="/contact-netrx-digital"
                className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-8 font-medium text-neutral-50 duration-300 hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="text-sm">Book a call</span>
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={cn("w-6 h-0.5 block rounded-full", isProductsPage ? "bg-white" : "bg-black dark:bg-white")}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className={cn("w-6 h-0.5 block rounded-full", isProductsPage ? "bg-white" : "bg-black dark:bg-white")}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className={cn("w-6 h-0.5 block rounded-full", isProductsPage ? "bg-white" : "bg-black dark:bg-white")}
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
              id="mobile-navigation"
              className={cn(
                "fixed inset-0 top-0 z-40 flex flex-col backdrop-blur-xl md:hidden pt-24",
                isProductsPage ? "bg-[#070816]/[0.98]" : "bg-white/95 dark:bg-black/95",
              )}
            >
              <nav className="flex flex-col items-center gap-6 p-8">
                {currentNavItems.map((item, idx) => (
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
                        isProductsPage
                          ? "text-white/85 hover:text-cyan-200"
                          : pathname === item.href
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
                  {isProductsPage ? (
                    <a
                      href={AUDITOR_URL}
                      onClick={() => {
                        pushGtmEvent("product_cta_click", { cta_placement: "mobile_header" });
                        setOpen(false);
                      }}
                      className="rounded-full bg-white px-10 py-4 text-lg font-medium text-[#11142b] shadow-xl"
                    >
                      Run free audit
                    </a>
                  ) : (
                    <Link
                      href="/contact-netrx-digital"
                      onClick={() => setOpen(false)}
                      className="px-10 py-4 text-lg font-medium text-white bg-black rounded-full dark:bg-white dark:text-black shadow-xl"
                    >
                      Book a call
                    </Link>
                  )}
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
