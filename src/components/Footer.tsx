import React from "react";
import { motion, type Variants } from "framer-motion";
import { translations } from "../translations";
import type { Language } from "../App";

interface FooterProps {
  lang: Language;
  onNavigate: (page: string, subKey?: string) => void;
}

const ease = [0.2, 0.8, 0.2, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const navT = translations[lang].nav;
  const t = translations[lang].footer;

  // ✅ Same data as Navbar
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

  // ✅ Navbar links (top-level)
  const navLinks = [
    { name: navT.home, id: "home", hasSub: false },
    { name: navT.about, id: "about", hasSub: false },
    { name: navT.products, id: "products", hasSub: true },
    { name: navT.solutions, id: "solutions", hasSub: true },
    { name: navT.cases, id: "cases", hasSub: false },
    { name: navT.news, id: "news", hasSub: true },
    { name: navT.support, id: "support", hasSub: true },
    { name: navT.contact, id: "contact", hasSub: false },
  ];

  const linkBase =
    "group flex items-center gap-3 hover:text-white transition-colors";

  const arrow = (
    <span className="text-red-600 opacity-70 group-hover:opacity-100 transition-opacity">
      ›
    </span>
  );

  const handleGo = (page: string, subKey?: string) => {
    onNavigate(page, subKey);
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0a0a0a] text-white pt-16 sm:pt-24 pb-10 sm:pb-12 overflow-hidden"
    >
      {/* soft accents */}
      <div className="pointer-events-none absolute -top-28 -right-24 w-96 h-96 rounded-full bg-red-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-5 md:grid-cols-2 gap-10 lg:gap-12 mb-14 sm:mb-20"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black tracking-tighter text-white">
                SAKO
              </span>
              <span className="text-3xl sm:text-4xl font-black text-red-600">
                .
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm font-medium max-w-sm">
              {t.tagline}
            </p>

            {/* Social */}
            <div className="flex flex-wrap gap-3">
              {["facebook-f", "linkedin-in", "youtube", "instagram"].map(
                (social) => (
                  <motion.a
                    key={social}
                    href="#"
                    variants={item}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-red-600 hover:border-red-600 transition-colors flex items-center justify-center"
                    aria-label={social}
                  >
                    <i className={`fa-brands fa-${social}`} />
                  </motion.a>
                )
              )}
            </div>

            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>
                {lang === "en"
                  ? "Global solar solutions"
                  : "ដំណោះស្រាយសូឡារពិភពលោក"}
              </span>
            </div>
          </motion.div>

          {/* ✅ Main Menu (from Navbar) */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-black mb-7 sm:mb-10 uppercase tracking-[0.3em] text-red-600">
              {lang === "en" ? "Menu" : "ម៉ឺនុយ"}
            </h4>

            <ul className="space-y-3.5 text-gray-400 text-[11px] font-bold uppercase tracking-[0.12em]">
              {navLinks
                .filter((x) => !x.hasSub)
                .map((link) => (
                  <motion.li key={link.id} variants={item}>
                    <button
                      type="button"
                      onClick={() => handleGo(link.id)}
                      className={`${linkBase} text-left`}
                    >
                      {arrow}
                      <span className="group-hover:text-red-500 transition-colors">
                        {link.name}
                      </span>
                    </button>
                  </motion.li>
                ))}
            </ul>
          </motion.div>

          {/* ✅ Products (mega menu content) */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-black mb-7 sm:mb-10 uppercase tracking-[0.3em] text-red-600">
              {navT.products}
            </h4>

            <div className="space-y-6">
              {productData.map((cat) => (
                <motion.div key={cat.category} variants={item}>
                  <button
                    type="button"
                    onClick={() => handleGo("products", cat.category)}
                    className="text-left w-full text-[11px] font-black uppercase tracking-[0.14em] text-gray-200 hover:text-red-500 transition-colors"
                  >
                    {cat.category}
                  </button>

                  <ul className="mt-3 space-y-2 pl-3">
                    {cat.subs.map((sub) => (
                      <li key={sub}>
                        <button
                          type="button"
                          onClick={() => handleGo("products", sub)}
                          className="text-left text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500 hover:text-white transition-colors"
                        >
                          {sub}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ✅ Solutions + News + Support */}
          <motion.div variants={fadeUp} className="space-y-10">
            {/* Solutions */}
            <div>
              <h4 className="text-xs font-black mb-7 uppercase tracking-[0.3em] text-red-600">
                {navT.solutions}
              </h4>
              <ul className="space-y-3.5 text-gray-400 text-[11px] font-bold uppercase tracking-[0.12em]">
                {solutionsData.map((sol) => (
                  <motion.li key={sol} variants={item}>
                    <button
                      type="button"
                      onClick={() => handleGo("solutions", sol)}
                      className={`${linkBase} text-left`}
                    >
                      {arrow}
                      <span className="group-hover:text-red-500 transition-colors">
                        {sol}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* News */}
            <div>
              <h4 className="text-xs font-black mb-7 uppercase tracking-[0.3em] text-red-600">
                {navT.news}
              </h4>
              <ul className="space-y-3.5 text-gray-400 text-[11px] font-bold uppercase tracking-[0.12em]">
                {newsData.map((n) => (
                  <motion.li key={n} variants={item}>
                    <button
                      type="button"
                      onClick={() => handleGo("news", n)}
                      className={`${linkBase} text-left`}
                    >
                      {arrow}
                      <span className="group-hover:text-red-500 transition-colors">
                        {n}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xs font-black mb-7 uppercase tracking-[0.3em] text-red-600">
                {navT.support}
              </h4>
              <ul className="space-y-3.5 text-gray-400 text-[11px] font-bold uppercase tracking-[0.12em]">
                {supportData.map((s) => (
                  <motion.li key={s.id} variants={item}>
                    <button
                      type="button"
                      onClick={() => handleGo(s.id)}
                      className={`${linkBase} text-left`}
                    >
                      {arrow}
                      <span className="group-hover:text-red-500 transition-colors">
                        {s.name}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Inquiry Form (your original) */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center justify-between gap-4 mb-7 sm:mb-10">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600">
                {t.inquiry}
              </h4>
              <span className="hidden sm:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
                {lang === "en" ? "24/7 Support" : "គាំទ្រ 24/7"}
              </span>
            </div>

            <motion.form
              variants={container}
              className="space-y-2.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field placeholder="NAME" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <Field type="email" placeholder="EMAIL" />
                <Field placeholder="PHONE" />
              </div>
              <Field placeholder="COUNTRY" />
              <Textarea placeholder="MESSAGE" rows={3} />

              <motion.button
                type="submit"
                variants={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 hover:bg-white hover:text-red-600 text-white py-3.5 rounded-2xl font-black uppercase text-[11px] tracking-[0.22em] transition-colors shadow-[0_20px_60px_rgba(220,38,38,0.25)]"
              >
                {t.submit}
              </motion.button>

              <div className="pt-2 text-[10px] font-semibold text-gray-500 leading-relaxed">
                {lang === "en"
                  ? "By submitting, you agree to be contacted about products and technical support."
                  : "ដោយការផ្ញើ អ្នកយល់ព្រមឱ្យទាក់ទងអំពីផលិតផល និងការគាំទ្របច្ចេកទេស។"}
              </div>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Bottom bar (your original) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="pt-8 sm:pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
        >
          <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.22em]">
            {t.rights}
          </p>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <motion.img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://sako.com"
                alt="QR"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 p-1 opacity-60 grayscale"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-widest text-gray-200">
                  SAKO Official
                </span>
                <span className="text-[10px] font-semibold text-gray-500">
                  {lang === "en"
                    ? "Scan to visit website"
                    : "ស្គេនដើម្បីចូលគេហទំព័រ"}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-bold uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-red-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                Terms of Use
              </a>
              <span className="hidden sm:inline text-white/10">|</span>
              <span className="text-gray-600">
                {lang === "en"
                  ? "Powered by clean energy"
                  : "ដំណើរការដោយថាមពលស្អាត"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

/* -------------------- Small form components -------------------- */
function Field({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}) {
  return (
    <motion.input
      variants={item}
      type={type}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 px-4 py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-white placeholder:text-gray-600
                 focus:border-red-600 outline-none transition-colors"
    />
  );
}

function Textarea({
  placeholder,
  rows,
}: {
  placeholder: string;
  rows: number;
}) {
  return (
    <motion.textarea
      variants={item}
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-white/5 border border-white/10 px-4 py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-white placeholder:text-gray-600
                 focus:border-red-600 outline-none transition-colors resize-none"
    />
  );
}
