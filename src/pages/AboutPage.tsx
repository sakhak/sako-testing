import React from "react";
import { motion, type Variants, type Easing, easeInOut } from "framer-motion";

// ✅ Use a real Easing value (cubic-bezier array)
const easeOutBezier: Easing = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: easeOutBezier, // ✅ FIXED (no string)
    },
  }),
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeInOut }, // ✅ OK
  },
};

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: "1993",
      event: "SAKO Brand established in Shenzhen, focusing on power solutions.",
    },
    {
      year: "2003",
      event: "First dedicated R&D center for solar inverters launched.",
    },
    {
      year: "2013",
      event: "Expanded production to lithium energy storage systems.",
    },
    {
      year: "2023",
      event: "Reached 30+ countries with global agent distribution network.",
    },
  ];

  const advantages = [
    "30+ years of professional industry experience",
    "Global brand awareness and trusted reputation",
    "Strong manufacturing capacity with large-scale factories",
    "Strict quality assurance and international standards",
    "Professional customer service and technical support",
    "Highly competitive pricing through supply chain optimization",
    "Innovative R&D capability with 100+ engineers",
    "Complete one-stop solar energy system solutions",
  ];

  const stats = [
    { value: "99.7%", label: "Quality Rate" },
    { value: "29+", label: "Years Experience" },
    { value: "30+", label: "Countries" },
    { value: "20k+", label: "Projects" },
    { value: "350+", label: "Models" },
    { value: "100+", label: "Engineers" },
    { value: "80+", label: "Patents" },
    { value: "200k+", label: "Monthly Capacity" },
  ];

  const headquarters = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
  ];

  const factoryImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1530124566582-ab05d3c562ad?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=600",
  ];

  const certs = [
    { name: "ISO 9001", img: "https://placehold.co/200x280?text=ISO9001" },
    { name: "ISO 14001", img: "https://placehold.co/200x280?text=ISO14001" },
    { name: "CE Certificate", img: "https://placehold.co/200x280?text=CE" },
    { name: "TÜV Rheinland", img: "https://placehold.co/200x280?text=TUV" },
    { name: "IEC Standard", img: "https://placehold.co/200x280?text=IEC" },
  ];

  return (
    <div className="bg-white overflow-x-hidden mt-[-30px]">
      {/* Hero / History Section */}
      <section className="relative min-h-[520px] h-[110vh] sm:h-[100vh] flex items-center overflow-hidden">
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover"
            alt="History Background"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 uppercase tracking-widest"
          >
            Company <span className="text-red-600">History</span>
          </motion.h1>

          {/* Milestones: better mobile stacking */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="text-center group px-3"
              >
                <div className="text-red-600 text-2xl sm:text-3xl font-black mb-2 group-hover:scale-110 transition-transform">
                  {m.year}
                </div>
                <div className="h-0.5 w-12 bg-white/30 mx-auto mb-3 sm:mb-4 group-hover:w-full transition-all" />
                <p className="text-sm text-gray-200 leading-relaxed">
                  {m.event}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 sm:mt-16 inline-block bg-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded font-black text-base sm:text-2xl uppercase tracking-widest"
          >
            29 Years of Experience
          </motion.div>
        </div>
      </section>

      {/* About SAKO Intro */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 sm:mb-8 uppercase tracking-tight"
        >
          About <span className="text-red-600">SAKO</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed text-left sm:text-center"
        >
          <p>
            SAKO is a professional manufacturer and global supplier of high-tech
            solar energy products. Since our founding, we have been committed to
            advancing renewable energy technology to empower global energy
            independence.
          </p>
          <p>
            With integrated R&D, manufacturing, and international sales
            departments, we provide specialized solutions for solar inverters,
            lithium battery packs, high-efficiency solar modules, and total
            energy storage systems for both residential and commercial sectors.
          </p>
          <p>
            Our products are deployed in over 30 countries across the Middle
            East, South Africa, Europe, and Asia, backed by a robust network of
            global agents and partners.
          </p>
        </motion.div>
      </section>

      {/* Business Scope */}
      <section className="py-12 sm:py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 text-center">
            {[
              {
                icon: "fa-solar-panel",
                title: "SAKO Main Products",
                text: "Inverters, Lithium Batteries, and Half-cut Solar Modules.",
                highlight: false,
              },
              {
                icon: "fa-users",
                title: "Agents of SAKO",
                text: "Global distribution network supporting major markets worldwide.",
                highlight: true,
              },
              {
                icon: "fa-microchip",
                title: "OEM / ODM Services",
                text: "Customized power solutions tailored to industrial requirements.",
                highlight: false,
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={[
                  "p-6 sm:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow",
                  card.highlight ? "border-t-4 border-red-600" : "",
                ].join(" ")}
                whileHover={{ y: -4 }}
              >
                <i
                  className={`fa-solid ${card.icon} text-4xl text-red-600 mb-6`}
                />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SAKO? */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Advantages */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 sm:mb-10 uppercase tracking-tight">
                SAKO <span className="text-red-600">Advantage</span>
              </h2>

              <ul className="space-y-4 sm:space-y-6">
                {advantages.map((adv, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeUp}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="flex items-start space-x-3 sm:space-x-4"
                  >
                    <div className="mt-1 bg-red-600 text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-check" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">
                      {adv}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 sm:mt-12 bg-red-600 hover:bg-red-700 text-white px-7 sm:px-10 py-3.5 sm:py-4 rounded-md font-bold text-sm uppercase tracking-widest transition-all shadow-lg inline-flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>Contact Us Now</span>
                <i className="fa-solid fa-envelope" />
              </motion.button>
            </motion.div>

            {/* Right: Infographic Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((s, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gray-900 p-5 sm:p-8 text-center rounded-2xl transition-transform duration-300"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-red-600 mb-1">
                      {s.value}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="hidden md:block absolute -inset-12 border-2 border-red-600/10 rounded-full -z-10 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Headquarters Grid */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase">
              SAKO Headquarter
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              State-of-the-art facilities in Shenzhen
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {headquarters.map((img, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="aspect-square overflow-hidden rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={img}
                  alt="Headquarter"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Tour Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase">
              Factory Tour
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              Precision manufacturing and automated testing
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {factoryImages.map((img, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="aspect-[4/3] overflow-hidden rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={img}
                  alt="Factory"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase">
              SAKO Certificate
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              Compliance with international safety and quality standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8">
            {certs.map((c, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all w-full sm:w-48 border border-gray-100"
                whileHover={{ y: -4 }}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full mb-3 sm:mb-4 border"
                />
                <div className="text-center text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider">
                  {c.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
