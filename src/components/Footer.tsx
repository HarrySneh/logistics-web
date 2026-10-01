import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white/70 py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-extrabold text-white"
            >
              <img
                src="/images/logo.png"
                alt="SwiftLogix"
                className="h-8 w-auto"
              />
              <span className="hidden sm:inline">
                Swift<span className="text-accent">Logix</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-white/60">
              Modern logistics for a connected world. Fast, reliable, and
              transparent.
            </p>
            <div className="flex gap-4 mt-4 text-xl">
              <a
                href="#"
                className="hover:text-accent transition"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="hover:text-accent transition"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="hover:text-accent transition"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href="#"
                className="hover:text-accent transition"
                aria-label="LinkedIn"
              >
                🔗
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/why-choose-us"
                  className="hover:text-white transition"
                >
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/articles" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="hover:text-white transition">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
            <p className="text-sm text-white/60 mb-3">
              Subscribe to our newsletter for the latest insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="bg-accent text-primary-dark px-4 py-2 rounded-lg font-semibold text-sm hover:bg-accent-hover transition whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-sm text-white/50 text-center">
          &copy; {new Date().getFullYear()} SwiftLogix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
