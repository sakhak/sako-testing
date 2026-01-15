import React from "react";
import { motion,type Variants } from "framer-motion";


interface NewsProps {
  onMoreClick?: () => void;
}

type NewsItem = {
  date: string;
  title: string;
  category: string;
  image: string;
};

const ease = [0.2, 0.8, 0.2, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

const News: React.FC<NewsProps> = ({ onMoreClick }) => {
  const news: NewsItem[] = [
    {
      date: "OCT 25, 2024",
      title: "SAKO Highlights Future Solar Trends at Global Exhibition",
      category: "Exhibition",
      image: "https://picsum.photos/seed/news1/1200/800",
    },
    {
      date: "SEP 12, 2024",
      title: "New Lithium Battery Pack Series Released with Smart Monitoring",
      category: "Launch",
      image: "https://picsum.photos/seed/news2/1200/800",
    },
    {
      date: "AUG 05, 2024",
      title: "Empowering Remote Villages with SAKO Off-Grid Systems",
      category: "CSR",
      image: "https://picsum.photos/seed/news3/1200/800",
    },
  ];

  return (
    <section
      id="news"
      className="relative py-16 sm:py-24 bg-white overflow-hidden"
    >
      {/* subtle accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-red-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 w-96 h-96 rounded-full bg-black/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-gray-700">
              Updates & announcements
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight"
          >
            Recent <span className="text-red-600">News</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 font-medium leading-relaxed"
          >
            Latest highlights from exhibitions, product launches, and real-world
            projects.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="w-20 h-1.5 bg-red-600 mx-auto mt-6"
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16"
        >
          {news.map((item, idx) => (
            <motion.article
              key={idx}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25, ease }}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.03 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.8, ease }}
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {/* category badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {item.category}
                  </span>
                </div>

                {/* corner arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 transition-colors shadow-lg">
                  <IconArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="text-gray-400 text-[11px] font-black tracking-[0.28em] uppercase mb-3">
                  {item.date}
                </div>

                <h3 className="text-lg sm:text-xl font-black text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* micro underline */}
                <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-10 bg-red-600 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="text-center"
        >
          <motion.button
            type="button"
            onClick={onMoreClick}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-900 hover:bg-red-600 text-white px-10 sm:px-12 py-4 rounded-2xl font-black uppercase text-[11px] sm:text-xs tracking-[0.28em] transition-colors shadow-xl"
          >
            Go to SAKO Blog
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;

/* -------------------- Icon (SVG) -------------------- */
function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h12" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
