import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";

/**
 * EasySolarKitPage (Redesign + Responsive + Framer Motion)
 * Install: npm i framer-motion
 * Notes:
 * - Mobile-first typography + spacing
 * - Framer Motion reveal animations (whileInView)
 * - No FontAwesome needed (SVG icons included)
 */

type Flagship = { title: string; img: string };
type Feature = { title: string; desc: string; img: string };

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

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
};

const popIn: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

const EasySolarKitPage: React.FC = () => {
  const flagships: Flagship[] = useMemo(
    () => [
      {
        title: "Microinverter 600W / 800W",
        img: "https://picsum.photos/seed/mi1/400/400",
      },
      {
        title: "Microinverter 1000W / 1200W",
        img: "https://picsum.photos/seed/mi2/400/400",
      },
      {
        title: "Microinverter 1600W / 2000W",
        img: "https://picsum.photos/seed/mi3/400/400",
      },
    ],
    []
  );

  const features: Feature[] = useMemo(
    () => [
      {
        title: "Plug-and-play design",
        desc: "Simple installation with no complex wiring required. Set up in minutes.",
        img: "https://picsum.photos/seed/kit1/1200/900",
      },
      {
        title: "Easy to fold and transport",
        desc: "Innovative foldable structure makes it ideal for temporary or mobile use.",
        img: "https://picsum.photos/seed/kit2/1200/900",
      },
      {
        title: "Adjustable angle",
        desc: "Maximize solar capture with our durable, adjustable aluminum bracket system.",
        img: "https://picsum.photos/seed/kit3/1200/900",
      },
    ],
    []
  );

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative mt-[-30px] overflow-hidden">
        <div className="relative h-[70vh] min-h-[520px] sm:h-[64vh] sm:min-h-[560px] lg:h-[68vh] lg:min-h-[640px] flex items-end sm:items-center">
          {/* Media */}
          <motion.div
            initial={{ scale: 1.12, opacity: 0.65 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1595844730298-b9f1ff9b5993?auto=format&fit=crop&q=80&w=1920"
              className="w-full h-full object-cover"
              alt="Balcony Solar"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/85" />
          </motion.div>
          {/* Content */}
          <div className="relative z-10 w-full pb-10 sm:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="mx-auto max-w-4xl"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">
                    Easy Solar Kit
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-5 sm:mt-6 text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.08]"
                >
                  WHAT MAKES OUR PORTABLE MICRO
                  <br className="hidden sm:block" />
                  POWER GENERATION SYSTEM THE BEST!
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-lg text-gray-200 font-medium leading-relaxed"
                >
                  Plug-and-play solar solutions for balconies, gardens, and
                  urban spaces. Clean energy, simplified.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 sm:mt-9 flex flex-col sm:flex-row justify-center gap-3"
                >
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    href="/contact"
                    className="inline-flex justify-center items-center px-8 sm:px-10 py-4 rounded-2xl bg-red-600 hover:bg-white hover:text-red-600 text-white font-black text-xs uppercase tracking-widest transition-colors shadow-2xl shadow-red-600/20"
                  >
                    Contact Us
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    href="#learn"
                    className="inline-flex justify-center items-center px-8 sm:px-10 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur font-black text-xs uppercase tracking-widest text-white transition-colors"
                  >
                    Learn More
                  </motion.a>
                </motion.div>

                {/* quick spec row */}
                <motion.div
                  variants={fadeUp}
                  className="mt-7 hidden sm:flex justify-center flex-wrap gap-2"
                >
                  <Pill
                    icon={<IconPlug className="w-4 h-4" />}
                    text="No complex wiring"
                  />
                  <Pill
                    icon={<IconBolt className="w-4 h-4" />}
                    text="Direct AC output"
                  />
                  <Pill
                    icon={<IconHome className="w-4 h-4" />}
                    text="Urban optimized"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>{" "}
        </div>
      </section>

      {/* INTRO */}
      <section
        id="learn"
        className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 uppercase">
              SAKO Easy Solar Kit
            </h2>
            <div className="w-14 sm:w-16 h-1.5 bg-red-600 mx-auto mt-5 sm:mt-6 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
              A portable micro power generation system integrating PV modules, a
              high-efficiency micro-inverter, and a durable bracket system into
              one seamless package.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Images */}
            <motion.div variants={popIn} className="grid grid-cols-2 gap-4">
              <motion.img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=900"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
                alt="Kit Part 1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25, ease }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1548333341-8342447732e5?auto=format&fit=crop&q=80&w=900"
                className="rounded-2xl shadow-lg w-full h-full object-cover mt-6 sm:mt-10"
                alt="Kit Part 2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25, ease }}
              />
            </motion.div>

            {/* Copy + bullets */}
            <motion.div variants={container} className="space-y-8">
              <motion.p
                variants={fadeUp}
                className="text-sm sm:text-lg text-gray-600 leading-relaxed font-medium"
              >
                The SAKO Easy Solar Kit brings renewable energy to apartments
                and small spaces with a clean, modern installation approach —
                designed to be fast, safe, and easy to operate.
              </motion.p>

              <div className="grid gap-4">
                <FeatureBullet
                  icon={<IconBolt className="w-5 h-5" />}
                  title="Direct AC Conversion"
                  desc="Converts DC solar power directly into home-ready AC energy."
                />
                <FeatureBullet
                  icon={<IconHome className="w-5 h-5" />}
                  title="Urban Optimized"
                  desc="Perfect for apartments, balconies, and small rooftop spaces."
                />
                <FeatureBullet
                  icon={<IconShield className="w-5 h-5" />}
                  title="Stable & Safe"
                  desc="Built-in protection and durable structure for long-term operation."
                />
              </div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease }}
                  href="/contact"
                  className="inline-flex justify-center items-center px-7 py-4 rounded-2xl bg-gray-900 text-white font-black uppercase text-[11px] tracking-[0.25em] hover:bg-red-600 transition-colors"
                >
                  Request Price
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease }}
                  href="#flagship"
                  className="inline-flex justify-center items-center px-7 py-4 rounded-2xl bg-gray-50 text-gray-900 font-black uppercase text-[11px] tracking-[0.25em] border border-gray-100 hover:border-red-600 transition-colors"
                >
                  View Flagships
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ALTERNATING FEATURES */}
      <section className="bg-gray-50 py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.div
              variants={fadeUp}
              className="text-center mb-10 sm:mb-16"
            >
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase">
                Designed for Real Homes
              </h3>
              <div className="w-14 sm:w-16 h-1.5 bg-red-600 mx-auto mt-5 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
                Quick setup, easy handling, and smarter solar capture — built
                for modern urban living.
              </p>
            </motion.div>

            <div className="space-y-10 sm:space-y-14">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={popIn}
                  className={[
                    "rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden",
                    "flex flex-col",
                    i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row",
                  ].join(" ")}
                >
                  <div className="lg:w-1/2">
                    <motion.img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-[260px] sm:h-[340px] lg:h-full object-cover"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.35, ease }}
                    />
                  </div>

                  <div className="lg:w-1/2 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-100 w-fit">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      <span className="text-[11px] font-extrabold tracking-widest uppercase">
                        Feature {i + 1}
                      </span>
                    </div>

                    <h4 className="mt-4 text-xl sm:text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
                      {f.title}
                    </h4>
                    <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                      {f.desc}
                    </p>

                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease }}
                      href="/contact"
                      className="mt-7 inline-flex justify-center items-center px-7 py-4 rounded-2xl bg-red-600 hover:bg-gray-900 text-white font-black uppercase text-[11px] tracking-[0.25em] transition-colors w-full sm:w-fit"
                    >
                      Find out More
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FLAGSHIP PRODUCTS */}
      <section
        id="flagship"
        className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase">
              Flagship Products
            </h2>
            <div className="w-14 sm:w-16 h-1.5 bg-red-600 mx-auto mt-5 sm:mt-6 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium">
              Popular microinverter models optimized for small solar setups.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:gap-7 md:grid-cols-3">
            {flagships.map((prod, i) => (
              <motion.div
                key={i}
                variants={popIn}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.35, ease }}
                className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-black/10 group"
              >
                <div className="aspect-square mb-6 sm:mb-8 flex items-center justify-center p-6 sm:p-8 bg-gray-50 rounded-2xl group-hover:bg-white transition-colors border border-gray-100">
                  <motion.img
                    src={prod.img}
                    alt={prod.title}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25, ease }}
                  />
                </div>

                <h4 className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-gray-900 text-center mb-5 sm:mb-6">
                  {prod.title}
                </h4>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease }}
                  href="/contact"
                  className="w-full inline-flex justify-center items-center bg-gray-900 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 transition-colors"
                >
                  Learn More
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default EasySolarKitPage;

/* ---------- Small components ---------- */

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

function FeatureBullet({
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
      variants={fadeIn}
      className="flex items-start gap-4 p-5 sm:p-6 rounded-3xl border border-gray-100 bg-white shadow-sm"
    >
      <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shrink-0">
        {icon}
      </div>
      <div>
        <h5 className="text-[12px] sm:text-[13px] font-black uppercase tracking-widest text-gray-900">
          {title}
        </h5>
        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
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
