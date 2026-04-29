import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow">

      <h1 className="font-bold text-xl text-blue-900">
        ☀️ Sunshine
      </h1>

      <div className="space-x-6 text-blue-700 flex items-center">

        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/about">About</Link>

        <a
          href="https://wa.me/27829944982"
          className="text-green-600 font-semibold"
        >
          WhatsApp
        </a>

        <Link
          href="/contact"
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Book Now
        </Link>

      </div>
    </nav>
  );
}