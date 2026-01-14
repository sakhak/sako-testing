
import React, { useState } from 'react';

interface NewsItem {
  id: number;
  category: 'Blogs' | 'News' | 'SAKO Blog' | 'Industry News';
  title: string;
  date: string;
  author: string;
  img: string;
  excerpt: string;
}

interface NewsPageProps {
  type?: 'blog' | 'industry';
}

const NewsPage: React.FC<NewsPageProps> = ({ type = 'blog' }) => {
  const [openCat, setOpenCat] = useState<string | null>('Solar Inverter');

  const categories = [
    {
      name: 'Solar Inverter',
      subs: ['120V/240V Solar Inverter', 'Off Grid Solar Inverter', 'Hybrid Solar Inverter', 'Micro Inverter']
    },
    {
      name: 'Lithium Ion Batteries',
      subs: ['Li-Max Series LiFePO4 battery', 'Li-Sun Series LiFePO4 battery', '12V / 24V / 48V Lithium Battery', 'High Voltage Lithium Battery']
    },
    { name: 'Solar LED Lights', subs: ['Solar Street Light', 'Solar Flood Light'] },
    {
      name: 'Solar Panel',
      subs: ['Mono 300W–400W', 'Poly 100W–340W', 'Half-cut Cell 400W–705W']
    },
    {
      name: 'Solar Charge Controller',
      subs: ['MPPT Solar Charge Controller', 'PWM Solar Charge Controller']
    },
    {
      name: 'Energy Storage System',
      subs: ['Small Energy Storage System', 'Mega Energy Storage System']
    },
    { name: 'Uninterruptible Power Supply', subs: ['Line-interactive UPS', 'Online UPS'] },
  ];

  const blogItems: NewsItem[] = [
    {
      id: 1,
      category: 'SAKO Blog',
      title: 'SAKO SOLAR Lands in Freetown 2025',
      date: 'January 12, 2025',
      author: 'SAKOPOWER',
      img: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200',
      excerpt: 'SAKO continues its expansion in the West African market, bringing reliable off-grid solutions to Freetown. This milestone marks our commitment to powering sustainable growth across the region.'
    },
    {
      id: 2,
      category: 'News',
      title: 'Africa Energy Expo 2025: Showcasing Innovation',
      date: 'February 05, 2025',
      author: 'SAKOPOWER',
      img: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=1200',
      excerpt: 'Join SAKO at the Africa Energy Expo 2025 where we will be unveiling our latest High Voltage Lithium Battery series and Smart Hybrid Inverters designed for harsh environments.'
    },
    {
      id: 3,
      category: 'SAKO Blog',
      title: 'SAKO at the 138th Canton Fair',
      date: 'October 15, 2024',
      author: 'SAKOPOWER',
      img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200',
      excerpt: 'A retrospective on our successful participation at the 138th Canton Fair. SAKO booth attracted global distributors interested in our all-in-one Energy Storage Systems.'
    }
  ];

  const industryItems: NewsItem[] = [
    {
      id: 101,
      category: 'Industry News',
      title: 'SAKO Jiangxi Factory Rushed Export Orders for Global Market',
      date: 'June 08, 2024',
      author: 'SAKOPOWER',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      excerpt: 'Our Jiangxi factory is working at full capacity to meet the surging demand for lithium batteries and energy storage inverters in the European and African markets. We focus on export growth and strict quality control.'
    },
    {
      id: 102,
      category: 'Industry News',
      title: 'Innovative SAKO Balcony Solar System Solution for Urban Living',
      date: 'May 20, 2024',
      author: 'SAKOPOWER',
      img: 'https://images.unsplash.com/photo-1595844730298-b9f1ff9b5993?auto=format&fit=crop&q=80&w=1200',
      excerpt: 'SAKO introduces a residential solar solution specifically designed for apartments and balconies. This plug-and-play system allows urban residents to harness solar power efficiently.'
    },
    {
      id: 103,
      category: 'Industry News',
      title: 'Trends in Global Energy Storage: The Rise of Lithium Iron Phosphate',
      date: 'April 12, 2024',
      author: 'SAKOPOWER',
      img: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1200',
      excerpt: 'Industry experts highlight LiFePO4 as the leading chemistry for residential storage. SAKO continues to lead with the Li-Max and Li-Sun series, offering unmatched safety and cycle life.'
    }
  ];

  const currentItems = type === 'industry' ? industryItems : blogItems;
  const pageTitle = type === 'industry' ? 'Industry News' : 'SAKO Blog';

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">{pageTitle}</h1>
          <div className="w-16 h-1.5 bg-red-600 mt-6 md:ml-0 mx-auto"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar */}
          <aside className="lg:w-1/3 xl:w-1/4 space-y-12">
            
            {/* Product Categories Accordion */}
            <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-900">Product Categories</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {categories.map((cat, idx) => (
                  <div key={idx}>
                    <button 
                      onClick={() => setOpenCat(openCat === cat.name ? null : cat.name)}
                      className={`w-full flex items-center justify-between px-6 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors ${openCat === cat.name ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
                    >
                      <span>{cat.name}</span>
                      <i className={`fa-solid ${openCat === cat.name ? 'fa-minus' : 'fa-plus'} text-[7px]`}></i>
                    </button>
                    {openCat === cat.name && (
                      <div className="bg-gray-50/30 pb-4 animate-fade-in">
                        {cat.subs.map((sub) => (
                          <a key={sub} href="#" className="block px-8 py-2.5 text-[10px] font-medium text-gray-500 hover:text-red-600 transition-colors">
                            {sub}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sales Manager Card */}
            <div className="bg-white border border-gray-100 rounded-lg p-8 text-center shadow-md group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
              <div className="relative w-24 h-24 mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                  alt="Sales Manager" 
                  className="w-full h-full object-cover rounded-full border-4 border-gray-50 group-hover:border-red-50 transition-colors" 
                />
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">Sales Manager</h4>
              <div className="flex justify-center space-x-1 mb-4 text-red-600 text-[10px]">
                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
              </div>
              <div className="flex justify-center space-x-4 mb-8">
                <button className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                  <i className="fa-solid fa-comment-dots text-sm"></i>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                  <i className="fa-solid fa-envelope text-sm"></i>
                </button>
              </div>

              {/* Contact Us Sidebar Form */}
              <div className="text-left space-y-4 pt-6 border-t border-gray-100">
                 <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-900 mb-2">Contact Us</h5>
                 <form className="space-y-3">
                   <input type="text" placeholder="NAME *" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded text-[9px] font-bold uppercase tracking-widest text-gray-700 focus:border-red-600 outline-none transition-colors" required />
                   <input type="email" placeholder="EMAIL *" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded text-[9px] font-bold uppercase tracking-widest text-gray-700 focus:border-red-600 outline-none transition-colors" required />
                   <input type="text" placeholder="PHONE" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded text-[9px] font-bold uppercase tracking-widest text-gray-700 focus:border-red-600 outline-none transition-colors" />
                   <input type="text" placeholder="COUNTRY *" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded text-[9px] font-bold uppercase tracking-widest text-gray-700 focus:border-red-600 outline-none transition-colors" required />
                   <textarea placeholder="YOUR MESSAGE *" rows={3} className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded text-[9px] font-bold uppercase tracking-widest text-gray-700 focus:border-red-600 outline-none transition-colors resize-none" required></textarea>
                   <div className="flex items-center space-x-2 py-1">
                     <input type="checkbox" id="verify-sidebar" className="w-4 h-4 rounded text-red-600 border-gray-200 focus:ring-red-600" required />
                     <label htmlFor="verify-sidebar" className="text-[8px] font-bold text-gray-400 uppercase tracking-widest cursor-pointer">Verification</label>
                   </div>
                   <button className="w-full bg-red-600 hover:bg-gray-900 text-white py-4 rounded font-black uppercase text-[10px] tracking-[0.2em] transition-all shadow-lg">Send Now</button>
                 </form>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:w-2/3 xl:w-3/4 space-y-16">
            <div className="space-y-20">
              {currentItems.map((item) => (
                <article key={item.id} className="group flex flex-col md:flex-row gap-10 border-b border-gray-100 pb-16 last:border-0">
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-video overflow-hidden rounded-lg shadow-sm relative shrink-0">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-[9px] font-black uppercase tracking-[0.2em] shadow-lg">
                      {item.category}
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 flex flex-col justify-center">
                    <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight group-hover:text-red-600 transition-colors leading-tight mb-4">
                      {item.title}
                    </h2>

                    <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
                      <div className="flex items-center space-x-1.5">
                        <i className="fa-regular fa-calendar-check text-red-600"></i>
                        <span>Posted on {item.date}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <i className="fa-regular fa-user text-red-600"></i>
                        <span>by {item.author}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8 line-clamp-3">
                      {item.excerpt}
                    </p>
                    
                    <button className="self-start flex items-center space-x-2 text-red-600 group/btn border-b border-transparent hover:border-red-600 transition-all pb-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover/btn:tracking-[0.4em] transition-all">Continue reading</span>
                      <i className="fa-solid fa-arrow-right text-xs transform group-hover/btn:translate-x-2 transition-transform"></i>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="pt-10 flex items-center justify-center space-x-3">
              <button className="w-10 h-10 rounded border border-gray-100 flex items-center justify-center text-gray-400 hover:border-red-600 hover:text-red-600 transition-all">
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button className="w-10 h-10 rounded bg-red-600 text-white font-black text-xs">1</button>
              <button className="w-10 h-10 rounded border border-gray-100 flex items-center justify-center text-gray-700 font-bold text-xs hover:border-red-600 hover:text-red-600 transition-all">2</button>
              <button className="w-10 h-10 rounded border border-gray-100 flex items-center justify-center text-gray-700 font-bold text-xs hover:border-red-600 hover:text-red-600 transition-all">3</button>
              <button className="w-10 h-10 rounded border border-gray-100 flex items-center justify-center text-gray-400 hover:border-red-600 hover:text-red-600 transition-all">
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
