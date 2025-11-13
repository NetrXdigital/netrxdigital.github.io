"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10 px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="xl:w-4/5 2xl:w-[68%] mx-auto space-y-10">
        {/* ===== TOP SECTION ===== */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
          {/* Left: Logo + Contact Info (ANIMATED CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full md:w-[55%]"
          >
            {/* Outer glow + subtle animated ring */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-[1px] rounded-3xl"
              style={{
                backgroundImage:
                  "conic-gradient(from 200deg at 20% 0%, rgba(59,130,246,0.45), rgba(56,189,248,0.4), rgba(129,140,248,0.45), transparent 70%)",
              }}
              initial={{ rotate: 0, opacity: 0.6 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),transparent_55%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(15,23,42,0.98))] px-5 py-5 sm:px-6 sm:py-6 shadow-[0_18px_40px_rgba(15,23,42,0.8)]">
              {/* subtle grid */}
              <div className="pointer-events-none absolute inset-0 opacity-25">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:18px_18px]" />
                <div className="absolute -top-16 -left-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/35 via-cyan-400/25 to-indigo-500/40 blur-3xl" />
              </div>

              <div className="relative flex flex-col items-center md:items-start text-center md:text-left gap-4">
                {/* Logo + “online” pill */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-3">
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <Image
                      src="/logo/logo.webp"
                      width={180}
                      height={60}
                      alt="NetrX Logo"
                      className="object-contain w-32 sm:w-40 md:w-44"
                    />
                    <p className="text-xs tracking-[0.18em] uppercase text-slate-400">
                      NetrX Digital · Patna, Bihar
                    </p>
                  </div>

                </div>

                {/* Contact lines */}
                <div className="space-y-2 w-full text-sm sm:text-base text-slate-200/90">
                  <div className="flex items-center justify-center md:justify-start gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 border border-blue-400/40">
                      <Phone className="h-4 w-4 text-blue-300" />
                    </span>
                    <a
                      href="tel:+918210947209"
                      className="hover:text-blue-300 transition-colors"
                    >
                      +91 8210947209
                    </a>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-400/40">
                      <Mail className="h-4 w-4 text-cyan-300" />
                    </span>
                    <a
                      href="mailto:netrxdigital@gmail.com"
                      className="hover:text-cyan-300 transition-colors break-all"
                    >
                      netrxdigital@gmail.com
                    </a>
                  </div>

                  <div className="flex items-start justify-center md:justify-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15 border border-violet-400/40">
                      <MapPin className="h-4 w-4 text-violet-300" />
                    </span>
                    <p className="text-slate-300/95 text-sm sm:text-base leading-relaxed">
                      Radhakrishna Nagar, 70, 35 Feet Rd, near Panchsheel
                      Hospital, Patna, Bihar 800032
                    </p>
                  </div>
                </div>

                {/* micro trust line */}
                <p className="pt-1 text-[11px] text-slate-400/90">
                  Best time to reach us:{" "}
                  <span className="text-slate-200">11:00 AM – 7:00 PM IST</span>{" "}
                  · We usually reply within a few hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Embedded Map (unchanged) */}
          <div className="w-full md:w-[75%] h-[220px] sm:h-[250px] md:h-[450px] rounded-xl overflow-hidden shadow-md md:-ml-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.898675207026!2d85.1115919!3d25.575037599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4893031b8dc1b0b3%3A0x122cc7864962e1df!2sNetrX%20Digital%20-%20Best%20Digital%20Marketing%20Agency%20in%20Patna%20%2C%20Bihar!5e0!3m2!1sen!2sin!4v1756751281162!5m2!1sen!2sin"
              width="100%"
              height="200%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ===== BOTTOM SECTION ===== */}
        <div className="w-full border-t border-border/50 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 text-sm text-muted-foreground">
            <p className="text-center sm:text-left">
              © 2025 <span className="font-medium text-foreground">NetrX</span>.
              All Rights Reserved.
            </p>
            <div className="flex justify-center sm:justify-end">
              {/* Reserved for future links like Privacy Policy */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
