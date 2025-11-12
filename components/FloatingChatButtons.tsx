"use client";

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebookMessenger, FaPhoneAlt } from "react-icons/fa";

export default function FloatingChatButtons() {
  return (
    <div
      className="
        fixed bottom-6 right-4 sm:bottom-8 sm:right-6
        flex flex-col items-center gap-3 z-[9999]
      "
    >
      {/* WhatsApp */}
      <Link
        href="https://wa.me/8210947209"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex items-center justify-center
          w-12 h-12 rounded-full
          bg-green-500 hover:bg-green-600
          shadow-lg hover:shadow-xl
          text-white text-2xl
          transition-transform transform hover:scale-110
          animate-pulse-slow
        "
      >
        <FaWhatsapp className="drop-shadow-lg" />
         <span
    className="
      absolute inset-0 rounded-full
      animate-ping-slow
      bg-green-600/30
    "
  ></span>
      </Link>

      {/* Instagram */}
      <Link
        href="https://www.instagram.com/netrxdigital.in"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Instagram"
        className="
          flex items-center justify-center
          w-12 h-12 rounded-full
          bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500
          shadow-lg hover:shadow-xl
          text-white text-2xl
          transition-transform transform hover:scale-110
           animate-pulse-slow
        "
      >
        <FaInstagram  className="drop-shadow-lg"/>
         {/* Pulse Ring */}
  <span
    className="
      absolute inset-0 rounded-full
      animate-ping-slow
      bg-blue-400/30
    "
  ></span>
      </Link>

      {/* Phone Call */}
<Link
  href="tel:+918210947209"
  aria-label="Call NetrX Digital"
  title="Call Now"
  className="
    relative
    flex items-center justify-center
    w-12 h-12 rounded-full
    bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400
    shadow-lg hover:shadow-xl
    text-white text-2xl
    transition-transform transform hover:scale-110
    animate-pulse-slow
  "
>
  <FaPhoneAlt className="drop-shadow-lg" />

  {/* Pulse Ring */}
  <span
    className="
      absolute inset-0 rounded-full
      animate-ping-slow
      bg-blue-400/30
    "
  ></span>
</Link>

    </div>
  );
}
