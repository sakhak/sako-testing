import React from "react";
import { motion,type Variants } from "framer-motion";

/**
 * ContactPage (Redesign + Responsive + Framer Motion)
 * Install: npm i framer-motion
 * Notes:
 * - Keeps your content, improves layout, mobile spacing, and animations.
 * - Replaces <i className="fa-..."> with inline SVG icons (no FontAwesome dependency).
 */

type TeamMember = {
  name: string;
  title: string;
  region: string;
  img: string;
};

const ease = [0.2, 0.8, 0.2, 1] as const;

const page: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35, ease } },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

const ContactPage: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "David Wilson",
      title: "Sales Director",
      region: "Global / Strategic Accounts",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Succie Chen",
      title: "Sales Manager",
      region: "Southeast Asia & Oceania",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Marco Rossi",
      title: "Sales Manager",
      region: "Europe & Africa",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Sarah Ahmed",
      title: "Sales Manager",
      region: "Middle East",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Kevin Zhang",
      title: "Sales Manager",
      region: "North & South America",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <motion.div
      variants={page}
      initial="hidden"
      animate="show"
      className="bg-white"
    >
      {/* HERO */}
      <section className="relative mt-[-30px] overflow-hidden">
        <div className="relative h-[56vh] min-h-[420px] sm:h-[52vh] sm:min-h-[460px] lg:h-[46vh] lg:min-h-[500px] flex items-end sm:items-center">
          {/* Media */}
          <motion.div
            initial={{ scale: 1.12, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1920"
              className="w-full h-full object-cover"
              alt="Communication Hero"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/80" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 w-full pb-10 sm:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    Let’s talk
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]"
                >
                  Contact
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-3 sm:mt-5 text-sm sm:text-lg text-gray-200 leading-relaxed font-medium"
                >
                  Reach our sales team, get product recommendations, or request
                  a quotation. We reply fast and support global regions.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
                >
                  <a
                    href="#message"
                    className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition-colors font-extrabold text-sm tracking-wide shadow-lg shadow-red-600/20"
                  >
                    Send a Message
                  </a>
                  <a
                    href="#team"
                    className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur transition-colors font-extrabold text-sm tracking-wide"
                  >
                    Meet the Team
                  </a>
                </motion.div>

                {/* quick info pills */}
                <motion.div
                  variants={fadeUp}
                  className="mt-6 hidden sm:flex flex-wrap gap-2"
                >
                  <InfoPill
                    icon={<IconPhone className="w-4 h-4" />}
                    text="+86 755 1234 5678"
                  />
                  <InfoPill
                    icon={<IconMail className="w-4 h-4" />}
                    text="sales@sakopower.com"
                  />
                  <InfoPill
                    icon={<IconPin className="w-4 h-4" />}
                    text="Shenzhen, China"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" /> */}
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight"
          >
            Our Team
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-14 sm:w-16 h-1.5 bg-red-600 mx-auto mt-5 sm:mt-6 rounded-full"
          />
          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto"
          >
            Regional experts for faster quoting, shipping guidance, and
            technical matching.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-7 lg:gap-8"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={cardIn}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.35, ease }}
              className="group text-center bg-gray-50 p-6 sm:p-7 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-black/10"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 sm:mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  loading="lazy"
                />
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
              </div>

              <h4 className="text-[12px] font-black text-gray-900 uppercase tracking-widest mb-1">
                {member.name}
              </h4>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
                {member.title}
              </p>

              <div className="flex justify-center gap-1 mb-5 text-red-600">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="w-3.5 h-3.5" />
                ))}
              </div>

              <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-5 border-t border-gray-100 pt-4">
                Region: {member.region}
              </div>

              <div className="flex justify-center gap-3">
                <button
                  className="w-10 h-10 bg-white text-gray-500 rounded-full flex items-center justify-center border border-gray-100 hover:bg-red-600 hover:text-white transition-all shadow-sm"
                  aria-label={`Email ${member.name}`}
                >
                  <IconMail className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 bg-white text-gray-500 rounded-full flex items-center justify-center border border-gray-100 hover:bg-red-600 hover:text-white transition-all shadow-sm"
                  aria-label={`Message ${member.name}`}
                >
                  <IconChat className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* INFO + FORM */}
      <section id="message" className="py-14 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* LEFT: INFO */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:w-[46%] space-y-6 sm:space-y-8"
            >
              <motion.div
                variants={cardIn}
                className="bg-white p-7 sm:p-10 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                    <IconFactory className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-900">
                      Factory Address
                    </h3>
                    <p className="text-[11px] font-bold text-red-600 mt-1">
                      Dongguan Tedepo New Energy Co., Ltd
                    </p>

                    <div className="mt-6 space-y-3 text-gray-600 text-sm font-medium">
                      <div className="flex items-start gap-3">
                        <IconPin className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                        <p className="leading-relaxed">
                          No. 3, Industrial Park, Qingxi Town, Dongguan City,
                          Guangdong Province, China
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <IconPhone className="w-5 h-5 text-red-600 shrink-0" />
                        <p>+86 769 1234 5678</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <IconMail className="w-5 h-5 text-red-600 shrink-0" />
                        <p>factory@sakopower.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardIn}
                className="bg-white p-7 sm:p-10 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                    <IconBuilding className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-900">
                      Office Address
                    </h3>
                    <p className="text-[11px] font-bold text-red-600 mt-1">
                      Shenzhen SAKO Solar Co., Ltd
                    </p>

                    <div className="mt-6 space-y-3 text-gray-600 text-sm font-medium">
                      <div className="flex items-start gap-3">
                        <IconPin className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                        <p className="leading-relaxed">
                          Floor 5, Tower A, Tech Plaza, Nanshan District,
                          Shenzhen, China
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <IconPhone className="w-5 h-5 text-red-600 shrink-0" />
                        <p>+86 755 1234 5678</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <IconMail className="w-5 h-5 text-red-600 shrink-0" />
                        <p>sales@sakopower.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* tiny support note */}
              <motion.div variants={fadeUp} className="px-1">
                <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                      <IconBolt className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Need a fast quote?
                      </p>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                        Include load (W), daily usage (kWh), location, and if
                        you need batteries. We’ll match the right kit.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:w-[54%]"
            >
              <motion.div
                variants={cardIn}
                className="bg-white p-7 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-black/10"
              >
                <motion.div
                  variants={fadeUp}
                  className="flex items-start justify-between gap-6"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
                      Send a Message
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      We usually reply within 24 hours (business days).
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-gray-500">
                      Online
                    </span>
                  </div>
                </motion.div>

                <motion.form variants={container} className="mt-8 space-y-6">
                  <motion.div
                    variants={fadeUp}
                    className="grid sm:grid-cols-2 gap-4 sm:gap-6"
                  >
                    <Field
                      label="Name *"
                      type="text"
                      required
                      placeholder="Your name"
                    />
                    <Field
                      label="Email *"
                      type="email"
                      required
                      placeholder="you@email.com"
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className="grid sm:grid-cols-2 gap-4 sm:gap-6"
                  >
                    <Field label="Phone" type="text" placeholder="+855 ..." />
                    <Field
                      label="Country *"
                      type="text"
                      required
                      placeholder="Cambodia"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp} className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Your Message *
                    </label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Tell us what you need (system size, load, location, battery, etc.)"
                      className="w-full bg-gray-50 border border-gray-100 px-5 sm:px-6 py-4 rounded-2xl text-sm font-semibold focus:border-red-600 outline-none transition-colors resize-none"
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2"
                  >
                    <div className="flex items-center gap-3 bg-gray-50 px-5 py-4 rounded-2xl border border-gray-100">
                      <input
                        type="checkbox"
                        id="human"
                        className="w-5 h-5 rounded bg-white border-gray-200 text-red-600 focus:ring-red-600"
                        required
                      />
                      <label
                        htmlFor="human"
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 cursor-pointer"
                      >
                        I'm a human
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.25, ease }}
                      className="w-full sm:w-auto bg-red-600 hover:bg-gray-900 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] transition-all shadow-xl"
                    >
                      Send Now
                    </motion.button>
                  </motion.div>

                  {/* small disclaimer */}
                  <motion.p
                    variants={fadeUp}
                    className="text-xs text-gray-400 leading-relaxed"
                  >
                    By submitting, you agree we can contact you back about your
                    request.
                  </motion.p>
                </motion.form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;

