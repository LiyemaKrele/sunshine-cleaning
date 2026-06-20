"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-blue-900">☀️ Sunshine</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-blue-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>

          <Link
            href="/contact"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white px-5 pb-4 flex flex-col gap-4 text-blue-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>

          <Link
            href="/contact"
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
