import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";
import React from "react";

const SellFaster = () => {
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
              Sell Faster
            </span>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-slate-900">
              Sell smarter. Sell{" "}
              <span className="text-blue-600">faster</span>.
            </h1>

            <p className="max-w-3xl mt-6 text-lg leading-relaxed text-slate-600">
              Learn proven strategies to create high-quality listings, attract
              serious buyers, and close deals faster on Gambazar.
            </p>
          </section>

          {/* Tips */}
          <section className="grid gap-8 mb-24 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Use clear, honest titles",
                desc: "Accurate titles improve search visibility and build instant buyer trust.",
              },
              {
                title: "Upload high-quality photos",
                desc: "Well-lit, real photos from multiple angles significantly increase engagement.",
              },
              {
                title: "Price competitively",
                desc: "Research similar listings to set a fair and attractive price.",
              },
              {
                title: "Choose the right condition",
                desc: "Correctly labeling items as New, Refurbished, or Pre-Owned avoids confusion.",
              },
              {
                title: "Respond quickly",
                desc: "Fast replies show professionalism and increase conversion rates.",
              },
              {
                title: "Build seller reputation",
                desc: "Positive reviews and completed sales help future listings sell faster.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="p-8 transition bg-white border shadow-sm rounded-3xl border-slate-200 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {tip.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {tip.desc}
                </p>
              </div>
            ))}
          </section>

          {/* Best Practices */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Best practices for faster sales
            </h2>
            <p className="max-w-2xl mb-10 text-slate-600">
              Sellers who follow these principles consistently outperform the
              market.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Complete product details",
                "Transparent condition notes",
                "Competitive pricing strategy",
                "Professional communication",
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
                Start Selling
              </p>
              <h2 className="mb-3 text-3xl font-bold text-slate-900">
                Turn listings into sales
              </h2>
              <p className="max-w-xl text-slate-600">
                Gambazar gives you the tools and visibility to reach the right
                buyers faster.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
                Create a Listing
              </button>
              <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
                Seller Guidelines
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SellFaster;
