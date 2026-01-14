import React from "react";
import { translations } from "../translations";
import type { Language } from "../App";

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;
  // const nt = translations[lang].nav;

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <span className="text-4xl font-black tracking-tighter text-white">
              SAKO <span className="text-red-600">.</span>
            </span>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              {t.tagline}
            </p>
            <div className="flex space-x-4">
              {["facebook-f", "linkedin-in", "youtube", "instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/5 hover:bg-red-600 text-gray-400 hover:text-white rounded flex items-center justify-center transition-all"
                  >
                    <i className={`fa-brands fa-${social}`}></i>
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-red-600">
              {t.categories}
            </h4>
            <ul className="space-y-4 text-gray-500 text-[10px] font-bold uppercase tracking-[0.1em]">
              {[
                "Solar Inverters",
                "Lithium Batteries",
                "Solar LED Lights",
                "Solar Panels",
                "Charge Controllers",
                "Storage Systems",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-red-600 transition-colors flex items-center space-x-2"
                  >
                    <span className="text-red-600">›</span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-red-600">
              {t.resources}
            </h4>
            <ul className="space-y-4 text-gray-500 text-[10px] font-bold uppercase tracking-[0.1em]">
              {[
                "FAQ",
                "Training Video",
                "Promotion",
                "Download",
                "Technical Support",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#support-page#${link
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="hover:text-red-600 transition-colors flex items-center space-x-2"
                  >
                    <span className="text-red-600">›</span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-red-600">
              {t.inquiry}
            </h4>
            <form className="space-y-2">
              <input
                type="text"
                placeholder="NAME"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded text-[10px] font-bold uppercase tracking-widest focus:border-red-600 outline-none transition-colors"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded text-[10px] font-bold uppercase tracking-widest focus:border-red-600 outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="PHONE"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded text-[10px] font-bold uppercase tracking-widest focus:border-red-600 outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="COUNTRY"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded text-[10px] font-bold uppercase tracking-widest focus:border-red-600 outline-none transition-colors"
              />
              <textarea
                placeholder="MESSAGE"
                rows={3}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded text-[10px] font-bold uppercase tracking-widest focus:border-red-600 outline-none transition-colors resize-none"
              ></textarea>
              <button className="w-full bg-red-600 hover:bg-white hover:text-red-600 text-white py-3 rounded font-black uppercase text-[10px] tracking-[0.2em] transition-all">
                {t.submit}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-bold uppercase tracking-widest">
          <p>{t.rights}</p>
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
            <div className="flex items-center space-x-3">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://sako.com"
                alt="QR"
                className="w-10 h-10 opacity-30 grayscale hover:opacity-100 transition-opacity"
              />
              <span>SAKO Official</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-red-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-600">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
