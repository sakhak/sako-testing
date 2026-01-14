
import React, { useState } from 'react';

const TrainingVideoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Products Introduction');

  const tabs = [
    'Products Introduction', 'Operation Introduction', 'Factory Introduction', 'SAKO Exhibition', 'SAKO Events'
  ];

  const videos = [
    { title: 'Alpha W-ESS Overview', img: 'https://picsum.photos/seed/v1/600/400' },
    { title: 'ISUN-1KVA Installation', img: 'https://picsum.photos/seed/v2/600/400' },
    { title: 'SUNPAX 5.5K Setup', img: 'https://picsum.photos/seed/v3/600/400' },
    { title: '4U Lithium Battery Guide', img: 'https://picsum.photos/seed/v4/600/400' },
    { title: '51.2V 200Ah Pack Demo', img: 'https://picsum.photos/seed/v5/600/400' },
    { title: 'SUNPOLO-6K Advanced config', img: 'https://picsum.photos/seed/v6/600/400' },
  ];

  return (
    <div className="bg-white animate-fade-in">
      <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Sunset Solar Field" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">Training Video</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center border-b border-gray-100 mb-16">
          {tabs.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all border-b-2 ${activeTab === tab ? 'border-red-600 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <img src={vid.img} alt={vid.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all flex items-center justify-center">
                   <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                     <i className="fa-solid fa-play ml-1"></i>
                   </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-white text-[10px] font-black bg-red-600/80 px-3 py-1 rounded">SAKO</span>
                </div>
              </div>
              <h4 className="mt-6 text-[11px] font-bold text-gray-800 uppercase tracking-widest group-hover:text-red-600 transition-colors">{vid.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingVideoPage;
