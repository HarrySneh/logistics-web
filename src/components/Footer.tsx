const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white/70 py-12">
      <div className="container grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-xl flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="SwiftLogix"
              className="h-8 w-auto"
            />
            SwiftLogix
          </h3>
          <p className="mt-3 text-sm">
            Modern logistics for a connected world.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Freight Forwarding</li>
            <li>Ocean Shipping</li>
            <li>Air Cargo</li>
            <li>Trucking</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Newsletter</h4>
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
          <p className="mt-4 text-sm">
            © 2026 SwiftLogix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
