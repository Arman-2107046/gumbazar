import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";
import React from "react";

const About = () => {
  return (
    <div>
        <Navbar/>
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      {/* Soft background accents */}
      <div className="absolute top-0 left-0 w-full pointer-events-none h-72 bg-gradient-to-b from-blue-50 to-transparent" />

      <div className="relative px-6 py-20 mx-auto max-w-7xl">
        {/* Hero */}
        <section className="mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-sm text-blue-700 font-medium mb-6">
            About Gambazar
          </span>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-slate-900">
            A modern marketplace for{" "}
            <span className="text-blue-600">new</span>,{" "}
            <span className="text-blue-600">refurbished</span> &{" "}
            <span className="text-blue-600">pre-owned</span> products
          </h1>

          <p className="max-w-3xl mt-6 text-lg leading-relaxed text-slate-600">
            Founded in <strong>2025</strong>, Gambazar is a premium online
            marketplace where people confidently buy and sell products. We
            focus on clarity, trust, and elegant design to deliver a refined
            commerce experience.
          </p>

          <div className="grid max-w-lg grid-cols-3 gap-4 mt-10">
            {[
              { k: "2025", v: "Founded" },
              { k: "3+", v: "Product Types" },
              { k: "∞", v: "Opportunities" },
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

        {/* Product Tiers */}
        <section className="mb-24">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            One platform. Three quality tiers.
          </h2>
          <p className="max-w-2xl mb-10 text-slate-600">
            Every product on Gambazar is clearly categorized, helping buyers
            make informed decisions and sellers present their items
            professionally.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "New",
                badge: "Brand New",
                desc: "Factory-new products with verified information and premium listings.",
              },
              {
                title: "Refurbished",
                badge: "Restored",
                desc: "Professionally refurbished products offering performance and savings.",
              },
              {
                title: "Pre-Owned",
                badge: "Used",
                desc: "Well-maintained pre-owned items listed with transparency and trust.",
              },
            ].map((tier) => (
              <div
                key={tier.title}
                className="p-6 transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {tier.title}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium text-blue-700 rounded-full bg-blue-50">
                    {tier.badge}
                  </span>
                </div>
                <p className="leading-relaxed text-slate-600">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid gap-8 mb-24 md:grid-cols-2">
          <div className="p-8 bg-white border shadow-sm rounded-3xl border-slate-200">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Mission
            </span>
            <h3 className="mt-2 mb-4 text-2xl font-bold text-slate-900">
              Make buying and selling effortless
            </h3>
            <p className="leading-relaxed text-slate-600">
              We aim to elevate everyday commerce by making listings clear,
              transactions smooth, and experiences trustworthy for everyone.
            </p>
          </div>

          <div className="p-8 bg-white border shadow-sm rounded-3xl border-slate-200">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Vision
            </span>
            <h3 className="mt-2 mb-4 text-2xl font-bold text-slate-900">
              A premium marketplace built on trust
            </h3>
            <p className="leading-relaxed text-slate-600">
              Gambazar envisions a future where quality, reputation, and
              community engagement define modern online marketplaces.
            </p>
          </div>
        </section>

        {/* Trust */}
        <section className="mb-24">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Built on trust & transparency
          </h2>
          <p className="max-w-2xl mb-10 text-slate-600">
            Trust is the foundation of Gambazar. Every feature is designed to
            create confidence for both buyers and sellers.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Clear and honest listings",
              "Seller reputation system",
              "Community engagement",
              "Secure and modern platform",
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
        <section className="flex flex-col items-center justify-between gap-6 p-10 border border-blue-200 rounded-3xl bg-blue-50 md:flex-row">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-widest text-blue-700 uppercase">
              Join Gambazar
            </p>
            <h2 className="mb-3 text-3xl font-bold text-slate-900">
              List confidently. Shop smarter.
            </h2>
            <p className="max-w-xl text-slate-600">
              Whether it’s new, refurbished, or pre-owned, Gambazar gives every
              product a professional, trusted marketplace.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
              Start Selling
            </button>
            <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
              Explore Products
            </button>
          </div>
        </section>

        {/* Footer */}

      </div>
    </div>

        <Footer/>
    </div>

  );
};

export default About;
