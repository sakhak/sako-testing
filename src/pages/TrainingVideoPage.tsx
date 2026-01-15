import React, { useMemo, useState } from "react";
import { AnimatePresence, motion,type Variants } from "framer-motion";

/**
 * TrainingVideoPage (Responsive + Framer Motion Redesign)
 * Install: npm i framer-motion
 * Notes:
 * - Mobile-first responsive tabs (horizontal scroll)
 * - Animated tab indicator + animated grid
 * - Video modal (optional) with smooth open/close
 * - No FontAwesome dependency (SVG icons included)
 */

type Video = {
  title: string;
  img: string;
  tab: string;
  // optional real video url if you have it
  url?: string;
  tag?: string;
};

const ease = [0.2, 0.8, 0.2, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const gridWrap: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

const heroImg: Variants = {
  initial: { opacity: 0, scale: 1.06, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(6px)",
    transition: { duration: 0.35, ease },
  },
};

const TrainingVideoPage: React.FC = () => {
  const tabs = useMemo(
    () => [
      "Products Introduction",
      "Operation Introduction",
      "Factory Introduction",
      "SAKO Exhibition",
      "SAKO Events",
    ],
    []
  );

  const allVideos: Video[] = useMemo(
    () => [
      {
        title: "Alpha W-ESS Overview",
        img: "https://picsum.photos/seed/v1/900/600",
        tab: "Products Introduction",
        tag: "ESS",
      },
      {
        title: "ISUN-1KVA Installation",
        img: "https://picsum.photos/seed/v2/900/600",
        tab: "Operation Introduction",
        tag: "Inverter",
      },
      {
        title: "SUNPAX 5.5K Setup",
        img: "https://picsum.photos/seed/v3/900/600",
        tab: "Operation Introduction",
        tag: "Config",
      },
      {
        title: "4U Lithium Battery Guide",
        img: "https://picsum.photos/seed/v4/900/600",
        tab: "Products Introduction",
        tag: "Battery",
      },
      {
        title: "51.2V 200Ah Pack Demo",
        img: "https://picsum.photos/seed/v5/900/600",
        tab: "Products Introduction",
        tag: "LiFePO4",
      },
      {
        title: "SUNPOLO-6K Advanced Config",
        img: "https://picsum.photos/seed/v6/900/600",
        tab: "Operation Introduction",
        tag: "Advanced",
      },

      // a few extras to make the grid feel richer
      {
        title: "Factory Line Walkthrough",
        img: "https://picsum.photos/seed/v7/900/600",
        tab: "Factory Introduction",
        tag: "Factory",
      },
      {
        title: "QC & Testing Process",
        img: "https://picsum.photos/seed/v8/900/600",
        tab: "Factory Introduction",
        tag: "Quality",
      },
      {
        title: "Exhibition Highlights",
        img: "https://picsum.photos/seed/v9/900/600",
        tab: "SAKO Exhibition",
        tag: "Expo",
      },
      {
        title: "New Product Reveal",
        img: "https://picsum.photos/seed/v10/900/600",
        tab: "SAKO Events",
        tag: "Event",
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Video | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allVideos
      .filter((v) => v.tab === activeTab)
      .filter((v) => (q ? v.title.toLowerCase().includes(q) : true));
  }, [activeTab, allVideos, query]);

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative mt-[-30px] overflow-hidden">
        <div className="relative h-[58vh] min-h-[520px] sm:h-[48vh] flex items-end sm:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key="training-hero"
              variants={heroImg}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=1920"
                className="w-full h-full object-cover"
                alt="Sunset Solar Field"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/40 to-black/85" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 w-full pb-10 sm:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <motion.div
                initial="hidden"
                animate="show"
                variants={gridWrap}
                className="max-w-3xl"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-white/90">
                    Video Academy
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-widest"
                >
                  Training Video
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 text-sm sm:text-lg text-gray-200 font-medium leading-relaxed"
                >
                  Learn fast with step-by-step videos for installers and
                  end-users — product overview, setup, and operation.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 flex flex-col sm:flex-row gap-3"
                >
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("videos");
                      el?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-red-600 hover:bg-gray-900 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors shadow-xl"
                  >
                    Browse Videos
                    <IconArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    type="button"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                  >
                    Contact Support
                    <IconHeadset className="w-4 h-4 ml-2" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>
      </section>

      {/* CONTROLS */}
      <section
        id="videos"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
          {/* Tabs (mobile scroll) */}
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="min-w-max flex items-center gap-2 border-b border-gray-100 pb-2">
              {tabs.map((tab) => {
                const active = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-4 sm:px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.18em] transition-colors whitespace-nowrap ${
                      active
                        ? "text-gray-900"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="tabPill"
                        className="absolute inset-0 rounded-2xl bg-red-50 border border-red-100"
                        transition={{ duration: 0.28, ease }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search + count */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between lg:justify-end lg:gap-4">
            <div className="relative">
              <IconSearch className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search video..."
                className="w-full sm:w-[320px] bg-gray-50 border border-gray-100 focus:border-red-200 outline-none rounded-2xl pl-11 pr-4 py-3 text-sm font-semibold text-gray-700 placeholder:text-gray-400 transition-colors"
              />
            </div>
            <div className="text-[11px] font-black uppercase tracking-[0.22em] text-gray-400">
              {filtered.length} videos
            </div>
          </div>
        </div>

        {/* GRID */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${activeTab}-${query}`}
            variants={gridWrap}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filtered.map((vid, idx) => (
              <motion.button
                key={`${vid.title}-${idx}`}
                variants={card}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2, ease }}
                onClick={() => setSelected(vid)}
                type="button"
                className="group text-left bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-shadow focus:outline-none"
              >
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={vid.img}
                    alt={vid.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.03 }}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.9, ease }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />

                  {/* top tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-white text-[10px] font-black bg-red-600/90 px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      SAKO
                    </span>
                    {vid.tag && (
                      <span className="text-white text-[10px] font-black bg-white/10 border border-white/15 backdrop-blur px-3 py-1.5 rounded-full uppercase tracking-widest">
                        {vid.tag}
                      </span>
                    )}
                  </div>

                  {/* play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl"
                      initial={{ scale: 0.92, opacity: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.18, ease }}
                    >
                      <span className="ml-1">
                        <IconPlayFilled className="w-6 h-6" />
                      </span>
                      <motion.span
                        className="absolute inset-0 rounded-full border border-white/40"
                        animate={{
                          scale: [1, 1.18, 1],
                          opacity: [0.55, 0.12, 0.55],
                        }}
                        transition={{
                          duration: 2.1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                    {activeTab}
                  </div>
                  <h4 className="mt-2 text-sm sm:text-base font-black text-gray-900 uppercase tracking-wide group-hover:text-red-600 transition-colors leading-snug">
                    {vid.title}
                  </h4>

                  <div className="mt-5 inline-flex items-center gap-2 text-red-600">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                      Watch now
                    </span>
                    <IconArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.button>
            ))}

            {filtered.length === 0 && (
              <motion.div variants={fadeUp} className="col-span-full">
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-10 text-center">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500">
                    <IconSearch className="w-5 h-5" />
                  </div>
                  <div className="mt-4 text-gray-900 font-black uppercase tracking-widest text-sm">
                    No videos found
                  </div>
                  <div className="mt-2 text-gray-500 font-medium text-sm">
                    Try a different keyword or switch tab.
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="absolute inset-0 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-white shadow-2xl"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.32, ease },
              }}
              exit={{
                opacity: 0,
                y: 18,
                scale: 0.98,
                transition: { duration: 0.2, ease },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 sm:p-6 border-b border-gray-100 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                    {selected.tab}
                  </div>
                  <div className="mt-1 text-lg sm:text-xl font-black text-gray-900 uppercase tracking-wide">
                    {selected.title}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="w-10 h-10 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:text-red-600 transition-colors flex items-center justify-center text-gray-600"
                  aria-label="Close"
                >
                  <IconClose className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-black">
                {/* If you have real URLs, replace this image with <iframe> or <video> */}
                {selected.url ? (
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full"
                      src={selected.url}
                      title={selected.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video w-full">
                    <img
                      src={selected.img}
                      alt={selected.title}
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl">
                          <span className="ml-1">
                            <IconPlayFilled className="w-7 h-7" />
                          </span>
                        </div>
                        <div className="mt-4 text-white font-black uppercase tracking-widest text-sm">
                          Add a real video URL to play
                        </div>
                        <div className="mt-2 text-white/80 text-sm font-medium">
                          Put a YouTube/MP4 link in{" "}
                          <span className="font-bold">selected.url</span>.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="text-sm text-gray-500 font-medium">
                  Tip: Use the search to quickly find the right video for
                  installers.
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 font-black uppercase text-[11px] tracking-[0.22em] text-gray-900 hover:text-red-600 transition-colors"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-gray-900 font-black uppercase text-[11px] tracking-[0.22em] text-white transition-colors"
                  >
                    Download Guide
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingVideoPage;

/* -------------------- Icons (SVG) -------------------- */

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

function IconPlayFilled({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 8.5v7l6-3.5-6-3.5z" />
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
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
      <path d="M16 16l5 5" strokeLinecap="round" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 6l12 12" strokeLinecap="round" />
      <path d="M18 6L6 18" strokeLinecap="round" />
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
      <path d="M4 12v5a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2z" />
      <path d="M20 12v5a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2z" />
      <path d="M12 19v2" strokeLinecap="round" />
    </svg>
  );
}
