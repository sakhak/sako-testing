import React, { useMemo, useState } from "react";
import { AnimatePresence, motion,type Variants } from "framer-motion";

/**
 * NewsPage (Redesign + Responsive + Framer Motion)
 * Install: npm i framer-motion
 * Notes:
 * - Sticky sidebar on desktop
 * - Category accordion with smooth animation
 * - Search + simple client-side pagination
 * - No FontAwesome (SVG icons included)
 */

interface NewsItem {
  id: number;
  category: "Blogs" | "News" | "SAKO Blog" | "Industry News";
  title: string;
  date: string;
  author: string;
  img: string;
  excerpt: string;
}

interface NewsPageProps {
  type?: "blog" | "industry";
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

const NewsPage: React.FC<NewsPageProps> = ({ type = "blog" }) => {
  const [openCat, setOpenCat] = useState<string | null>("Solar Inverter");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => [
      {
        name: "Solar Inverter",
        subs: [
          "120V/240V Solar Inverter",
          "Off Grid Solar Inverter",
          "Hybrid Solar Inverter",
          "Micro Inverter",
        ],
      },
      {
        name: "Lithium Ion Batteries",
        subs: [
          "Li-Max Series LiFePO4 battery",
          "Li-Sun Series LiFePO4 battery",
          "12V / 24V / 48V Lithium Battery",
          "High Voltage Lithium Battery",
        ],
      },
      {
        name: "Solar LED Lights",
        subs: ["Solar Street Light", "Solar Flood Light"],
      },
      {
        name: "Solar Panel",
        subs: ["Mono 300W–400W", "Poly 100W–340W", "Half-cut Cell 400W–705W"],
      },
      {
        name: "Solar Charge Controller",
        subs: ["MPPT Solar Charge Controller", "PWM Solar Charge Controller"],
      },
      {
        name: "Energy Storage System",
        subs: ["Small Energy Storage System", "Mega Energy Storage System"],
      },
      {
        name: "Uninterruptible Power Supply",
        subs: ["Line-interactive UPS", "Online UPS"],
      },
    ],
    []
  );

  const blogItems: NewsItem[] = useMemo(
    () => [
      {
        id: 1,
        category: "SAKO Blog",
        title: "SAKO SOLAR Lands in Freetown 2025",
        date: "January 12, 2025",
        author: "SAKOPOWER",
        img: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200",
        excerpt:
          "SAKO continues its expansion in the West African market, bringing reliable off-grid solutions to Freetown. This milestone marks our commitment to powering sustainable growth across the region.",
      },
      {
        id: 2,
        category: "News",
        title: "Africa Energy Expo 2025: Showcasing Innovation",
        date: "February 05, 2025",
        author: "SAKOPOWER",
        img: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=1200",
        excerpt:
          "Join SAKO at the Africa Energy Expo 2025 where we will be unveiling our latest High Voltage Lithium Battery series and Smart Hybrid Inverters designed for harsh environments.",
      },
      {
        id: 3,
        category: "SAKO Blog",
        title: "SAKO at the 138th Canton Fair",
        date: "October 15, 2024",
        author: "SAKOPOWER",
        img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200",
        excerpt:
          "A retrospective on our successful participation at the 138th Canton Fair. SAKO booth attracted global distributors interested in our all-in-one Energy Storage Systems.",
      },
    ],
    []
  );

  const industryItems: NewsItem[] = useMemo(
    () => [
      {
        id: 101,
        category: "Industry News",
        title: "SAKO Jiangxi Factory Rushed Export Orders for Global Market",
        date: "June 08, 2024",
        author: "SAKOPOWER",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
        excerpt:
          "Our Jiangxi factory is working at full capacity to meet the surging demand for lithium batteries and energy storage inverters in the European and African markets. We focus on export growth and strict quality control.",
      },
      {
        id: 102,
        category: "Industry News",
        title: "Innovative SAKO Balcony Solar System Solution for Urban Living",
        date: "May 20, 2024",
        author: "SAKOPOWER",
        img: "https://images.unsplash.com/photo-1595844730298-b9f1ff9b5993?auto=format&fit=crop&q=80&w=1200",
        excerpt:
          "SAKO introduces a residential solar solution specifically designed for apartments and balconies. This plug-and-play system allows urban residents to harness solar power efficiently.",
      },
      {
        id: 103,
        category: "Industry News",
        title:
          "Trends in Global Energy Storage: The Rise of Lithium Iron Phosphate",
        date: "April 12, 2024",
        author: "SAKOPOWER",
        img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1200",
        excerpt:
          "Industry experts highlight LiFePO4 as the leading chemistry for residential storage. SAKO continues to lead with the Li-Max and Li-Sun series, offering unmatched safety and cycle life.",
      },
    ],
    []
  );

