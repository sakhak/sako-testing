
import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    { title: 'Off-grid Solution', img: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=600' },
    { title: 'Household Storage', img: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=600' },
    { title: 'Hybrid Storage', img: 'https://images.unsplash.com/photo-1585822719534-91182e85b33a?auto=format&fit=crop&q=80&w=600' },
    { title: 'Solar Pumping', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
          System <span className="text-red-600">Solutions</span>
        </h2>
        <div className="w-24 h-1.5 bg-red-600 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((sol, idx) => (
            <div key={idx} className="relative aspect-[3/4] overflow-hidden group cursor-pointer rounded-lg">
              <img 
                src={sol.img} 
                alt={sol.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-xl font-black uppercase tracking-wider mb-2">{sol.title}</h3>
                <div className="w-0 group-hover:w-12 h-1 bg-red-600 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
