import React from "react";
import { motion, type Variants } from "framer-motion";
import { translations } from "../translations";
import type { Language } from "../App";

interface HeroProps {
  lang: Language;
}

const ease = [0.2, 0.8, 0.2, 1] as const;

const wrap: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
};

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <section className="relative mt-[-30px] overflow-hidden">
      {/* Mobile-friendly height */}
      <div className="relative h-[110vh] min-h-[520px] sm:h-[560px] lg:h-[680px] flex items-end sm:items-center">
        {/* Background */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1920"
            alt="Modern House with Solar Panels"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
        </motion.div>

        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-0">
            <motion.div
              variants={wrap}
              initial="hidden"
              animate="show"
              className="max-w-2xl text-white"
            >
              {/* Eyebrow */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur"
              >
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90">
                  SAKO Solar
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                className="mt-4 text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05]"
              >
                {t.title}
              </motion.h1>

              {/* Bullets */}
              <motion.ul
                variants={fadeUp}
                className="mt-6 space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl font-medium text-gray-200"
              >
                {[t.sub1, t.sub2, t.sub3].map((line, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.25 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 bg-red-600 rounded-full shrink-0" />
                    <span>{line}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Buttons */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease }}
                  className="bg-red-600 hover:bg-red-700 text-white px-7 sm:px-8 py-4 rounded-2xl font-black text-[11px] sm:text-sm uppercase tracking-[0.22em] transition-colors shadow-2xl inline-flex items-center justify-center"
                >
                  {t.quote}
                  <IconArrowRight className="w-4 h-4 ml-2" />
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease }}
                  className="bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/25 px-7 sm:px-8 py-4 rounded-2xl font-black text-[11px] sm:text-sm uppercase tracking-[0.22em] transition-colors inline-flex items-center justify-center"
                >
                  {t.learn}
                  <IconSpark className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>

              {/* ✅ Product cards (FIXED: no cut + smooth swipe) */}
              <motion.div variants={fadeUp} className="mt-10 sm:mt-12">
                <div
                  className="
                    flex gap-4 sm:gap-6
                    overflow-x-auto
                    pb-4
                    px-4 sm:px-0
                    -mx-4 sm:mx-0
                    scroll-px-4
                    snap-x snap-mandatory
                    [scrollbar-width:none]
                  "
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  {/* hide scrollbar (webkit) */}
                  <style>{`
                    div::-webkit-scrollbar { display: none; }
                  `}</style>

                  {[1, 2, 3].map((idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25, ease }}
                      className="
                        snap-start
                        shrink-0
                        w-[170px] h-[170px]
                        sm:w-32 sm:h-32
                        md:w-40 md:h-40
                        rounded-3xl
                        bg-white/10 backdrop-blur-sm
                        border border-white/15
                        shadow-xl
                        overflow-hidden
                      "
                    >
                      {/* inner padding area so image never touches edges */}
                      <div className="w-full h-full p-4 flex items-center justify-center">
                        <motion.img
                          src={`https://picsum.photos/seed/${
                            idx + 100
                          }/420/420`}
                          alt={`Product ${idx}`}
                          className="w-full h-full object-contain"
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.2,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* extra right padding so last card is not cut */}
                  <div className="w-4 shrink-0 sm:hidden" />
                </div>

                <div className="mt-3 text-[11px] font-semibold text-white/75 tracking-wider sm:hidden">
                  Swipe on mobile to explore featured products →
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

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

function IconSpark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        d="M12 2l1.2 4.6L18 8l-4.8 1.4L12 14l-1.2-4.6L6 8l4.8-1.4L12 2z"
        strokeLinejoin="round"
      />
      <path
        d="M5 13l.8 2.6L8 16l-2.2.4L5 19l-.8-2.6L2 16l2.2-.4L5 13z"
        strokeLinejoin="round"
      />
      <path
        d="M19 13l.8 2.6L22 16l-2.2.4L19 19l-.8-2.6L16 16l2.2-.4L19 13z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
