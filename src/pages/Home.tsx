import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ"; 
import WorldMap from "../components/WorldMap";
import BlogPreview from "../components/BlogPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FAQ />
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Global Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
              We Ship <span className="text-accent">Everywhere</span>
            </h2>
            <p className="text-slate-500 text-lg mt-4">
              With offices and partners across the globe.
            </p>
          </div>
          <WorldMap />
        </div>
      </section>
      <BlogPreview />
      <TrustedBy />

      <FAQ />
    </>
  );
};

export default Home;
