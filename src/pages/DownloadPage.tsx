import React, { useMemo, useState } from "react";
import { AnimatePresence, motion,type Variants } from "framer-motion";

/**
 * DownloadPage (Redesign + Responsive + Framer Motion)
 * Install: npm i framer-motion
 * Notes:
 * - No FontAwesome needed (SVG icons included)
 * - Smooth accordion with AnimatePresence
 * - Mobile-first spacing + nicer cards
 * - Search + quick stats
 */

type DownloadSection = {
  id: string;
  title: string;
  items: string[];
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

const cardIn: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

const panel: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease },
  },
};

const iconSpin: Variants = {
  collapsed: { rotate: 0 },
  open: { rotate: 180, transition: { duration: 0.25, ease } },
};

const DownloadPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string>("manual");
  const [query, setQuery] = useState("");

  const downloadData: DownloadSection[] = useMemo(
    () => [
      {
        id: "manual",
        title: "User Manual",
        items: [
          "User Manual – SAKO ESS Series",
          "User Manual – E-SUN Series",
          "User Manual – SUNPOLO 3KVA–11KVA Series",
          "User Manual – SUNON IV Series",
          "User Manual – SUNSEE Series",
          "User Manual – SUNON Series",
          "User Manual – SUNON PRO Series",
          "User Manual – SUNON PLUS Series",
          "User Manual – SVP Series",
          "User Manual – SC-M Controller",
        ],
      },
      {
        id: "software",
        title: "Software",
        items: [
          "Communication Software",
          "Watch Power Software",
          "WiFi Monitor",
          "NOVATEK",
          "xBMS",
          "BMS TOOL_1",
          "LFP-BT APP",
        ],
      },
      {
        id: "brochure",
        title: "Brochure",
        items: [
          "General Brochure",
          "Solar Inverter Catalog",
          "Lithium Ion Batteries Brochure",
          "Solar Panel Datasheet",
          "Solar System Overview",
        ],
      },
      {
        id: "certificate",
        title: "Certificate",
        items: [
          "SGS CNAS17020 Quality Certificate",
          "SGS CNAS17025 Testing Certificate",
          "SGS CNAS17065 Product Certificate",
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        items: [
          "LiFePO4 Setup Instructions",
          "How to check the MOSFET",
          "How to check error code 01 (Fan lock)",
          "How to check error code 02 (Over temperature)",
          "How to check error code 03–04 (Battery voltage high/low)",
          "How to check error code 05 (Output short circuited)",
          "How to check error code 51 (Over current)",
          "How to check error code 58 (Output voltage low)",
        ],
      },
    ],
    []
  );

  const totalFiles = useMemo(
    () => downloadData.reduce((acc, s) => acc + s.items.length, 0),
    [downloadData]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return downloadData;
    return downloadData
      .map((sec) => ({
        ...sec,
        items: sec.items.filter((it) => it.toLowerCase().includes(q)),
      }))
      .filter((sec) => sec.items.length > 0);
  }, [downloadData, query]);

  const activeTitle = useMemo(() => {
    const found = downloadData.find((s) => s.id === openSection);
    return found?.title ?? "Support Center";
  }, [downloadData, openSection]);

  const toggle = (id: string) => {
    setOpenSection((prev) => (prev === id ? "" : id));
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-white"
    >
      {/* HERO */}
      <section className="relative mt-[-30px] overflow-hidden">
        <div className="relative h-[56vh] min-h-[420px] sm:h-[52vh] sm:min-h-[460px] lg:h-[46vh] lg:min-h-[500px] flex items-end sm:items-center">
          <motion.div
            initial={{ scale: 1.12, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.15, ease }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=1920"
              className="w-full h-full object-cover"
              alt="Solar Farm Golden Hour"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/80" />
          </motion.div>

          <div className="relative z-10 w-full pb-10 sm:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={container} className="max-w-3xl">
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">
                    Download Center
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]"
                >
                  Download
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-3 sm:mt-5 text-sm sm:text-lg text-gray-200 leading-relaxed font-medium"
                >
                  Manuals, software tools, brochures, certificates, and
                  troubleshooting guides — everything in one place.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
                >
                  <a
                    href="#support"
                    className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition-colors font-extrabold text-sm tracking-wide shadow-lg shadow-red-600/20"
                  >
                    Browse Library
                  </a>
                  <a
                    href="#help"
                    className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur transition-colors font-extrabold text-sm tracking-wide"
                  >
                    Need Help?
                  </a>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 hidden sm:flex gap-2 flex-wrap"
                >
                  <Pill
                    icon={<IconFile className="w-4 h-4" />}
                    text={`${totalFiles} files`}
                  />
                  <Pill
                    icon={<IconShield className="w-4 h-4" />}
                    text="Official documents"
                  />
                  <Pill
                    icon={<IconBolt className="w-4 h-4" />}
                    text={`Top category: ${activeTitle}`}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* SUPPORT CENTER */}
      <section id="support" className="py-14 sm:py-20 lg:py-24">
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
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase">
                Support Center
              </h2>
              <p className="text-gray-500 font-medium mt-3 sm:mt-4">
                Search and download technical resources and documentation.
              </p>
            </motion.div>

            {/* Search + Stats */}
            <motion.div variants={fadeUp} className="mb-6 sm:mb-8">
              <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                      <IconSearch className="w-5 h-5" />
                    </div>
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search manuals, software, certificates..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-semibold outline-none focus:border-red-600 transition-colors"
                    />
                  </div>

                  <div className="flex gap-2 justify-center sm:justify-end flex-wrap">
                    <MiniStat
                      label="Categories"
                      value={`${downloadData.length}`}
                    />
                    <MiniStat label="Files" value={`${totalFiles}`} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Accordion */}
            <div className="space-y-4">
              {filtered.map((section) => {
                const isOpen = openSection === section.id;
                const isTrouble = section.id === "troubleshooting";
                return (
                  <motion.div
                    key={section.id}
                    variants={cardIn}
                    className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggle(section.id)}
                      className={[
                        "w-full flex items-center justify-between text-left px-5 sm:px-7 py-5 sm:py-6 transition-colors",
                        isOpen
                          ? "bg-red-600 text-white"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-900",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={[
                            "w-10 h-10 rounded-xl flex items-center justify-center",
                            isOpen ? "bg-white/15" : "bg-white",
                          ].join(" ")}
                        >
                          {section.id === "software" && (
                            <IconChip
                              className={[
                                "w-5 h-5",
                                isOpen ? "text-white" : "text-red-600",
                              ].join(" ")}
                            />
                          )}
                          {section.id === "manual" && (
                            <IconBook
                              className={[
                                "w-5 h-5",
                                isOpen ? "text-white" : "text-red-600",
                              ].join(" ")}
                            />
                          )}
                          {section.id === "brochure" && (
                            <IconLayers
                              className={[
                                "w-5 h-5",
                                isOpen ? "text-white" : "text-red-600",
                              ].join(" ")}
                            />
                          )}
                          {section.id === "certificate" && (
                            <IconShield
                              className={[
                                "w-5 h-5",
                                isOpen ? "text-white" : "text-red-600",
                              ].join(" ")}
                            />
                          )}
                          {section.id === "troubleshooting" && (
                            <IconWrench
                              className={[
                                "w-5 h-5",
                                isOpen ? "text-white" : "text-red-600",
                              ].join(" ")}
                            />
                          )}
                        </span>

                        <div>
                          <div className="text-[12px] sm:text-[13px] font-black uppercase tracking-widest">
                            {section.title}
                          </div>
                          <div
                            className={[
                              "mt-1 text-[11px] font-semibold",
                              isOpen ? "text-white/80" : "text-gray-500",
                            ].join(" ")}
                          >
                            {section.items.length} items
                          </div>
                        </div>
                      </div>

                      <motion.span
                        variants={iconSpin}
                        animate={isOpen ? "open" : "collapsed"}
                        className="shrink-0"
                      >
                        <IconChevron
                          className={[
                            "w-5 h-5",
                            isOpen ? "text-white" : "text-gray-700",
                          ].join(" ")}
                        />
                      </motion.span>
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
                          <div className="divide-y divide-gray-50">
                            {section.items.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25, ease }}
                                className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 hover:bg-gray-50 transition-colors group"
                              >
                                <div className="flex items-start gap-3 min-w-0">
                                  <span className="mt-0.5">
                                    {isTrouble ? (
                                      <IconWrench className="w-5 h-5 text-red-600" />
                                    ) : (
                                      <IconPdf className="w-5 h-5 text-red-600" />
                                    )}
                                  </span>

                                  <div className="min-w-0">
                                    <div className="text-[11px] sm:text-[12px] font-bold text-gray-800 uppercase tracking-wide group-hover:text-red-600 transition-colors truncate">
                                      {item}
                                    </div>
                                    <div className="mt-1 text-xs text-gray-400">
                                      PDF • Updated regularly
                                    </div>
                                  </div>
                                </div>

                                <motion.button
                                  whileHover={{ y: -2 }}
                                  whileTap={{ scale: 0.98 }}
                                  transition={{ duration: 0.2, ease }}
                                  className="shrink-0 inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors"
                                >
                                  <IconDownload className="w-4 h-4" />
                                  <span>Download</span>
                                </motion.button>
                              </motion.div>
                            ))}
                          </div>

                          {/* Panel footer */}
                          <div className="px-5 sm:px-7 py-5 bg-white">
                            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between rounded-2xl border border-gray-100 bg-gray-50 p-4">
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                                  <IconInfo className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                  <div className="text-sm font-extrabold text-gray-900">
                                    Need a specific file?
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    Contact support and we’ll send the correct
                                    version for your model.
                                  </div>
                                </div>
                              </div>
                              <a
                                href="#help"
                                className="inline-flex justify-center items-center px-4 py-2.5 rounded-xl bg-gray-900 text-white font-extrabold text-xs tracking-widest uppercase hover:bg-red-600 transition-colors"
                              >
                                Get Support
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              {filtered.length === 0 && (
                <motion.div variants={fadeUp} className="text-center py-12">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500">
                    <IconSearch className="w-6 h-6" />
                  </div>
                  <p className="mt-4 font-bold text-gray-700">
                    No results found.
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Try another keyword (example: “SUNON”, “BMS”, “SGS”).
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INQUIRY BLOCK */}
      <section
        id="help"
        className="bg-gray-900 py-14 sm:py-16 text-white text-center"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto px-4"
        >
          <motion.h3
            variants={fadeUp}
            className="text-lg sm:text-xl font-black uppercase tracking-tight mb-3"
          >
            Can't find what you're looking for?
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-sm mb-7 sm:mb-8 leading-relaxed"
          >
            Contact our technical support team directly for specialized
            assistance.
          </motion.p>

          <motion.a
            variants={fadeUp}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            href="/contact"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-white hover:text-red-600 text-white px-9 sm:px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.3em] transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default DownloadPage;

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

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-3 py-2 rounded-2xl bg-gray-50 border border-gray-100 text-center min-w-[90px]">
      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
        {label}
      </div>
      <div className="text-sm font-extrabold text-gray-900">{value}</div>
    </div>
  );
}

/* ---------- Icons (SVG, no deps) ---------- */

function IconChevron({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
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
      <path d="M12 3v10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPdf({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h3" />
      <path d="M8 17h4" />
    </svg>
  );
}

function IconWrench({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.7 5.7l-6 6a2 2 0 0 0 2.8 2.8l6-6a4 4 0 0 0 5.7-5.7l-2.2 2.2-2.8-2.8 2.2-2.2z" />
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

function IconFile({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}

function IconBook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 19a2 2 0 0 0 2 2h14" />
      <path d="M6 2h14v16H6a2 2 0 0 0-2 2V4a2 2 0 0 1 2-2z" />
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
      <path d="M9 2v2" />
      <path d="M15 2v2" />
      <path d="M9 20v2" />
      <path d="M15 20v2" />
      <path d="M2 9h2" />
      <path d="M2 15h2" />
      <path d="M20 9h2" />
      <path d="M20 15h2" />
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 9h6v6H9z" />
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
