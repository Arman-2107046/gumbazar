import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";
import React from "react";

const Policies = () => {
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
              Policies
            </span>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-slate-900">
              Transparent policies for a{" "}
              <span className="text-blue-600">trusted</span> marketplace
            </h1>

            <p className="max-w-3xl mt-6 text-lg leading-relaxed text-slate-600">
              At <strong>Gambazar</strong>, our policies are designed to protect
              buyers, support sellers, and maintain a fair and secure platform
              for everyone.
            </p>
          </section>

          {/* Policy Sections */}
          <section className="grid gap-8 mb-24 md:grid-cols-2">
            {[
              {
                title: "User Conduct Policy",
                desc: "All users must provide accurate information, respect community guidelines, and avoid fraudulent or misleading activity.",
              },
              {
                title: "Listing Policy",
                desc: "Products must be clearly categorized as New, Refurbished, or Pre-Owned with honest descriptions and real images.",
              },
              {
                title: "Payment & Transactions",
                desc: "All transactions must occur through approved channels to ensure security, traceability, and buyer protection.",
              },
              {
                title: "Refund & Dispute Policy",
                desc: "Refunds and disputes are handled fairly based on listing accuracy, seller responsibility, and platform guidelines.",
              },
            ].map((policy) => (
              <div
                key={policy.title}
                className="p-8 bg-white border shadow-sm rounded-3xl border-slate-200"
              >
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {policy.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {policy.desc}
                </p>
              </div>
            ))}
          </section>

          {/* Privacy */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Privacy & data protection
            </h2>
            <p className="max-w-3xl leading-relaxed text-slate-600">
              We respect your privacy. User data is collected only to improve
              platform functionality, ensure security, and deliver a seamless
              experience. We never sell personal data to third parties.
            </p>
          </section>

          {/* Trust */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Platform integrity
            </h2>
            <p className="max-w-2xl mb-10 text-slate-600">
              To maintain a premium marketplace, Gambazar actively monitors
              activity and enforces policies consistently.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Verified sellers & listings",
                "Clear violation handling",
                "Account safety measures",
                "Continuous policy updates",
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
                Learn More
              </p>
              <h2 className="mb-3 text-3xl font-bold text-slate-900">
                A safe place to buy & sell
              </h2>
              <p className="max-w-xl text-slate-600">
                By using Gambazar, you agree to our policies that prioritize
                trust, quality, and fairness across the platform.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
                Contact Support
              </button>
              <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
                Read FAQ
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Policies;
