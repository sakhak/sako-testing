import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { translations } from "../translations";
import type { Language } from "../App";

interface NavbarProps {
  onNavigate: (page: string, subKey?: string) => void;
  currentPage: string;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  currentPage,
  lang,
  setLang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [activeProductCat, setActiveProductCat] = useState<string | null>(null);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<
    string | null
  >(null);

  const dropdownTimeout = useRef<number | null>(null);

  const t = translations[lang].nav;

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const productData = [
    {
      category: "Solar Inverter",
      subs: [
        "Off Grid Solar Inverter",
        "Hybrid Solar Inverter",
        "Micro Inverter",
        "Grid-Tie Inverter",
      ],
    },
    {
      category: "Lithium Ion Batteries",
      subs: [
        "12V Lithium Battery",
        "24V Lithium Battery",
        "48V Lithium Battery",
        "High Voltage Lithium Battery",
      ],
    },
    {
      category: "Energy Storage System",
      subs: ["Small Energy Storage System", "Mega Energy Storage System"],
    },
    {
      category: "Solar Panel",
      subs: ["Mono 30W–400W", "Poly 10W–340W", "Half-cut Cell 400W–705W"],
    },
    {
      category: "Solar LED Lights",
      subs: ["Integrated Solar Street Light", "Solar Flood Light"],
    },
    {
      category: "Solar Charge Controller",
      subs: ["PWM Solar Charge Controller", "MPPT Solar Charge Controller"],
    },
    {
      category: "Uninterruptible Power Supply",
      subs: ["Line-interactive UPS", "Online UPS"],
    },
  ];

  const solutionsData = [
    "Off Grid Solution",
    "Hybrid Storage Solar Solution",
    "Solar Pumping System",
    "Solar Balcony System Solution",
  ];
  const newsData = ["SAKO Blog", "Industry News"];
  const supportData = [
    { name: "Service Centers", id: "service-centers" },
    { name: "FAQ", id: "faq" },
    { name: "Training Video", id: "training-video" },
    { name: "SAKO Easy Solar Kit", id: "easy-solar-kit" },
    { name: "Energy Storage System", id: "energy-storage" },
    { name: "Download", id: "download" },
  ];

  const navLinks = [
    { name: t.home, id: "home", href: "#", hasSub: false },
    { name: t.about, id: "about", href: "#about-page", hasSub: false },
    { name: t.products, id: "products", href: "#products-page", hasSub: true },
    {
      name: t.solutions,
      id: "solutions",
      href: "#solutions-page",
      hasSub: true,
    },
    { name: t.cases, id: "cases", href: "#cases-page", hasSub: false },
    { name: t.news, id: "news", href: "#news-page", hasSub: true },
    { name: t.support, id: "support", href: "#support-page", hasSub: true },
    { name: t.contact, id: "contact", href: "#contact-page", hasSub: false },
  ];

  const handleLinkClick = (
    e: React.MouseEvent,
    linkId: string,
    subKey?: string
  ) => {
    e.preventDefault();
    onNavigate(linkId, subKey);
    setIsOpen(false);
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
    setIsNewsOpen(false);
    setIsSupportOpen(false);
    setIsLangDropdownOpen(false);
    setActiveProductCat(null);
    setActiveMobileAccordion(null);
  };

  const toggleMobileAccordion = (id: string) => {
    setActiveMobileAccordion(activeMobileAccordion === id ? null : id);
  };

  const clearTimeouts = () => {
    if (dropdownTimeout.current) window.clearTimeout(dropdownTimeout.current);
  };

  const flags: Record<Language, string> = {
    en: "https://flagcdn.com/w40/us.png",
    km: "https://flagcdn.com/w40/kh.png",
  };

