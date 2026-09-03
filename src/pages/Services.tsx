import { motion } from "framer-motion";

const services = [
  {
    title: "Freight Forwarding",
    description: "Sea, air, and land freight with end-to-end visibility.",
    image: "/images/services/freight.jpg",
  },
  {
    title: "Ocean Shipping",
    description: "Reliable container shipping to major ports worldwide.",
    image: "/images/services/ocean.jpg",
  },
  {
    title: "Air Cargo",
    description: "Express air freight for time-sensitive shipments.",
    image: "/images/services/air.jpg",
  },
  {
    title: "Trucking & Distribution",
    description: "Domestic and cross-border road freight solutions.",
    image: "/images/services/trucking.jpg",
  },
  {
    title: "Supply Chain Consulting",
    description: "Optimize your logistics with our expert insights.",
    image: "/images/services/consulting.jpg",
  },
  {
    title: "Global Tracking",
    description: "Real-time tracking dashboard for all your shipments.",
    image: "/images/services/tracking.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Comprehensive <span className="text-accent">Logistics</span>{" "}
            Services
          </h1>
          <p className="text-slate-500 text-lg mt-4">
            From freight forwarding to last‑mile delivery – we cover it all.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition group"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
