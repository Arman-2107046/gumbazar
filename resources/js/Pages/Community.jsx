import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";
import React from "react";

const SocialMediaCommunities = () => {
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
              Social Communities
            </span>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-slate-900">
              Join Gambazar on{" "}
              <span className="text-blue-600">social media</span>
            </h1>

            <p className="max-w-3xl mt-6 text-lg leading-relaxed text-slate-600">
              Stay connected with Gambazar across social platforms. Get updates,
              share experiences, ask questions, and grow with our online
              communities.
            </p>
          </section>

          {/* Social Platforms */}
          <section className="grid gap-8 mb-24 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Facebook Community",
                desc: "Join discussions, discover deals, and connect with buyers and sellers.",
                action: "Join Facebook Group",
              },
              {
                title: "Instagram",
                desc: "Explore product highlights, tips, and community stories.",
                action: "Follow on Instagram",
              },
              {
                title: "Twitter / X",
                desc: "Get real-time updates, announcements, and quick support.",
                action: "Follow on X",
              },
              {
                title: "LinkedIn",
                desc: "Connect with Gambazar professionally and stay updated on company news.",
                action: "Follow on LinkedIn",
              },
              {
                title: "YouTube",
                desc: "Watch buying guides, seller tips, and platform tutorials.",
                action: "Subscribe on YouTube",
              },
              {
                title: "WhatsApp / Telegram",
                desc: "Get instant updates, community alerts, and exclusive announcements.",
                action: "Join Channel",
              },
            ].map((platform) => (
              <div
                key={platform.title}
                className="p-8 transition bg-white border shadow-sm rounded-3xl border-slate-200 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {platform.title}
                </h3>
                <p className="mb-6 leading-relaxed text-slate-600">
                  {platform.desc}
                </p>
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  {platform.action} →
                </button>
              </div>
            ))}
          </section>

          {/* Community Rules */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Community guidelines
            </h2>
            <p className="max-w-2xl mb-10 text-slate-600">
              Our social spaces are built on respect, honesty, and meaningful
              engagement.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Be respectful and inclusive",
                "No spam or misleading promotions",
                "Share honest experiences",
                "Follow platform rules",
              ].map((rule) => (
                <div
                  key={rule}
                  className="p-5 bg-white border shadow-sm rounded-xl border-slate-200 text-slate-600"
                >
                  {rule}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="flex flex-col items-center justify-between gap-6 p-10 border border-blue-200 rounded-3xl bg-blue-50 md:flex-row">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-widest text-blue-700 uppercase">
                Stay Connected
              </p>
              <h2 className="mb-3 text-3xl font-bold text-slate-900">
                Follow. Engage. Grow.
              </h2>
              <p className="max-w-xl text-slate-600">
                Be part of the Gambazar journey and connect with our growing
                social media communities.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
                Follow Gambazar
              </button>
              <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
                Community Rules
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SocialMediaCommunities;
