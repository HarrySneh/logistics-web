import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: "⚡",
    title: "Speed",
    description:
      "Express delivery options with real‑time tracking. Our optimized routes and dedicated fleet ensure your shipments arrive faster than ever.",
    details: [
      "Same‑day delivery in major cities",
      "AI‑powered route optimization",
      "Dedicated expedited service",
    ],
  },
  {
    icon: "🔒",
    title: "Reliability",
    description:
      "99.9% on‑time delivery rate across all routes. We use predictive analytics to foresee and mitigate delays before they happen.",
    details: [
      "Real‑time monitoring",
      "Proactive issue resolution",
      "Track record of 98%+ on‑time performance",
    ],
  },
  {
    icon: "📊",
    title: "Transparency",
    description:
      "Full visibility into every step of your supply chain. Our dashboard gives you end‑to‑end tracking and detailed analytics.",
    details: [
      "Live tracking with milestone updates",
      "Customizable reporting",
      "Open API for integration",
    ],
  },
  {
    icon: "💬",
    title: "24/7 Support",
    description:
      "Dedicated support team available around the clock. We’re always here to answer questions and solve problems.",
    details: [
      "Live chat and phone support",
      "Dedicated account managers",
      "Global coverage with local expertise",
    ],
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Built for <span className="text-accent">Reliability</span>
          </h1>
          <p className="text-slate-600 text-lg mt-4">
            We combine cutting‑edge technology with human expertise to deliver
            exceptional logistics solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-slate-200 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="text-5xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-dark mb-2">
                    {benefit.title}
                  </h2>
                  <p className="text-slate-600 text-lg mb-4">
                    {benefit.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    {benefit.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="bg-accent text-primary-dark font-bold px-8 py-3.5 rounded-full shadow-lg shadow-accent/30 hover:bg-accent-hover transition inline-block"
          >
            Get a Quote Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
