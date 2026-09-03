import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="py-24 bg-slate-50 min-h-screen flex items-center">
      <div className="container text-center">
        <h1 className="text-6xl font-bold text-primary-dark">404</h1>
        <p className="text-2xl text-slate-600 mt-4">Page not found</p>
        <Link
          to="/"
          className="inline-block mt-6 bg-accent text-primary-dark font-bold px-8 py-3 rounded-full hover:bg-accent-hover transition"
        >
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
