import Link from "next/link";

export default function Pricing() {
  return (
    <main className="bg-blue-50 min-h-screen">

      <section className="bg-green-200 py-6 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Our Pricing</h1>
        <p className="text-blue-600">Simple pricing</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

          <h2 className="text-2xl text-blue-900 mb-8">
            Cleaning Services Pricing
          </h2>

          <div className="divide-y divide-blue-100">

            {[
              ["Standard Cleaning", "R500"],
              ["Deep Cleaning", "R900"],
              ["Move-In / Out", "R1200"],
              ["Office Cleaning", "Custom"]
            ].map(([name, price]) => (
              <div key={name} className="flex justify-between py-4 text-blue-700">
                <span>{name}</span>
                <span className="text-blue-900 font-semibold">{price}</span>
              </div>
            ))}

          </div>

          <Link href="/contact">
            <button className="mt-10 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg shadow transition hover:scale-105">
              Get a Quote
            </button>
          </Link>

        </div>
      </section>

    </main>
  );
}