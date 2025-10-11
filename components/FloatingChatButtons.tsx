"use client";

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebookMessenger } from "react-icons/fa";

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
        "
      >
        <FaWhatsapp />
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
        "
      >
        <FaInstagram />
      </Link>

      {/* Facebook Messenger */}
      <Link
        href="https://m.me/netrxdigital.in"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Facebook Messenger"
        className="
          flex items-center justify-center
          w-12 h-12 rounded-full
          bg-blue-600 hover:bg-blue-700
          shadow-lg hover:shadow-xl
          text-white text-2xl
          transition-transform transform hover:scale-110
        "
      >
        <FaFacebookMessenger />
      </Link>
    </div>
  );
}
