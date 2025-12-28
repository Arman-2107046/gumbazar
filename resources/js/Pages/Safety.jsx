import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";
import React from "react";

const Safety = () => {
  return (
    <div>
      <Navbar />

      <div className="relative min-h-screen bg-slate-50 text-slate-800">
        {/* Soft background accent */}
        <div className="absolute top-0 left-0 w-full pointer-events-none h-72 bg-gradient-to-b from-green-50 to-transparent" />

        <div className="relative px-6 py-20 mx-auto max-w-7xl">
          {/* Hero */}
          <section className="mb-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-green-200 bg-green-50 text-sm text-green-700 font-medium mb-6">
              Trust & Safety
            </span>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-slate-900">
              A safer way to{" "}
              <span className="text-green-600">buy</span> &{" "}
              <span className="text-green-600">sell</span> on Gambazar
            </h1>

            <p className="max-w-3xl mt-6 text-lg leading-relaxed text-slate-600">
              Safety is built into every part of Gambazar. We promote transparent
              listings, secure communication, and responsible trading so buyers
              and sellers can transact with confidence.
            </p>

            <div className="grid max-w-lg grid-cols-3 gap-4 mt-10">
              {[
                { k: "100%", v: "On-platform chat" },
                { k: "Safe", v: "Public meetups" },
                { k: "24/7", v: "Moderation" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="px-4 py-3 bg-white border shadow-sm rounded-xl border-slate-200"
                >
                  <div className="text-2xl font-bold text-slate-900">{s.k}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.v}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Buyer Safety */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Buyer safety guidelines
            </h2>
            <p className="max-w-2xl mb-10 text-slate-600">
              Simple steps to help buyers shop securely and avoid common risks.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Keep communication on Gambazar chat",
                "Avoid off-platform payments and links",
                "Verify product details before purchase",
                "Meet sellers in public locations",
                "Inspect items before confirming",
                "Trust your instincts and take your time",
              ].map((item) => (
                <div
                  key={item}
                  className="p-6 bg-white border shadow-sm rounded-2xl border-slate-200 text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Seller Safety */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Seller safety guidelines
            </h2>
            <p className="max-w-2xl mb-10 text-slate-600">
              Protect yourself and your listings while selling on Gambazar.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Confirm payment before handing over items",
                "Avoid sharing personal or banking details",
                "Use public places for meetups",
                "Document item condition before selling",
                "Be cautious with unusually urgent buyers",
                "Report suspicious behavior immediately",
              ].map((item) => (
                <div
                  key={item}
                  className="p-6 bg-white border shadow-sm rounded-2xl border-slate-200 text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Common Scams */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Common scams to avoid
            </h2>
            <p className="max-w-2xl mb-10 text-slate-600">
              Being aware of common scam patterns helps keep the marketplace
              safe for everyone.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Requests to move payments off-platform",
                "Fake proof of payment screenshots",
                "Phishing links pretending to be support",
                "Prices that seem too good to be true",
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

          {/* CTA */}
          <section className="flex flex-col items-center justify-between gap-6 p-10 border border-green-200 rounded-3xl bg-green-50 md:flex-row">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-widest text-green-700 uppercase">
                Stay Protected
              </p>
              <h2 className="mb-3 text-3xl font-bold text-slate-900">
                Trade with confidence on Gambazar
              </h2>
              <p className="max-w-xl text-slate-600">
                Our safety guidelines and moderation tools are here to support
                a trusted and respectful marketplace experience.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 font-semibold text-white transition bg-green-600 rounded-xl hover:bg-green-700">
                Report an Issue
              </button>
              <button className="px-6 py-3 text-green-700 transition border border-green-300 rounded-xl hover:bg-green-100">
                Safety FAQ
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Safety;
