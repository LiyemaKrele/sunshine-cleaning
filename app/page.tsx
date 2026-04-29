import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-blue-100 py-24 text-center px-6">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">
          Professional Home Cleaning Services in Cape Town
        </h1>

        <p className="text-blue-700 text-lg mb-8">
          Reliable, affordable & eco-friendly cleaning for your home or office.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow">
              Book a Cleaning
            </button>
          </Link>

          <Link href="/pricing">
            <button className="bg-white border border-blue-200 px-6 py-3 rounded-lg shadow">
              Get a Quote
            </button>
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-blue-700">
          <p>1. Book Online</p>
          <p>2. We Confirm</p>
          <p>3. We Clean</p>
          <p>4. You Relax</p>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-blue-50 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-blue-700">
          <p>✔ Trained & Vetted Staff</p>
          <p>✔ Insured Service</p>
          <p>✔ Satisfaction Guarantee</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          What Our Clients Say
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-blue-700">
          <div className="bg-white p-6 rounded-xl shadow">
            “Amazing service. My house has never been this clean.”
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            “Very reliable and professional team.”
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 text-blue-700">
          <details className="bg-white p-4 rounded-lg">
            <summary>Do you bring your own supplies?</summary>
            Yes, we bring all cleaning materials.
          </details>

          <details className="bg-white p-4 rounded-lg">
            <summary>Do I need to be home?</summary>
            No, as long as access is arranged.
          </details>

          <details className="bg-white p-4 rounded-lg">
            <summary>What areas do you cover?</summary>
            Cape Town and surrounding areas.
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Ready for a cleaner home?
        </h2>

        <Link href="/contact">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg shadow">
            Book Your Cleaning Today
          </button>
        </Link>
      </section>

    </main>
  );
}