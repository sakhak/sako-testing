
import React from 'react';

const AboutPage: React.FC = () => {
  const milestones = [
    { year: '1993', event: 'SAKO Brand established in Shenzhen, focusing on power solutions.' },
    { year: '2003', event: 'First dedicated R&D center for solar inverters launched.' },
    { year: '2013', event: 'Expanded production to lithium energy storage systems.' },
    { year: '2023', event: 'Reached 30+ countries with global agent distribution network.' },
  ];

  const advantages = [
    '30+ years of professional industry experience',
    'Global brand awareness and trusted reputation',
    'Strong manufacturing capacity with large-scale factories',
    'Strict quality assurance and international standards',
    'Professional customer service and technical support',
    'Highly competitive pricing through supply chain optimization',
    'Innovative R&D capability with 100+ engineers',
    'Complete one-stop solar energy system solutions',
  ];

  const stats = [
    { value: '99.7%', label: 'Quality Rate' },
    { value: '29+', label: 'Years Experience' },
    { value: '30+', label: 'Countries' },
    { value: '20k+', label: 'Projects' },
    { value: '350+', label: 'Models' },
    { value: '100+', label: 'Engineers' },
    { value: '80+', label: 'Patents' },
    { value: '200k+', label: 'Monthly Capacity' },
  ];

  const headquarters = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600',
  ];

  const factoryImages = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1530124566582-ab05d3c562ad?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=600',
  ];

  const certs = [
    { name: 'ISO 9001', img: 'https://placehold.co/200x280?text=ISO9001' },
    { name: 'ISO 14001', img: 'https://placehold.co/200x280?text=ISO14001' },
    { name: 'CE Certificate', img: 'https://placehold.co/200x280?text=CE' },
    { name: 'TÜV Rheinland', img: 'https://placehold.co/200x280?text=TUV' },
    { name: 'IEC Standard', img: 'https://placehold.co/200x280?text=IEC' },
  ];

  return (
    <div className="bg-white">
      {/* Hero / History Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="History Background" 
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-widest">
            Company <span className="text-red-600">History</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-12 mt-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="w-64 text-center group">
                <div className="text-red-600 text-3xl font-black mb-2 group-hover:scale-110 transition-transform">{m.year}</div>
                <div className="h-0.5 w-12 bg-white/30 mx-auto mb-4 group-hover:w-full transition-all"></div>
                <p className="text-sm text-gray-300">{m.event}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 inline-block bg-red-600 px-8 py-4 rounded font-black text-2xl uppercase tracking-widest">
            29 Years of Experience
          </div>
        </div>
      </section>

      {/* About SAKO Intro */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">
          About <span className="text-red-600">SAKO</span>
        </h2>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify md:text-center">
          <p>
            SAKO is a professional manufacturer and global supplier of high-tech solar energy products. 
            Since our founding, we have been committed to advancing renewable energy technology to empower 
            global energy independence.
          </p>
          <p>
            With integrated R&D, manufacturing, and international sales departments, we provide specialized 
            solutions for solar inverters, lithium battery packs, high-efficiency solar modules, and total energy 
            storage systems for both residential and commercial sectors.
          </p>
          <p>
            Our products are deployed in over 30 countries across the Middle East, South Africa, Europe, 
            and Asia, backed by a robust network of global agents and partners.
          </p>
        </div>
      </section>

      {/* Business Scope */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <i className="fa-solid fa-solar-panel text-4xl text-red-600 mb-6"></i>
              <h3 className="text-xl font-bold mb-4 uppercase">SAKO Main Products</h3>
              <p className="text-sm text-gray-500">Inverters, Lithium Batteries, and Half-cut Solar Modules.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-red-600">
              <i className="fa-solid fa-users text-4xl text-red-600 mb-6"></i>
              <h3 className="text-xl font-bold mb-4 uppercase">Agents of SAKO</h3>
              <p className="text-sm text-gray-500">Global distribution network supporting major markets worldwide.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <i className="fa-solid fa-microchip text-4xl text-red-600 mb-6"></i>
              <h3 className="text-xl font-bold mb-4 uppercase">OEM / ODM Services</h3>
              <p className="text-sm text-gray-500">Customized power solutions tailored to industrial requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SAKO? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Advantages */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-10 uppercase tracking-tight">
                SAKO <span className="text-red-600">Advantage</span>
              </h2>
              <ul className="space-y-6">
                {advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 bg-red-600 text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span className="text-gray-700 font-medium">{adv}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-12 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-md font-bold text-sm uppercase tracking-widest transition-all shadow-lg inline-flex items-center space-x-2">
                <span>Contact Us Now</span>
                <i className="fa-solid fa-envelope"></i>
              </button>
            </div>

            {/* Right: Infographic Stats */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, idx) => (
                  <div key={idx} className="bg-gray-900 p-8 text-center rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-3xl font-black text-red-600 mb-1">{s.value}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
              {/* Central Decoration */}
              <div className="hidden md:block absolute -inset-12 border-2 border-red-600/10 rounded-full -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Headquarters Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 uppercase">SAKO Headquarter</h2>
            <p className="text-gray-500 mt-2 font-medium">State-of-the-art facilities in Shenzhen</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {headquarters.map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg shadow-sm">
                <img src={img} alt="Headquarter" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Tour Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 uppercase">Factory Tour</h2>
            <p className="text-gray-500 mt-2 font-medium">Precision manufacturing and automated testing</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {factoryImages.map((img, idx) => (
              <div key={idx} className="aspect-[4/3] overflow-hidden rounded-lg shadow-sm">
                <img src={img} alt="Factory" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 uppercase">SAKO Certificate</h2>
            <p className="text-gray-500 mt-2 font-medium">Compliance with international safety and quality standards</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {certs.map((c, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all w-48 border border-gray-100">
                <img src={c.img} alt={c.name} className="w-full mb-4 border" />
                <div className="text-center text-xs font-bold text-gray-700 uppercase tracking-wider">{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
