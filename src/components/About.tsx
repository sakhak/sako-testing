import React from "react";
import { translations } from "../translations";
import type { Language } from "../App";

interface AboutProps {
  onMoreClick?: () => void;
  lang: Language;
}

const About: React.FC<AboutProps> = ({ onMoreClick, lang }) => {
  const t = translations[lang].about;
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest rounded-full">
              {t.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              {t.title.split("SAKO")[0]}{" "}
              <span className="text-red-600">SAKO?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{t.p1}</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {t.p2}
            </p>
            <button
              onClick={onMoreClick}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-md font-bold text-sm uppercase tracking-widest transition-all shadow-lg inline-flex items-center space-x-2"
            >
              <span>{t.cta}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="relative group">
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200"
                alt="SAKO Factory"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <button className="absolute inset-0 m-auto w-20 h-20 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center text-2xl shadow-2xl transform group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-play ml-1"></i>
              </button>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600/10 -z-10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