/* ---------- Small UI helpers ---------- */

function Field({
  label,
  type,
  required,
  placeholder,
}: {
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-gray-50 border border-gray-100 px-5 sm:px-6 py-4 rounded-2xl text-sm font-semibold focus:border-red-600 outline-none transition-colors"
      />
    </div>
  );
}

function InfoPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur text-white/90">
      <span className="text-white/90">{icon}</span>
      <span className="text-[11px] font-semibold tracking-widest uppercase">
        {text}
      </span>
    </div>
  );
}

/* ---------- Icons (no external dependency) ---------- */

function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 17.3l-5.6 3 1.1-6.3-4.6-4.5 6.4-.9L12 3l2.9 5.6 6.4.9-4.6 4.5 1.1 6.3z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
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

function IconChat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
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

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 3.2 10.8 19.8 19.8 0 0 1 .1 2.2 2 2 0 0 1 2.1 0h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L6 7.4a16 16 0 0 0 10.6 10.6l1-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" />
      <path d="M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    </svg>
  );
}

function IconFactory({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 21V9l6 3V9l6 3V6l6 3v12H3z" />
      <path d="M7 21v-6" />
      <path d="M11 21v-4" />
      <path d="M15 21v-5" />
    </svg>
  );
}

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 21V3h16v18H4z" />
      <path d="M8 7h2" />
      <path d="M8 11h2" />
      <path d="M8 15h2" />
      <path d="M14 7h2" />
      <path d="M14 11h2" />
      <path d="M14 15h2" />
      <path d="M10 21v-4h4v4" />
    </svg>
  );
}

function IconBolt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}
