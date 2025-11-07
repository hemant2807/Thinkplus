"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="
        backdrop-blur-xl 
        bg-white/5 
        border-b border-white/10
        shadow-[0_0_20px_rgba(0,0,0,0.4)] 
        px-6 py-3 
        flex items-center justify-between
      "
      >
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          Think<span className="text-orange-400">Plus</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium ml-auto">

          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/courses" className="hover:text-white transition">Courses</Link>
          <Link href="/batches" className="hover:text-white transition">Batches</Link>
          <Link href="/faculty" className="hover:text-white transition">Faculty</Link>
          <Link href="/testimonials" className="hover:text-white transition">Testimonials</Link>
          <Link href="/results" className="hover:text-white transition">Results</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>

          <button
            className="
              h-11 w-11 flex items-center justify-center
              bg-orange-500
              rounded-xl
              shadow-[0_0_10px_rgba(255,120,40,0.6)]
              hover:shadow-[0_0_20px_rgba(255,120,40,0.9)]
              transition
            "
          >
            <Phone size={20} className="text-white" />
          </button>

          <button
            className="
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
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden ml-auto">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="
          md:hidden 
          backdrop-blur-xl 
          bg-white/10 
          border-b border-white/10 
          py-5 px-6
          text-gray-200 
          flex flex-col gap-5
        "
        >
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/courses" className="hover:text-white transition">Courses</Link>
          <Link href="/batches" className="hover:text-white transition">Batches</Link>
          <Link href="/faculty" className="hover:text-white transition">Faculty</Link>
          <Link href="/testimonials" className="hover:text-white transition">Testimonials</Link>
          <Link href="/results" className="hover:text-white transition">Results</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>

          <button
            className="
              h-11 w-11 flex items-center justify-center
              bg-orange-500
              rounded-xl 
              text-white 
              shadow-[0_0_10px_rgba(255,120,40,0.6)]
            "
          >
            <Phone size={20} />
          </button>

          <button
            className="
              px-5 py-2 
              bg-linear-to-r from-orange-500 to-orange-600
              rounded-xl 
              text-white font-semibold
            "
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
