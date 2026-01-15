import React, { useMemo, useState } from "react";
import { AnimatePresence, motion,type Variants } from "framer-motion";

/**
 * FAQPage (Redesign + Responsive + Framer Motion)
 * Install: npm i framer-motion
 * Notes:
 * - Smooth accordion per question with AnimatePresence
 * - Search + "expand all / collapse all"
 * - No FontAwesome (SVG icons included)
 * - Mobile-first spacing/typography
 */

type FAQItem = { q: string; a: string };
type FAQSection = { title: string; id: string; items: FAQItem[] };

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
  hidden: { opacity: 0, y: 16, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

const panel: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.28, ease } },
};

const rotate: Variants = {
  collapsed: { rotate: 0 },
  open: { rotate: 45, transition: { duration: 0.18, ease } }, // plus -> x
};

const FAQPage: React.FC = () => {
  const sections: FAQSection[] = useMemo(
    () => [
      {
        title: "Service FAQs",
        id: "service",
        items: [
          {
            q: "Who is SAKO? Is SAKO a trading company or factory?",
            a: "SAKO is a professional manufacturer and global supplier with its own state-of-the-art factories in Shenzhen, China. We are an integrated R&D and production company.",
          },
          {
            q: "Why should I buy from SAKO?",
            a: "SAKO offers 30+ years of experience, Tier-1 module quality, and comprehensive after-sales support with a global presence in over 30 countries.",
          },
          {
            q: "Questions regards SAKO agent",
            a: "We welcome global partners. Agents receive technical training, marketing support, and exclusive pricing. Please contact our sales team for regional availability.",
          },
          {
            q: "How to get after-sales tech support?",
            a: "Our technical team is available via email, phone, or local service centers. We provide remote diagnostic assistance and on-site support through authorized dealers.",
          },
        ],
      },
      {
        title: "Inverter FAQs",
        id: "inverter",
        items: [
          {
            q: "What need I know before choose the right off grid solar inverter?",
            a: "Consider your total load wattage, battery voltage requirements, and peak power needs. Our SUN-G and SUN-PRO series cater to different household scales.",
          },
          {
            q: "How many years warranty of SAKO solar inverter has?",
            a: "SAKO solar inverters typically come with a 2-5 year standard warranty, extendable based on specific project requirements.",
          },
          {
            q: "Does SAKO have real hybrid solar inverter which can feed solar power to grid?",
            a: "Yes, our hybrid series supports seamless switching and grid feedback functionality.",
          },
        ],
      },
      {
        title: "Battery FAQs",
        id: "battery",
        items: [
          {
            q: "Why should I choose lithium battery?",
            a: "Lithium batteries offer higher energy density, longer cycle life (6000+), and faster charging compared to lead-acid alternatives.",
          },
          {
            q: "What is a BMS? Is all SAKO lithium battery have BMS built inside?",
            a: "BMS stands for Battery Management System. Every SAKO lithium pack features an integrated BMS for safety, cell balancing, and protection.",
          },
        ],
      },
      {
        title: "Solar Panel FAQs",
        id: "panel",
        items: [
          {
            q: "Is SAKO solar panel on Tier-1 module manufacturers list?",
            a: "We follow Tier-1 manufacturing standards and adopt high-efficiency PERC and N-type cells from top-tier silicon providers.",
          },
          {
            q: "How does SAKO ensure module product quality?",
            a: "We perform 100% EL testing and triple flash testing on every module to ensure zero micro-cracks and precise power output.",
          },
        ],
      },
    ],
    []
  );

  // One open item at a time (matches your original behavior)
  const [openId, setOpenId] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  const allIds = useMemo(() => {
    const ids: string[] = [];
    sections.forEach((s) =>
      s.items.forEach((_, idx) => ids.push(`${s.id}-${idx}`))
    );
    return ids;
  }, [sections]);

  const firstMatchId = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    for (const s of sections) {
      for (let idx = 0; idx < s.items.length; idx++) {
        const item = s.items[idx];
        if (
          item.q.toLowerCase().includes(q) ||
          item.a.toLowerCase().includes(q)
        ) {
          return `${s.id}-${idx}`;
        }
      }
    }
    return null;
  }, [query, sections]);

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections
      .map((s) => ({
        ...s,
        items: s.items.filter(
          (it) =>
            it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
        ),
      }))
      .filter((s) => s.items.length > 0);
  }, [query, sections]);

  const resultsCount = useMemo(
    () => filteredSections.reduce((acc, s) => acc + s.items.length, 0),
    [filteredSections]
  );

  const onSearch = (val: string) => {
    setQuery(val);
    // auto-open first match for better UX
    if (val.trim()) {
      // small timeout avoids "setState during render" issues in some cases
      setTimeout(() => {
        if (firstMatchId) setOpenId(firstMatchId);
      }, 0);
    }
  };

  const expandAll = () => {
    // If you really want "expand all", you'd store open IDs as a Set.
    // But your original behavior is single-open, so we open the first item.
    setOpenId(allIds[0] ?? null);
  };

  const collapseAll = () => setOpenId(null);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative mt-[-30px] overflow-hidden">
        <div className="relative h-[56vh] min-h-[420px] sm:h-[52vh] sm:min-h-[460px] lg:h-[46vh] lg:min-h-[500px] flex items-end sm:items-center">
          <motion.div
            initial={{ scale: 1.12, opacity: 0.65 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=1920"
              className="w-full h-full object-cover"
              alt="Solar Farm Sunset"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/85" />
          </motion.div>

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
                    Help Center
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight"
                >
                  FAQ
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-3 sm:mt-5 text-sm sm:text-lg text-gray-200 font-medium leading-relaxed"
                >
                  Find answers to your questions about SAKO solar products and
                  services.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 hidden sm:flex flex-wrap gap-2"
                >
                  <HeroPill
                    icon={<IconBolt className="w-4 h-4" />}
                    text="Fast answers"
                  />
                  <HeroPill
                    icon={<IconShield className="w-4 h-4" />}
                    text="Official guidance"
                  />
                  <HeroPill
                    icon={<IconChat className="w-4 h-4" />}
                    text="Support-ready"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* MAIN */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={fadeUp}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 uppercase">
                Frequently Asked Questions
              </h2>
              <div className="w-14 sm:w-16 h-1.5 bg-red-600 mx-auto mt-5 sm:mt-6 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium max-w-3xl mx-auto">
                Search by keyword or browse categories below.
              </p>
            </motion.div>

            {/* Search + actions */}
            <motion.div variants={fadeUp} className="mb-8">
              <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                      <IconSearch className="w-5 h-5" />
                    </div>
                    <input
                      value={query}
                      onChange={(e) => onSearch(e.target.value)}
                      placeholder="Search (example: warranty, hybrid, BMS, Tier-1)..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-semibold outline-none focus:border-red-600 transition-colors"
                    />
                  </div>

                  <div className="flex gap-2 justify-between sm:justify-end">
                    <button
                      onClick={expandAll}
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-gray-900 text-white font-extrabold text-xs tracking-widest uppercase hover:bg-red-600 transition-colors"
                      type="button"
                    >
                      <IconPlus className="w-4 h-4" />
                      Expand
                    </button>
                    <button
                      onClick={collapseAll}
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-extrabold text-xs tracking-widest uppercase hover:border-red-600 transition-colors"
                      type="button"
                    >
                      <IconMinus className="w-4 h-4" />
                      Collapse
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span className="font-semibold">
                    Showing{" "}
                    <span className="text-gray-900 font-extrabold">
                      {resultsCount}
                    </span>{" "}
                    result(s)
                  </span>
                  {query.trim() && (
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setOpenId(null);
                      }}
                      className="font-extrabold text-red-600 hover:text-gray-900 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Sections */}
            <div className="space-y-10 sm:space-y-12">
              {filteredSections.map((section) => (
                <motion.div key={section.id} variants={cardIn}>
                  <div className="flex items-end justify-between gap-4 mb-4">
                    <h3 className="text-[12px] font-black uppercase tracking-[0.25em] text-red-600">
                      {section.title}
                    </h3>
                    <div className="text-xs font-bold text-gray-400">
                      {section.items.length} item(s)
                    </div>
                  </div>

                  <div className="space-y-3">
                    {section.items.map((item, idx) => {
                      // Note: idx here is filtered index; for stable id, map original index by searching:
                      const originalIndex = sections
                        .find((s) => s.id === section.id)!
                        .items.findIndex(
                          (x) => x.q === item.q && x.a === item.a
                        );

                      const id = `${section.id}-${originalIndex}`;
                      const isOpen = openId === id;

                      return (
                        <motion.div
                          key={id}
                          variants={cardIn}
                          className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm"
                        >
                          <button
                            onClick={() => toggle(id)}
                            className={[
                              "w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors",
                              isOpen
                                ? "bg-red-50"
                                : "bg-gray-50 hover:bg-gray-100",
                            ].join(" ")}
                            type="button"
                          >
                            <div className="min-w-0">
                              <div className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider text-gray-900 leading-snug">
                                {item.q}
                              </div>
                              <div className="mt-1 text-xs text-gray-500">
                                Click to {isOpen ? "hide" : "view"} answer
                              </div>
                            </div>

                            <motion.div
                              variants={rotate}
                              animate={isOpen ? "open" : "collapsed"}
                              className="shrink-0 w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center"
                            >
                              <IconPlus className="w-4 h-4 text-red-600" />
                            </motion.div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                key="panel"
                                variants={panel}
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                className="overflow-hidden"
                              >
                                <div className="p-6 sm:p-8 bg-white border-t border-gray-50">
                                  <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                                      <IconInfo className="w-5 h-5" />
                                    </div>
                                    <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                                      {item.a}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}

              {filteredSections.length === 0 && (
                <motion.div variants={fadeUp} className="text-center py-12">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500">
                    <IconSearch className="w-6 h-6" />
                  </div>
                  <p className="mt-4 font-bold text-gray-700">
                    No results found.
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Try another keyword (example: “warranty”, “hybrid”, “BMS”).
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 lg:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight"
            >
              Any question?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 font-medium mt-3 sm:mt-4"
            >
              If we still haven't answered your question, contact us below.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-5 sm:gap-8 mt-10 sm:mt-14 max-w-3xl mx-auto"
            >
              <motion.div
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.25, ease }}
                className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-600 text-white mx-auto flex items-center justify-center shadow-lg">
                  <IconHeadset className="w-7 h-7" />
                </div>
                <h4 className="mt-6 text-sm font-black uppercase tracking-widest mb-2">
                  Customer Support
                </h4>
                <p className="text-red-600 font-extrabold">+86 755 1234 5678</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.25, ease }}
                className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-600 text-white mx-auto flex items-center justify-center shadow-lg">
                  <IconMail className="w-7 h-7" />
                </div>
                <h4 className="mt-6 text-sm font-black uppercase tracking-widest mb-2">
                  Send a Message
                </h4>
                <p className="text-red-600 font-extrabold">
                  sako@sakopower.com
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 sm:mt-12">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease }}
                href="/contact"
                className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-gray-900 text-white font-black uppercase text-[11px] tracking-[0.28em] hover:bg-red-600 transition-colors"
              >
                Contact Page
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;

/* ---------- tiny components ---------- */

function HeroPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur text-white/90">
      <span className="text-white/90">{icon}</span>
      <span className="text-[11px] font-semibold tracking-widest uppercase">
        {text}
      </span>
    </div>
  );
}

/* ---------- Icons (SVG, no deps) ---------- */

function IconPlus({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 5v14" strokeLinecap="round" />
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

function IconMinus({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconInfo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
      <path d="M12 16v-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8h.01" strokeLinecap="round" strokeLinejoin="round" />
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
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      <path d="M7 8h10" />
      <path d="M7 12h7" />
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
      <path d="M4 12v6a2 2 0 0 0 2 2h2v-8H6a2 2 0 0 0-2 2z" />
      <path d="M20 12v6a2 2 0 0 1-2 2h-2v-8h2a2 2 0 0 1 2 2z" />
      <path d="M12 4v1" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}
