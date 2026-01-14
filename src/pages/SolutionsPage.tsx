import React from "react";

interface SolutionsPageProps {
  type?: string;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({
  type = "Solutions",
}) => {
  const isOverview = type === "Solutions" || !type;
  const isHybrid = type === "Hybrid Storage Solar Solution";
  const isPumping = type === "Solar Pumping System";
  const isBalcony = type === "Solar Balcony System Solution";

  // --- COMMON BENEFIT DATA ---
  const benefits = [
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Easy Installation",
      desc: "Plug-and-play design reduces setup time and labor costs for global installers.",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "High Performance",
      desc: "Industrial-grade conversion efficiency ensures maximum ROI for end-users.",
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Smart Management",
      desc: "Intelligent cloud-based monitoring via SAKO App for real-time energy tracking.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Safe and Reliable",
      desc: "Multi-layer protection systems with high-safety LiFePO4 battery technology.",
    },
  ];

  // --- OFF GRID SPECIFIC DATA ---
  const offGridPackages = [
    {
      name: "Residential Energy Storage System",
      capacity: "5kW / 10kWh",
      components: [
        "10 x 550W Mono Half-cut Solar Panels",
        "SAKO SUN-G 5KW Off-Grid Hybrid Inverter",
        "2 x 48V 100Ah Lithium Battery Packs",
        "PV Cable & MC4 Connectors Set",
        "5-Year System Standard Warranty",
      ],
      img: "https://images.unsplash.com/photo-1548333341-8342447732e5?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Commercial Solar Storage Solution",
      capacity: "30kW / 100kWh",
      components: [
        "60 x 550W Mono Half-cut Solar Panels",
        "SAKO Mega-Power 30KW Industrial Inverter",
        "10 x High Voltage Rack Lithium Battery Packs",
        "High-Voltage PV Cable & MC4 Connectors",
        "10-Year Long-term System Warranty",
      ],
      img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  // --- HYBRID SPECIFIC DATA ---
  const hybridPackages = [
    {
      name: "Hybrid Energy Storage System",
      capacity: "6kW / 15kWh",
      points: [
        "Can operate in On-grid or Off-grid mode",
        "Sell power to the grid or store excess energy",
        "Protect against utility outages",
      ],
      img: "https://images.unsplash.com/photo-1449156001931-8283427c90b4?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Commercial Hybrid Energy Storage",
      capacity: "50kW / 120kWh",
      points: [
        "Seamless switching between grid and battery",
        "Peak shaving and load shifting capability",
        "Industrial grade reliability and scalability",
      ],
      img: "https://images.unsplash.com/photo-1558444452-192569b9190c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  // --- PUMPING SPECIFIC DATA ---
  const pumpingPackages = [
    {
      name: "Solar Pumping System",
      capacity: "1HP – 10HP",
      points: [
        "Provide clean water with only solar energy",
        "Water can be stored in holding tanks for continuous use",
        "Ideal for small-scale farming and residential water supply",
      ],
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Industrial Solar Pumping Station",
      capacity: "20HP – 100HP",
      points: [
        "Capable of large-volume water transport for irrigation",
        "Can be connected to the grid or backup generator for 24/7 use",
        "Heavy-duty pumping inverter with intelligent water level control",
      ],
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
  ];

  // --- BALCONY SPECIFIC DATA ---
  const balconyPackages = [
    {
      name: "M-ESS Balcony Energy Storage System",
      capacity: "1.5KWh",
      points: [
        "Integrated inverter / MPPT charger / LiFePO₄ battery",
        "Supports self-consumption and grid feedback",
        "Plug-and-play installation for any balcony",
        "Smart APP monitoring via Wi-Fi/Bluetooth",
      ],
      img: "https://images.unsplash.com/photo-1595844730298-b9f1ff9b5993?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "M-ESS Max Balcony Solution",
      capacity: "3KWh",
      points: [
        "Double capacity for extended night-time usage",
        "Advanced space-saving vertical mounting design",
        "High-cycle life LiFePO4 cells for 10+ years use",
        "Zero-export function compatible with micro inverters",
      ],
      img: "https://images.unsplash.com/photo-1585822719534-91182e85b33a?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const relatedProducts = [
    { name: "Solar Panel", img: "https://picsum.photos/seed/sol-pan/400/400" },
    {
      name: "Micro Inverter",
      img: "https://picsum.photos/seed/micro-inv/400/400",
    },
    { name: "ESS-1K Unit", img: "https://picsum.photos/seed/ess-1k/400/400" },
    {
      name: "Pumping Inverter",
      img: "https://picsum.photos/seed/pump-inv/400/400",
    },
  ];

  const overviewSolutions = [
    {
      title: "Off Grid Solution",
      img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=800",
      desc: "Complete independence for remote locations.",
    },
    {
      title: "Hybrid Storage Solar Solution",
      img: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=800",
      desc: "Smart management of grid and solar energy.",
    },
    {
      title: "Solar Pumping System",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      desc: "Efficient water solutions for agriculture.",
    },
    {
      title: "Solar Balcony System Solution",
      img: "https://images.unsplash.com/photo-1585822719534-91182e85b33a?auto=format&fit=crop&q=80&w=800",
      desc: "Compact energy storage for urban living.",
    },
  ];

  // --- OVERVIEW MODE ---
  if (isOverview) {
    return (
      <div className="bg-white animate-fade-in">
        <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=1920"
              className="w-full h-full object-cover"
              alt="SAKO Solutions"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-widest">
              Our Solutions
            </h1>
            <p className="max-w-2xl text-lg text-gray-300 leading-relaxed font-medium">
              Reliable, sustainable, and intelligent solar energy systems
              tailored for residential, industrial, and agricultural
              applications worldwide.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {overviewSolutions.map((sol, idx) => (
              <a
                key={idx}
                href={`#solutions-page?type=${encodeURIComponent(sol.title)}`}
                className="group relative h-[400px] overflow-hidden rounded-2xl shadow-xl transition-all hover:-translate-y-2"
              >
                <img
                  src={sol.img}
                  alt={sol.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 max-w-xs">
                    {sol.desc}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-red-600 font-black text-xs uppercase tracking-widest">
                    <span>Learn More</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- DETAIL MODES (HYBRID/PUMPING/BALCONY/OFF-GRID) ---
  const currentHero = isHybrid
    ? {
        title: "HYBRID STORAGE",
        subtitle: "SOLAR SOLUTION",
        desc: "Integration of grid power, solar generation, and lithium battery storage.",
        img: "https://images.unsplash.com/photo-1449156001931-8283427c90b4?auto=format&fit=crop&q=80&w=1920",
      }
    : isPumping
    ? {
        title: "SOLAR PUMPING",
        subtitle: "SOLUTION",
        desc: "One-stop solar pumping solution for sustainable water management.",
        img: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=1920",
      }
    : isBalcony
    ? {
        title: "M-ESS BALCONY",
        subtitle: "ENERGY STORAGE SYSTEM",
        desc: "One-stop AC & DC balcony solar system for urban apartments.",
        img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1920",
        badge: "1.5KWh / 3KWh",
      }
    : {
        title: "OFF-GRID SOLAR",
        subtitle: "STORAGE SOLUTIONS",
        desc: "True energy independence with high-performance storage.",
        img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1920",
      };

  const currentPackages = isHybrid
    ? hybridPackages
    : isPumping
    ? pumpingPackages
    : isBalcony
    ? balconyPackages
    : offGridPackages;
  const currentIntro = isHybrid
    ? "Residential, commercial, and industrial applications from 5kW to 100MW."
    : isPumping
    ? "Residential, agricultural, and industrial use from 0.75kW to 150kW."
    : isBalcony
    ? "Designed for residential and apartment use, compatible with solar panels and micro inverters."
    : "Decades of expertise in R&D for safe and efficient energy independence.";

  const layoutSubtitle = isHybrid
    ? "Residential, C&I"
    : isPumping
    ? "AC & DC"
    : isBalcony
    ? "AC & DC"
    : "Off-Grid Residential";

  return (
    <div className="bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={currentHero.img}
            className="w-full h-full object-cover"
            alt={currentHero.title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            {isBalcony && currentHero.badge && (
              <div className="inline-block bg-white text-red-600 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 shadow-2xl">
                {currentHero.badge}
              </div>
            )}
            <h1 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tight leading-[1.1]">
              <span className={isBalcony ? "text-white" : "text-white"}>
                {currentHero.title}
              </span>{" "}
              <br />
              <span className="text-red-600">{currentHero.subtitle}</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-medium mb-12 max-w-xl">
              {currentHero.desc}
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-sm font-black text-sm uppercase tracking-[0.2em] transition-all shadow-2xl hover:-translate-y-1">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tight leading-tight">
            Easy to install and even easier to run
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            {currentIntro}
          </p>
        </div>
      </section>

      {/* Feature Icons Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white text-red-600 border border-gray-100 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <i className={`${b.icon} text-3xl`}></i>
                </div>
                <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-900 mb-4">
                  {b.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium px-4">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Layout Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight">
              System Layout
            </h2>
            <div className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mt-3">
              {layoutSubtitle}
            </div>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6"></div>
          </div>

          <div className="bg-gray-50 p-16 rounded-[2.5rem] border border-gray-100 relative shadow-inner flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-grow w-full">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 inline-block shadow-sm">
                    <i
                      className={`fa-solid ${
                        isBalcony ? "fa-square-rss" : "fa-solar-panel"
                      } text-5xl text-gray-300`}
                    ></i>
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-gray-900">
                    Solar Panels
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="h-0.5 w-full bg-red-600/10 relative">
                    <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-red-600"></div>
                  </div>
                </div>

                <div className="space-y-4 col-span-2 md:col-span-1">
                  <div className="bg-white p-10 rounded-3xl border-2 border-red-600 shadow-2xl inline-block relative">
                    <i
                      className={`fa-solid ${
                        isBalcony ? "fa-box-open" : "fa-microchip"
                      } text-6xl text-red-600`}
                    ></i>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[8px] font-black px-4 py-1.5 uppercase rounded-full whitespace-nowrap shadow-md">
                      {isBalcony ? "M-ESS Unit" : "Core Inverter"}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="h-0.5 w-full bg-red-600/10 relative">
                    <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-red-600"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 inline-block shadow-sm">
                    <i
                      className={`fa-solid ${
                        isBalcony ? "fa-plug-circle-bolt" : "fa-house-signal"
                      } text-5xl text-gray-300`}
                    ></i>
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-gray-900">
                    {isBalcony ? "Home Connection" : "Loads"}
                  </div>
                </div>
              </div>
            </div>

            {isBalcony && (
              <div className="lg:w-1/3 bg-white p-10 rounded-2xl border border-gray-100 shadow-xl self-stretch">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-8 border-b border-gray-50 pb-4">
                  Component List
                </h4>
                <div className="space-y-6">
                  {[
                    "Lightweight Flex Solar Panels",
                    "Micro Inverter (Grid-Tie)",
                    "M-ESS Balcony Storage Unit",
                    "High-Voltage Extension Cables",
                    "Standard Home Power Plug",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-[10px] font-black">
                        {i + 1}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-700">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solution Packages Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
              {isBalcony
                ? "Balcony Energy Storage System Packages"
                : "Standard Solution Packages"}
            </h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6"></div>
          </div>

          <div className="space-y-16">
            {currentPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row gap-0 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.name}
                    className="w-full h-full object-cover min-h-[450px] group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-10 left-10 bg-red-600 text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl">
                    Capacity: {pkg.capacity}
                  </div>
                </div>
                <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-white">
                  <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-10 leading-tight">
                    {pkg.name}
                  </h3>
                  <div className="space-y-6 mb-12">
                    {(
                      ("points" in pkg
                        ? pkg.points
                        : pkg.components) as string[]
                    ).map((p: string, pidx: number) => (
                      <div
                        key={pidx}
                        className="flex items-start space-x-5 text-xs font-bold uppercase tracking-[0.05em] text-gray-600"
                      >
                        <i className="fa-solid fa-circle-check text-red-600 mt-1"></i>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <button className="self-start bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-[0.25em] transition-all shadow-xl hover:-translate-y-1">
                    Contact Us
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
              Related Products
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.slice(0, 4).map((p, idx) => (
              <div key={idx} className="group cursor-pointer text-center">
                <div className="aspect-square bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center p-12 mb-8 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-800 group-hover:text-red-600 transition-colors">
                  {p.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); box-shadow: 0 20px 50px rgba(220,38,38,0.1); }
          50% { transform: scale(1.02); box-shadow: 0 25px 60px rgba(220,38,38,0.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SolutionsPage;
