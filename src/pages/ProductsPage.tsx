import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

/**
 * ✅ ALL-IN-ONE PAGE
 * - Products overview + listing (same as your style)
 * - Click "Details" -> opens split modal like your screenshot (image left, info right)
 * - CTA button -> opens inquiry form (inside same modal)
 * - Submit inquiry -> alert(form data)
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

type InquiryForm = {
  productId: number;
  productName: string;
  category: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
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
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

const panel: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.28, ease } },
};

const rotate: Variants = {
  collapsed: { rotate: 0 },
  open: { rotate: 45, transition: { duration: 0.18, ease } },
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

  // ✅ Modal state
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailStep, setDetailStep] = useState<"details" | "inquire">(
    "details"
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [inquiryForm, setInquiryForm] = useState<InquiryForm>({
    productId: 0,
    productName: "",
    category: "",
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

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

  const setCategoryAndReset = (name: string) => {
    setActiveCategory(name);
    setSearch("");
    setSort("latest");
    setPage(1);
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        isOpen: cat.name === name || cat.sub.includes(name) ? true : cat.isOpen,
      }))
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
      )}-${i}/900/900`,
    }));
  };

  // Derived (hooks must always run)
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

  // ✅ Open split modal like screenshot
  const openDetails = (p: Product) => {
    setSelectedProduct(p);
    setDetailStep("details");
    setInquiryForm({
      productId: p.id,
      productName: p.name,
      category: activeCategory,
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });
    setDetailOpen(true);
  };

  const closeDetails = () => {
    setDetailOpen(false);
    setDetailStep("details");
  };

  const changeInquiry = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(inquiryForm, null, 2));
    setDetailOpen(false);
    setDetailStep("details");
  };

  // ---------- Overview ----------
  if (isOverview) {
    return (
      <div className="bg-white">
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
                alt="Products"
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
                    Clean energy solutions for residential, commercial, and
                    industrial applications with leading storage and conversion
                    technology.
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="mt-7 flex flex-col sm:flex-row gap-3 sm:justify-start"
                  >
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease }}
                      onClick={() =>
                        setActiveCategory(categories[0]?.name ?? "Products")
                      }
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

        <div
          id="grid"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-14"
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
                className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8 border-b border-gray-100 pb-5"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
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
                    <div className="aspect-square rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center  mb-4 overflow-hidden">
                      <motion.img
                        src={item.img}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain filter grayscale-[0.25] group-hover:grayscale-0 transition-all"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.25, ease }}
                      />
                    </div>
                    <h3 className="text-center text-[11px] font-extrabold text-gray-800 uppercase tracking-wide group-hover:text-red-600 transition-colors px-3 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                      {item.name}
                    </h3>
                  </motion.div>
                ))}
              </div>

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

  // ---------- Listing ----------
  return (
    <div className="bg-white min-h-screen">
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

          {/* Listing */}
          <main className="lg:w-3/4">
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
              </motion.div>
            </motion.div>

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
                    className="group rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-black/10 overflow-hidden"
                  >
                    <div className="aspect-square bg-gray-50 border-b border-gray-100 flex items-center justify-center">
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

                        <button
                          type="button"
                          onClick={() => openDetails(product)}
                          className="inline-flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors text-[11px] font-black uppercase tracking-[0.22em]"
                        >
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

      {/* ✅ Split Modal like screenshot */}
      <SplitDetailsModal
        open={detailOpen}
        step={detailStep}
        onClose={closeDetails}
        onGoInquire={() => setDetailStep("inquire")}
        onBackDetails={() => setDetailStep("details")}
        product={selectedProduct}
        data={{
          status: "COMPLETED",
          tag: "RESIDENTIAL",
          title: selectedProduct?.name ?? "—",
          location: "Beverly Hills, CA",
          specs: "2,400 sq ft • 4 Bed, 3 Bath",
          description:
            "This project showcases our commitment to excellence. Designed with precision and built with high-quality materials, it stands as a testament to modern engineering and architectural beauty.",
          buttonText: "Inquire About This Project",
        }}
        form={inquiryForm}
        onChangeForm={changeInquiry}
        onSubmitForm={submitInquiry}
      />
    </div>
  );
};

export default ProductsPage;

/* -------------------- Split Modal -------------------- */

