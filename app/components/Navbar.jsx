"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-900">
          Think<span className="text-orange-500">Plus</span>
        </Link>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <button className="hidden md:block bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
          Login
        </button>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg
            className="w-7 h-7 text-blue-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
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
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start px-6 py-4 gap-4 text-gray-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <button className="bg-blue-900 text-white px-5 py-2 rounded-lg w-full text-center">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
