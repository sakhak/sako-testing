
import React from 'react';

const SupportPage: React.FC = () => {
  const sections = [
    {
      id: 'faq',
      title: 'FAQ',
      desc: 'Get quick answers to common questions about product installation, maintenance, and system configurations.',
      img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
      icon: 'fa-solid fa-circle-question'
    },
    {
      id: 'training',
      title: 'Training Video',
      desc: 'Detailed video tutorials on how to set up SAKO solar inverters, lithium batteries, and smart monitoring apps.',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
      icon: 'fa-solid fa-play-circle'
    },
    {
      id: 'promotion',
      title: 'Promotion',
      desc: 'Check out our latest seasonal offers, bulk purchase discounts, and new technology launch campaigns.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      badge: 'COMING SOON',
      icon: 'fa-solid fa-tags'
    },
    {
      id: 'download',
      title: 'Download',
      desc: 'Access technical datasheets, user manuals, installation guides, and professional certification documents.',
      img: 'https://images.unsplash.com/photo-1544391682-1a51d9df7e1c?auto=format&fit=crop&q=80&w=1200',
      cta: 'DOWNLOAD FOR FREE',
      icon: 'fa-solid fa-download'
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Solar Panels at Sunset" 
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest leading-tight">
            Support
          </h1>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 font-medium">
            SAKO is committed to providing world-class assistance. Access our comprehensive help resources 
            tailored for global installers and end-users.
          </p>
        </div>
      </section>

      {/* Vertical Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {sections.map((section, idx) => (
          <section key={section.id} id={section.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Image Box */}
            <div className="lg:w-1/2 w-full">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img src={section.img} alt={section.title} className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                
                {/* Specific Graphic Overlays */}
                {section.id === 'faq' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl flex items-center space-x-4 animate-bounce-slow">
                     <i className="fa-solid fa-comment-dots text-red-600 text-3xl"></i>
                     <span className="font-black text-gray-900 text-xl tracking-tighter">FAQ?</span>
                  </div>
                )}
                
                {section.id === 'training' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                      <i className="fa-solid fa-play ml-1"></i>
                    </div>
                  </div>
                )}

                {section.id === 'promotion' && section.badge && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-12 py-6 rounded-sm shadow-2xl">
                       <span className="text-white font-black text-4xl tracking-widest uppercase">{section.badge}</span>
                    </div>
                  </div>
                )}

                {section.id === 'download' && section.cta && (
                  <div className="absolute inset-0 flex items-center justify-center">
                     <button className="bg-gray-900 text-white px-10 py-5 font-black uppercase text-xs tracking-[0.3em] hover:bg-red-600 transition-colors shadow-2xl flex items-center space-x-4">
                        <i className="fa-solid fa-download"></i>
                        <span>{section.cta}</span>
                     </button>
                  </div>
                )}
              </div>
            </div>

            {/* Text Box */}
            <div className="lg:w-1/2 w-full space-y-8">
              <div className="flex flex-col items-start">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">{section.title}</h2>
                <div className="w-16 h-1.5 bg-red-600 mt-6"></div>
              </div>
              
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                {section.desc}
              </p>
              
              <button className="inline-flex items-center space-x-4 group/btn">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 group-hover/btn:tracking-[0.4em] transition-all">Explore {section.title}</span>
                <div className="w-12 h-0.5 bg-gray-100 group-hover/btn:bg-red-600 group-hover/btn:w-20 transition-all"></div>
              </button>

              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-red-600/20 transition-all">
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Popular Resource</div>
                  <div className="text-[11px] font-bold text-gray-900 uppercase tracking-wide">Standard Manual v2.0</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-red-600/20 transition-all">
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Last Updated</div>
                  <div className="text-[11px] font-bold text-gray-900 uppercase tracking-wide">Oct 20, 2024</div>
                </div>
              </div>
            </div>

          </section>
        ))}
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, -60%); }
          50% { transform: translate(-50%, -40%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SupportPage;
