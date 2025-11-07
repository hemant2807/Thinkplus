"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[85%] z-50">
      <div
        className="
        backdrop-blur-xl 
        bg-white/5 
        border border-white/10 
        shadow-[0_0_20px_rgba(0,0,0,0.4)] 
        rounded-2xl 
        px-6 py-3 
        flex items-center justify-between
      "
      >
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          Think<span className="text-orange-400">Plus</span>
        </Link>

        <div className="hidden md:flex gap-10 text-gray-300 font-medium">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition">
            Courses
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        <button
          className="
          hidden md:block 
          px-5 py-2 
          bg-linear-to-r from-orange-500 to-orange-600
          rounded-xl 
          text-white font-semibold 
          shadow-[0_0_10px_rgba(255,120,40,0.6)]
          hover:shadow-[0_0_20px_rgba(255,120,40,0.9)]
          transition
        "
        >
          Login
        </button>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="
          md:hidden mt-2 
          backdrop-blur-xl 
          bg-white/10 
          border border-white/10 
          rounded-xl 
          py-5 px-6
          text-gray-200 
          flex flex-col gap-4
        "
        >
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition">
            Courses
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

          <button
            className="
            px-5 py-2 
            bg-linear-to-r from-orange-500 to-orange-600
            rounded-xl 
            text-white font-semibold 
            shadow-[0_0_10px_rgba(255,120,40,0.6)]
          "
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
