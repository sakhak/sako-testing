import React from "react";
import { translations } from "../translations";
import type { Language } from "../App";

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1920"
          alt="Modern House with Solar Panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
            {t.title}
          </h1>

          <ul className="space-y-4 mb-10 text-lg md:text-xl font-medium text-gray-200">
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span>{t.sub1}</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span>{t.sub2}</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span>{t.sub3}</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl">
              {t.quote}
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest transition-all">
              {t.learn}
            </button>
          </div>

          <div className="flex items-end space-x-6 overflow-hidden">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-2 flex items-center justify-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={`https://picsum.photos/seed/${idx + 100}/200/200`}
                  alt={`Product ${idx}`}
                  className="max-w-full max-h-full object-contain filter drop-shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
