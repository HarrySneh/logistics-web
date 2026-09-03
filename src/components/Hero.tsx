import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [deliveries, setDeliveries] = useState(0);
  const [countries, setCountries] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/hero-slide-1.jpg",
    "/images/hero-slide-2.jpg",
    "/images/hero-slide-3.jpg",
    "/images/hero-slide-4.jpg",
    "/images/hero-slide-5.jpg",
    "/images/hero-slide-6.jpg",
    "/images/hero-slide-7.jpg",
  ];

  // Animate stats on mount
  useEffect(() => {
    setTimeout(() => {
      setDeliveries(12500);
      setCountries(52);
    }, 500);
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const floatingIcons = ["📦", "✈️", "🚛", "🛳️"];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          filter: "blur(8px) scale(1.1)",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-primary-dark/70" />

      {/* Floating icons (on top of overlay) */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl opacity-10 z-20"
          style={{ top: `${15 + i * 20}%`, left: `${10 + i * 25}%` }}
          animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
      ))}

      <div className="container relative z-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-accent/20 text-accent font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
          >
            #1 Logistics Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            Smart <span className="text-accent">Shipping</span> & <br />
            Supply Chain Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-lg mt-6 max-w-lg leading-relaxed"
          >
            Fast, reliable, and cost‑effective logistics tailored to your
            business. We move your goods across the globe with real‑time
            tracking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#contact"
              className="bg-accent text-primary-dark font-bold px-8 py-3.5 rounded-full shadow-lg shadow-accent/30 hover:bg-accent-hover transition transform hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="border border-white/30 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10"
          >
            <div>
              <motion.p
                className="text-3xl font-bold text-white"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {deliveries.toLocaleString()}+
              </motion.p>
              <p className="text-white/60 text-sm">Deliveries</p>
            </div>
            <div>
              <motion.p
                className="text-3xl font-bold text-white"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                98%
              </motion.p>
              <p className="text-white/60 text-sm">On‑Time Rate</p>
            </div>
            <div>
              <motion.p
                className="text-3xl font-bold text-white"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {countries}+
              </motion.p>
              <p className="text-white/60 text-sm">Countries</p>
            </div>
          </motion.div>
        </div>

        {/* Right side – Image Carousel */}
        <div className="hidden lg:flex justify-center">
          <div className="w-full max-w-md relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={slides[currentSlide]}
                  alt={`Logistics ${currentSlide + 1}`}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    idx === currentSlide ? "bg-accent w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
