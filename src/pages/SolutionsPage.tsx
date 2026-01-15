import React, { useMemo } from "react";
import { AnimatePresence, motion,type Variants } from "framer-motion";

/**
 * SolutionsPage (Redesign + Responsive + Framer Motion)
 * Install: npm i framer-motion
 * Notes:
 * - Overview + Detail modes
 * - Animated hero, cards, icons, layout, packages
 * - No FontAwesome (SVG icons included)
 * - Keeps your data + logic, just redesigned + animated
 */

interface SolutionsPageProps {
  type?: string;
}

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

const panelSwap: Variants = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    transition: { duration: 0.35, ease },
  },
};

type PackageOffGrid = {
  name: string;
  capacity: string;
  components: string[];
  img: string;
};

type PackagePoints = {
  name: string;
  capacity: string;
  points: string[];
  img: string;
};

const SolutionsPage: React.FC<SolutionsPageProps> = ({
  type = "Solutions",
}) => {
  const isOverview = type === "Solutions" || !type;
  const isHybrid = type === "Hybrid Storage Solar Solution";
  const isPumping = type === "Solar Pumping System";
  const isBalcony = type === "Solar Balcony System Solution";

  // --- COMMON BENEFIT DATA ---
  const benefits = useMemo(
    () => [
      {
        icon: <IconTool className="w-7 h-7" />,
        title: "Easy Installation",
        desc: "Plug-and-play design reduces setup time and labor costs for global installers.",
      },
      {
        icon: <IconBolt className="w-7 h-7" />,
        title: "High Performance",
        desc: "Industrial-grade conversion efficiency ensures maximum ROI for end-users.",
      },
      {
        icon: <IconPhone className="w-7 h-7" />,
        title: "Smart Management",
        desc: "Intelligent cloud-based monitoring via SAKO App for real-time energy tracking.",
      },
      {
        icon: <IconShield className="w-7 h-7" />,
        title: "Safe and Reliable",
        desc: "Multi-layer protection systems with high-safety LiFePO4 battery technology.",
      },
    ],
    []
  );

  // --- OFF GRID SPECIFIC DATA ---
  const offGridPackages: PackageOffGrid[] = useMemo(
    () => [
      {
        name: "Residential Energy Storage System",
        capacity: "5kW / 10kWh",
        components: [
          "10 x 550W Mono Half-cut Solar Panels",
          "SAKO SUN-G 5KW Off-Grid Hybrid Inverter",
          "2 x 48V 100Ah Lithium Battery Packs",
          "PV Cable & MC4 Connectors Set",
          "5-Year System Standard Warranty",
        ],
        img: "https://images.unsplash.com/photo-1548333341-8342447732e5?auto=format&fit=crop&q=80&w=1200",
      },
      {
        name: "Commercial Solar Storage Solution",
        capacity: "30kW / 100kWh",
        components: [
          "60 x 550W Mono Half-cut Solar Panels",
          "SAKO Mega-Power 30KW Industrial Inverter",
          "10 x High Voltage Rack Lithium Battery Packs",
          "High-Voltage PV Cable & MC4 Connectors",
          "10-Year Long-term System Warranty",
        ],
        img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1200",
      },
    ],
    []
  );

  // --- HYBRID SPECIFIC DATA ---
  const hybridPackages: PackagePoints[] = useMemo(
    () => [
      {
        name: "Hybrid Energy Storage System",
        capacity: "6kW / 15kWh",
        points: [
          "Can operate in On-grid or Off-grid mode",
          "Sell power to the grid or store excess energy",
          "Protect against utility outages",
        ],
        img: "https://images.unsplash.com/photo-1449156001931-8283427c90b4?auto=format&fit=crop&q=80&w=1200",
      },
      {
        name: "Commercial Hybrid Energy Storage",
        capacity: "50kW / 120kWh",
        points: [
          "Seamless switching between grid and battery",
          "Peak shaving and load shifting capability",
          "Industrial grade reliability and scalability",
        ],
        img: "https://images.unsplash.com/photo-1558444452-192569b9190c?auto=format&fit=crop&q=80&w=1200",
      },
    ],
    []
  );

  // --- PUMPING SPECIFIC DATA ---
  const pumpingPackages: PackagePoints[] = useMemo(
    () => [
      {
        name: "Solar Pumping System",
        capacity: "1HP – 10HP",
        points: [
          "Provide clean water with only solar energy",
          "Water can be stored in holding tanks for continuous use",
          "Ideal for small-scale farming and residential water supply",
        ],
        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      },
      {
        name: "Industrial Solar Pumping Station",
        capacity: "20HP – 100HP",
        points: [
          "Capable of large-volume water transport for irrigation",
          "Can be connected to the grid or backup generator for 24/7 use",
          "Heavy-duty pumping inverter with intelligent water level control",
        ],
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      },
    ],
    []
  );

  // --- BALCONY SPECIFIC DATA ---
  const balconyPackages: PackagePoints[] = useMemo(
    () => [
      {
        name: "M-ESS Balcony Energy Storage System",
        capacity: "1.5KWh",
        points: [
          "Integrated inverter / MPPT charger / LiFePO₄ battery",
          "Supports self-consumption and grid feedback",
          "Plug-and-play installation for any balcony",
          "Smart APP monitoring via Wi-Fi/Bluetooth",
        ],
        img: "https://images.unsplash.com/photo-1595844730298-b9f1ff9b5993?auto=format&fit=crop&q=80&w=1200",
      },
      {
        name: "M-ESS Max Balcony Solution",
        capacity: "3KWh",
        points: [
          "Double capacity for extended night-time usage",
          "Advanced space-saving vertical mounting design",
          "High-cycle life LiFePO4 cells for 10+ years use",
          "Zero-export function compatible with micro inverters",
        ],
        img: "https://images.unsplash.com/photo-1585822719534-91182e85b33a?auto=format&fit=crop&q=80&w=1200",
      },
    ],
    []
  );

  const relatedProducts = useMemo(
    () => [
      {
        name: "Solar Panel",
        img: "https://picsum.photos/seed/sol-pan/800/800",
      },
      {
        name: "Micro Inverter",
        img: "https://picsum.photos/seed/micro-inv/800/800",
      },
      { name: "ESS-1K Unit", img: "https://picsum.photos/seed/ess-1k/800/800" },
      {
        name: "Pumping Inverter",
        img: "https://picsum.photos/seed/pump-inv/800/800",
      },
    ],
    []
  );

  const overviewSolutions = useMemo(
    () => [
      {
        title: "Off Grid Solution",
        img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1200",
        desc: "Complete independence for remote locations.",
      },
      {
        title: "Hybrid Storage Solar Solution",
        img: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=1200",
        desc: "Smart management of grid and solar energy.",
      },
      {
        title: "Solar Pumping System",
        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
        desc: "Efficient water solutions for agriculture.",
      },
      {
        title: "Solar Balcony System Solution",
        img: "https://images.unsplash.com/photo-1585822719534-91182e85b33a?auto=format&fit=crop&q=80&w=1200",
        desc: "Compact energy storage for urban living.",
      },
    ],
    []
  );

  // -------- OVERVIEW MODE --------
  if (isOverview) {
    return (
      <div className="bg-white">
        {/* HERO */}
        <section className="relative mt-[-30px] overflow-hidden">
          <div className="relative h-[58vh] min-h-[480px] sm:h-[52vh] lg:h-[48vh] flex items-end sm:items-center">
            <motion.div
              initial={{ scale: 1.12, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease }}
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=1920"
                className="w-full h-full object-cover"
                alt="SAKO Solutions"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/85" />
            </motion.div>

            <div className="relative z-10 w-full pb-12 sm:pb-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="max-w-3xl text-center md:text-left"
                >
                  <motion.div
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">
                      Solar Solutions
                    </span>
                  </motion.div>

                  <motion.h1
                    variants={fadeUp}
                    className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight"
                  >
                    Our Solutions
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="mt-4 text-sm sm:text-lg text-gray-200 leading-relaxed font-medium"
                  >
                    Reliable, sustainable, and intelligent solar energy systems
                    tailored for residential, industrial, and agricultural
                    applications worldwide.
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="mt-7 flex flex-col sm:flex-row gap-3"
                  >
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease }}
                      href="#solutions-grid"
                      className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-red-600 hover:bg-white hover:text-red-600 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors shadow-2xl shadow-red-600/20"
                    >
                      Explore Solutions
                    </motion.a>

                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease }}
                      href="#benefits"
                      className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                    >
                      Why SAKO
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>

          </div>
        </section>

        {/* GRID */}
        <section
          id="solutions-grid"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-end justify-between gap-6 mb-10 sm:mb-14"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                  Choose a Solution
                </h2>
                <div className="w-14 sm:w-16 h-1.5 bg-red-600 mt-4 rounded-full" />
                <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium max-w-2xl">
                  Click a solution to open the detailed page (use your router or
                  query param logic).
                </p>
              </div>

              <div className="hidden md:flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-gray-400">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>Overview</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {overviewSolutions.map((sol) => (
                <motion.a
                  key={sol.title}
                  variants={cardIn}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.25, ease }}
                  href={`#solutions-page?type=${encodeURIComponent(sol.title)}`}
                  className="group relative min-h-[320px] sm:min-h-[360px] lg:min-h-[420px] overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-black/10"
                >
                  <motion.img
                    src={sol.img}
                    alt={sol.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.9, ease }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-white/10" />

                  <div className="absolute bottom-7 sm:bottom-10 left-7 sm:left-10 right-7 sm:right-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur text-white">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-[11px] font-semibold tracking-widest uppercase">
                        Solution
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                      {sol.title}
                    </h3>
                    <p className="mt-2 text-white/80 text-sm font-medium max-w-sm">
                      {sol.desc}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-red-400 group-hover:text-red-300 transition-colors">
                      <span className="text-[11px] font-black uppercase tracking-[0.22em]">
                        Learn More
                      </span>
                      <motion.span
                        whileHover={{ x: 4 }}
                        className="inline-flex"
                      >
                        <IconArrowRight className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* BENEFITS (shared style) */}
        <section
          id="benefits"
          className="py-12 sm:py-16 lg:py-24 bg-gray-50 border-y border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.div
                variants={fadeUp}
                className="text-center mb-10 sm:mb-14"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                  Why Choose SAKO
                </h2>
                <div className="w-14 sm:w-16 h-1.5 bg-red-600 mx-auto mt-4 rounded-full" />
                <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium max-w-2xl mx-auto">
                  Designed for installers and end-users: fast deployment, stable
                  output, and safe long-term operation.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                {benefits.map((b) => (
                  <motion.div
                    key={b.title}
                    variants={cardIn}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease }}
                    className="rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-black/10 p-7 sm:p-8 text-center"
                  >
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center">
                      {b.icon}
                    </div>
                    <h3 className="mt-6 text-[12px] font-black uppercase tracking-[0.2em] text-gray-900">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500 font-medium leading-relaxed">
                      {b.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // -------- DETAIL MODES --------
  const currentHero = isHybrid
    ? {
        title: "HYBRID STORAGE",
        subtitle: "SOLAR SOLUTION",
        desc: "Integration of grid power, solar generation, and lithium battery storage.",
        img: "https://images.unsplash.com/photo-1449156001931-8283427c90b9b1?auto=format&fit=crop&q=80&w=1920",
      }
    : isPumping
    ? {
        title: "SOLAR PUMPING",
        subtitle: "SOLUTION",
        desc: "One-stop solar pumping solution for sustainable water management.",
        img: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=1920",
      }
    : isBalcony
    ? {
        title: "M-ESS BALCONY",
        subtitle: "ENERGY STORAGE SYSTEM",
        desc: "One-stop AC & DC balcony solar system for urban apartments.",
        img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1920",
        badge: "1.5KWh / 3KWh",
      }
    : {
        title: "OFF-GRID SOLAR",
        subtitle: "STORAGE SOLUTIONS",
        desc: "True energy independence with high-performance storage.",
        img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1920",
      };

  const currentPackages = (
    isHybrid
      ? hybridPackages
      : isPumping
      ? pumpingPackages
      : isBalcony
      ? balconyPackages
      : offGridPackages
  ) as Array<PackagePoints | PackageOffGrid>;

  const currentIntro = isHybrid
    ? "Residential, commercial, and industrial applications from 5kW to 100MW."
    : isPumping
    ? "Residential, agricultural, and industrial use from 0.75kW to 150kW."
    : isBalcony
    ? "Designed for residential and apartment use, compatible with solar panels and micro inverters."
    : "Decades of expertise in R&D for safe and efficient energy independence.";

  const layoutSubtitle = isHybrid
    ? "Residential, C&I"
    : isPumping
    ? "AC & DC"
    : isBalcony
    ? "AC & DC"
    : "Off-Grid Residential";

  const isPointsPkg = (
    pkg: PackagePoints | PackageOffGrid
  ): pkg is PackagePoints => (pkg as PackagePoints).points !== undefined;

  return (
    <div className="bg-white">
      {/* HERO (Detail) */}
      <section className="relative overflow-hidden">
        <div className="relative h-[78vh] min-h-[620px] sm:h-[72vh] flex items-end sm:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={type}
              variants={panelSwap}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
            >
              <img
                src={currentHero.img}
                className="w-full h-full object-cover"
                alt={currentHero.title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/45 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 w-full pb-12 sm:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-3xl"
              >
                {isBalcony && (currentHero as any).badge && (
                  <motion.div
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-red-600 font-black text-[11px] uppercase tracking-widest shadow-2xl"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    {(currentHero as any).badge}
                  </motion.div>
                )}

                <motion.h1
                  variants={fadeUp}
                  className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.06]"
                >
                  {currentHero.title} <br />
                  <span className="text-red-500">{currentHero.subtitle}</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 text-sm sm:text-lg text-gray-200 leading-relaxed font-medium max-w-xl"
                >
                  {currentHero.desc}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-col sm:flex-row gap-3"
                >
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-red-600 hover:bg-white hover:text-red-600 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors shadow-2xl shadow-red-600/20"
                    type="button"
                  >
                    Contact Us Now
                    <IconArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    href="#packages"
                    className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                  >
                    View Packages
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-tight"
            >
              Easy to install and even easier to run
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="w-16 sm:w-20 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"
            />
            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm sm:text-lg text-gray-600 leading-relaxed font-medium"
            >
              {currentIntro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 sm:py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
              {benefits.map((b) => (
                <motion.div
                  key={b.title}
                  variants={cardIn}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease }}
                  className="rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-black/10 p-7 sm:p-8 text-center"
                >
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h3 className="mt-6 text-[12px] font-black uppercase tracking-[0.2em] text-gray-900">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 font-medium leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SYSTEM LAYOUT */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              variants={fadeUp}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight">
                System Layout
              </h2>
              <div className="text-red-600 font-black text-[11px] uppercase tracking-[0.3em] mt-3">
                {layoutSubtitle}
              </div>
              <div className="w-16 sm:w-20 h-1.5 bg-red-600 mx-auto mt-6 rounded-full" />
            </motion.div>

            <motion.div
              variants={cardIn}
              className="rounded-[2.25rem] border border-gray-100 bg-gray-50 shadow-inner overflow-hidden"
            >
              <div className="p-6 sm:p-10 lg:p-14 grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                {/* Flow */}
                <div className={`lg:col-span-${isBalcony ? "8" : "12"} w-full`}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6 sm:gap-4 text-center">
                    <Node
                      icon={
                        isBalcony ? (
                          <IconWave className="w-10 h-10" />
                        ) : (
                          <IconPanel className="w-10 h-10" />
                        )
                      }
                      label="Solar Panels"
                    />

                    <div className="hidden sm:block">
                      <FlowLine />
                    </div>

                    <Node
                      icon={
                        isBalcony ? (
                          <IconBox className="w-11 h-11" />
                        ) : (
                          <IconChip className="w-11 h-11" />
                        )
                      }
                      label={isBalcony ? "M-ESS Unit" : "Core Inverter"}
                      highlight
                    />

                    <div className="hidden sm:block">
                      <FlowLine reverse />
                    </div>

                    <Node
                      icon={
                        isBalcony ? (
                          <IconPlug className="w-10 h-10" />
                        ) : (
                          <IconHome className="w-10 h-10" />
                        )
                      }
                      label={isBalcony ? "Home Connection" : "Loads"}
                    />
                  </div>
                </div>

                {/* Component list (Balcony only) */}
                {isBalcony && (
                  <div className="lg:col-span-4">
                    <div className="h-full rounded-3xl bg-white border border-gray-100 shadow-sm p-6 sm:p-8">
                      <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
                            Component List
                          </div>
                          <div className="text-sm font-extrabold text-gray-900 mt-2">
                            Balcony Package
                          </div>
                        </div>
                        <span className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 text-red-600 inline-flex items-center justify-center">
                          <IconList className="w-5 h-5" />
                        </span>
                      </div>

                      <div className="space-y-4">
                        {[
                          "Lightweight Flex Solar Panels",
                          "Micro Inverter (Grid-Tie)",
                          "M-ESS Balcony Storage Unit",
                          "High-Voltage Extension Cables",
                          "Standard Home Power Plug",
                        ].map((item, i) => (
                          <div key={item} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-full bg-red-50 border border-red-100 text-red-600 inline-flex items-center justify-center text-[11px] font-black">
                              {i + 1}
                            </div>
                            <div className="text-[11px] font-extrabold uppercase tracking-wider text-gray-700 leading-relaxed">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="mt-7 w-full bg-gray-900 hover:bg-red-600 text-white py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                      >
                        Request Full BOM
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              variants={fadeUp}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
                {isBalcony
                  ? "Balcony Energy Storage System Packages"
                  : "Standard Solution Packages"}
              </h2>
              <div className="w-16 sm:w-20 h-1.5 bg-red-600 mx-auto mt-6 rounded-full" />
            </motion.div>

            <div className="space-y-10 sm:space-y-14">
              {currentPackages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  variants={cardIn}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease }}
                  className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-black/10"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[520px] overflow-hidden">
                      <motion.img
                        src={pkg.img}
                        alt={pkg.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ scale: 1.04 }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.9, ease }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
                        <span className="w-2 h-2 rounded-full bg-white" />
                        Capacity: {pkg.capacity}
                      </div>

                      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 sm:right-10 text-white">
                        <div className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/85">
                          Package
                        </div>
                        <div className="mt-2 text-xl sm:text-2xl font-black uppercase tracking-tight">
                          {pkg.name}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 text-red-600 inline-flex items-center justify-center">
                          <IconSpark className="w-5 h-5" />
                        </span>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
                            What’s Included
                          </div>
                          <div className="text-sm font-extrabold text-gray-900 mt-1">
                            High-performance + easy deployment
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 space-y-4">
                        {(isPointsPkg(pkg) ? pkg.points : pkg.components).map(
                          (p) => (
                            <div key={p} className="flex items-start gap-3">
                              <span className="mt-0.5 text-red-600">
                                <IconCheck className="w-5 h-5" />
                              </span>
                              <span className="text-sm font-semibold text-gray-600 leading-relaxed">
                                {p}
                              </span>
                            </div>
                          )
                        )}
                      </div>

                      <div className="mt-10 flex flex-col sm:flex-row gap-3">
                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2, ease }}
                          className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-red-600 hover:bg-gray-900 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors shadow-xl"
                          type="button"
                        >
                          Contact Us
                          <IconArrowRight className="w-4 h-4 ml-2" />
                        </motion.button>

                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2, ease }}
                          className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 text-gray-900 hover:text-red-600 font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                          type="button"
                        >
                          Download Specs
                          <IconDownload className="w-4 h-4 ml-2" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-end justify-between mb-10 sm:mb-14"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
                  Related Products
                </h2>
                <div className="w-12 h-1.5 bg-red-600 mt-4 rounded-full" />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {relatedProducts.slice(0, 4).map((p) => (
                <motion.div
                  key={p.name}
                  variants={cardIn}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease }}
                  className="group cursor-pointer text-center rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-black/10 p-4 sm:p-6"
                >
                  <div className="aspect-square rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-8 sm:p-10">
                    <motion.img
                      src={p.img}
                      alt={p.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.25, ease }}
                    />
                  </div>
                  <div className="mt-5 text-[11px] font-black uppercase tracking-[0.2em] text-gray-800 group-hover:text-red-600 transition-colors">
                    {p.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* optional: remove if you don't need custom keyframes */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); box-shadow: 0 20px 50px rgba(220,38,38,0.08); }
          50% { transform: scale(1.02); box-shadow: 0 25px 60px rgba(220,38,38,0.16); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default SolutionsPage;

/* -------------------- Small layout pieces -------------------- */

function FlowLine({ reverse }: { reverse?: boolean }) {
  return (
    <div className="h-0.5 w-full bg-red-600/10 relative">
      <div
        className={[
          "absolute -top-1 w-2 h-2 rounded-full bg-red-600",
          reverse ? "left-0" : "right-0",
        ].join(" ")}
      />
    </div>
  );
}

function Node({
  icon,
  label,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div className="space-y-4">
      <div
        className={[
          "inline-flex items-center justify-center",
          highlight
            ? "w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem] bg-white border-2 border-red-600 shadow-2xl"
            : "w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white border border-gray-100 shadow-sm",
        ].join(" ")}
      >
        <div className={highlight ? "text-red-600" : "text-gray-300"}>
          {icon}
        </div>
      </div>
      <div className="text-[10px] font-black uppercase tracking-widest text-gray-900">
        {label}
      </div>
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

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
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
        d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2z"
        strokeLinejoin="round"
      />
      <path d="M5 14l.7 3L9 18" strokeLinecap="round" />
      <path d="M19 14l-.7 3L15 18" strokeLinecap="round" />
    </svg>
  );
}

function IconList({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </svg>
  );
}

function IconPanel({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 9h18" />
      <path d="M5 9l2 11h10l2-11" />
      <path d="M8 13h8" />
      <path d="M9 17h6" />
      <path d="M6 5h12" />
    </svg>
  );
}

function IconChip({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path
        d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHome({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v11h14V10" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function IconPlug({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M9 3v6M15 3v6" strokeLinecap="round" />
      <path d="M7 9h10v3a5 5 0 0 1-10 0V9z" />
      <path d="M12 17v4" strokeLinecap="round" />
    </svg>
  );
}

function IconBox({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

function IconWave({ className }: { className?: string }) {
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
        d="M3 12c2.5-6 6.5-6 9 0s6.5 6 9 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16c2.5-6 6.5-6 9 0s6.5 6 9 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTool({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M14 7l3 3-9 9H5v-3l9-9z" />
      <path d="M16 5l3 3" strokeLinecap="round" />
      <path d="M9 7l8 8" strokeLinecap="round" />
    </svg>
  );
}

function IconBolt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 19h2" strokeLinecap="round" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