function SplitDetailsModal({
  open,
  step,
  onClose,
  onGoInquire,
  onBackDetails,
  product,
  data,
  form,
  onChangeForm,
  onSubmitForm,
}: {
  open: boolean;
  step: "details" | "inquire";
  onClose: () => void;
  onGoInquire: () => void;
  onBackDetails: () => void;
  product: Product | null;
  data: {
    status: string;
    tag: string;
    title: string;
    location: string;
    specs: string;
    description: string;
    buttonText: string;
  };
  form: InquiryForm;
  onChangeForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmitForm: (e: React.FormEvent) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.985 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-gray-200/80 text-gray-700 hover:bg-gray-200 transition"
              aria-label="Close"
            >
              <IconX className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* LEFT Image */}
              <div className="relative min-h-[260px] lg:min-h-[560px] bg-gray-100">
                <img
                  src={
                    product?.img ??
                    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600"
                  }
                  alt={data.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />

                {/* Status badge */}
                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex items-center rounded-full px-4 py-2 text-[12px] font-black tracking-widest text-white shadow-lg bg-emerald-500">
                    {data.status}
                  </span>
                </div>
              </div>

              {/* RIGHT panel */}
              <div className="bg-white">
                <div className="px-6 sm:px-10 py-8 sm:py-10">
                  <AnimatePresence mode="wait">
                    {step === "details" ? (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                      >
                        <div className="text-[12px] font-black tracking-[0.26em] text-orange-500 uppercase">
                          {data.tag}
                        </div>

                        <h2 className="mt-3 text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                          {data.title}
                        </h2>

                        <div className="mt-3 flex items-center gap-2 text-gray-500 font-semibold">
                          <IconPin className="h-5 w-5" />
                          <span>{data.location}</span>
                        </div>

                        <div className="mt-6 h-px w-full bg-gray-200" />

                        <div className="mt-8">
                          <div className="text-[16px] font-black text-gray-900">
                            Project Details
                          </div>
                          <div className="mt-3 text-[16px] text-gray-600 font-medium">
                            {data.specs}
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="text-[16px] font-black text-gray-900">
                            Description
                          </div>
                          <p className="mt-3 text-[16px] leading-7 text-gray-600">
                            {data.description}
                          </p>
                        </div>

                        <div className="mt-10">
                          <button
                            type="button"
                            onClick={onGoInquire}
                            className="w-full rounded-2xl bg-orange-600 px-6 py-4 text-white font-black text-[16px] shadow-lg shadow-orange-600/25 hover:brightness-95 transition inline-flex items-center justify-center gap-3"
                          >
                            {data.buttonText}
                            <IconArrowRight className="h-5 w-5" />
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="inquire"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-[12px] font-black tracking-[0.26em] text-orange-500 uppercase">
                              INQUIRY FORM
                            </div>
                            <h3 className="mt-3 text-xl sm:text-2xl font-black text-gray-900">
                              Inquire About This Project
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 font-semibold">
                              We will contact you soon.
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={onBackDetails}
                            className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 font-black text-[11px] uppercase tracking-[0.22em] hover:border-orange-300 hover:text-orange-600 transition"
                          >
                            Back
                          </button>
                        </div>

                        <div className="mt-6 h-px w-full bg-gray-200" />

                        <form
                          onSubmit={onSubmitForm}
                          className="mt-6 space-y-4"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field
                              label="Product ID"
                              value={String(form.productId)}
                            />
                            <Field
                              label="Product Name"
                              value={form.productName}
                            />

                            <Input
                              label="Full Name"
                              name="fullName"
                              value={form.fullName}
                              onChange={onChangeForm}
                              placeholder="Your name"
                              required
                            />
                            <Input
                              label="Phone"
                              name="phone"
                              value={form.phone}
                              onChange={onChangeForm}
                              placeholder="+855 ..."
                            />

                            <div className="sm:col-span-2">
                              <Input
                                label="Email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={onChangeForm}
                                placeholder="you@example.com"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="block text-[11px] font-black uppercase tracking-[0.22em] text-gray-600 mb-2">
                                Message
                              </label>
                              <textarea
                                name="message"
                                value={form.message}
                                onChange={onChangeForm}
                                placeholder="Write your message..."
                                className="w-full min-h-[110px] px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-semibold outline-none focus:border-orange-600 transition-colors"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full rounded-2xl bg-gray-900 px-6 py-4 text-white font-black text-[15px] hover:bg-orange-600 transition inline-flex items-center justify-center gap-3"
                          >
                            Submit Inquiry
                            <IconArrowRight className="h-5 w-5" />
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------- Small components -------------------- */

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-[11px] font-black uppercase tracking-[0.22em] text-gray-600 mb-2">
        {label}
      </label>
      <input
        value={value}
        readOnly
        className="w-full px-4 py-3.5 rounded-2xl bg-gray-100 border border-gray-100 text-sm font-semibold text-gray-800 outline-none"
      />
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] font-black uppercase tracking-[0.22em] text-gray-600 mb-2">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-semibold outline-none focus:border-orange-600 transition-colors"
      />
    </div>
  );
}

/* -------------------- Icons -------------------- */

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

function IconPin({ className }: { className?: string }) {
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
        d="M12 22s7-4.5 7-12a7 7 0 0 0-14 0c0 7.5 7 12 7 12z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
