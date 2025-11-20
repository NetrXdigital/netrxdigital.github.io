"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { ModeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/showcase", label: "Showcase" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about_us", label: "About Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  // Close on ESC when open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on outside click when open
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t)) return;
      if (buttonRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const active =
    "text-blue-600 dark:text-blue-400 underline underline-offset-4";
  const linkBase =
    "transition-colors hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded";

  return (
    <Element
      name="top"
      className="
        sticky top-0 w-full
        bg-white/85 dark:bg-gray-900/85 backdrop-blur
        border-b border-black/10 dark:border-white/10
        z-[1000] overflow-visible
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
        {/* LEFT: Logo + Desktop Nav */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/"
            aria-label="NetrX Digital - Home"
            className="shrink-0 flex items-center"
          >
            <Image
              src="/logo/logo.webp"
              alt="NetrX Digital Logo"
              width={120}
              height={120}
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm md:text-[15px] font-medium text-gray-700 dark:text-gray-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${linkBase} ${pathname === item.href ? active : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT: CTA + Theme Toggle (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/meeting"
            className="
              inline-flex items-center
              py-1.5 px-3 text-xs md:text-sm
              rounded-[6px] border border-black dark:border-white
              text-white bg-[#121212]
              transition duration-200 hover:bg-[#1c1c1c]
              hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0)]
              dark:hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255)]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
            "
          >
            Book a call
          </Link>

        </div>

        {/* MOBILE: Theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">

          <button
            ref={buttonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="
              inline-flex items-center justify-center
              w-10 h-10 rounded-md border border-black/10 dark:border-white/10
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
              z-[1001]
            "
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              {open ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Render the PORTAL **only when open** so it's not always visible */}
      {mounted && open &&
        createPortal(
          <div id="mobile-menu">
            {/* Backdrop */}
            <div
              aria-hidden="true"
              className="fixed inset-0 bg-black/40"
              style={{ zIndex: 9998 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              className="
                fixed left-1/2 -translate-x-1/2
                top-[56px] sm:top-[64px]
                w-[calc(100%-1.5rem)] max-w-md
                rounded-lg border border-black/10 dark:border-white/10
                bg-white dark:bg-gray-900 shadow-lg
                animate-[fadeIn_.15s_ease-out]
              "
              style={{ zIndex: 9999 }}
            >
              <nav className="p-2" aria-label="Mobile Primary">
                <ul className="divide-y divide-black/5 dark:divide-white/10">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`
                          block px-4 py-3 text-[15px] font-medium
                          ${linkBase}
                          ${pathname === item.href
                            ? "text-blue-600 dark:text-blue-400 underline underline-offset-4"
                            : "text-gray-800 dark:text-gray-200"
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="p-2">
                    <Link
                      href="/meeting"
                      onClick={() => setOpen(false)}
                      className="
                        inline-flex w-full items-center justify-center
                        py-3 px-4 text-sm font-semibold
                        rounded-md border border-black dark:border-white
                        bg-[#121212] text-white hover:bg-[#1c1c1c] transition
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                      "
                    >
                      Book a call
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </Element>
  );
}
