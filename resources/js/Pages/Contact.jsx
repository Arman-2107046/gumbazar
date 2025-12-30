import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div className="relative min-h-screen bg-slate-50 text-slate-800">
        {/* Soft background accents */}
        <div className="absolute top-0 left-0 w-full pointer-events-none h-72 bg-gradient-to-b from-blue-50 to-transparent" />

        <div className="relative px-6 py-20 mx-auto max-w-7xl">
          {/* Hero */}
          <section className="mb-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-sm text-blue-700 font-medium mb-6">
              Contact Us
            </span>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-slate-900">
              We’re here to help —{" "}
              <span className="text-blue-600">let’s talk</span>
            </h1>

            <p className="max-w-3xl mt-6 text-lg leading-relaxed text-slate-600">
              Have a question, feedback, or need support? The Gambazar team is
              always ready to assist you with clarity and care.
            </p>
          </section>

          {/* Contact Grid */}
          <section className="grid gap-10 mb-24 md:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 bg-white border shadow-sm rounded-3xl border-slate-200">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Get in touch
              </h2>

              <div className="space-y-5 text-slate-600">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <p>support@gambazar.com</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <p>+880 1234 567 890</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">Office</p>
                  <p>
                    Gambazar HQ<br />
                    Dhaka, Bangladesh
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Support Hours
                  </p>
                  <p>Saturday – Thursday, 10:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-white border shadow-sm rounded-3xl border-slate-200">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Send us a message
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>

          {/* Trust Section */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              We value every message
            </h2>
            <p className="max-w-2xl mb-10 text-slate-600">
              Whether you're a buyer, seller, or partner — your voice matters
              to us.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Quick response times",
                "Dedicated support team",
                "Clear and helpful communication",
              ].map((item) => (
                <div
                  key={item}
                  className="p-5 bg-white border shadow-sm rounded-xl border-slate-200 text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
