import React from "react";
import { motion,type Variants } from "framer-motion";
import { translations } from "../translations";
import type { Language } from "../App";



interface ProductsProps {
  lang: Language;
}

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

type Product = {
  title: string;
  desc: string;
  image: string;
  tag: string;
  href?: string;
};

const Products: React.FC<ProductsProps> = ({ lang }) => {
  const t = translations[lang].products;

  const products: Product[] = [
    {
      title: t.items.inverters,
      tag: lang === "en" ? "Inverter" : "អាំងវែរទ័រ",
      desc:
        lang === "en"
          ? "High-efficiency smart monitoring off-grid and hybrid series for reliable power conversion."
          : "ស៊េរីអាំងវែរទ័រឆ្លាតវៃសម្រាប់បម្លែងថាមពលដែលគួរឱ្យទុកចិត្ត។",
      image:
        "https://images.unsplash.com/photo-1548333341-8342447732e5?auto=format&fit=crop&q=80&w=1400",
      href: "#products-page?cat=Inverter",
    },
    {
      title: t.items.batteries,
      tag: lang === "en" ? "Battery" : "អាគុយ",
      desc:
        lang === "en"
          ? "Long-life LiFePO4 batteries with intelligent BMS for safe and stable energy storage."
          : "អាគុយ LiFePO4 ដែលមានអាយុកាលវែង និងប្រព័ន្ធ BMS វៃឆ្លាត។",
      image:
        "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1400",
      href: "#products-page?cat=Battery",
    },
    {
      title: t.items.ess,
      tag: lang === "en" ? "ESS" : "ESS",
      desc:
        lang === "en"
          ? "All-in-one residential energy solutions combining battery and inverter technology."
          : "ដំណោះស្រាយថាមពលលំនៅដ្ឋានរួមបញ្ចូលគ្នាដែលរួមបញ្ចូលបច្ចេកវិទ្យាអាគុយ និងអាំងវែរទ័រ។",
      image:
        "https://images.unsplash.com/photo-1592833159057-6fdc2a5c373a?auto=format&fit=crop&q=80&w=1400",
      href: "#products-page?cat=ESS",
    },
  ];

  const titleParts = t.title.split(" ");
  const first = titleParts[0] || t.title;
  const second = titleParts.slice(1).join(" ");

  return (
    <section
      id="products"
      className="relative py-16 sm:py-24 bg-gray-50 overflow-hidden"
    >
      {/* soft background accents */}
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-700">
              {lang === "en" ? "Core product lineup" : "ផលិតផលសំខាន់ៗ"}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
          >
            {first} <span className="text-red-600">{second}</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 font-medium leading-relaxed"
          >
            {lang === "en"
              ? "Explore our best-selling solutions built for performance, reliability, and long-term value."
              : "ស្វែងរកដំណោះស្រាយលក់ដាច់ ដែលផ្តោតលើប្រសិទ្ធភាព សុវត្ថិភាព និងភាពជឿជាក់។"}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="w-24 h-1.5 bg-red-600 mx-auto mt-6"
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {products.map((product, idx) => (
            <motion.a
              key={idx}
              href={product.href || "#"}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25, ease }}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-shadow border border-gray-100 overflow-hidden flex flex-col focus:outline-none"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.03 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.8, ease }}
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {/* tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                    SAKO
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/90 text-gray-900 text-[10px] font-black uppercase tracking-widest border border-white shadow">
                    {product.tag}
                  </span>
                </div>

                {/* corner arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 transition-colors shadow-lg">
                  <IconArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 tracking-tight">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed font-medium mb-7 flex-1">
                  {product.desc}
                </p>

                {/* CTA */}
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl bg-gray-900 text-white font-black uppercase tracking-[0.22em] text-[11px] sm:text-sm hover:bg-red-600 transition-colors shadow-xl"
                >
                  {t.view}
                </motion.button>

                {/* micro underline */}
                <div className="mt-5 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-10 bg-red-600 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>

              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 ring-1 ring-red-500/25 rounded-3xl" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;

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
