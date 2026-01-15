import React from "react";
import { motion,type Variants } from "framer-motion";



const ease = [0.2, 0.8, 0.2, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

type Sol = {
  title: string;
  img: string;
  desc: string;
  tag: string;
  href?: string;
};

const Solutions: React.FC = () => {
  const solutions: Sol[] = [
    {
      title: "Off-grid Solution",
      tag: "Remote / Rural",
      desc: "Energy independence for homes, resorts, and remote sites.",
      img: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200",
      href: "#solutions-page?type=Off%20Grid%20Solution",
    },
    {
      title: "Household Storage",
      tag: "Residential",
      desc: "Store solar power safely for night-time use and backup.",
      img: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=1200",
      href: "#solutions-page?type=Household%20Storage",
    },
    {
      title: "Hybrid Storage",
      tag: "Grid + Solar",
      desc: "Smart control: self-consumption, grid feed-in, outage protection.",
      img: "https://images.unsplash.com/photo-1585822719534-91182e85b33a?auto=format&fit=crop&q=80&w=1200",
      href: "#solutions-page?type=Hybrid%20Storage%20Solar%20Solution",
    },
    {
      title: "Solar Pumping",
      tag: "Agriculture",
      desc: "Reliable water pumping with solar power — day after day.",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      href: "#solutions-page?type=Solar%20Pumping%20System",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative py-16 sm:py-24 bg-gray-900 text-white overflow-hidden"
    >
      {/* soft background glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-red-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 w-96 h-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur"
          >
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90">
              Built for real-world projects
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            System <span className="text-red-600">Solutions</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-300 font-medium leading-relaxed"
          >
            Explore complete solution packages designed for residential,
            commercial, and agricultural applications.
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
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {solutions.map((sol, idx) => (
            <motion.a
              key={idx}
              href={sol.href || "#"}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25, ease }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-sm hover:shadow-2xl hover:shadow-black/25 focus:outline-none"
            >
              {/* Image */}
              <div className="relative aspect-[4/5]">
                <motion.img
                  src={sol.img}
                  alt={sol.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.03 }}
                  whileHover={{ scale: 1.14 }}
                  transition={{ duration: 0.9, ease }}
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                {/* top tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                    SAKO
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest">
                    {sol.tag}
                  </span>
                </div>

                {/* bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <motion.h3
                    className="text-lg sm:text-xl font-black uppercase tracking-wider leading-tight"
                    initial={{ y: 0 }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease }}
                  >
                    {sol.title}
                  </motion.h3>

                  <p className="mt-2 text-sm text-gray-200/90 font-medium leading-relaxed line-clamp-2">
                    {sol.desc}
                  </p>

                  {/* underline + arrow */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="h-1 bg-red-600 rounded-full w-10 group-hover:w-16 transition-all duration-500" />
                    <div className="inline-flex items-center gap-2 text-red-300 group-hover:text-white transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                        Learn
                      </span>
                      <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 ring-1 ring-red-500/40 rounded-3xl" />
                <div className="absolute -inset-20 bg-red-600/10 blur-3xl" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button
            type="button"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-red-600 hover:bg-gray-800 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors shadow-xl"
          >
            Request a Solution Quote
          </button>
          <button
            type="button"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
          >
            Talk to Engineering
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;

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
