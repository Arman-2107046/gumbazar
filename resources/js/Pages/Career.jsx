import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";

const Careers = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Soft Header Accent */}
        <div className="absolute inset-x-0 top-0 pointer-events-none h-72 bg-gradient-to-b from-blue-50 to-transparent" />

        <div className="relative px-6 py-20 mx-auto max-w-7xl">
          {/* Hero */}
          <section className="mb-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-sm text-blue-700 font-medium mb-6">
              Careers at GumBazar
            </span>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-slate-900">
              Build, operate, and grow a{" "}
              <span className="text-blue-600">trusted digital marketplace</span>
            </h1>

            <p className="max-w-3xl mt-6 text-lg leading-relaxed text-slate-600">
              GumBazar is powered by technology, people, and processes. We’re
              building a secure, scalable marketplace—and we’re looking for
              engineers, operators, and professionals who want to create
              meaningful impact through software and services.
            </p>
          </section>

          {/* Engineering Careers */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Engineering & Technology
            </h2>
            <p className="max-w-3xl mb-10 text-slate-600">
              Our engineers design, maintain, and evolve the GumBazar platform.
              From backend systems to frontend experiences, engineering teams
              ensure the marketplace is fast, secure, and reliable.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Software Engineers",
                  desc: "Build and maintain scalable systems, APIs, and services that power listings, transactions, and user engagement.",
                },
                {
                  title: "Frontend Engineers",
                  desc: "Craft clean, intuitive user interfaces using modern frameworks to deliver premium user experiences.",
                },
                {
                  title: "Infrastructure & DevOps",
                  desc: "Ensure system stability, security, deployments, and performance across the platform.",
                },
              ].map((role) => (
                <div
                  key={role.title}
                  className="p-6 transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md"
                >
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {role.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Operations & Office Professionals */}
          <section className="mb-24">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Operations & Professional Roles
            </h2>
            <p className="max-w-3xl mb-10 text-slate-600">
              Beyond engineering, GumBazar relies on skilled professionals who
              operate the platform, support users, and deliver services that
              keep the marketplace running smoothly.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Customer Support",
                  desc: "Assist users, resolve issues, and ensure a smooth buying and selling experience.",
                },
                {
                  title: "Business Operations",
                  desc: "Manage internal processes, seller onboarding, and marketplace policies.",
                },
                {
                  title: "Compliance & Verification",
                  desc: "Review licenses, verify businesses, and maintain marketplace integrity.",
                },
                {
                  title: "Marketing & Growth",
                  desc: "Drive user adoption, engagement, and brand trust through strategic initiatives.",
                },
              ].map((role) => (
                <div
                  key={role.title}
                  className="p-5 bg-white border shadow-sm rounded-xl border-slate-200"
                >
                  <h3 className="mb-2 font-semibold text-slate-900">
                    {role.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How We Work */}
          <section className="mb-24">
            <div className="p-10 border border-blue-200 rounded-3xl bg-blue-50">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                How we work at GumBazar
              </h2>
              <p className="max-w-3xl leading-relaxed text-slate-600">
                We believe in structured collaboration, ownership, and long-term
                thinking. Teams work closely across engineering, operations, and
                services to continuously improve the platform while maintaining
                stability, security, and trust.
              </p>

              <div className="grid gap-6 mt-8 md:grid-cols-3">
                {[
                  "Clear responsibilities and ownership",
                  "Focus on reliability and quality",
                  "Collaboration between tech and operations",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-5 bg-white border border-blue-200 rounded-xl text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="flex flex-col items-center justify-between gap-6 p-10 bg-white border shadow-sm rounded-3xl border-slate-200 md:flex-row">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                Careers
              </p>
              <h2 className="mb-3 text-3xl font-bold text-slate-900">
                Join the team behind GumBazar
              </h2>
              <p className="max-w-xl text-slate-600">
                Whether you build software, operate systems, or support users,
                your work helps power a trusted digital marketplace.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
                View Open Positions
              </button>
              <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
                Contact 
              </button>
            </div>
          </section>


        </div>
      </div>

      <Footer />
    </>
  );
};

export default Careers;
