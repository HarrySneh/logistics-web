import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "error">(
    "idle",
  );
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState([
    { label: "Order Placed", done: false },
    { label: "Picked Up", done: false },
    { label: "In Transit", done: false },
    { label: "Delivered", done: false },
  ]);
  const [estimatedDelivery, setEstimatedDelivery] = useState("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setStatus("loading");
    setProgress(0);
    setSteps(steps.map((s) => ({ ...s, done: false })));
    setEstimatedDelivery("");

    try {
      const response = await fetch(
        `http://localhost:5000/api/tracking/${trackingId}`,
      );
      if (!response.ok) {
        if (response.status === 404) {
          setStatus("error");
          return;
        }
        throw new Error("Server error");
      }
      const data = await response.json();

      setStatus("found");
      setProgress(data.progress || 0);
      setSteps(data.steps || steps);
      setEstimatedDelivery(data.estimatedDelivery || "Tomorrow, 2:00 PM");
    } catch (error) {
      console.error("Tracking error:", error);
      // Fallback to mock simulation if API fails
      setTimeout(() => {
        setStatus("found");
        let currentStep = 0;
        const interval = setInterval(() => {
          if (currentStep < steps.length) {
            setSteps((prev) =>
              prev.map((s, idx) =>
                idx === currentStep ? { ...s, done: true } : s,
              ),
            );
            setProgress(((currentStep + 1) / steps.length) * 100);
            currentStep++;
          } else {
            clearInterval(interval);
          }
        }, 800);
        setEstimatedDelivery("Tomorrow, 2:00 PM");
      }, 1200);
    }
  };

  return (
    <section id="tracking" className="py-24 bg-slate-50 min-h-screen">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Track Your Shipment
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Real-Time <span className="text-accent">Tracking</span>
          </h1>
          <p className="text-slate-500 text-lg mt-4">
            Enter your tracking number to get the latest status.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleTrack} className="flex gap-3 mb-8">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="e.g. TRK-12345"
              className="flex-1 px-5 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
            />
            <button
              type="submit"
              className="bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hover transition shadow-lg shadow-accent/30"
            >
              Track
            </button>
          </form>

          <AnimatePresence mode="wait">
            {status === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-accent border-t-transparent" />
                <p className="mt-3 text-slate-500">
                  Searching for your shipment...
                </p>
              </motion.div>
            )}

            {status === "found" && (
              <motion.div
                key="found"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm text-slate-500">
                    Tracking #: {trackingId}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    In Transit
                  </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2">
                  <motion.div
                    className="bg-accent h-2.5 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-accent/50 rounded-full"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>Order Placed</span>
                  <span>Delivered</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-xs text-center mt-4">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 transition ${
                          step.done
                            ? "bg-accent text-white"
                            : "bg-slate-200 text-slate-400"
                        }`}
                      >
                        {step.done ? "✓" : idx + 1}
                      </div>
                      <span
                        className={
                          step.done
                            ? "text-primary-dark font-medium"
                            : "text-slate-400"
                        }
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>

                {estimatedDelivery && (
                  <div className="mt-4 p-3 bg-slate-50 rounded-xl text-sm text-slate-600">
                    <span className="font-medium">Estimated delivery:</span>{" "}
                    {estimatedDelivery}
                  </div>
                )}
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 text-red-500"
              >
                <p>Tracking number not found. Please check and try again.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
