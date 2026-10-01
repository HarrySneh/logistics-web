import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const Articles = () => {
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Insights
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">
            All <span className="text-accent">Articles</span>
          </h1>
          <p className="text-slate-500 text-lg mt-4">
            Explore our latest insights on logistics, supply chain, and
            technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-slate-200"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                  {article.date}
                </p>
                <h2 className="text-xl font-bold text-primary-dark mb-2">
                  {article.title}
                </h2>
                <p className="text-slate-500 text-sm">{article.excerpt}</p>
                <Link
                  to={`/articles/${article.slug}`}
                  className="inline-block mt-4 text-accent font-semibold hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
