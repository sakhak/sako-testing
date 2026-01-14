
import React from 'react';

const Partners: React.FC = () => {
  const partners = ['CATL', 'BYD', 'Hainergy', 'Deye', 'SOFAR', 'CHiNT'];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-10">Global Trusted Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {partners.map((partner) => (
            <div key={partner} className="text-2xl md:text-3xl font-black text-gray-900 hover:text-red-600 transition-colors cursor-default grayscale hover:grayscale-0">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
