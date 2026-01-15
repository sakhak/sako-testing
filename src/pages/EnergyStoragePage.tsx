import React, { useMemo } from "react";
import { motion,type Variants } from "framer-motion";

/**
 * EnergyStoragePage (Redesign + Responsive + Framer Motion)
 * Install: npm i framer-motion
 * Notes:
 * - Mobile-first spacing/typography
 * - whileInView animations for each section
 * - No FontAwesome (SVG icons included)
 * - Cleaner product cards + feature blocks + stats
 */

type Product = {
  title: string;
  model: string;
  desc: string;
  img: string;
};

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

const popIn: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

const EnergyStoragePage: React.FC = () => {
  const flagshipProducts: Product[] = useMemo(
    () => [
      {
        title: "SAKO Solar Panel",
        model: "535W–550W Module",
        desc: "High-efficiency PERC modules with half-cell technology for reduced power loss.",
        img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=900",
      },
      {
        title: "Home Solar Inverter",
        model: "SUNON V Series 4KW/6KW",
        desc: "Smart off-grid inverter with integrated MPPT and WiFi monitoring.",
        img: "https://images.unsplash.com/photo-1548333341-8342447732e5?auto=format&fit=crop&q=80&w=900",
      },
      {
        title: "48V100AH Lithium Battery",
        model: "LiFePO4 Power Pack",
        desc: "Grade A cells with intelligent BMS and high cycle life for reliability.",
        img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=900",
      },
      {
        title: "Hybrid Solar Inverter",
        model: "SUN-G Hybrid Series",
        desc: "Supports grid feeding and lithium battery communication ports.",
        img: "https://images.unsplash.com/photo-1592833159057-6fdc2a5c373a?auto=format&fit=crop&q=80&w=900",
      },
      {
        title: "SAKO ESS PRO 6KW",
        model: "Integrated Storage Pack",
        desc: "Stackable design with built-in inverter and battery modules.",
        img: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&q=80&w=900",
      },
    ],
    []
  );

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative mt-[-30px] overflow-hidden">
        <div className="relative h-[72vh] min-h-[560px] sm:h-[64vh] sm:min-h-[580px] lg:h-[72vh] lg:min-h-[680px] flex items-end sm:items-center">
          {/* Background */}
          <motion.div
            initial={{ scale: 1.12, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1920"
              className="w-full h-full object-cover"
              alt="Modern House Sunset"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/85" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 w-full pb-10 sm:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-3xl"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">
                    Solar Energy Storage
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-5 text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.08]"
                >
                  WHAT MAKES OUR SOLAR ENERGY
                  <br className="hidden sm:block" />
                  STORAGE SYSTEM THE BEST!
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-200 font-medium leading-relaxed"
                >
                  Explore SAKO’s industry-leading ESS solutions designed for
                  total energy independence, combining high-efficiency PV
                  modules, smart inverters, and safe lithium storage.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3"
                >
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    href="/contact"
                    className="inline-flex justify-center items-center px-8 sm:px-10 py-4 rounded-2xl bg-red-600 hover:bg-white hover:text-red-600 text-white font-black text-xs uppercase tracking-[0.22em] transition-colors shadow-2xl shadow-red-600/20"
                  >
                    Contact Us
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    href="#products"
                    className="inline-flex justify-center items-center px-8 sm:px-10 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur text-white font-black text-xs uppercase tracking-[0.22em] transition-colors"
                  >
                    View Products
                  </motion.a>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 hidden sm:flex flex-wrap gap-2"
                >
                  <Pill
                    icon={<IconShield className="w-4 h-4" />}
                    text="Safe LiFePO4"
                  />
                  <Pill
                    icon={<IconBolt className="w-4 h-4" />}
                    text="High efficiency"
                  />
                  <Pill
                    icon={<IconHome className="w-4 h-4" />}
                    text="Home + Business"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* FLAGSHIP PRODUCTS */}
      <section
        id="products"
        className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
              Flagship Products
            </h2>
            <div className="w-14 sm:w-16 h-1.5 bg-red-600 mx-auto mt-5 sm:mt-6 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium max-w-3xl mx-auto">
              A complete ESS lineup — panels, inverters, and lithium storage
              built to work together.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {flagshipProducts.map((p, i) => (
              <motion.div
                key={i}
                variants={popIn}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.35, ease }}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-black/10 p-6 sm:p-8 flex flex-col"
              >
                <div className="aspect-square mb-6 sm:mb-8 overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center p-6 border border-gray-100">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25, ease }}
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
                    {p.model}
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-extrabold text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    In stock
                  </span>
                </div>

                <h3 className="mt-3 text-lg sm:text-xl font-black text-gray-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 font-medium leading-relaxed flex-grow">
                  {p.desc}
                </p>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease }}
                  href="/contact"
                  className="mt-7 w-full inline-flex justify-center items-center bg-gray-900 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.28em] hover:bg-red-600 transition-colors"
                >
                  Learn More
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <motion.div variants={popIn} className="order-1">
              <motion.img
                src="https://images.unsplash.com/photo-1595844730298-b9f1ff9b5993?auto=format&fit=crop&q=80&w=1200"
                className="rounded-3xl shadow-2xl w-full h-[280px] sm:h-[380px] lg:h-[520px] object-cover"
                alt="ESS Benefits"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease }}
              />
            </motion.div>

            <motion.div
              variants={container}
              className="order-2 space-y-7 sm:space-y-8"
            >
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight leading-tight">
                  Easy to install
                  <br className="hidden sm:block" />
                  and easy to run
                </h2>
                <div className="w-14 sm:w-16 h-1.5 bg-red-600 mt-5 sm:mt-6 rounded-full" />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-sm sm:text-lg text-gray-600 leading-relaxed font-medium"
              >
                Our all-in-one Energy Storage System (ESS) is designed for
                modern lifestyles. By integrating solar panels, high-performance
                inverters, and lithium battery modules, we deliver a
                plug-and-play experience with simple capacity expansion.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Benefit
                  icon={<IconPlug className="w-5 h-5" />}
                  title="Plug & Play"
                  desc="Fast installation with clean wiring."
                />
                <Benefit
                  icon={<IconLayers className="w-5 h-5" />}
                  title="Expandable"
                  desc="Add modules to grow capacity."
                />
                <Benefit
                  icon={<IconShield className="w-5 h-5" />}
                  title="Protection"
                  desc="BMS & inverter safeguards."
                />
                <Benefit
                  icon={<IconBolt className="w-5 h-5" />}
                  title="Efficient"
                  desc="Optimized energy conversion."
                />
              </div>

              <motion.a
                variants={fadeUp}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease }}
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-red-600 hover:bg-gray-900 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors w-full sm:w-fit"
              >
                Find Out More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <motion.div variants={popIn} className="lg:order-2">
            <motion.img
              src="https://images.unsplash.com/photo-1449156001931-8283427c90b4?auto=format&fit=crop&q=80&w=1200"
              className="rounded-3xl shadow-2xl w-full h-[280px] sm:h-[380px] lg:h-[520px] object-cover"
              alt="ESS Applications"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease }}
            />
          </motion.div>

          <motion.div
            variants={container}
            className="space-y-7 sm:space-y-8 lg:order-1"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight leading-tight">
                Designed for high-power commercial, industrial & residential
                applications
              </h2>
              <div className="w-14 sm:w-16 h-1.5 bg-red-600 mt-5 sm:mt-6 rounded-full" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-lg text-gray-600 leading-relaxed font-medium"
            >
              SAKO solutions ensure your solar panels generate electricity
              efficiently, inverters convert DC to AC seamlessly, and batteries
              store excess energy for night use or emergency backup.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Tag
                icon={<IconHome className="w-4 h-4" />}
                text="Residential backup"
              />
              <Tag
                icon={<IconBuilding className="w-4 h-4" />}
                text="Commercial sites"
              />
              <Tag
                icon={<IconFactory className="w-4 h-4" />}
                text="Industrial loads"
              />
              <Tag
                icon={<IconBolt className="w-4 h-4" />}
                text="Peak shaving"
              />
            </div>

            <motion.a
              variants={fadeUp}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease }}
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-red-600 hover:bg-gray-900 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors w-full sm:w-fit"
            >
              Find Out More
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-900 py-14 sm:py-20 lg:py-24 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={fadeUp} className="text-center">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-5 sm:mb-7">
                About SAKO
              </h2>
              <p className="text-sm sm:text-lg text-gray-300 font-medium leading-relaxed max-w-4xl mx-auto">
                With over 29 years of industry experience, SAKO is a global
                powerhouse in solar manufacturing, R&D, and supply. We deliver
                complete solar energy storage solutions trusted worldwide.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <Stat label="Years Experience" value="29+" />
              <Stat label="Countries" value="30+" />
              <Stat label="ESS Solutions" value="All-in-one" />
              <Stat label="Support" value="Global" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 sm:mt-14 flex justify-center"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease }}
                href="/contact"
                className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-red-600 hover:bg-white hover:text-red-600 text-white font-black uppercase text-[11px] tracking-[0.28em] transition-colors"
              >
                Talk to Sales
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnergyStoragePage;

