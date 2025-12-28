import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";

const faqs = [
  {
    q: "What is GumBazar?",
    a: "GumBazar is a trusted online marketplace where individuals and verified businesses can buy and sell new, refurbished, and pre-owned products with confidence.",
  },
  {
    q: "Who can sell on GumBazar?",
    a: "Both individuals and licensed businesses can sell on GumBazar. Businesses must complete license verification to sell as verified sellers.",
  },
  {
    q: "How do businesses get verified?",
    a: "Businesses are required to submit valid trade licenses and relevant documents. Our compliance team reviews and verifies these details before approval.",
  },
  {
    q: "What types of products are allowed?",
    a: "GumBazar supports new, refurbished, and pre-owned products across approved categories. All listings must follow our marketplace guidelines.",
  },
  {
    q: "How does GumBazar ensure trust?",
    a: "We use seller verification, transparent listings, community engagement, and manual reviews to maintain a safe and trustworthy marketplace.",
  },
  {
    q: "Can individuals advertise on GumBazar?",
    a: "Advertising is currently available only for verified businesses, brands, and approved service providers to ensure quality and relevance.",
  },
  {
    q: "Where do advertisements appear?",
    a: "Ads may appear as featured listings, sponsored products, category highlights, or limited banner placements always clearly labeled.",
  },
  {
    q: "How do I apply for a job at GumBazar?",
    a: "You can explore opportunities on our Careers page and apply for engineering, operations, or professional roles that match your expertise.",
  },
  {
    q: "Do engineers work on live systems?",
    a: "Yes. Engineers maintain, improve, and scale GumBazar’s production systems with a strong focus on reliability, security, and performance.",
  },
  {
    q: "How can office professionals contribute?",
    a: "Office professionals support operations, compliance, customer service, business onboarding, and marketplace growth using GumBazar’s internal tools.",
  },
  {
    q: "Is GumBazar free to use?",
    a: "Browsing GumBazar is free. Selling and advertising may involve fees depending on seller type, services used, or promotional options.",
  },
  {
    q: "How can I contact GumBazar support?",
    a: "You can reach us through the Contact page or via official support channels listed on the platform.",
  },
];

const Faq = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Header Accent */}
        <div className="absolute inset-x-0 top-0 pointer-events-none h-72 bg-gradient-to-b from-blue-50 to-transparent" />

        <div className="relative max-w-4xl px-6 py-20 mx-auto">
          {/* Header */}
          <section className="mb-16 text-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-sm text-blue-700 font-medium mb-6">
              Frequently Asked Questions
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900">
              How can we help you?
            </h1>

            <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
              Find answers to common questions about buying, selling,
              advertising, and working with GumBazar.
            </p>
          </section>

          {/* FAQ List */}
          <section className="space-y-4">
            {faqs.map((item, index) => (
              <details
                key={index}
                className="p-6 bg-white border shadow-sm group rounded-2xl border-slate-200"
              >
                <summary className="flex items-center justify-between text-lg font-semibold list-none cursor-pointer text-slate-900">
                  {item.q}
                  <span className="ml-4 text-blue-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </section>

          {/* CTA */}
          <section className="p-10 mt-20 text-center border border-blue-200 rounded-3xl bg-blue-50">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Still have questions?
            </h2>
            <p className="mb-6 text-slate-600">
              If you need more help, our support team is ready to assist you.
            </p>

            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
                Contact Support
              </button>
              <button className="px-6 py-3 text-blue-700 transition border border-blue-300 rounded-xl hover:bg-blue-100">
                Visit Help Center
              </button>
            </div>
          </section>


        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faq;