  // Animations
  const mobileMenuMotion = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  };

  const submenuMotion = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-gray-100 shadow-sm">
      {/* Desktop Top Header */}
      <div className="hidden lg:block bg-gray-50 py-2 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold text-gray-500 tracking-widest uppercase">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">{t.follow}:</span>
            <div className="flex space-x-3 text-gray-400">
              <i className="fa-brands fa-facebook-f hover:text-red-600 cursor-pointer transition-colors" />
              <i className="fa-brands fa-linkedin-in hover:text-red-600 cursor-pointer transition-colors" />
              <i className="fa-brands fa-youtube hover:text-red-600 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-phone text-red-600" />
              <span>+86 755 1234 5678</span>
            </div>

            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-envelope text-red-600" />
              <span>SALES@SAKO-SOLAR.COM</span>
            </div>

            {/* Desktop language dropdown */}
            <div
              className="relative flex items-center space-x-2 cursor-pointer hover:text-red-600 transition-all py-1"
              onMouseEnter={() => {
                clearTimeouts();
                setIsLangDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeout.current = window.setTimeout(() => {
                  setIsLangDropdownOpen(false);
                }, 300);
              }}
            >
              <img
                src={flags[lang]}
                alt={lang}
                className="w-4 h-3 object-cover shadow-sm"
              />
              <span>{t.lang}</span>
              <i className="fa-solid fa-chevron-down text-[7px] ml-1" />

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-44 bg-white shadow-2xl border border-gray-100 rounded-lg py-2 z-[150] overflow-hidden"
                    onMouseEnter={clearTimeouts}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setLang("en");
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3.5 text-xs hover:bg-gray-50 transition-colors ${
                        lang === "en"
                          ? "text-red-600 font-bold bg-red-50/30"
                          : "text-gray-700"
                      }`}
                    >
                      <img
                        src={flags.en}
                        className="w-5 h-3.5 object-cover rounded-[1px] shadow-sm"
                        alt="English"
                      />
                      <span className="tracking-widest">ENGLISH</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setLang("km");
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3.5 text-xs hover:bg-gray-50 transition-colors ${
                        lang === "km"
                          ? "text-red-600 font-bold bg-red-50/30"
                          : "text-gray-700"
                      }`}
                    >
                      <img
                        src={flags.km}
                        className="w-5 h-3.5 object-cover rounded-[1px] shadow-sm"
                        alt="Khmer"
                      />
                      <span className="tracking-widest">ភាសាខ្មែរ (KH)</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => {
              onNavigate("home");
              setIsOpen(false);
            }}
          >
            <span className="text-2xl lg:text-3xl font-black tracking-tighter text-red-600 flex items-center">
              SAKO <span className="text-gray-900 ml-1">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 h-full">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative h-full flex items-center"
                onMouseEnter={() => {
                  clearTimeouts();
                  setIsProductsOpen(link.id === "products");
                  setIsSolutionsOpen(link.id === "solutions");
                  setIsNewsOpen(link.id === "news");
                  setIsSupportOpen(link.id === "support");
                }}
                onMouseLeave={() => {
                  dropdownTimeout.current = window.setTimeout(() => {
                    setIsProductsOpen(false);
                    setIsSolutionsOpen(false);
                    setIsNewsOpen(false);
                    setIsSupportOpen(false);
                    setActiveProductCat(null);
                  }, 200);
                }}
              >
                <a
                  href={link.href}
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      link.id,
                      link.id === "news" ? "SAKO Blog" : undefined
                    )
                  }
                  className={`relative text-[12px] font-bold transition-colors uppercase tracking-widest px-1 py-2 flex items-center group ${
                    currentPage === link.id
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasSub && (
                    <i className="fa-solid fa-chevron-down ml-1.5 text-[7px]" />
                  )}
                  <div
                    className={`absolute bottom-[-6px] left-0 h-[2px] bg-red-600 transition-all duration-300 transform ${
                      currentPage === link.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>

                {/* Products Mega Menu */}
                {link.id === "products" && isProductsOpen && (
                  <div
                    className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 z-50 py-3 animate-mega-menu"
                    onMouseEnter={clearTimeouts}
                  >
                    {productData.map((item) => (
                      <div
                        key={item.category}
                        className="relative"
                        onMouseEnter={() => setActiveProductCat(item.category)}
                      >
                        <div
                          className={`px-6 py-3 text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-between cursor-pointer ${
                            activeProductCat === item.category
                              ? "bg-gray-50 text-red-600"
                              : "text-gray-700"
                          }`}
                          onClick={(e) =>
                            handleLinkClick(e, "products", item.category)
                          }
                        >
                          <span>{item.category}</span>
                          <i className="fa-solid fa-chevron-right text-[7px]" />
                        </div>

                        {activeProductCat === item.category && (
                          <div className="absolute left-full top-[-12px] w-64 bg-white shadow-xl border border-gray-100 py-3 border-l-0">
                            {item.subs.map((sub) => (
                              <a
                                key={sub}
                                href="#"
                                onClick={(e) =>
                                  handleLinkClick(e, "products", sub)
                                }
                                className="flex items-center px-6 py-3 text-[10px] font-medium text-gray-500 hover:text-red-600 hover:bg-gray-50 transition-all"
                              >
                                <span>{sub}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Solutions Dropdown */}
                {link.id === "solutions" && isSolutionsOpen && (
                  <div
                    className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 z-50 py-3 animate-mega-menu"
                    onMouseEnter={clearTimeouts}
                  >
                    {solutionsData.map((sol) => (
                      <a
                        key={sol}
                        href="#"
                        onClick={(e) => handleLinkClick(e, "solutions", sol)}
                        className="block px-6 py-3 text-[10px] font-bold text-gray-700 uppercase tracking-wider hover:bg-gray-50 hover:text-red-600 transition-colors"
                      >
                        {sol}
                      </a>
                    ))}
                  </div>
                )}

                {/* News Dropdown */}
                {link.id === "news" && isNewsOpen && (
                  <div
                    className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 z-50 py-3 animate-mega-menu"
                    onMouseEnter={clearTimeouts}
                  >
                    {newsData.map((n) => (
                      <a
                        key={n}
                        href="#"
                        onClick={(e) => handleLinkClick(e, "news", n)}
                        className="block px-6 py-3 text-[10px] font-bold text-gray-700 uppercase tracking-wider hover:bg-gray-50 hover:text-red-600 transition-colors"
                      >
                        {n}
                      </a>
                    ))}
                  </div>
                )}

                {/* Support Dropdown */}
                {link.id === "support" && isSupportOpen && (
                  <div
                    className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 z-50 py-3 animate-mega-menu"
                    onMouseEnter={clearTimeouts}
                  >
                    {supportData.map((s) => (
                      <a
                        key={s.name}
                        href="#"
                        onClick={(e) => handleLinkClick(e, s.id)}
                        className="block px-6 py-3 text-[10px] font-bold text-gray-700 uppercase tracking-wider hover:bg-gray-50 hover:text-red-600 transition-colors"
                      >
                        {s.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Search */}
            <div className="ml-2 relative group flex items-center">
              <input
                type="text"
                placeholder={t.search}
                className="bg-gray-100 rounded-md py-1.5 px-3 text-[11px] outline-none w-24 focus:w-40 transition-all"
              />
              <button
                type="button"
                className="absolute right-2.5 text-gray-400 hover:text-red-600"
              >
                <i className="fa-solid fa-magnifying-glass text-[11px]" />
              </button>
            </div>
          </div>

          {/* Mobile Actions Header */}
          <div className="lg:hidden flex items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={() => setLang(lang === "en" ? "km" : "en")}
              className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 text-xs font-black text-gray-700 uppercase"
            >
              <img
                src={flags[lang]}
                alt={lang}
                className="w-4 h-2.5 object-cover rounded-[1px]"
              />
              <span>{lang === "en" ? "EN" : "KH"}</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 p-2 z-[110] relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <i
                className={`fa-solid ${
                  isOpen ? "fa-xmark" : "fa-bars"
                } text-2xl transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...mobileMenuMotion}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 bg-white z-[105] lg:hidden shadow-2xl"
            style={{ top: "64px" }}
          >
            <div className="h-[calc(100dvh-64px)] overflow-y-auto px-5 sm:px-6 py-6 pb-32 space-y-16 bg-white scrollbar-hide">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <div key={link.id} className="border-b border-gray-50">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) =>
                          link.hasSub
                            ? toggleMobileAccordion(link.id)
                            : handleLinkClick(
                                e as unknown as React.MouseEvent,
                                link.id
                              )
                        }
                        className={`flex-grow py-3 text-left text-[13px] font-black uppercase tracking-[0.2em] transition-colors ${
                          currentPage === link.id
                            ? "text-red-600"
                            : "text-gray-900"
                        }`}
                      >
                        {link.name}
                      </button>

                      {link.hasSub && (
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          onClick={() => toggleMobileAccordion(link.id)}
                          className={`w-12 h-12 flex items-center justify-center text-gray-400 transition-transform duration-300 ${
                            activeMobileAccordion === link.id
                              ? "rotate-180 text-red-600"
                              : ""
                          }`}
                          aria-label="Toggle submenu"
                        >
                          <i className="fa-solid fa-chevron-down text-[10px]" />
                        </motion.button>
                      )}
                    </div>

                    {/* Animated Sub-menus */}
                    <AnimatePresence initial={false}>
                      {link.hasSub && activeMobileAccordion === link.id && (
                        <motion.div
                          {...submenuMotion}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden bg-gray-50/50 rounded-lg mb-3"
                        >
                          <div className="py-2">
                            {link.id === "products" && (
                              <div className="space-y-1">
                                {productData.map((prod) => (
                                  <div key={prod.category} className="px-4">
                                    <button
                                      type="button"
                                      className="w-full py-2 text-left text-[11px] font-black text-gray-700 uppercase tracking-widest flex items-center justify-between"
                                      onClick={() =>
                                        setActiveProductCat(
                                          activeProductCat === prod.category
                                            ? null
                                            : prod.category
                                        )
                                      }
                                    >
                                      <span>{prod.category}</span>
                                      <i
                                        className={`fa-solid ${
                                          activeProductCat === prod.category
                                            ? "fa-minus"
                                            : "fa-plus"
                                        } text-[8px]`}
                                      />
                                    </button>

                                    <AnimatePresence initial={false}>
                                      {activeProductCat === prod.category && (
                                        <motion.div
                                          {...submenuMotion}
                                          transition={{
                                            duration: 0.22,
                                            ease: "easeOut",
                                          }}
                                          className="overflow-hidden pl-4 pb-2 space-y-1"
                                        >
                                          {prod.subs.map((sub) => (
                                            <a
                                              key={sub}
                                              href="#"
                                              onClick={(e) =>
                                                handleLinkClick(
                                                  e,
                                                  "products",
                                                  sub
                                                )
                                              }
                                              className="block py-2 text-[10px] font-bold text-gray-500 hover:text-red-600 uppercase tracking-widest transition active:scale-[0.99]"
                                            >
                                              {sub}
                                            </a>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ))}
                              </div>
                            )}

                            {link.id === "solutions" && (
                              <div className="space-y-1 px-4">
                                {solutionsData.map((sol) => (
                                  <a
                                    key={sol}
                                    href="#"
                                    onClick={(e) =>
                                      handleLinkClick(e, "solutions", sol)
                                    }
                                    className="block py-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest hover:text-red-600 transition active:scale-[0.99]"
                                  >
                                    {sol}
                                  </a>
                                ))}
                              </div>
                            )}

                            {link.id === "news" && (
                              <div className="space-y-1 px-4">
                                {newsData.map((n) => (
                                  <a
                                    key={n}
                                    href="#"
                                    onClick={(e) =>
                                      handleLinkClick(e, "news", n)
                                    }
                                    className="block py-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest hover:text-red-600 transition active:scale-[0.99]"
                                  >
                                    {n}
                                  </a>
                                ))}
                              </div>
                            )}

                            {link.id === "support" && (
                              <div className="space-y-1 px-4">
                                {supportData.map((s) => (
                                  <a
                                    key={s.name}
                                    href="#"
                                    onClick={(e) => handleLinkClick(e, s.id)}
                                    className="block py-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest hover:text-red-600 transition active:scale-[0.99]"
                                  >
                                    {s.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="pt-10 border-t border-gray-100 space-y-8">
                <div className="flex flex-col space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Regional Contact
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                        <i className="fa-solid fa-phone text-red-600 text-xs" />
                      </div>
                      <span className="text-sm font-bold text-gray-700">
                        +86 755 1234 5678
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                        <i className="fa-solid fa-envelope text-red-600 text-xs" />
                      </div>
                      <span className="text-[11px] font-bold text-gray-700 uppercase tracking-widest break-all">
                        SALES@SAKO-SOLAR.COM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 sm:space-x-6 pt-2">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all active:scale-[0.98]"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all active:scale-[0.98]"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all active:scale-[0.98]"
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
