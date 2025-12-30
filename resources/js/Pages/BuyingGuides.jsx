import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";
import React from "react";

const BuyingGuides = () => {
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
              Buying Guides
            </span>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-slate-900">
              Shop smarter with{" "}
              <span className="text-blue-600">confidence</span>
            </h1>

            <p className="max-w-3xl mt-6 text-lg leading-relaxed text-slate-600">
              Our buying guides help you make informed decisions when purchasing
              new, refurbished, or pre-owned products on Gambazar.
            </p>
          </section>

          {/* Guides */}
          <section className="grid gap-8 mb-24 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "How to Buy New Products",
                desc: "Understand specifications, warranties, and seller verification when shopping for brand-new items.",
              },
              {
                title: "Refurbished Buying Guide",
                desc: "Learn what refurbished really means, how to evaluate quality, and where you can save the most.",
              },
              {
                title: "Pre-Owned Smart Buying",
                desc: "Tips to assess condition, pricing, and seller credibility before purchasing used products.",
              },
              {
                title: "Comparing Sellers",
                desc: "How to review seller profiles, ratings, and response history to shop with confidence.",
              },
              {
                title: "Safe Payments",
                desc: "Best practices for secure payments and avoiding common online marketplace scams.",
              },
              {
                title: "After-Purchase Checklist",
                desc: "What to do after you buy: inspections, confirmations, and resolving issues quickly.",
              },
            ].map((guide) => (
              <div
                key={guide.title}
                className="p-8 transition bg-white border shadow-sm rounded-3xl border-slate-200 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {guide.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {guide.desc}
                </p>
              </div>
            ))}
          </section>

          {/* Quality Tiers Reminder */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Know your product tier
            </h2>
            <p className="max-w-2xl mb-10 text-slate-600">
              Gambazar products are clearly labeled so you always know what
              you’re buying.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "New",
                  desc: "Factory-sealed products with original packaging and full warranties.",
                },
                {
                  title: "Refurbished",
                  desc: "Professionally restored items tested for performance and reliability.",
                },
                {
                  title: "Pre-Owned",
                  desc: "Used products in clearly described condition with transparent pricing.",
                },
              ].map((tier) => (
                <div
                  key={tier.title}
                  className="p-6 bg-white border shadow-sm rounded-2xl border-slate-200"
                >
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {tier.title}
                  </h3>
                  <p className="text-slate-600">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="flex flex-col items-center justify-between gap-6 p-10 border border-blue-200 rounded-3xl bg-blue-50 md:flex-row">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-widest text-blue-700 uppercase">
                Ready to shop?
              </p>
              <h2 className="mb-3 text-3xl font-bold text-slate-900">
                Buy with clarity. Buy with trust.
              </h2>
              <p className="max-w-xl text-slate-600">
                Gambazar’s guides and policies ensure every purchase feels
                simple, secure, and informed.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
                Browse Products
              </button>
              <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
                Contact Support
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyingGuides;
