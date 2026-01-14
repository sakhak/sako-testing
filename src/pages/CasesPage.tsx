
import React from 'react';

const CasesPage: React.FC = () => {
  const sections = [
    {
      title: 'Off Grid Solar System',
      cases: [
        { title: 'Villa Installation', system: '5KW Off-Grid System', date: '2024-03', img: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=800' },
        { title: 'Remote Resort Power', system: '20KW Off-Grid Array', date: '2023-11', img: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&q=80&w=800' },
        { title: 'Eco-Lodge Energy', system: '10KW Hybrid Storage', date: '2024-01', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800' }
      ]
    },
    {
      title: 'DC & AC Solar Kits (SHS Projects)',
      cases: [
        { title: 'Community Rural Project', system: 'Portable AC Solar Kit', date: '2023-09', img: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800' },
        { title: 'Mobile Home Solar', system: 'DC Basic Lighting Kit', date: '2024-02', img: 'https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=800' },
        { title: 'Fisherman Power Pack', system: 'Outdoor Portable Kit', date: '2023-12', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' }
      ]
    },
    {
      title: 'Storage System Solution',
      cases: [
        { title: 'City Villa Storage', system: '10KWh Lithium Bank', date: '2024-04', img: 'https://images.unsplash.com/photo-1558444452-192569b9190c?auto=format&fit=crop&q=80&w=800' },
        { title: 'Apartment Energy Backup', system: '5KWh Stackable ESS', date: '2023-10', img: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800' },
        { title: 'Rooftop Storage Project', system: 'Residential All-in-one', date: '2024-01', img: 'https://images.unsplash.com/photo-1449156001931-8283427c90b4?auto=format&fit=crop&q=80&w=800' }
      ]
    },
    {
      title: 'Solar Pumping System',
      cases: [
        { title: 'Agricultural Irrigation', system: '10HP Pumping Station', date: '2024-02', img: 'https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800' },
        { title: 'Village Water Supply', system: '5HP Deep Well Pump', date: '2023-08', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800' },
        { title: 'Livestock Farm Pumping', system: '2HP Ground-mounted', date: '2024-05', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' }
      ]
    }
  ];

  return (
    <div className="bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Solar Power Plant" 
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
            The best case for <span className="text-red-600">off grid solar systems</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
            Discover our global installations across residential, commercial, and industrial sectors. 
            We provide specialized off-grid solar systems, DC/AC solar kits, solar pumping systems, and total storage solutions.
          </p>
        </div>
      </section>

      {/* Main Cases Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-24 last:mb-0">
            <div className="flex flex-col mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">{section.title}</h2>
              <div className="w-16 h-1.5 bg-red-600 mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.cases.map((c, cidx) => (
                <div key={cidx} className="group bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={c.img} 
                      alt={c.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {c.date}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {c.system}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasesPage;
