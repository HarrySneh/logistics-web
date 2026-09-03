import { motion } from "framer-motion";

// Replace these paths with your actual logo files inside public/images/logos/
const logos = [
  "/images/logos/dhl.png",
  "/images/logos/fedex.png",
  "/images/logos/ups.png",
  "/images/logos/maersk.png",
  "/images/logos/xpo.png",
  "/images/logos/coyote.png",
  "/images/logos/ceva.png",
  "/images/logos/penske.png",
];

const TrustedBy = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container">
        <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-widest mb-6">
          Trusted by 500+ companies worldwide
        </p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Client logo ${i + 1}`}
              className="h-12 w-auto grayscale hover:grayscale-0 transition"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
