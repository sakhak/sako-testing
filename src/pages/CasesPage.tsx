import React from "react";
import { motion, type Variants } from "framer-motion";

type CaseItem = { title: string; system: string; date: string; img: string };
type SectionItem = { title: string; cases: CaseItem[] };

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const CasesPage: React.FC = () => {
  const sections: SectionItem[] = [
    {
      title: "Off Grid Solar System",
      cases: [
        {
          title: "Villa Installation",
          system: "5KW Off-Grid System",
          date: "2024-03",
          img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Remote Resort Power",
          system: "20KW Off-Grid Array",
          date: "2023-11",
          img: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Eco-Lodge Energy",
          system: "10KW Hybrid Storage",
          date: "2024-01",
          img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    {
      title: "DC & AC Solar Kits (SHS Projects)",
      cases: [
        {
          title: "Community Rural Project",
          system: "Portable AC Solar Kit",
          date: "2023-09",
          img: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Mobile Home Solar",
          system: "DC Basic Lighting Kit",
          date: "2024-02",
          img: "https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Fisherman Power Pack",
          system: "Outdoor Portable Kit",
          date: "2023-12",
          img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    {
      title: "Storage System Solution",
      cases: [
        {
          title: "City Villa Storage",
          system: "10KWh Lithium Bank",
          date: "2024-04",
          img: "https://images.unsplash.com/photo-1558444452-192569b9190c?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Apartment Energy Backup",
          system: "5KWh Stackable ESS",
          date: "2023-10",
          img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Rooftop Storage Project",
          system: "Residential All-in-one",
          date: "2024-01",
          img: "https://images.unsplash.com/photo-1449156001931-8283427c90b4?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    {
      title: "Solar Pumping System",
      cases: [
        {
          title: "Agricultural Irrigation",
          system: "10HP Pumping Station",
          date: "2024-02",
          img: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Village Water Supply",
          system: "5HP Deep Well Pump",
          date: "2023-08",
          img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Livestock Farm Pumping",
          system: "2HP Ground-mounted",
          date: "2024-05",
          img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative mt-[-30px] overflow-hidden">
        <div className="relative h-[56vh] min-h-[420px] sm:h-[52vh] sm:min-h-[460px] lg:h-[46vh] lg:min-h-[500px] flex items-center">
          <motion.div
            initial={{ scale: 1.12, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1920"
              className="w-full h-full object-cover"
              alt="Solar Power Plant"
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/70" />
          </motion.div>

          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="mx-auto"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">
                    Featured Installations
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-5 sm:mt-7 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]"
                >
                  The best case for{" "}
                  <span className="text-red-500">off grid solar systems</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed font-medium"
                >
                  Discover our global installations across residential,
                  commercial, and industrial sectors. We provide specialized
                  off-grid solar systems, DC/AC solar kits, solar pumping
                  systems, and total storage solutions.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                  <a
                    href="#cases"
                    className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition-colors font-bold text-sm tracking-wide shadow-lg shadow-red-600/20"
                  >
                    Explore Cases
                  </a>
                  <a
                    href="#"
                    className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur transition-colors font-bold text-sm tracking-wide"
                  >
                    Request Quote
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* soft bottom fade */}{" "}
      </section>

      {/* CONTENT */}
      <div
        id="cases"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24"
      >
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mb-14 sm:mb-20 lg:mb-24 last:mb-0"
          >
            {/* Section header */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col mb-6 sm:mb-10"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
                  {section.title}
                </h2>

                {/* tiny badge (desktop) */}
                <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span className="text-[11px] font-extrabold tracking-widest uppercase text-gray-500">
                    {section.cases.length} projects
                  </span>
                </div>
              </div>

              <div className="w-12 sm:w-16 h-1.5 bg-red-600 mt-3 sm:mt-4 rounded-full" />
              <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-3xl">
                Real installations delivered with reliable components, clean
                wiring, and long-term performance.
              </p>
            </motion.div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
              {section.cases.map((c, cidx) => (
                <motion.article
                  key={cidx}
                  variants={cardIn}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl hover:shadow-black/10"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <motion.img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      initial={false}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-80" />

                    {/* date pill */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-600 text-white text-[9px] sm:text-[10px] font-black px-2.5 sm:px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {c.date}
                    </div>

                    {/* bottom label */}
                    <div className="absolute left-4 bottom-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur">
                        <span className="text-[10px] font-extrabold tracking-widest uppercase text-white/90">
                          Case Study
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                          {c.system}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 17L17 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-gray-700 group-hover:text-red-600 transition-colors"
                            />
                            <path
                              d="M9 7H17V15"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-gray-700 group-hover:text-red-600 transition-colors"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs font-semibold text-gray-500">
                          Completed
                        </span>
                      </div>

                      <button className="text-xs font-extrabold tracking-widest uppercase text-gray-900 group-hover:text-red-600 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CasesPage;
