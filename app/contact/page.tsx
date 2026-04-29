"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [adminOpen, setAdminOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [bookings, setBookings] = useState([]);

  const [filter, setFilter] = useState("all");

  function logoutAdmin() {
    setIsAdmin(false);
    setToken("");
    setBookings([]);
  }

  const filteredBookings =
    filter === "all"
      ? bookings
      : bookings.filter((b: any) => b.status === filter);

  async function fetchBookings(passedToken?: string) {
    try {
      const res = await fetch("/api/admin/bookings", {
        headers: {
          Authorization: `Bearer ${passedToken || token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load bookings");
    }
  }

  async function updateStatus(id: number, status: string) {
    try {
      const res = await fetch("/api/admin/update-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ ADD THIS
        },
        body: JSON.stringify({ id, status }),
      });

      if (!res.ok) throw new Error("Update failed");

      fetchBookings();
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      address: formData.get("address"),
      service: formData.get("service"),
      date: formData.get("date"),
      time: formData.get("time"),
      notes: formData.get("notes"),
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleAdminLogin() {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (res.ok) {
      setToken(data.token);
      setIsAdmin(true);
      setAdminOpen(false);

      fetchBookings(data.token);
    } else {
      alert("Wrong password");
    }
  }

  return (
    <>
      {adminOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Admin Login</h2>

            <input
              type="password"
              placeholder="Enter password"
              className="border p-2 w-full mb-4"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleAdminLogin}
              className="bg-green-500 text-white px-4 py-2 w-full rounded"
            >
              Login
            </button>
          </div>
        </div>
      )}

      <main className="min-h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center bg-fixed">
        <div className="bg-blue-900/40 min-h-screen">
          {/* HEADER */}
          <section className="bg-green-200 py-4 text-center shadow-sm">
            <h1 className="text-4xl font-bold text-blue-900 mb-3">
              Book a Cleaning
            </h1>
            <p className="text-blue-600">
              <span
                onDoubleClick={() => setAdminOpen(true)}
                className="text-blue-600"
              >
                Schedule
              </span>{" "}
              your cleaning service in just a few steps
            </p>
          </section>

          {isAdmin && (
            <div className="bg-white p-6 m-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Bookings Dashboard</h2>

              <button
                onClick={logoutAdmin}
                className="text-red-600 px-3 py-1 rounded cursor-pointer"
              >
                Exit Dashboard
              </button>

              <div className="mb-4 flex gap-2">
                {["all", "pending", "confirmed", "completed", "cancelled"].map(
                  (f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className="px-3 py-1 border rounded"
                    >
                      {f}
                    </button>
                  ),
                )}
              </div>

              {filteredBookings.map((b: any) => (
                <div key={b.id} className="border p-4 mb-3 rounded-lg">
                  <p>
                    <b>{b.name}</b> - {b.service}
                  </p>
                  <p>
                    {b.date} at {b.time}
                  </p>
                  <p className="mb-2">
                    Status: <b>{b.status}</b>
                  </p>

                  <div className="flex gap-2">
                    {/* PENDING → Confirm / Cancel */}
                    {b.status === "pending" && (
                      <>
                        <button
                          onClick={() => updateStatus(b.id, "confirmed")}
                          className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                          Confirm
                        </button>

                        <button
                          onClick={() => updateStatus(b.id, "cancelled")}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </>
                    )}

                    {/* CONFIRMED → Complete / Cancel */}
                    {b.status === "confirmed" && (
                      <>
                        <button
                          onClick={() => updateStatus(b.id, "completed")}
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                        >
                          Complete
                        </button>

                        <button
                          onClick={() => updateStatus(b.id, "cancelled")}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FORM SECTION */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* FORM */}
              <div className="bg-white rounded-2xl shadow p-8">
                <h2 className="text-2xl font-semibold mb-6 text-blue-900">
                  Booking Details
                </h2>

                {/* SUCCESS MESSAGE */}
                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                    Booking submitted successfully ✅ We will contact you
                    shortly.
                  </div>
                )}

                {/* ERROR MESSAGE */}
                {error && (
                  <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-center">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* FULL NAME */}
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                      name="name"
                      required
                      className="border border-blue-200 p-2 rounded w-full"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <input
                      name="phone"
                      required
                      className="w-full border border-blue-200 p-3 rounded-lg"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                      name="email"
                      required
                      type="email"
                      className="border border-blue-200 p-2 rounded w-full"
                    />
                  </div>

                  {/* ADDRESS */}
                  <div>
                    <label className="text-sm font-medium">Place Address</label>
                    <input
                      name="address"
                      required
                      className="border border-blue-200 p-2 rounded w-full"
                    />
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label className="text-sm font-medium">
                      Type of Cleaning
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full border border-blue-200 p-3 rounded-lg"
                    >
                      <option value="">Select a service</option>
                      <option>Standard Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Move-In / Move-Out</option>
                      <option>Office Cleaning</option>
                    </select>
                  </div>

                  {/* DATE */}
                  <div>
                    <label className="text-sm font-medium">Booking Date</label>
                    <input
                      name="date"
                      required
                      type="date"
                      className="border border-blue-200 p-2 rounded w-full"
                    />
                  </div>

                  {/* TIME (NEW FEATURE) */}
                  <div>
                    <label className="text-sm font-medium">
                      Preferred Time
                    </label>
                    <input
                      name="time"
                      type="time"
                      className="border border-blue-200 p-2 rounded w-full"
                    />
                  </div>

                  {/* NOTES */}
                  <div>
                    <label className="text-sm font-medium">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      className="w-full border border-blue-200 p-3 rounded-lg"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    disabled={loading}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg shadow font-semibold"
                  >
                    {loading ? "Submitting..." : "Submit Booking"}
                  </button>
                </form>
              </div>

              {/* CONTACT */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-white">
                  Contact Us
                </h2>

                <div className="space-y-4 text-blue-100">
                  <p>
                    <span className="font-semibold text-white">Phone:</span>
                    <br />
                    <a href="tel:0123456789" className="hover:underline">
                      082 994 4982
                    </a>
                  </p>

                  <p>
                    <span className="font-semibold text-white">Email:</span>
                    <br />
                    info@sunshinecleaning.co.za
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Service Area:
                    </span>
                    <br />
                    Cape Town & Surrounding Areas
                  </p>

                  {/* WHATSAPP (NEW FEATURE) */}
                  <p>
                    <span className="font-semibold text-white">WhatsApp:</span>
                    <br />
                    <a
                      href="https://wa.me/27829944982"
                      className="text-green-300 hover:underline"
                    >
                      Chat with us instantly
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
