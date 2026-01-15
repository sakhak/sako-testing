import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

/**
 * ProductsPage (Redesign + Responsive + Framer Motion)
 * Notes:
 * - Overview mode (Products) + Listing mode (category/subcategory)
 * - Sticky sidebar on desktop
 * - Animated accordion categories
 * - Search + sort + real pagination (client-side)
 * - No FontAwesome (SVG icons included)
 */

interface CategoryData {
  name: string;
  isOpen: boolean;
  sub: string[];
}

interface Product {
  id: number;
  name: string;
  img: string;
}

interface ProductsPageProps {
  initialCategory?: string;
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

const panel: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.28, ease } },
};

const rotate: Variants = {
  collapsed: { rotate: 0 },
  open: { rotate: 45, transition: { duration: 0.18, ease } }, // plus -> x
};

const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory = "Products",
}) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const isOverview =
    activeCategory === "Products" || activeCategory === "products";

  const [categories, setCategories] = useState<CategoryData[]>([
    {
      name: "On / Off Grid Solar Inverter",
      isOpen: true,
      sub: [
        "SUN-G Series",
        "SUN-PRO Series",
        "Off Grid 1-5KW",
        "Off Grid 8-12KW",
      ],
    },
    {
      name: "Hybrid Solar Inverter",
      isOpen: false,
      sub: ["Single Phase Hybrid", "Three Phase Hybrid", "High Voltage Hybrid"],
    },
    {
      name: "Lithium Battery",
      isOpen: false,
      sub: [
        "12V Lithium Pack",
        "24V Lithium Pack",
        "48V Lithium Pack",
        "High Voltage Pack",
      ],
    },
    {
      name: "Small Energy Storage System",
      isOpen: false,
      sub: ["All-in-one ESS 5KWH", "Portable Power Station", "Home ESS"],
    },
    {
      name: "Mega Energy Storage System",
      isOpen: false,
      sub: ["Cabinet ESS", "Container ESS", "Commercial Storage"],
    },
    {
      name: "Micro Inverter",
      isOpen: false,
      sub: ["300W-800W", "1200W-2000W"],
    },
    {
      name: "Solar Panel",
      isOpen: false,
      sub: ["Mono Half-cut Cell", "Poly Modules", "N-Type Modules"],
    },
    {
      name: "Solar Charge Controller",
      isOpen: false,
      sub: ["PWM Controller", "MPPT Controller"],
    },
    {
      name: "Uninterruptible Power Supply",
      isOpen: false,
      sub: ["Offline UPS", "Line-interactive UPS", "Online UPS"],
    },
  ]);
  const salesPeople = [
    {
      name: "Succie Chen",
      role: "Sales Manager",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "David Lee",
      role: "Technical Sales",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Sophea Kim",
      role: "Regional Support",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    },
  ];
  const [activeSales, setActiveSales] = useState(0);

  const activePerson = salesPeople[activeSales];

  

  // Listing controls
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"latest" | "name-asc" | "name-desc">(
    "latest"
  );
  const [page, setPage] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    setActiveCategory(initialCategory);
    setSearch("");
    setSort("latest");
    setPage(1);

    if (initialCategory !== "Products" && initialCategory !== "products") {
      setCategories((prev) =>
        prev.map((cat) => ({
          ...cat,
          isOpen:
            cat.name === initialCategory || cat.sub.includes(initialCategory)
              ? true
              : cat.isOpen,
        }))
      );
    }
  }, [initialCategory]);

  const toggleCategory = (catName: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.name === catName ? { ...cat, isOpen: !cat.isOpen } : cat
      )
    );
  };

  // helper: stable mock products
  const getMockProducts = (catName: string, count: number = 12): Product[] => {
    const prefix = catName.toLowerCase().includes("battery")
      ? "BAT"
      : catName.toLowerCase().includes("inverter")
      ? "INV"
      : catName.toLowerCase().includes("panel")
      ? "PAN"
      : catName.toLowerCase().includes("ups")
      ? "UPS"
      : "SYS";

    return Array.from({ length: count }).map((_, i) => ({
      id: i + 1,
      name: `SAKO ${catName} ${prefix}-${1000 + i}`,
      img: `https://picsum.photos/seed/${encodeURIComponent(
        catName
      )}-${i}/600/600`,
    }));
  };

  /**
   * ✅✅✅ FIX FOR YOUR ERROR ✅✅✅
   * Hooks (useMemo) must run on EVERY render.
   * Previously, when isOverview === true, the component returned early and skipped these hooks.
   * Now we compute them BEFORE the overview return, and return safe values when overview.
   */

  const parentCategory = useMemo(() => {
    if (isOverview) return "Products";
    return (
      categories.find(
        (c) => c.name === activeCategory || c.sub.includes(activeCategory)
      )?.name ?? "Products"
    );
  }, [isOverview, categories, activeCategory]);

  const rawProducts = useMemo(() => {
    if (isOverview) return [] as Product[];
    return getMockProducts(activeCategory, 24);
  }, [isOverview, activeCategory]);

  const filtered = useMemo(() => {
    if (isOverview) return [] as Product[];
    const s = search.trim().toLowerCase();
    if (!s) return rawProducts;
    return rawProducts.filter((p) => p.name.toLowerCase().includes(s));
  }, [isOverview, rawProducts, search]);

  const sorted = useMemo(() => {
    if (isOverview) return [] as Product[];
    const arr = [...filtered];
    if (sort === "name-asc") arr.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "name-desc") arr.sort((a, b) => b.name.localeCompare(a.name));
    return arr;
  }, [isOverview, filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * pageSize;
  const paged = sorted.slice(startIdx, startIdx + pageSize);

  const setCategoryAndReset = (name: string) => {
    setActiveCategory(name);
    setSearch("");
    setSort("latest");
    setPage(1);
    // open parent in sidebar
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        isOpen: cat.name === name || cat.sub.includes(name) ? true : cat.isOpen,
      }))
    );
  };

  // ---- OVERVIEW MODE ----
  if (isOverview) {
    return (
      <div className="bg-white">
        {/* Hero */}
        <section className="relative mt-[-30px] overflow-hidden">
          <div className="relative h-[58vh] min-h-[460px] sm:h-[52vh] sm:min-h-[520px] lg:h-[48vh] lg:min-h-[560px] flex items-end sm:items-center">
            <motion.div
              initial={{ scale: 1.12, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease }}
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1920"
                className="w-full h-full object-cover"
                alt="SAKO Products"
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
                  className="max-w-3xl text-center md:text-left"
                >
                  <motion.div
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">
                      Product Portfolio
                    </span>
                  </motion.div>

                  <motion.h1
                    variants={fadeUp}
                    className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight"
                  >
                    Products
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="mt-4 text-sm sm:text-lg text-gray-200 leading-relaxed font-medium"
                  >
                    SAKO is a professional manufacturer of off-grid solar power
                    systems. We provide clean energy solutions for residential,
                    commercial, and industrial applications with
                    industry-leading storage and conversion technology.
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="mt-7 flex flex-col sm:flex-row gap-3 sm:justify-start"
                  >
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease }}
                      onClick={() => {
                        const first = categories[0]?.name ?? "Products";
                        setActiveCategory(first);
                      }}
                      className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-red-600 hover:bg-white hover:text-red-600 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors shadow-2xl shadow-red-600/20"
                    >
                      Browse Categories
                    </motion.button>

                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease }}
                      href="#grid"
                      className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                    >
                      View Overview
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview sections */}
        <div
          id="grid"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-14 sm:space-y-16 lg:space-y-20"
        >
          {categories.map((cat) => (
            <motion.section
              key={cat.name}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 sm:p-8 lg:p-10"
            >
              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 border-b border-gray-100 pb-5"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-700">
                      Category
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
                    {cat.name}
                  </h2>
                  <div className="w-12 h-1.5 bg-red-600 mt-4 rounded-full" />
                  <p className="mt-4 text-sm text-gray-500 font-medium max-w-2xl">
                    Explore featured products in this category. Click “View
                    More” to see the full listing.
                  </p>
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease }}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    setSearch("");
                    setPage(1);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gray-900 text-white hover:bg-red-600 transition-colors text-[11px] font-black uppercase tracking-[0.22em] w-full md:w-auto"
                >
                  View More
                  <IconArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                {getMockProducts(cat.name, 4).map((item) => (
                  <motion.div
                    key={`${cat.name}-${item.id}`}
                    variants={cardIn}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.25, ease }}
                    className="group cursor-pointer"
                    onClick={() => setActiveCategory(cat.name)}
                  >
                    <div className="aspect-square rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center p-8 sm:p-10 mb-4 overflow-hidden">
                      <motion.img
                        src={item.img}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain filter grayscale-[0.25] group-hover:grayscale-0 transition-all"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.25, ease }}
                      />
                    </div>
                    <h3 className="text-center text-[11px] sm:text-[12px] font-extrabold text-gray-800 uppercase tracking-wide group-hover:text-red-600 transition-colors px-3 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                      {item.name}
                    </h3>
                  </motion.div>
                ))}
              </div>

              {/* quick chips */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-2"
              >
                {cat.sub.slice(0, 4).map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveCategory(s)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-700 hover:text-red-600 hover:border-red-200 transition-colors text-[11px] font-bold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    {s}
                  </button>
                ))}
              </motion.div>
            </motion.section>
          ))}
        </div>
      </div>
    );
  }

  // ---- LISTING MODE ----
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            <button
              className="hover:text-red-600 transition-colors"
              onClick={() => setActiveCategory("Products")}
            >
              Home
            </button>
            <span>/</span>
            <button
              className="hover:text-red-600 transition-colors"
              onClick={() => setActiveCategory("Products")}
            >
              Products
            </button>
            <span>/</span>
            <span className="text-gray-900">{activeCategory}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:w-1/4 flex-shrink-0 space-y-6 lg:space-y-8 lg:sticky lg:top-6 self-start">
            {/* Categories */}
            <motion.div
              variants={cardIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="bg-gray-50 px-5 sm:px-6 py-4 border-b border-gray-100">
                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-900">
                  Categories
                </h3>
              </div>

              <div className="divide-y divide-gray-50">
                {categories.map((cat) => {
                  const isActive =
                    activeCategory === cat.name ||
                    cat.sub.includes(activeCategory);
                  const isOpen = cat.isOpen;

                  return (
                    <div key={cat.name}>
                      <button
                        onClick={() => toggleCategory(cat.name)}
                        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left transition-colors"
                        type="button"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={[
                              "w-9 h-9 rounded-xl border flex items-center justify-center",
                              isActive
                                ? "bg-red-50 border-red-100 text-red-600"
                                : "bg-gray-50 border-gray-100 text-gray-600",
                            ].join(" ")}
                          >
                            <IconGrid className="w-4 h-4" />
                          </span>
                          <span
                            className={[
                              "text-[11px] font-extrabold uppercase tracking-widest truncate",
                              isActive ? "text-red-600" : "text-gray-800",
                            ].join(" ")}
                          >
                            {cat.name}
                          </span>
                        </div>

                        <motion.span
                          variants={rotate}
                          animate={isOpen ? "open" : "collapsed"}
                          className="shrink-0 text-red-600"
                        >
                          <IconPlus className="w-4 h-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            variants={panel}
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            className="overflow-hidden"
                          >
                            <div className="bg-gray-50/40 pb-3">
                              {/* parent click */}
                              <button
                                onClick={() => setCategoryAndReset(cat.name)}
                                className={[
                                  "w-full text-left px-7 sm:px-8 py-2.5 text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-3 transition-colors",
                                  activeCategory === cat.name
                                    ? "text-red-600"
                                    : "text-gray-600 hover:text-red-600",
                                ].join(" ")}
                                type="button"
                              >
                                <span
                                  className={[
                                    "w-1.5 h-1.5 rounded-full",
                                    activeCategory === cat.name
                                      ? "bg-red-600"
                                      : "bg-gray-300",
                                  ].join(" ")}
                                />
                                All {cat.name}
                              </button>

                              {cat.sub.map((sub) => (
                                <button
                                  key={sub}
                                  onClick={() => setCategoryAndReset(sub)}
                                  className={[
                                    "w-full text-left px-7 sm:px-8 py-2.5 text-[11px] font-bold uppercase tracking-wider flex items-center gap-3 transition-colors",
                                    activeCategory === sub
                                      ? "text-red-600"
                                      : "text-gray-500 hover:text-red-600",
                                  ].join(" ")}
                                  type="button"
                                >
                                  <span
                                    className={[
                                      "w-1.5 h-1.5 rounded-full",
                                      activeCategory === sub
                                        ? "bg-red-600"
                                        : "bg-transparent border border-gray-200",
                                    ].join(" ")}
                                  />
                                  {sub}
                                </button>
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

            {/* Sales Card */}
            <motion.div
              variants={cardIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="h-1 bg-red-600" />

              <div className="p-6 sm:p-7 text-center">
                <div className="relative w-20 h-20 mx-auto mb-5">
                  <motion.img
                    key={activePerson.img}
                    src={activePerson.img}
                    alt={activePerson.name}
                    className="w-full h-full object-cover rounded-full border-4 border-gray-50"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-4 border-white rounded-full" />
                </div>

                <motion.h4
                  key={activePerson.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1"
                >
                  {activePerson.name}
                </motion.h4>

                <motion.p
                  key={activePerson.role}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5"
                >
                  {activePerson.role}
                </motion.p>

                {/* Switchers (hover or click) */}
                <div className="flex justify-center gap-2 mb-5">
                  {salesPeople.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onMouseEnter={() => setActiveSales(i)}
                      onClick={() => setActiveSales(i)}
                      className={[
                        "w-2.5 h-2.5 rounded-full transition-all",
                        i === activeSales
                          ? "bg-red-600 scale-110"
                          : "bg-gray-200 hover:bg-red-300",
                      ].join(" ")}
                      aria-label={`Switch to ${salesPeople[i].name}`}
                    />
                  ))}
                </div>

                <div className="flex justify-center gap-3">
                  <button className="w-11 h-11 rounded-2xl bg-gray-50 text-gray-500 hover:bg-red-600 hover:text-white transition-colors border border-gray-100 inline-flex items-center justify-center">
                    <IconChat className="w-5 h-5" />
                  </button>
                  <button className="w-11 h-11 rounded-2xl bg-gray-50 text-gray-500 hover:bg-red-600 hover:text-white transition-colors border border-gray-100 inline-flex items-center justify-center">
                    <IconMail className="w-5 h-5" />
                  </button>
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease }}
                  onClick={() => setActiveCategory("Products")}
                  className="mt-6 w-full bg-gray-900 hover:bg-red-600 text-white py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                >
                  Back to Overview
                </motion.button>
              </div>
            </motion.div>
          </aside>

          {/* Listing Grid */}
          <main className="lg:w-3/4">
            {/* Header + controls */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mb-8 sm:mb-10 rounded-3xl border border-gray-100 bg-white shadow-sm p-6 sm:p-8"
            >
              <motion.div
                variants={fadeUp}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-gray-100 pb-6"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-gray-700">
                      {parentCategory}
                    </span>
                  </div>
                  <h1 className="mt-3 text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                    {activeCategory}
                  </h1>
                  <div className="w-16 sm:w-20 h-1.5 bg-red-600 mt-4 rounded-full" />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                      <IconSearch className="w-5 h-5" />
                    </div>
                    <input
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                      }}
                      placeholder="Search products..."
                      className="w-full sm:w-[260px] pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-semibold outline-none focus:border-red-600 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value as any)}
                      className="w-full sm:w-[190px] appearance-none bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl text-sm font-semibold text-gray-800 outline-none focus:border-red-600 transition-colors pr-10"
                    >
                      <option value="latest">Sort: latest</option>
                      <option value="name-asc">Sort: name A–Z</option>
                      <option value="name-desc">Sort: name Z–A</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                      <IconChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-500 font-semibold"
              >
                <span>
                  Showing{" "}
                  <span className="text-gray-900 font-extrabold">
                    {sorted.length === 0 ? 0 : startIdx + 1}–
                    {Math.min(startIdx + pageSize, sorted.length)}
                  </span>{" "}
                  of{" "}
                  <span className="text-gray-900 font-extrabold">
                    {sorted.length}
                  </span>{" "}
                  results
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setSort("latest");
                      setPage(1);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:text-red-600 transition-colors text-[11px] font-extrabold uppercase tracking-widest"
                  >
                    <IconX className="w-4 h-4" />
                    Reset
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                {paged.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={cardIn}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.25, ease }}
                    className="group cursor-pointer rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-black/10 overflow-hidden"
                  >
                    <div className="aspect-square bg-gray-50 border-b border-gray-100 flex items-center justify-center p-7">
                      <motion.img
                        src={product.img}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain filter grayscale-[0.25] group-hover:grayscale-0 transition-all"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.25, ease }}
                      />
                    </div>

                    <div className="p-5">
                      <div className="text-[11px] font-extrabold uppercase tracking-wide text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2 min-h-[2.5rem]">
                        {product.name}
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-black uppercase tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                          New
                        </span>

                        <button className="inline-flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors text-[11px] font-black uppercase tracking-[0.22em]">
                          Details
                          <IconArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {paged.length === 0 && (
                <motion.div variants={fadeUp} className="text-center py-14">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500">
                    <IconSearch className="w-6 h-6" />
                  </div>
                  <p className="mt-4 font-bold text-gray-700">
                    No products found.
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Try another keyword.
                  </p>
                </motion.div>
              )}

              {/* Pagination */}
              <motion.div
                variants={fadeUp}
                className="mt-10 sm:mt-14 pt-8 border-t border-gray-100 flex items-center justify-center gap-2"
              >
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                  className={[
                    "w-11 h-11 rounded-2xl border border-gray-100 inline-flex items-center justify-center transition-colors",
                    safePage === 1
                      ? "text-gray-300"
                      : "text-gray-700 hover:border-red-600 hover:text-red-600",
                  ].join(" ")}
                >
                  <IconChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
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
                      : "text-gray-700 hover:border-red-600 hover:text-red-600",
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

export default ProductsPage;

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

function IconX({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M18 6L6 18" strokeLinecap="round" />
      <path d="M6 6l12 12" strokeLinecap="round" />
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

function IconChevronDown({ className }: { className?: string }) {
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
