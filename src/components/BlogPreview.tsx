import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const BlogPreview = () => {
  const previewArticles = articles.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Latest <span className="text-accent">Articles</span>
          </h2>
          <p className="text-slate-500 text-lg mt-4">
            Stay informed with our logistics and supply chain expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewArticles.map((post) => (
            <motion.article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-slate-200"
              whileHover={{ y: -4 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                  {post.date}
                </p>
                <h3 className="text-xl font-bold text-primary-dark mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm">{post.excerpt}</p>
                <Link
                  to={`/articles/${post.slug}`}
                  className="inline-block mt-4 text-accent font-semibold hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/articles"
            className="inline-block bg-primary text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-primary/30 hover:bg-primary-light transition"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
