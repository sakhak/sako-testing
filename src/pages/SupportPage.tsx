import React, { useMemo } from "react";
import { AnimatePresence, motion,type Variants } from "framer-motion";

/**
 * SupportPage (Redesign + Responsive + Framer Motion)
 * Install: npm i framer-motion
 * Notes:
 * - Mobile-first layout (stack), desktop alternates
 * - Smooth scroll anchors + animated sections
 * - No FontAwesome needed (SVG icons included)
 */

const ease = [0.2, 0.8, 0.2, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

const heroSwap: Variants = {
  initial: { opacity: 0, scale: 1.06, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(6px)",
    transition: { duration: 0.35, ease },
  },
};

type Section = {
  id: "faq" | "training" | "promotion" | "download";
  title: string;
  desc: string;
  img: string;
  badge?: string;
  cta?: string;
};

const SupportPage: React.FC = () => {
  const sections: Section[] = useMemo(
    () => [
      {
        id: "faq",
        title: "FAQ",
        desc: "Get quick answers to common questions about product installation, maintenance, and system configurations.",
        img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "training",
        title: "Training Video",
        desc: "Detailed video tutorials on how to set up SAKO solar inverters, lithium batteries, and smart monitoring apps.",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
      },
      {
        id: "promotion",
        title: "Promotion",
        desc: "Check out our latest seasonal offers, bulk purchase discounts, and new technology launch campaigns.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        badge: "COMING SOON",
      },
      {
        id: "download",
        title: "Download",
        desc: "Access technical datasheets, user manuals, installation guides, and professional certification documents.",
        img: "https://images.unsplash.com/photo-1544391682-1a51d9df7e1c?auto=format&fit=crop&q=80&w=1200",
        cta: "DOWNLOAD FOR FREE",
      },
    ],
    []
  );

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative mt-[-30px] overflow-hidden">
        <div className="relative h-[62vh] min-h-[520px] sm:h-[56vh] lg:h-[55vh] flex items-end sm:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key="support-hero"
              variants={heroSwap}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=1920"
                className="w-full h-full object-cover"
                alt="Solar Panels at Sunset"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/40 to-black/85" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 w-full pb-10 sm:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="mx-auto max-w-3xl"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">
                    Help Center
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-widest"
                >
                  Support
                </motion.h1>

                <motion.div
                  variants={fadeUp}
                  className="w-16 sm:w-20 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"
                />

                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-sm sm:text-lg text-gray-200 font-medium leading-relaxed"
                >
                  SAKO is committed to providing world-class assistance. Access
                  our comprehensive help resources tailored for global
                  installers and end-users.
                </motion.p>

                {/* Quick nav pills (mobile friendly) */}
                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-wrap justify-center gap-2"
                >
                  {sections.map((s) => (
                    <motion.a
                      key={s.id}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.18, ease }}
                      href={`#${s.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur text-white text-[11px] font-black uppercase tracking-[0.18em] transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      {s.title}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 space-y-16 sm:space-y-24 lg:space-y-32">
        {sections.map((section, idx) => {
          const reverse = idx % 2 !== 0;

          return (
            <section
              key={section.id}
              id={section.id}
              className={`scroll-mt-24 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 ${
                reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image / Visual */}
              <motion.div
                variants={cardIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="lg:w-1/2 w-full"
              >
                <div className="relative group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-shadow">
                  <motion.img
                    src={section.img}
                    alt={section.title}
                    className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                    initial={{ scale: 1.03 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.9, ease }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  {/* Overlay widgets per section */}
                  {section.id === "faq" && <FaqOverlay />}
                  {section.id === "training" && <TrainingOverlay />}
                  {section.id === "promotion" && section.badge && (
                    <PromoOverlay badge={section.badge} />
                  )}
                  {section.id === "download" && section.cta && (
                    <DownloadOverlay cta={section.cta} />
                  )}
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="lg:w-1/2 w-full flex flex-col justify-center"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2"
                >
                  <span className="w-9 h-9 rounded-2xl bg-red-50 border border-red-100 text-red-600 inline-flex items-center justify-center">
                    {section.id === "faq" && (
                      <IconQuestion className="w-5 h-5" />
                    )}
                    {section.id === "training" && (
                      <IconPlay className="w-5 h-5" />
                    )}
                    {section.id === "promotion" && (
                      <IconTag className="w-5 h-5" />
                    )}
                    {section.id === "download" && (
                      <IconDownload className="w-5 h-5" />
                    )}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                    Support Resource
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="mt-4 text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight"
                >
                  {section.title}
                </motion.h2>

                <motion.div
                  variants={fadeUp}
                  className="w-14 sm:w-16 h-1.5 bg-red-600 mt-6 rounded-full"
                />

                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-sm sm:text-lg text-gray-500 leading-relaxed font-medium"
                >
                  {section.desc}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 flex flex-col sm:flex-row gap-3"
                >
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-red-600 hover:bg-gray-900 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors shadow-xl"
                    type="button"
                  >
                    Explore {section.title}
                    <IconArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    href="#download"
                    className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 text-gray-900 hover:text-red-600 font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                  >
                    Go to Downloads
                    <IconDownload className="w-4 h-4 ml-2" />
                  </motion.a>
                </motion.div>

                {/* Small stats cards */}
                <motion.div
                  variants={fadeUp}
                  className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <InfoCard
                    label="Popular Resource"
                    value="Standard Manual v2.0"
                  />
                  <InfoCard label="Last Updated" value="Oct 20, 2024" />
                </motion.div>
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Sticky bottom CTA on mobile */}
      <div className="lg:hidden sticky bottom-0 z-40 border-t border-gray-100 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-2xl bg-red-50 border border-red-100 text-red-600 inline-flex items-center justify-center">
              <IconHeadset className="w-5 h-5" />
            </span>
            <div className="leading-tight">
              <div className="text-[11px] font-black uppercase tracking-widest text-gray-900">
                Need Help?
              </div>
              <div className="text-[11px] font-semibold text-gray-500">
                Contact technical support
              </div>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="shrink-0 inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-red-600 text-white font-black uppercase text-[11px] tracking-[0.22em]"
            type="button"
          >
            Contact
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;

/* -------------------- Mini components -------------------- */

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 hover:border-red-200 transition-colors">
      <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
        {label}
      </div>
      <div className="mt-2 text-[12px] font-extrabold text-gray-900 uppercase tracking-wide">
        {value}
      </div>
    </div>
  );
}

/* -------------------- Overlays -------------------- */

function FaqOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease }}
        className="px-5 sm:px-8 py-4 sm:py-5 rounded-full bg-white/90 backdrop-blur border border-white/70 shadow-2xl flex items-center gap-3 sm:gap-4"
      >
        <span className="text-red-600">
          <IconChat className="w-7 h-7 sm:w-8 sm:h-8" />
        </span>
        <span className="font-black text-gray-900 text-base sm:text-xl tracking-tight">
          FAQ?
        </span>
      </motion.div>
    </div>
  );
}

function TrainingOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease }}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600 text-white shadow-2xl flex items-center justify-center"
        aria-label="Play training video"
      >
        <span className="ml-1">
          <IconPlayFilled className="w-7 h-7 sm:w-8 sm:h-8" />
        </span>
        <motion.span
          className="absolute inset-0 rounded-full border border-white/40"
          animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.15, 0.55] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.button>
    </div>
  );
}

function PromoOverlay({ badge }: { badge: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease }}
        className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 px-8 sm:px-12 py-5 sm:py-7 shadow-2xl"
      >
        <div className="text-white font-black text-2xl sm:text-4xl tracking-widest uppercase text-center">
          {badge}
        </div>
        <div className="mt-3 text-center text-white/80 text-[11px] font-semibold tracking-[0.22em] uppercase">
          New campaigns coming soon
        </div>
      </motion.div>
    </div>
  );
}

function DownloadOverlay({ cta }: { cta: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.button
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease }}
        className="bg-gray-900 hover:bg-red-600 text-white px-7 sm:px-10 py-4 sm:py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.28em] shadow-2xl flex items-center gap-3"
      >
        <IconDownload className="w-5 h-5" />
        <span>{cta}</span>
      </motion.button>
    </div>
  );
}

/* -------------------- Icons (SVG, no deps) -------------------- */

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

function IconDownload({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 3v10" strokeLinecap="round" />
      <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 21h16" strokeLinecap="round" />
    </svg>
  );
}

function IconQuestion({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 18h.01" strokeLinecap="round" />
      <path
        d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    </svg>
  );
}

function IconPlay({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M11 8l6 4-6 4V8z" strokeLinejoin="round" />
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    </svg>
  );
}

function IconPlayFilled({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 8.5v7l6-3.5-6-3.5z" />
    </svg>
  );
}

function IconTag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20.59 13.41L11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82z" />
      <path d="M7 7h.01" strokeLinecap="round" />
    </svg>
  );
}

function IconChat({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
      <path d="M7.5 9h9" strokeLinecap="round" />
      <path d="M7.5 12h6" strokeLinecap="round" />
    </svg>
  );
}

function IconHeadset({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M4 12v5a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2z" />
      <path d="M20 12v5a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2z" />
      <path d="M12 19v2" strokeLinecap="round" />
    </svg>
  );
}
