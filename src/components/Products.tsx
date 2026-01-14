import React from "react";
import { translations } from "../translations";
import type { Language } from "../App";

interface ProductsProps {
  lang: Language;
}

const Products: React.FC<ProductsProps> = ({ lang }) => {
  const t = translations[lang].products;
  const products = [
    {
      title: t.items.inverters,
      desc:
        lang === "en"
          ? "High-efficiency smart monitoring off-grid and hybrid series for reliable power conversion."
          : "ស៊េរីអាំងវែរទ័រឆ្លាតវៃសម្រាប់បម្លែងថាមពលដែលគួរឱ្យទុកចិត្ត។",
      image:
        "https://images.unsplash.com/photo-1548333341-8342447732e5?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.items.batteries,
      desc:
        lang === "en"
          ? "Long-life LiFePO4 batteries with intelligent BMS for safe and stable energy storage."
          : "អាគុយ LiFePO4 ដែលមានអាយុកាលវែង និងប្រព័ន្ធ BMS វៃឆ្លាត។",
      image:
        "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.items.ess,
      desc:
        lang === "en"
          ? "All-in-one residential energy solutions combining battery and inverter technology."
          : "ដំណោះស្រាយថាមពលលំនៅដ្ឋានរួមបញ្ចូលគ្នាដែលរួមបញ្ចូលបច្ចេកវិទ្យាអាគុយ និងអាំងវែរទ័រ។",
      image:
        "https://images.unsplash.com/photo-1592833159057-6fdc2a5c373a?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          {t.title.split(" ")[0]}{" "}
          <span className="text-red-600">{t.title.split(" ")[1] || ""}</span>
        </h2>
        <div className="w-24 h-1.5 bg-red-600 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {product.desc}
                </p>
                <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm rounded-md transition-colors">
                  {t.view}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
