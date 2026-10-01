import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition text-white text-xl"
      aria-label="Toggle dark mode"
    >
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {isDark ? "🌙" : "☀️"}
      </motion.span>
    </button>
  );
};

export default ThemeToggle;
