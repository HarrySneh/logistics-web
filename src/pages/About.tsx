import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Your Trusted <span className="text-accent">Logistics</span> Partner
          </h1>
          <p className="text-slate-600 text-lg mt-6 leading-relaxed">
            With over a decade of experience, SwiftLogix delivers tailored
            logistics solutions that reduce costs and improve efficiency. Our
            tech-driven platform gives you complete control over your supply
            chain.
          </p>
          <ul className="mt-8 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">✓</span>
              <span className="text-slate-700">
                AI-powered route optimization
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">✓</span>
              <span className="text-slate-700">24/7 customer support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">✓</span>
              <span className="text-slate-700">
                Carbon‑neutral shipping options
              </span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="/images/about-team.jpg"
            alt="Our logistics team"
            className="w-full aspect-square object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
