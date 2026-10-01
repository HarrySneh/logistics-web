import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: "⚡",
    title: "Speed",
    desc: "Express delivery options with real‑time tracking.",
  },
  {
    icon: "🔒",
    title: "Reliability",
    desc: "99.9% on‑time delivery rate across all routes.",
  },
  {
    icon: "📊",
    title: "Transparency",
    desc: "Full visibility into every step of your supply chain.",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    desc: "Dedicated support team available around the clock.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Built for <span className="text-accent">Reliability</span>
          </h2>
          <p className="text-slate-500 text-lg mt-4">
            We combine technology with human expertise to deliver exceptional
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-primary-dark mb-1">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/why-choose-us"
            className="inline-block bg-accent text-primary-dark font-bold px-8 py-3.5 rounded-full shadow-lg shadow-accent/30 hover:bg-accent-hover transition"
          >
            Learn More About Why We’re Different
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
