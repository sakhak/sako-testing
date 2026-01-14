
import React from 'react';

const EasySolarKitPage: React.FC = () => {
  const flagships = [
    { title: 'Microinverter 600W / 800W', img: 'https://picsum.photos/seed/mi1/400/400' },
    { title: 'Microinverter 1000W / 1200W', img: 'https://picsum.photos/seed/mi2/400/400' },
    { title: 'Microinverter 1600W / 2000W', img: 'https://picsum.photos/seed/mi3/400/400' },
  ];

  return (
    <div className="bg-white animate-fade-in">
      {/* Hero */}
      <section className="relative h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1595844730298-b9f1ff9b5993?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Balcony Solar" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight leading-tight">
            WHAT MAKES OUR PORTABLE MICRO<br/>POWER GENERATION SYSTEM THE BEST!
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 font-medium mb-10">
            Plug-and-play solar solutions for balconies, gardens, and urban spaces. Clean energy, simplified.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest transition-all shadow-2xl">Contact Us</button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest text-white hover:bg-white/20">Learn More</button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 uppercase">SAKO Easy Solar Kit</h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600" className="rounded-xl shadow-lg" alt="Kit Part 1" />
            <img src="https://images.unsplash.com/photo-1548333341-8342447732e5?auto=format&fit=crop&q=80&w=600" className="rounded-xl shadow-lg mt-8" alt="Kit Part 2" />
          </div>
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              The SAKO Easy Solar Kit is a revolution in residential renewable energy. This portable micro power generation system integrates PV modules, a high-efficiency micro-inverter, and a durable bracket system into one seamless package.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                 <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-xs shadow-lg"><i className="fa-solid fa-bolt"></i></div>
                 <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-900">Direct AC Conversion</h4>
                    <p className="text-xs text-gray-500 mt-1">Converts DC solar power directly into home-ready AC energy.</p>
                 </div>
              </li>
              <li className="flex items-start space-x-4">
                 <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-xs shadow-lg"><i className="fa-solid fa-house"></i></div>
                 <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-900">Urban Optimized</h4>
                    <p className="text-xs text-gray-500 mt-1">Perfect for apartments, balconies, and small rooftop spaces.</p>
                 </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Alternating Features */}
      <section className="bg-gray-50 py-24">
        {[
          { title: 'Plug-and-play design', desc: 'Simple installation with no complex wiring required. Set up in minutes.', img: 'https://picsum.photos/seed/kit1/800/600' },
          { title: 'Easy to fold and transport', desc: 'Innovative foldable structure makes it ideal for temporary or mobile use.', img: 'https://picsum.photos/seed/kit2/800/600' },
          { title: 'Adjustable angle', desc: 'Maximize solar capture with our durable, adjustable aluminum bracket system.', img: 'https://picsum.photos/seed/kit3/800/600' }
        ].map((f, i) => (
          <div key={i} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
            <div className="lg:w-1/2">
              <img src={f.img} alt={f.title} className="rounded-3xl shadow-2xl" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight">{f.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{f.desc}</p>
              <button className="bg-red-600 hover:bg-gray-900 text-white px-10 py-4 rounded font-black uppercase text-[10px] tracking-[0.3em] transition-all">Find out More</button>
            </div>
          </div>
        ))}
      </section>

      {/* Flagship Products */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase">Flagship Products</h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {flagships.map((prod, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className="aspect-square mb-8 flex items-center justify-center p-8 bg-gray-50 rounded-xl group-hover:bg-white transition-colors">
                <img src={prod.img} alt={prod.title} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-900 text-center mb-6">{prod.title}</h4>
              <button className="w-full bg-gray-900 text-white py-4 rounded font-black uppercase text-[9px] tracking-[0.3em] hover:bg-red-600 transition-colors">Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EasySolarKitPage;
