import React from "react";
import { motion } from "framer-motion";
import { Logo } from "./brand";

export function SiteHeader({ sticky = false }) {
  return (
    <motion.header
      initial={{ y: -24 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={
        sticky
          ? "sticky top-0 z-50 bg-[#f7f3e8]/95 backdrop-blur-md border-b border-[#17231d]/10 shadow-sm"
          : "absolute inset-x-0 top-0 z-50"
      }
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-bold md:flex text-[#17231d]" aria-label="Main navigation">
          <a className="transition-opacity hover:opacity-55" href="/#how-it-works">How it works</a>
          <a className="transition-opacity hover:opacity-55" href="/#services">Services</a>
          <a className="transition-opacity hover:opacity-55" href="/#legal">Trust center</a>
        </nav>
        <a
          href="/#legal"
          className="rounded-full border border-[#17231d]/20 bg-white/55 px-5 py-3 text-sm font-bold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white text-[#17231d]"
        >
          Our promise
        </a>
      </div>
    </motion.header>
  );
}
