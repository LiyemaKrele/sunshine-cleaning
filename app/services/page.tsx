import Image from "next/image";

export default function Services() {
  return (
    <main className="bg-blue-50 min-h-screen">

      {/* HEADER */}
      <section className="bg-green-200 py-4 text-center shadow-sm">
        <h1 className="text-4xl font-bold text-blue-900 mb-3">
          Our Cleaning Services
        </h1>
        <p className="text-blue-600">
          Professional cleaning solutions tailored to your needs
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <div className="group bg-white rounded-2xl shadow-md transition-all duration-300 
                          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] 
                          hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">

            <div className="h-56 w-full bg-blue-100 relative">
              <Image src="/images/living-room.jpg" alt="Standard cleaning" fill className="object-cover" />
            </div>

            <div className="p-6 text-center">

              {/* ICON */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center 
                              rounded-full bg-blue-100 text-2xl text-blue-600 
                              group-hover:bg-blue-600 group-hover:text-white transition">
                🧹
              </div>

              <h2 className="text-xl font-semibold mb-2 text-green-600">
                Standard Home Cleaning
              </h2>

              <p className="text-blue-500">
                Regular cleaning of all rooms including dusting, vacuuming,
                mopping, kitchen and bathroom cleaning.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white rounded-2xl shadow-md transition-all duration-300 
                          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] 
                          hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">

            <div className="h-56 w-full bg-blue-100 relative">
              <Image src="/images/kitchen.jpg" alt="Deep cleaning" fill className="object-cover" />
            </div>

            <div className="p-6 text-center">

              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center 
                              rounded-full bg-blue-100 text-2xl text-blue-600 
                              group-hover:bg-blue-600 group-hover:text-white transition">
                ✨
              </div>

              <h2 className="text-xl font-semibold mb-2 text-green-600">
                Deep Cleaning
              </h2>

              <p className="text-blue-500">
                Thorough top-to-bottom cleaning including hard-to-reach areas,
                appliances, and detailed sanitation.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white rounded-2xl shadow-md transition-all duration-300 
                          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] 
                          hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">

            <div className="h-56 w-full bg-blue-100 relative">
              <Image src="/images/empty-room.jpg" alt="Move in move out" fill className="object-cover" />
            </div>

            <div className="p-6 text-center">

              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center 
                              rounded-full bg-blue-100 text-2xl text-blue-600 
                              group-hover:bg-blue-600 group-hover:text-white transition">
                🏠
              </div>

              <h2 className="text-xl font-semibold mb-2 text-green-600">
                Move-In / Move-Out Cleaning
              </h2>

              <p className="text-blue-500">
                Perfect for relocations. We ensure your space is spotless
                before moving in or after moving out.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="group bg-white rounded-2xl shadow-md transition-all duration-300 
                          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] 
                          hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">

            <div className="h-56 w-full bg-blue-100 relative">
              <Image src="/images/office.jpg" alt="Office cleaning" fill className="object-cover" />
            </div>

            <div className="p-6 text-center">

              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center 
                              rounded-full bg-blue-100 text-2xl text-blue-600 
                              group-hover:bg-blue-600 group-hover:text-white transition">
                🏢
              </div>

              <h2 className="text-xl font-semibold mb-2 text-green-600">
                Office Cleaning
              </h2>

              <p className="text-blue-500">
                Professional cleaning services to maintain a clean,
                productive and healthy workplace.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}