/* ---------- small UI pieces ---------- */

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur text-white/90">
      <span className="text-white/90">{icon}</span>
      <span className="text-[11px] font-semibold tracking-widest uppercase">
        {text}
      </span>
    </div>
  );
}

function Benefit({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={popIn}
      className="p-5 rounded-3xl border border-gray-100 bg-white shadow-sm"
    >
      <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg">
        {icon}
      </div>
      <div className="mt-4">
        <div className="text-[12px] font-black uppercase tracking-widest text-gray-900">
          {title}
        </div>
        <div className="mt-1 text-sm text-gray-600 font-medium leading-relaxed">
          {desc}
        </div>
      </div>
    </motion.div>
  );
}

function Tag({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-800 font-bold text-sm">
      <span className="text-red-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 text-center">
      <div className="text-2xl sm:text-3xl font-black text-red-500">
        {value}
      </div>
      <div className="mt-1 text-[10px] sm:text-[11px] font-extrabold text-gray-300 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

/* ---------- Icons (SVG, no deps) ---------- */

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
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
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
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
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
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-6v-7H10v7H4a1 1 0 0 1-1-1v-10.5z" />
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
      <path d="M8 2v6" />
      <path d="M16 2v6" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0V8z" />
      <path d="M12 16v6" />
    </svg>
  );
}

function IconLayers({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 2l10 6-10 6L2 8l10-6z" />
      <path d="M2 12l10 6 10-6" />
    </svg>
  );
}

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 21V3h16v18H4z" />
      <path d="M8 7h2" />
      <path d="M8 11h2" />
      <path d="M8 15h2" />
      <path d="M14 7h2" />
      <path d="M14 11h2" />
      <path d="M14 15h2" />
      <path d="M10 21v-4h4v4" />
    </svg>
  );
}

function IconFactory({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 21V9l6 3V9l6 3V6l6 3v12H3z" />
      <path d="M7 21v-6" />
      <path d="M11 21v-4" />
      <path d="M15 21v-5" />
    </svg>
  );
}
