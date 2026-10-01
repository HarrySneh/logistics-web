import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What shipping methods do you offer?",
    answer:
      "We offer air freight, ocean freight, land freight (trucking), and express delivery. Each method is tailored to your timeline and budget.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment in real-time using your tracking number on our Tracking page. We also send email and SMS notifications at each milestone.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 50 countries worldwide. Our network covers major ports and hubs across North America, Europe, Asia, and Australia.",
  },
  {
    question: "What is your estimated delivery time?",
    answer:
      "Delivery time depends on the shipping method and destination. Air freight typically takes 2-5 business days, ocean freight 10-20 days, and land freight 3-7 days. You can get a precise estimate when you request a quote.",
  },
  {
    question: "Do you provide insurance for shipments?",
    answer:
      "Yes, we offer comprehensive cargo insurance to protect your goods against loss or damage. Insurance can be added during the booking process.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can request a quote by filling out the form on our Contact page. We’ll get back to you within 24 hours with a tailored quote.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg mt-4">
            Find quick answers to the most common logistics questions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-primary-dark text-base md:text-lg">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-accent text-xl flex-shrink-0 ml-4"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-slate-100 text-slate-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
