import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";


const Advertising = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Header Accent */}
        <div className="absolute inset-x-0 top-0 pointer-events-none h-72 bg-gradient-to-b from-blue-50 to-transparent" />

        <div className="relative px-6 py-20 mx-auto max-w-7xl">
          {/* Hero */}
          <section className="mb-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-sm text-blue-700 font-medium mb-6">
              Advertising on GumBazar
            </span>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-slate-900">
              Reach customers at the{" "}
              <span className="text-blue-600">moment they decide</span>
            </h1>

            <p className="max-w-3xl mt-6 text-lg leading-relaxed text-slate-600">
              Promote your products and services on GumBazar — a trusted
              marketplace where users arrive with real buying intent. Our
              advertising solutions are clean, transparent, and designed to
              enhance discovery without disrupting the user experience.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
                Start Advertising
              </button>
              <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
                Contact Sales
              </button>
            </div>
          </section>

          {/* Who Can Advertise */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Who can advertise on GumBazar
            </h2>
            <p className="max-w-3xl mb-10 text-slate-600">
              Advertising on GumBazar is reserved for verified and responsible
              advertisers to maintain marketplace trust.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Verified Businesses",
                  desc: "Registered businesses with valid trade licenses and verified details.",
                },
                {
                  title: "Brands & Retailers",
                  desc: "Manufacturers, distributors, and retailers promoting genuine products.",
                },
                {
                  title: "Approved Service Providers",
                  desc: "Service providers approved to promote relevant marketplace services.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md"
                >
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>



          {/* Why Advertise */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Why advertise on GumBazar
            </h2>
            <p className="max-w-3xl mb-10 text-slate-600">
              GumBazar advertising connects you with users who are actively
              browsing and comparing products.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "High-intent marketplace audience",
                "Category-based targeting",
                "Brand-safe and clean environment",
                "Transparent performance tracking",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="p-5 bg-white border shadow-sm rounded-xl border-slate-200 text-slate-600"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-24">
            <h2 className="mb-12 text-3xl font-bold text-slate-900">
              How advertising works
            </h2>

            <div className="grid gap-6 md:grid-cols-5">
              {[
                {
                  step: "01",
                  title: "Register",
                  desc: "Sign up as an advertiser and submit business details.",
                },
                {
                  step: "02",
                  title: "Verify",
                  desc: "Complete verification to maintain platform integrity.",
                },
                {
                  step: "03",
                  title: "Choose Placement",
                  desc: "Select ad type, category, and duration.",
                },
                {
                  step: "04",
                  title: "Launch",
                  desc: "Your campaign goes live after review.",
                },
                {
                  step: "05",
                  title: "Measure",
                  desc: "Track performance and engagement clearly.",
                },
              ].map((step) => (
                <div
                  key={step.step}
                  className="p-6 bg-white border shadow-sm rounded-2xl border-slate-200"
                >
                  <div className="mb-2 text-lg font-bold text-blue-600">
                    {step.step}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust & Compliance */}
          <section className="mb-24">
            <div className="p-10 border border-blue-200 rounded-3xl bg-blue-50">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Trust, transparency & compliance
              </h2>
              <p className="max-w-3xl leading-relaxed text-slate-600">
                All advertisements on GumBazar are reviewed before approval.
                Sponsored content is clearly labeled, misleading promotions are
                not allowed, and user experience always comes first.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="flex flex-col items-center justify-between gap-6 p-10 bg-white border shadow-sm rounded-3xl border-slate-200 md:flex-row">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                Advertising
              </p>
              <h2 className="mb-3 text-3xl font-bold text-slate-900">
                Promote your brand on GumBazar
              </h2>
              <p className="max-w-xl text-slate-600">
                Reach high-intent customers in a trusted marketplace environment.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
                Start Advertising
              </button>
              <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
                Talk to Sales
              </button>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Advertising;
