import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";

const Business = () => {
  return (

    <div>
<Navbar/>


    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header Accent */}
      <div className="absolute inset-x-0 top-0 pointer-events-none h-72 bg-gradient-to-b from-blue-50 to-transparent" />

      <div className="relative px-6 py-20 mx-auto max-w-7xl">
        {/* Hero */}
        <section className="mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-sm text-blue-700 font-medium mb-6">
            GumBazar for Business
          </span>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-slate-900">
            Sell at scale on a{" "}
            <span className="text-blue-600">trusted</span>,{" "}
            <span className="text-blue-600">license-verified</span> marketplace
          </h1>

          <p className="max-w-3xl mt-6 text-lg leading-relaxed text-slate-600">
            GumBazar for Business empowers verified companies, brands, and
            retailers to reach customers with confidence. With license-based
            onboarding, premium storefronts, and effortless product management,
            we help businesses grow in a trusted digital marketplace.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
              Register Your Business
            </button>
            <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
              Learn How It Works
            </button>
          </div>
        </section>

        {/* Why Business */}
        <section className="mb-24">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Built for serious businesses
          </h2>
          <p className="max-w-2xl mb-10 text-slate-600">
            GumBazar is designed for businesses that value credibility,
            efficiency, and long-term growth.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "License-Verified Sellers",
                desc: "Only registered businesses with valid trade licenses can sell as verified sellers, building instant trust with customers.",
              },
              {
                title: "Professional Storefronts",
                desc: "Showcase your brand with a clean, premium storefront that reflects your business credibility.",
              },
              {
                title: "Marketplace Trust",
                desc: "Customers buy with confidence knowing they’re purchasing from legally verified businesses.",
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

        {/* Registration Process */}
        <section className="mb-24">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Simple business registration
          </h2>
          <p className="max-w-2xl mb-12 text-slate-600">
            Getting started on GumBazar as a business is straightforward and
            secure.
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Create Business Account",
                desc: "Sign up as a business seller and provide your company details.",
              },
              {
                step: "02",
                title: "Submit License",
                desc: "Upload valid trade license and required verification documents.",
              },
              {
                step: "03",
                title: "Verification Review",
                desc: "Our team reviews your documents to ensure authenticity and compliance.",
              },
              {
                step: "04",
                title: "Start Selling",
                desc: "Once approved, list products and start selling effortlessly.",
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

        {/* Selling Features */}
        <section className="mb-24">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Sell effortlessly, manage confidently
          </h2>
          <p className="max-w-2xl mb-10 text-slate-600">
            GumBazar provides businesses with tools that simplify selling and
            scale operations.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Easy product listing & bulk uploads",
              "New, refurbished & pre-owned product support",
              "Order & inventory management",
              "Performance insights & analytics",
            ].map((feature) => (
              <div
                key={feature}
                className="p-5 bg-white border shadow-sm rounded-xl border-slate-200 text-slate-600"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Trust & Compliance */}
        <section className="mb-24">
          <div className="p-10 border border-blue-200 rounded-3xl bg-blue-50">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Compliance, trust & long-term growth
            </h2>
            <p className="max-w-3xl leading-relaxed text-slate-600">
              GumBazar prioritizes legal compliance and marketplace integrity.
              License verification, seller accountability, and transparent
              listings ensure a professional environment where businesses and
              customers thrive together.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center justify-between gap-6 p-10 bg-white border shadow-sm rounded-3xl border-slate-200 md:flex-row">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Start selling today
            </p>
            <h2 className="mb-3 text-3xl font-bold text-slate-900">
              Grow your business with GumBazar
            </h2>
            <p className="max-w-xl text-slate-600">
              Join a marketplace built for legitimate businesses, premium
              listings, and customer trust.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
              Register Business
            </button>
            <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
              Contact Sales
            </button>
          </div>
        </section>


      </div>
    </div>



<Footer/>
        
    </div>

  );
};

export default Business;
