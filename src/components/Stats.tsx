import React from "react";
import { motion,type Variants, useInView } from "framer-motion";



const ease = [0.2, 0.8, 0.2, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

type Stat = {
  label: string;
  value: string; // e.g. "12+"
  icon?: React.ReactNode;
};

function parseValue(value: string) {
  // returns { num: 12, suffix: "+" } from "12+"
  const match = value.trim().match(/^(\d+)\s*(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: Number(match[1]), suffix: match[2] || "" };
}

const CountUp: React.FC<{ value: string; durationMs?: number }> = ({
  value,
  durationMs = 900,
}) => {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { num, suffix } = parseValue(value);

  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    let raf = 0;
    const start = performance.now();
    const from = 0;
    const to = num;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(from + (to - from) * eased);
      setDisplay(current);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, num, durationMs]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const StatIcon: React.FC<{ kind: "exp" | "agent" | "partner" | "team" }> = ({
  kind,
}) => {
  const common = "w-5 h-5";
  if (kind === "exp")
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M12 2v4" strokeLinecap="round" />
        <path d="M7 7l-3 3" strokeLinecap="round" />
        <path d="M17 7l3 3" strokeLinecap="round" />
        <path d="M6 14a6 6 0 1 0 12 0" strokeLinecap="round" />
        <path d="M12 10v4l2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );

  if (kind === "agent")
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z"
          strokeLinejoin="round"
        />
        <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" strokeLinejoin="round" />
      </svg>
    );

  if (kind === "partner")
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M7 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z"
          strokeLinejoin="round"
        />
      </svg>
    );

  return (
    <svg
      className={common}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M16 11a4 4 0 1 0-8 0" strokeLinecap="round" />
      <path d="M3 22c1-4 5-7 9-7s8 3 9 7" strokeLinecap="round" />
      <path d="M18 8a3 3 0 1 0-3-3" strokeLinecap="round" />
      <path d="M21 14c-1-2-3-3-5-3" strokeLinecap="round" />
    </svg>
  );
};

const Stats: React.FC = () => {
  const stats: Stat[] = [
    { label: "Years Experience", value: "12+", icon: <StatIcon kind="exp" /> },
    { label: "Global Agents", value: "21+", icon: <StatIcon kind="agent" /> },
    {
      label: "Global Partners",
      value: "66+",
      icon: <StatIcon kind="partner" />,
    },
    { label: "Total Employees", value: "249+", icon: <StatIcon kind="team" /> },
  ];

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=1920"
          alt="Solar Panel Field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Subtle glows */}
      <div className="pointer-events-none absolute -top-28 -right-28 w-96 h-96 rounded-full bg-red-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90">
              Company at a glance
            </span>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2, ease }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 sm:p-7 shadow-xl"
            >
              {/* top row */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-red-300 group-hover:text-white group-hover:bg-red-600/40 transition-colors">
                  {stat.icon}
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: 0.05 }}
                  className="px-2.5 py-1 rounded-full bg-red-600/15 border border-red-500/20 text-[10px] font-black uppercase tracking-widest text-red-200"
                >
                  Verified
                </motion.div>
              </div>

              {/* value */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  <CountUp value={stat.value} durationMs={950} />
                </span>
              </div>

              {/* label */}
              <div className="mt-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-gray-300">
                {stat.label}
              </div>

              {/* underline accent */}
              <div className="mt-6 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-10 bg-red-600 group-hover:w-16 transition-all duration-500" />
              </div>

              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 ring-1 ring-red-500/35 rounded-3xl" />
                <div className="absolute -inset-24 bg-red-600/10 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
