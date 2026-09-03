import QuoteForm from "../components/QuoteForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-dark to-primary min-h-screen">
      <div className="container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
            Let’s discuss your logistics needs. Fill out the form and we’ll get
            back to you within 24 hours.
          </p>
        </motion.div>

        <div className="mt-10">
          <QuoteForm />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
          <div>
            <div className="text-3xl">📍</div>
            <p className="font-semibold mt-2">Visit us</p>
            <p className="text-sm">
              123 Logistics Ave, Suite 100, New York, NY
            </p>
          </div>
          <div>
            <div className="text-3xl">📞</div>
            <p className="font-semibold mt-2">Call us</p>
            <p className="text-sm">+1 (800) 123‑4567</p>
          </div>
          <div>
            <div className="text-3xl">✉️</div>
            <p className="font-semibold mt-2">Email us</p>
            <p className="text-sm">info@swiftlogix.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