  const currentItems = type === "industry" ? industryItems : blogItems;
  const pageTitle = type === "industry" ? "Industry News" : "SAKO Blog";

  // Search
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return currentItems;
    return currentItems.filter(
      (it) =>
        it.title.toLowerCase().includes(s) ||
        it.excerpt.toLowerCase().includes(s) ||
        it.author.toLowerCase().includes(s) ||
        it.category.toLowerCase().includes(s) ||
        it.date.toLowerCase().includes(s)
    );
  }, [q, currentItems]);

  // Pagination
  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);

  const paged = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, safePage]);

  const setAndResetPage = (value: string) => {
    setQ(value);
    setPage(1);
  };

  const toggleCat = (name: string) =>
    setOpenCat((prev) => (prev === name ? null : name));

  return (
    <div className="bg-white min-h-screen">
      {/* TOP HEADER */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center md:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100"
            >
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-gray-700">
                {type === "industry" ? "Market updates" : "Company stories"}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight"
            >
              {pageTitle}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="w-14 sm:w-16 h-1.5 bg-red-600 mt-5 sm:mt-6 mx-auto md:mx-0 rounded-full"
            />

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm sm:text-base text-gray-500 font-medium max-w-3xl mx-auto md:mx-0"
            >
              Browse the latest posts, announcements, and industry insights. Use
              categories or search to find what you need.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* SIDEBAR */}
          <aside className="lg:w-1/3 xl:w-1/4 space-y-6 lg:space-y-8">
            {/* Search box */}
            <motion.div
              variants={cardIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-white shadow-sm p-4 sm:p-5"
            >
              <div className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-900 mb-3">
                Search Posts
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                  <IconSearch className="w-5 h-5" />
                </div>
                <input
                  value={q}
                  onChange={(e) => setAndResetPage(e.target.value)}
                  placeholder="Search title, author, keyword..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-semibold outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span className="font-semibold">
                  Results:{" "}
                  <span className="text-gray-900 font-extrabold">
                    {filtered.length}
                  </span>
                </span>
                {q.trim() && (
                  <button
                    type="button"
                    onClick={() => {
                      setQ("");
                      setPage(1);
                    }}
                    className="font-extrabold text-red-600 hover:text-gray-900 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </motion.div>

            {/* Categories Accordion */}
            <motion.div
              variants={cardIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden lg:sticky lg:top-6"
            >
              <div className="bg-gray-50 px-5 sm:px-6 py-4 border-b border-gray-100">
                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-900">
                  Product Categories
                </h3>
              </div>

              <div className="divide-y divide-gray-50">
                {categories.map((cat) => {
                  const isOpen = openCat === cat.name;
                  return (
                    <div key={cat.name}>
                      <button
                        onClick={() => toggleCat(cat.name)}
                        className={[
                          "w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left transition-colors",
                          isOpen ? "bg-white" : "bg-white hover:bg-gray-50",
                        ].join(" ")}
                        type="button"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-red-600">
                            <IconGrid className="w-4 h-4" />
                          </span>
                          <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-800 truncate">
                            {cat.name}
                          </span>
                        </div>

                        <motion.span
                          variants={rotate}
                          animate={isOpen ? "open" : "collapsed"}
                          className="shrink-0"
                        >
                          <IconPlus className="w-4 h-4 text-red-600" />
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
                            <div className="bg-gray-50/40 py-3">
                              {cat.subs.map((sub) => (
                                <a
                                  key={sub}
                                  href="#"
                                  className="block px-7 sm:px-8 py-2 text-[11px] font-semibold text-gray-600 hover:text-red-600 transition-colors"
                                >
                                  {sub}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Sales Manager Card */}
            <motion.div
              variants={cardIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="h-1 bg-red-600" />
              <div className="p-6 sm:p-7">
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                      alt="Sales Manager"
                      className="w-full h-full object-cover rounded-full border-4 border-gray-50"
                    />
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-4 border-white rounded-full" />
                  </div>

                  <h4 className="mt-4 text-sm font-black text-gray-900 uppercase tracking-widest">
                    Sales Manager
                  </h4>

                  <div className="mt-3 flex justify-center gap-1 text-red-600">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStar key={i} className="w-4 h-4" />
                    ))}
                  </div>

                  <div className="mt-5 flex justify-center gap-3">
                    <button className="w-11 h-11 rounded-2xl bg-gray-50 text-gray-500 hover:bg-red-600 hover:text-white transition-colors border border-gray-100 inline-flex items-center justify-center">
                      <IconChat className="w-5 h-5" />
                    </button>
                    <button className="w-11 h-11 rounded-2xl bg-gray-50 text-gray-500 hover:bg-red-600 hover:text-white transition-colors border border-gray-100 inline-flex items-center justify-center">
                      <IconMail className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Simple Contact Form */}
                <div className="mt-7 pt-6 border-t border-gray-100">
                  <div className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-900 mb-3">
                    Contact Us
                  </div>

                  <form className="space-y-3">
                    <input
                      type="text"
                      placeholder="NAME *"
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-gray-700 focus:border-red-600 outline-none transition-colors"
                      required
                    />
                    <input
                      type="email"
                      placeholder="EMAIL *"
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-gray-700 focus:border-red-600 outline-none transition-colors"
                      required
                    />
                    <input
                      type="text"
                      placeholder="PHONE"
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-gray-700 focus:border-red-600 outline-none transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="COUNTRY *"
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-gray-700 focus:border-red-600 outline-none transition-colors"
                      required
                    />
                    <textarea
                      placeholder="YOUR MESSAGE *"
                      rows={3}
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-gray-700 focus:border-red-600 outline-none transition-colors resize-none"
                      required
                    />
                    <div className="flex items-center gap-2 py-1">
                      <input
                        type="checkbox"
                        id="verify-sidebar"
                        className="w-4 h-4 rounded text-red-600 border-gray-200 focus:ring-red-600"
                        required
                      />
                      <label
                        htmlFor="verify-sidebar"
                        className="text-[10px] font-bold text-gray-400 uppercase tracking-widest cursor-pointer"
                      >
                        Verification
                      </label>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-gray-900 text-white py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] transition-colors shadow-lg">
                      Send Now
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="lg:w-2/3 xl:w-3/4">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
              className="space-y-8 sm:space-y-10"
            >
              {paged.map((item) => (
                <motion.article
                  key={item.id}
                  variants={cardIn}
                  className="group rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden"
                >
                  <div className="grid md:grid-cols-5">
                    {/* Image */}
                    <div className="md:col-span-2 relative">
                      <div className="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
                        <motion.img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.7, ease }}
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col">
                      <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight group-hover:text-red-600 transition-colors leading-tight">
                        {item.title}
                      </h2>

                      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                        <div className="flex items-center gap-2">
                          <IconCalendar className="w-4 h-4 text-red-600" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <IconUser className="w-4 h-4 text-red-600" />
                          <span>{item.author}</span>
                        </div>
                      </div>

                      <p className="mt-5 text-gray-600 text-sm leading-relaxed font-medium line-clamp-3">
                        {item.excerpt}
                      </p>

                      <div className="mt-7">
                        <button className="inline-flex items-center gap-2 text-red-600 font-black uppercase text-[11px] tracking-[0.28em] hover:tracking-[0.33em] transition-all">
                          Continue reading
                          <span className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-red-50 border border-red-100">
                            <IconArrowRight className="w-4 h-4" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              {paged.length === 0 && (
                <motion.div variants={fadeUp} className="text-center py-12">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500">
                    <IconSearch className="w-6 h-6" />
                  </div>
                  <p className="mt-4 font-bold text-gray-700">
                    No posts found.
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Try another keyword (example: “battery”, “expo”, “hybrid”).
                  </p>
                </motion.div>
              )}

              {/* Pagination */}
              <motion.div
                variants={fadeUp}
                className="pt-2 flex items-center justify-center gap-2"
              >
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                  className={[
                    "w-11 h-11 rounded-2xl border border-gray-100 inline-flex items-center justify-center transition-colors",
                    safePage === 1
                      ? "text-gray-300"
                      : "text-gray-600 hover:border-red-600 hover:text-red-600",
                  ].join(" ")}
                >
                  <IconChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages })
                  .slice(0, 5)
                  .map((_, i) => {
                    const n = i + 1;
                    const active = n === safePage;
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setPage(n)}
                        className={[
                          "w-11 h-11 rounded-2xl font-black text-xs transition-colors",
                          active
                            ? "bg-red-600 text-white"
                            : "border border-gray-100 text-gray-800 hover:border-red-600 hover:text-red-600",
                        ].join(" ")}
                      >
                        {n}
                      </button>
                    );
                  })}

                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage === totalPages}
                  className={[
                    "w-11 h-11 rounded-2xl border border-gray-100 inline-flex items-center justify-center transition-colors",
                    safePage === totalPages
                      ? "text-gray-300"
                      : "text-gray-600 hover:border-red-600 hover:text-red-600",
                  ].join(" ")}
                >
                  <IconChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

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

function IconGrid({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 4h7v7H4z" />
      <path d="M13 4h7v7h-7z" />
      <path d="M4 13h7v7H4z" />
      <path d="M13 13h7v7h-7z" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73L18.18 21z" />
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

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <path d="M3 8h18" />
      <path d="M4 5h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M8 12h2" />
      <path d="M12 12h2" />
      <path d="M16 12h2" />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

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

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
