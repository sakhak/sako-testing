import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CaseItem = {
  title: string;
  img: string;
  tag?: string;
  location?: string;
  date?: string;
};

const ease = [0.2, 0.8, 0.2, 1] as const;

const Cases: React.FC = () => {
  const cases: CaseItem[] = useMemo(
    () => [
      {
        title: "Residential Installation",
        img: "https://picsum.photos/seed/case1/900/600",
        tag: "Off-grid",
        location: "Villa",
        date: "2024",
      },
      {
        title: "Commercial Project",
        img: "https://picsum.photos/seed/case2/900/600",
        tag: "Hybrid",
        location: "Retail",
        date: "2024",
      },
      {
        title: "Inverter Room Setup",
        img: "https://picsum.photos/seed/case3/900/600",
        tag: "Inverter",
        location: "Utility",
        date: "2023",
      },
      {
        title: "Solar Farm Maintenance",
        img: "https://picsum.photos/seed/case4/900/600",
        tag: "O&M",
        location: "Solar Farm",
        date: "2024",
      },
      {
        title: "Industrial Storage",
        img: "https://picsum.photos/seed/case5/900/600",
        tag: "ESS",
        location: "Factory",
        date: "2025",
      },
      {
        title: "Technical Testing",
        img: "https://picsum.photos/seed/case6/900/600",
        tag: "QA",
        location: "Lab",
        date: "2025",
      },
    ],
    []
  );

  const [active, setActive] = useState<string>("All");
  const filters = useMemo(
    () => ["All", "Off-grid", "Hybrid", "Inverter", "O&M", "ESS", "QA"],
    []
  );
  const filtered = useMemo(
    () => (active === "All" ? cases : cases.filter((c) => c.tag === active)),
    [active, cases]
  );

  return (
    <section id="cases" className="py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 sm:mb-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-full bg-red-50 text-red-600 border border-red-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em]">
                Installation Cases
              </span>
              <span className="hidden sm:inline-flex items-center rounded-full bg-gray-50 text-gray-500 border border-gray-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em]">
                Real Projects
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-[1.05]">
              Global <span className="text-red-600">Installations</span>
            </h2>
            <p className="text-gray-500 mt-4 font-medium leading-relaxed">
              Browse featured projects across residential, commercial, and
              industrial deployments.
            </p>

            <div className="mt-6 w-24 h-1.5 bg-red-600" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => {
                const on = active === f;
                return (
                  <motion.button
                    key={f}
                    onClick={() => setActive(f)}
                    whileTap={{ scale: 0.98 }}
                    className={[
                      "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-colors",
                      on
                        ? "bg-gray-900 text-white shadow-lg"
                        : "bg-gray-50 text-gray-500 border border-gray-100 hover:text-gray-900 hover:bg-gray-100",
                    ].join(" ")}
                  >
                    {f}
                  </motion.button>
                );
              })}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="sm:ml-auto bg-red-600 hover:bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.25em] transition-colors shadow-2xl"
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 14, scale: 0.98 }}
                transition={{ duration: 0.45, ease }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-shadow"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    initial={false}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.7, ease }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Tag */}
                  {item.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-900 border border-white/30 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.25em] shadow-lg">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  {/* View chip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="inline-flex items-center gap-3 bg-red-600 text-white px-5 py-3 rounded-xl shadow-2xl border border-white/20">
                        <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                          View Case
                        </span>
                        <ArrowIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="text-[12px] sm:text-sm font-black uppercase tracking-[0.2em] text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="hidden sm:flex items-center gap-2 text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/70" />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        {item.date || "—"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {item.location || "Installation"}
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 text-red-600 hover:text-gray-900 transition-colors"
                    >
                      <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                        Details
                      </span>
                      <motion.span
                        initial={false}
                        className="inline-flex"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2, ease }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.span>
                    </motion.button>
                  </div>
                </div>

                {/* Subtle shine */}
                <div className="pointer-events-none absolute -inset-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile hint */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease }}
          className="mt-10 sm:mt-12 text-center"
        >
          <p className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.25em]">
            Tip: Tap any card to view the full case details
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;

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
