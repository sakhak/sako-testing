
import React from 'react';

const EnergyStoragePage: React.FC = () => {
  const flagshipProducts = [
    {
      title: 'SAKO Solar Panel',
      model: '535W–550W Module',
      desc: 'High-efficiency PERC modules with half-cell technology for reduced power loss.',
      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Home Solar Inverter',
      model: 'SUNON V Series 4KW/6KW',
      desc: 'Smart off-grid inverter with integrated MPPT and WiFi monitoring.',
      img: 'https://images.unsplash.com/photo-1548333341-8342447732e5?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: '48V100AH Lithium Battery',
      model: 'LiFePO4 Power Pack',
      desc: 'Grade A cells with intelligent BMS and high cycle life for reliability.',
      img: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Hybrid Solar Inverter',
      model: 'SUN-G Hybrid Series',
      desc: 'Supports grid feeding and lithium battery communication ports.',
      img: 'https://images.unsplash.com/photo-1592833159057-6fdc2a5c373a?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'SAKO ESS PRO 6KW',
      model: 'Integrated Storage Pack',
      desc: 'Stackable design with built-in inverter and battery modules.',
      img: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Modern House Sunset" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight leading-tight">
              WHAT MAKES OUR SOLAR ENERGY<br/>STORAGE SYSTEM THE BEST!
            </h1>
            <p className="text-lg text-gray-300 font-medium mb-10 leading-relaxed">
              Explore SAKO’s industry-leading ESS solutions designed for total energy independence, 
              combining high-efficiency PV modules, smart inverters, and safe lithium storage.
            </p>
            <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Flagship Products */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Flagship Products</h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {flagshipProducts.map((p, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all p-8 flex flex-col">
              <div className="aspect-square mb-8 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-6">
                <img src={p.img} alt={p.title} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-2">{p.model}</h4>
              <h3 className="text-xl font-black text-gray-900 mb-4">{p.title}</h3>
              <p className="text-gray-500 text-xs font-medium leading-relaxed mb-8 flex-grow">{p.desc}</p>
              <button className="w-full bg-gray-900 text-white py-4 rounded font-black uppercase text-[9px] tracking-[0.3em] hover:bg-red-600 transition-colors">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1595844730298-b9f1ff9b5993?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl" alt="ESS Benefits" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="flex flex-col items-start">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight leading-tight">Easy to install and easy to run</h2>
                <div className="w-16 h-1.5 bg-red-600 mt-6"></div>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                Our all-in-one Energy Storage System (ESS) is designed for modern lifestyles. By integrating solar panels, 
                high-performance inverters, and lithium battery modules, we provide a plug-and-play experience with a 
                lifespan of 5+ years and simple capacity expansion.
              </p>
              <button className="bg-red-600 hover:bg-gray-900 text-white px-10 py-4 rounded font-black uppercase text-[10px] tracking-[0.2em] transition-all">Find Out More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1449156001931-8283427c90b4?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl" alt="ESS Applications" />
          </div>
          <div className="lg:w-1/2 space-y-8 text-right lg:text-left">
            <div className="flex flex-col items-start lg:items-end">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight leading-tight">Designed for high-power commercial, industrial and residential power applications</h2>
              <div className="w-16 h-1.5 bg-red-600 mt-6 lg:ml-auto"></div>
            </div>
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              SAKO's custom solutions ensure your solar panels generate electricity efficiently, inverters convert DC to AC 
              seamlessly, and batteries store every drop of excess energy for night-time use or emergency backup.
            </p>
            <button className="bg-red-600 hover:bg-gray-900 text-white px-10 py-4 rounded font-black uppercase text-[10px] tracking-[0.2em] transition-all">Find Out More</button>
          </div>
        </div>
      </section>

      {/* About SAKO */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8">About SAKO</h2>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">
            With over 29 years of industry experience, SAKO is a global powerhouse in solar manufacturing, 
            R&D, and supply. We specialize in delivering complete solar energy storage solutions that are 
            trusted by millions worldwide.
          </p>
          <div className="flex justify-center space-x-12 mt-12">
            <div>
               <div className="text-3xl font-black text-red-600">29+</div>
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Years Experience</div>
            </div>
            <div>
               <div className="text-3xl font-black text-red-600">30+</div>
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Countries</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyStoragePage;
