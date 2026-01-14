
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '12+' },
    { label: 'Global Agents', value: '21+' },
    { label: 'Global Partners', value: '66+' },
    { label: 'Total Employees', value: '249+' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=1920" 
          alt="Solar Panel Field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="group">
              <div className="text-5xl md:text-6xl font-black text-red-600 mb-2 transition-transform group-hover:scale-110 duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
