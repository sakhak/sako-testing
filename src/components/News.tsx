
import React from 'react';

interface NewsProps {
  onMoreClick?: () => void;
}

const News: React.FC<NewsProps> = ({ onMoreClick }) => {
  const news = [
    {
      date: 'OCT 25, 2024',
      title: 'SAKO Highlights Future Solar Trends at Global Exhibition',
      category: 'Exhibition',
      image: 'https://picsum.photos/seed/news1/600/400'
    },
    {
      date: 'SEP 12, 2024',
      title: 'New Lithium Battery Pack Series Released with Smart Monitoring',
      category: 'Launch',
      image: 'https://picsum.photos/seed/news2/600/400'
    },
    {
      date: 'AUG 05, 2024',
      title: 'Empowering Remote Villages with SAKO Off-Grid Systems',
      category: 'CSR',
      image: 'https://picsum.photos/seed/news3/600/400'
    }
  ];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 uppercase">Recent News</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {news.map((item, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="relative h-60 overflow-hidden rounded-xl mb-6 shadow-md">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="text-gray-400 text-xs font-bold mb-3 tracking-widest">{item.date}</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={onMoreClick}
            className="bg-gray-900 hover:bg-red-600 text-white px-12 py-4 rounded font-black uppercase text-xs tracking-[0.3em] transition-all shadow-xl hover:-translate-y-1"
          >
            Go to SAKO Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
