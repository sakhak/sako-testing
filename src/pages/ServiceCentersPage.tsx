import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, type Easing, type Variants } from "framer-motion";

/**
 * ServiceCentersPage (Redesign + Responsive + Framer Motion)
 * Install: npm i framer-motion
 * Notes:
 * - Animated hero, tabs, and sections
 * - Mobile-first layout (stacked), desktop split cards
 * - No FontAwesome (SVG icons included)
 */

type CountryId = "PK" | "NG" | "CN";
const ease: Easing = [0.2, 0.8, 0.2, 1];
// const ease = [0.2, 0.8, 0.2, 1] as const;

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

const  Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.28, ease } },
};

const ServiceCentersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CountryId>("PK");

  const countries = useMemo(
    () => [
      {
        id: "PK" as const,
        name: "Pakistan",
        email: "service_pk@sakopower.com",
        links: ["Dealers_PK", "Service Centers_PK", "SAKO Warranty_PK"],
        desc: "For local warranty inquiries, service center locations, and authorized distributor details in Pakistan, contact our regional desk.",
      },
      {
        id: "NG" as const,
        name: "Nigeria",
        email: "service_ng@sakopower.com",
        links: ["Dealers_NG", "Service Centers_NG", "SAKO Warranty_NG"],
        desc: "Need support in Nigeria? We can help with warranty checks, dealer verification, and service center guidance.",
      },
      {
        id: "CN" as const,
        name: "China",
        email: "service_cn@sakopower.com",
        links: ["Dealers_CN", "Service Centers_CN", "SAKO Warranty_CN"],
        desc: "Contact our China team for product verification, warranty support, and service coordination.",
      },
    ],
    []
  );

  const advantages = useMemo(
    () => [
      "Technical training and support",
      "SAKO agent price",
      "Local customer recommendation",
      "Advertising & publicity support",
      "Annual rebate based on sales",
      "Marketing proposals",
    ],
    []
  );

  const active = countries.find((c) => c.id === activeTab)!;

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative mt-[-30px] overflow-hidden">
        <div className="relative h-[62vh] min-h-[520px] sm:h-[55vh] lg:h-[52vh] flex items-end sm:items-center">
          <motion.div
            initial={{ scale: 1.12, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1920"
              className="w-full h-full object-cover"
              alt="Service and Support"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/85" />
          </motion.div>

          <div className="relative z-10 w-full pb-12 sm:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-3xl text-center sm:text-left text-white"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">
                    Service Centers & Agency
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight"
                >
                  Contact Us
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 text-sm sm:text-lg text-gray-200 leading-relaxed font-medium"
                >
                  Reach out for product information, agency cooperation, or
                  professional technical support. We are here to power your
                  energy future.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 flex flex-col sm:flex-row gap-3"
                >
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    href="#business"
                    className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-red-600 hover:bg-white hover:text-red-600 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors shadow-2xl shadow-red-600/20"
                  >
                    Find Service Center
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    href="#inquiry"
                    className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                  >
                    Send Inquiry
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS CONTACT */}
      <section
        id="business"
        className="py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
              Business Contact
            </h2>
            <div className="w-14 sm:w-16 h-1.5 bg-red-600 mt-5 sm:mt-6 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium max-w-2xl">
              Choose a country to view the service email, resources, and support
              links.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center mb-8 sm:mb-12"
          >
            <div className="inline-flex p-1.5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              {countries.map((c) => {
                const selected = activeTab === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveTab(c.id)}
                    className={[
                      "px-4 sm:px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[11px] sm:text-xs transition-all",
                      selected
                        ? "bg-white text-red-600 shadow border border-gray-100"
                        : "text-gray-500 hover:text-gray-900",
                    ].join(" ")}
                    type="button"
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Active panel */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              {/* Left info */}
              <div className="p-6 sm:p-10 lg:p-12">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-red-600 text-white inline-flex items-center justify-center shadow-lg shadow-red-600/20">
                    <IconPin className="w-6 h-6" />
                  </span>
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gray-400">
                      Region
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-wide">
                      {active.name}
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-gray-600 font-medium leading-relaxed">
                  {active.desc}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {active.links.map((link) => (
                    <motion.a
                      key={link}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease }}
                      href="#"
                      className="inline-flex items-center gap-2 bg-gray-50 px-4 sm:px-5 py-3 rounded-2xl border border-gray-100 text-[11px] font-black uppercase tracking-widest text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <IconLink className="w-4 h-4" />
                      {link}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-gray-50 border border-gray-100 p-5 sm:p-6 flex items-start gap-3">
                  <span className="mt-0.5 text-red-600">
                    <IconMail className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gray-400">
                      Email
                    </div>
                    <div className="text-gray-900 font-extrabold">
                      {active.email}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    className="inline-flex justify-center items-center px-7 py-4 rounded-2xl bg-gray-900 hover:bg-red-600 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                    type="button"
                  >
                    Start Warranty Check
                    <IconArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    className="inline-flex justify-center items-center px-7 py-4 rounded-2xl bg-white border border-gray-100 hover:border-red-200 text-gray-900 hover:text-red-600 font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                    type="button"
                  >
                    Find Dealers
                    <IconStore className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </div>

              {/* Right image */}
              <div className="relative min-h-[260px] md:min-h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.55, ease }}
                    className="absolute inset-0"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1400"
                      className="w-full h-full object-cover"
                      alt="Support Team"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="relative z-10 p-6 sm:p-10 text-white h-full flex items-end">
                  <div className="max-w-sm">
                    <div className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/80">
                      Priority Support
                    </div>
                    <div className="mt-2 text-xl sm:text-2xl font-black uppercase tracking-tight">
                      Fast response for service requests
                    </div>
                    <p className="mt-3 text-white/85 text-sm font-medium leading-relaxed">
                      We coordinate warranty validation, parts guidance, and
                      authorized service center assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* AGENCY ADVANTAGES */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              variants={fadeUp}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Advantages of joining the agency
              </h2>
              <div className="w-14 sm:w-16 h-1.5 bg-red-600 mx-auto mt-5 sm:mt-6 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-gray-300 font-medium max-w-2xl mx-auto">
                Grow with SAKO through training, marketing programs, and
                long-term cooperation benefits.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {advantages.map((adv) => (
                <motion.div
                  key={adv}
                  variants={cardIn}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease }}
                  className="rounded-3xl border border-white/10 bg-white/5 hover:bg-white/7 p-6 sm:p-7 flex items-start gap-4"
                >
                  <span className="w-11 h-11 rounded-2xl bg-red-600/15 border border-red-600/25 text-red-400 inline-flex items-center justify-center shrink-0">
                    <IconCheck className="w-6 h-6" />
                  </span>
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-widest text-white/90 leading-relaxed">
                      {adv}
                    </div>
                    <div className="mt-2 text-sm text-gray-300 font-medium">
                      Get structured support to scale your regional sales and
                      service network.
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3"
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease }}
                className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-red-600 hover:bg-white hover:text-red-600 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors shadow-2xl shadow-red-600/15"
                type="button"
              >
                Become an Agent
                <IconArrowRight className="w-4 h-4 ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease }}
                className="inline-flex justify-center items-center px-9 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-black uppercase text-[11px] tracking-[0.22em] transition-colors"
                type="button"
              >
                Download Program PDF
                <IconDownload className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section
        id="inquiry"
        className="py-12 sm:py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
              Connect with SAKO Team
            </h2>
            <p className="text-gray-500 font-medium mt-4">
              Discuss home & business sales, distribution, and bulk orders.
            </p>
          </motion.div>

          <motion.form
            variants={cardIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-gray-100 shadow-2xl"
          >
            <Field placeholder="NAME (REQUIRED)" required />
            <Field placeholder="EMAIL (REQUIRED)" type="email" required />
            <Field placeholder="PHONE" />
            <Field placeholder="COUNTRY (REQUIRED)" required />

            <div className="md:col-span-2">
              <textarea
                placeholder="MESSAGE (REQUIRED)"
                rows={4}
                className="w-full px-5 sm:px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase tracking-widest outline-none focus:border-red-600 transition-colors resize-none"
                required
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                  Human Verification
                </span>
                <span className="text-red-600">
                  <IconShield className="w-5 h-5" />
                </span>
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease }}
                className="w-full sm:w-auto bg-red-600 hover:bg-gray-900 text-white px-10 sm:px-12 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.3em] transition-colors shadow-xl"
                type="button"
              >
                Send Now
              </motion.button>
            </div>
          </motion.form>

          {/* Small helper card */}
          <motion.div
            variants={fadeUp}
            className="mt-6 text-center text-sm text-gray-500 font-medium"
          >
            Prefer email? Use{" "}
            <span className="text-gray-900 font-extrabold">{active.email}</span>{" "}
            for{" "}
            <span className="text-red-600 font-extrabold">{active.name}</span>{" "}
            support.
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceCentersPage;

/* ---------- Small Field component ---------- */

function Field({
  placeholder,
  required,
  type = "text",
}: {
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full px-5 sm:px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase tracking-widest outline-none focus:border-red-600 transition-colors"
    />
  );
}

/* ---------- Icons (SVG, no deps) ---------- */

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
      <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconLink({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 1 0-7l1.2-1.2a5 5 0 0 1 7.1 7.1L17 13" />
      <path d="M14 11a5 5 0 0 1 0 7L12.8 19.2a5 5 0 0 1-7.1-7.1L7 11" />
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

function IconStore({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 7l1-3h16l1 3" />
      <path d="M4 7h16l-1 14H5L4 7z" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
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
      <path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
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
      <path d="M12 3v10" strokeLinecap="round" />
      <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 21h16" strokeLinecap="round" />
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
