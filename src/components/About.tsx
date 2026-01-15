import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { translations } from "../translations";
import type { Language } from "../App";

interface AboutProps {
  onMoreClick?: () => void;
  lang: Language;
}

const ease = [0.2, 0.8, 0.2, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const About: React.FC<AboutProps> = ({ onMoreClick, lang }) => {
  const t = translations[lang].about;

  const titleParts = useMemo(() => {
    const parts = t.title.split("SAKO");
    return { before: parts[0] ?? "", after: parts.slice(1).join("SAKO") ?? "" };
  }, [t.title]);

  return (
    <section id="about" className="py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 border border-red-100 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] shadow-sm">
                {t.badge}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-[1.05] tracking-tight"
            >
              {titleParts.before} <span className="text-red-600">SAKO?</span>
              {titleParts.after ? (
                <span className="text-gray-900"> {titleParts.after}</span>
              ) : null}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed"
            >
              {t.p1}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed"
            >
              {t.p2}
            </motion.p>

            {/* Highlights (nice on mobile) */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                {
                  label: lang === "en" ? "Factory Direct" : "រោងចក្រផ្ទាល់",
                  value: "OEM/ODM",
                },
                {
                  label: lang === "en" ? "Global Supply" : "ផ្គត់ផ្គង់សកល",
                  value: "30+ Markets",
                },
                {
                  label: lang === "en" ? "Support" : "គាំទ្រ",
                  value: "After-sales",
                },
              ].map((x) => (
                <div
                  key={x.label}
                  className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4"
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                    {x.label}
                  </div>
                  <div className="mt-2 text-sm font-black text-gray-900 uppercase tracking-wide">
                    {x.value}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onMoreClick}
                className="bg-red-600 hover:bg-gray-900 text-white px-8 sm:px-10 py-4 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-[0.25em] transition-colors shadow-2xl inline-flex items-center gap-3"
              >
                <span>{t.cta}</span>
                <motion.span
                  initial={false}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease }}
                  className="inline-flex"
                >
                  <ArrowIcon className="w-4 h-4" />
                </motion.span>
              </motion.button>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="bg-white text-gray-900 border border-gray-100 hover:border-red-200 hover:text-red-600 px-8 sm:px-10 py-4 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-[0.25em] transition-colors shadow-sm inline-flex items-center gap-3"
              >
                <span>{lang === "en" ? "Contact" : "ទំនាក់ទំនង"}</span>
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Decorative blur */}
            <div className="pointer-events-none absolute -z-10 -left-24 -top-24 w-72 h-72 bg-red-600/10 blur-3xl rounded-full" />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            {/* Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease }}
              className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl bg-white"
            >
              <div className="relative aspect-[16/10] sm:aspect-video overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200"
                  alt="SAKO Factory"
                  className="w-full h-full object-cover grayscale-[0.15]"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.9, ease }}
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />

                {/* Play Button */}
                <motion.button
                  type="button"
                  aria-label="Play video"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                  className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 bg-red-600 hover:bg-gray-900 text-white rounded-full flex items-center justify-center shadow-2xl border border-white/20"
                >
                  <i className="fa-solid fa-play ml-1 text-lg sm:text-2xl"></i>
                </motion.button>

                {/* Top badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-900 border border-white/30 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.25em] shadow-lg">
                    {lang === "en" ? "Factory Tour" : "ទស្សនារោងចក្រ"}
                  </span>
                </div>

                {/* Bottom info strip */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/90 backdrop-blur-md border border-white/30 px-5 py-4">
                      <div className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">
                        {lang === "en" ? "Quality" : "គុណភាព"}
                      </div>
                      <div className="mt-2 text-sm font-black text-gray-900 uppercase tracking-wide">
                        ISO / QC
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/90 backdrop-blur-md border border-white/30 px-5 py-4">
                      <div className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">
                        {lang === "en" ? "Capacity" : "សមត្ថភាព"}
                      </div>
                      <div className="mt-2 text-sm font-black text-gray-900 uppercase tracking-wide">
                        High Output
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer row */}
              <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                    {lang === "en" ? "About SAKO" : "អំពី SAKO"}
                  </div>
                  <div className="mt-2 text-base font-black text-gray-900 uppercase tracking-wide">
                    {lang === "en" ? "Manufacturing & R&D" : "ផលិតកម្ម និង R&D"}
                  </div>
                </div>

                <motion.a
                  href="#solutions"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-gray-900 text-white hover:bg-red-600 transition-colors px-6 py-3 text-[10px] font-black uppercase tracking-[0.25em] shadow-lg"
                >
                  <span>
                    {lang === "en" ? "View Solutions" : "មើលដំណោះស្រាយ"}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Subtle shine */}
              <div className="pointer-events-none absolute -inset-40 opacity-0 hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </div>
            </motion.div>

            {/* Decorative blocks */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 sm:w-32 sm:h-32 bg-red-600/10 -z-10 rounded-3xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 bg-gray-900/5 -z-10 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

/* ---------------- Icons (SVG) ---------------- */

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h12" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
