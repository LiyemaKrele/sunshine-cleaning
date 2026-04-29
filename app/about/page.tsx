import Image from "next/image";

export default function About() {
  return (
    <main className="bg-blue-50 min-h-screen">
      {/* HEADER */}
      <section className="bg-green-200 py-4 text-center shadow-sm">
        <h1 className="text-4xl font-bold text-blue-900 mb-3">About Us</h1>
        <p className="text-blue-600">
          Learn more about Sunshine Cleaning Services Agent
        </p>
      </section>

      {/* IMAGE + INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <div className="relative w-full h-80 bg-blue-100">
            <Image
              src="/images/cleaner.jpg"
              alt="Cleaner smiling"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 text-center">
            <p className="text-blue-800 text-lg leading-relaxed">
              <span className="font-semibold text-blue-900">
                Sunshine Cleaning Services Agent
              </span>{" "}
              was founded by Thandiswa Klaaste to help busy families and
              professionals maintain clean and healthy inhabited environments.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VALUES */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <div className="bg-white rounded-2xl shadow p-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h2>

          <p className="text-blue-600 leading-relaxed mb-6">
            We are dedicated to delivering high-quality, reliable, and
            affordable cleaning services that improve the comfort and wellbeing
            of our clients.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Values</h2>

          <div className="grid md:grid-cols-2 gap-4 text-blue-800">
            <p>✔ Reliability & Consistency</p>
            <p>✔ Attention to Detail</p>
            <p>✔ Eco-Friendly Practices</p>
            <p>✔ Customer Satisfaction</p>
          </div>
        </div>
      </section>
    </main>
  );
}
