import React from "react";
import { motion,type Variants } from "framer-motion";


const ease = [0.2, 0.8, 0.2, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
};

const Partners: React.FC = () => {
  const partners = [
    "CATL",
    "BYD",
    "Hainergy",
    "Deye",
    "SOFAR",
    "CHiNT",
    "Growatt",
    "LONGi",
  ];

  return (
    <section className="relative py-14 sm:py-16 bg-gray-50 border-y border-gray-100 overflow-hidden">
      {/* soft accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-red-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 w-96 h-96 rounded-full bg-black/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-gray-700">
              Global trusted partners
            </span>
          </motion.div>

          <motion.h3
            variants={fadeUp}
            className="mt-4 text-2xl sm:text-3xl font-black text-gray-900 tracking-tight"
          >
            Brands that power our ecosystem
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm sm:text-base text-gray-500 font-medium max-w-2xl mx-auto"
          >
            We collaborate with leading manufacturers to ensure stable supply,
            verified performance, and long-term reliability.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="w-24 h-1.5 bg-red-600 mx-auto mt-6"
          />
        </motion.div>

        {/* Partner chips */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 sm:mt-12 flex flex-wrap justify-center items-center gap-3 sm:gap-4"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner}
              variants={chip}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease }}
              className="group"
            >
              <div
                className="px-5 sm:px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm text-gray-900 font-black tracking-wide text-sm sm:text-base select-none cursor-default
                              group-hover:border-red-600/20 group-hover:shadow-xl transition-all"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-red-600 group-hover:to-gray-900 transition-colors">
                  {partner}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: subtle divider line */}
        <div className="mt-10 sm:mt-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
};

export default Partners;
