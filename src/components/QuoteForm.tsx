import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  shipmentType: z.enum(["air", "ocean", "land", "express"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitError(null);
    try {
      const response = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Submission failed");
      }

      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (error: any) {
      console.error("Form error:", error);
      setSubmitError(error.message || "Network error. Please try again.");
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 max-w-xl mx-auto text-left"
    >
      <h3 className="text-2xl font-bold text-primary-dark mb-2">
        Request a Quote
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        Fill in the details and we’ll get back to you within 24 hours.
      </p>

      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm"
          >
            ✅ Thank you! Your request has been sent.
          </motion.div>
        )}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm"
          >
            ❌ {submitError}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
        >
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Full Name
          </label>
          <input
            {...register("name")}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition ${
              errors.name ? "border-red-400" : "border-slate-300"
            }`}
            placeholder="John Doe"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition ${
              errors.email ? "border-red-400" : "border-slate-300"
            }`}
            placeholder="you@example.com"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            {...register("phone")}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition ${
              errors.phone ? "border-red-400" : "border-slate-300"
            }`}
            placeholder="+1 234 567 890"
          />
          <AnimatePresence>
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.phone.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Shipment Type
          </label>
          <select
            {...register("shipmentType")}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition bg-white"
          >
            <option value="air">✈️ Air Freight</option>
            <option value="ocean">🛳️ Ocean Freight</option>
            <option value="land">🚚 Land Freight</option>
            <option value="express">⚡ Express Delivery</option>
          </select>
        </motion.div>

        <motion.div
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
        >
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={3}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition resize-none ${
              errors.message ? "border-red-400" : "border-slate-300"
            }`}
            placeholder="Tell us about your shipping needs..."
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-accent text-primary-dark font-bold py-3.5 rounded-xl hover:bg-accent-hover transition shadow-lg shadow-accent/30 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-primary-dark"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Submit Request"
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default QuoteForm;
