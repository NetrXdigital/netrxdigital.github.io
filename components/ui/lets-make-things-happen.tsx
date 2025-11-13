"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function LetsMakeThingsHappenSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        my-10 md:py-20 md:mx-auto
        relative overflow-hidden
        rounded-[45px]
        border border-border/70
        bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),transparent_55%),_radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),transparent_55%),_linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(15,23,42,0.98))]
        px-6 py-10 md:px-12 md:py-14
      "
    >
      {/* animated halo ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[46px]"
        style={{
          backgroundImage:
            "conic-gradient(from 180deg at 50% 0%, rgba(59,130,246,0.4), rgba(45,212,191,0.5), rgba(129,140,248,0.45), transparent 70%)",
        }}
        initial={{ rotate: 0, opacity: 0.35 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />

      {/* subtle grid + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute -top-24 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/35 via-cyan-400/30 to-indigo-500/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-44 w-44 rounded-full bg-gradient-to-tr from-emerald-400/30 via-sky-500/30 to-blue-500/35 blur-3xl" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative md:flex md:items-center md:justify-between md:gap-10 lg:gap-16">
        {/* LEFT: TEXT */}
        <div className="md:max-w-xl lg:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-blue-200 mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            NetrX growth session
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-slate-50"
          >
            Let&apos;s make things happen — for real, not just in reports.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            className="mt-5 text-base md:text-lg text-slate-300/90 max-w-xl"
          >
            Share where you are, where you want to go, and we&apos;ll map the
            fastest path using AI, performance marketing, and conversion-first
            funnels — built for businesses in India, not copied from US playbooks.
          </motion.p>

          {/* CTA + MICRO COPY */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <div className="relative inline-flex">
              {/* pulsing aura */}
              <span className="pointer-events-none absolute -inset-[2px] rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.6),transparent_55%)] opacity-80 blur-md" />
              <Link
                href="/meeting"
                className="
                  relative inline-flex items-center justify-center
                  rounded-[999px]
                  border border-slate-100/20
                  bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400
                  px-8 md:px-12 py-2.5 md:py-3
                  text-sm md:text-base font-medium text-white
                  shadow-[0_18px_38px_rgba(37,99,235,0.6)]
                  transition-transform duration-200
                  hover:scale-[1.02] active:scale-[0.99]
                "
              >
                Book a strategy call
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-[11px]">
                  ↗
                </span>
              </Link>
            </div>

            <p className="text-[11px] md:text-xs text-slate-400">
              ~30 min on call · No fluff, no obligation · Just clear next steps
            </p>
          </motion.div>
        </div>

        {/* RIGHT: FLOATING FUTURISTIC ILLUSTRATION CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
          className="relative mt-10 md:mt-0 md:w-[40%] lg:w-[36%] flex justify-end"
        >
          {/* floating card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-3xl border border-slate-700/80 bg-slate-900/90 p-4 md:p-5 shadow-[0_22px_50px_rgba(15,23,42,0.9)] backdrop-blur-xl w-full max-w-xs"
          >
            {/* glow ring behind */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_55%)] opacity-70 blur-2xl" />

            <div className="relative space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Live pipeline
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    Next 90 days in focus
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-[11px] text-emerald-300 border border-emerald-400/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Scaling
                </span>
              </div>

              {/* tiny graph-ish bars */}
              <div className="mt-1 flex gap-1.5 h-16 items-end">
                {[40, 60, 52, 78, 65, 92, 80].map((h, idx) => (
                  <motion.div
                    key={idx}
                    className="flex-1 rounded-full bg-gradient-to-t from-slate-700 via-blue-500/70 to-cyan-300"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15 + idx * 0.07,
                      ease: "easeOut",
                    }}
                    style={{ maxHeight: "64px" }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                <div className="space-y-1">
                  <p className="text-slate-400 uppercase tracking-[0.18em]">
                    Leads / month
                  </p>
                  <p className="text-sm font-semibold text-slate-50">3.2x</p>
                  <p className="text-[11px] text-emerald-300/90">
                    after aligned ads + landing pages
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-400 uppercase tracking-[0.18em]">
                    Cost per lead
                  </p>
                  <p className="text-sm font-semibold text-slate-50">-41%</p>
                  <p className="text-[11px] text-sky-300/90">
                    by cutting waste &amp; fixing targeting
                  </p>
                </div>
              </div>

              <p className="pt-1 text-[10px] text-slate-500">
                Visualisation based on real patterns we see across clinics,
                ecommerce brands, and local businesses we work with.
              </p>
            </div>
          </motion.div>

          {/* floating illustration on top (optional) */}
          <motion.div
            className="hidden md:block absolute -top-10 -right-6"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
          
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default LetsMakeThingsHappenSection;
