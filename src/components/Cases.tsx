
import React from 'react';

const Cases: React.FC = () => {
  const cases = [
    { title: 'Residential Installation', img: 'https://picsum.photos/seed/case1/600/400' },
    { title: 'Commercial Project', img: 'https://picsum.photos/seed/case2/600/400' },
    { title: 'Inverter Room Setup', img: 'https://picsum.photos/seed/case3/600/400' },
    { title: 'Solar Farm Maintenance', img: 'https://picsum.photos/seed/case4/600/400' },
    { title: 'Industrial Storage', img: 'https://picsum.photos/seed/case5/600/400' },
    { title: 'Technical Testing', img: 'https://picsum.photos/seed/case6/600/400' },
  ];

  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900 uppercase">Installation Cases</h2>
            <p className="text-gray-500 mt-2 font-medium">Real projects implemented around the globe.</p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold text-xs uppercase tracking-widest transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg aspect-video">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-bold uppercase tracking-widest border-2 border-white px-4 py-2">View Case</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
