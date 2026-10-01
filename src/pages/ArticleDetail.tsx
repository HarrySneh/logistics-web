import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { articles } from "../data/articles";
import { useEffect } from "react";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <section className="py-24 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-dark">
            Article Not Found
          </h1>
          <Link
            to="/articles"
            className="mt-4 inline-block bg-accent text-primary-dark font-bold px-6 py-3 rounded-full hover:bg-accent-hover transition"
          >
            Back to Articles
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/articles"
            className="inline-block text-accent font-semibold hover:underline mb-6"
          >
            ← Back to all articles
          </Link>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8"
          />
          <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">
            {article.date}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {article.title}
          </h1>
          <div
            className="prose prose-lg max-w-none text-slate-700"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleDetail;
