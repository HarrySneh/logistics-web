import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `hover:text-white transition ${isActive ? "text-white font-semibold" : "text-white/80"}`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark/80 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-white"
        >
          <img
            src="/images/logo.png"
            alt="SwiftLogix"
            className="h-8 w-auto"
            loading="lazy"
          />
          <span className="hidden sm:inline">
            Swift<span className="text-accent">Logix</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/why-choose-us" className={navLinkClass}>
            Why Us
          </NavLink>
          <NavLink to="/articles" className={navLinkClass}>
            Articles
          </NavLink>
          <NavLink to="/tracking" className={navLinkClass}>
            Track
          </NavLink>
          <NavLink
            to="/contact"
            className="bg-accent text-primary-dark font-semibold px-6 py-2.5 rounded-full hover:bg-accent-hover transition shadow-lg shadow-accent/30"
          >
            Get a Quote
          </NavLink>
          <ThemeToggle />
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-primary-dark/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="container flex flex-col gap-4 text-white/80">
          <NavLink to="/" onClick={() => setMobileOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={() => setMobileOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>
            About
          </NavLink>
          <NavLink to="/why-choose-us" onClick={() => setMobileOpen(false)}>
            Why Us
          </NavLink>
          <NavLink to="/articles" onClick={() => setMobileOpen(false)}>
            Articles
          </NavLink>
          <NavLink to="/tracking" onClick={() => setMobileOpen(false)}>
            Track
          </NavLink>
          <NavLink
            to="/contact"
            className="bg-accent text-primary-dark font-semibold px-6 py-2.5 rounded-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </NavLink>
          <div className="mt-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
