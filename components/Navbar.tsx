"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <nav className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-blue-900">☀️ Sunshine</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-blue-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>

          {/* Desktop Contact Dropdown */}
          <div className="relative">
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="font-semibold"
            >
              Contact ▼
            </button>

            {contactOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-3 w-52 z-50">
                <a
                  href="https://wa.me/27829944982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 hover:bg-gray-100 rounded"
                >
                  💬 WhatsApp
                </a>

                <a
                  href="mailto:info@sunshinecleaning.co.za"
                  className="block p-2 hover:bg-gray-100 rounded"
                >
                  ✉️ Email
                </a>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-5 pb-4 flex flex-col gap-4 text-blue-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>

          {/* Mobile Contact Dropdown */}
          <div>
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="font-semibold"
            >
              Contact ▼
            </button>

            {contactOpen && (
              <div className="mt-2 ml-3 flex flex-col gap-2 border-l-2 pl-3">
                <a
                  href="https://wa.me/27829944982"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>

                <a href="mailto:info@sunshinecleaning.co.za">✉️ Email</a>
              </div>
            )}
          </div>

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
