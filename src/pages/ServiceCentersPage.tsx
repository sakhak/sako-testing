
import React, { useState } from 'react';

const ServiceCentersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PK' | 'NG' | 'CN'>('PK');

  const countries = [
    { id: 'PK', name: 'Pakistan', email: 'service_pk@sakopower.com', links: ['Dealers_PK', 'Service Centers_PK', 'SAKO Warranty_PK'] },
    { id: 'NG', name: 'Nigeria', email: 'service_ng@sakopower.com', links: ['Dealers_NG', 'Service Centers_NG', 'SAKO Warranty_NG'] },
    { id: 'CN', name: 'China', email: 'service_cn@sakopower.com', links: ['Dealers_CN', 'Service Centers_CN', 'SAKO Warranty_CN'] },
  ];

  const advantages = [
    'Technical training and support',
    'SAKO agent price',
    'Local customer recommendation',
    'Advertising & publicity support',
    'Annual rebate based on sales',
    'Marketing proposals'
  ];

  return (
    <div className="bg-white animate-fade-in">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Luxury House Solar" 
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 font-medium">
            Reach out for product information, agency cooperation, or professional technical support. 
            We are here to power your energy future.
          </p>
        </div>
      </section>

      {/* Business Contact Tabs */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Business Contact</h2>
          <div className="w-16 h-1.5 bg-red-600 mt-6"></div>
        </div>

        <div className="flex justify-center mb-12 border-b border-gray-100">
          {countries.map(c => (
            <button 
              key={c.id} 
              onClick={() => setActiveTab(c.id as any)}
              className={`px-8 py-4 font-black uppercase tracking-widest text-xs transition-all border-b-2 ${activeTab === c.id ? 'border-red-600 text-red-600' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <span className="text-xl font-black text-gray-900 uppercase tracking-wider">{countries.find(c => c.id === activeTab)?.name}</span>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              For local warranty inquiries, service center locations, and authorized distributor details in {countries.find(c => c.id === activeTab)?.name}, please contact our regional desk.
            </p>
            <div className="flex flex-wrap gap-4">
              {countries.find(c => c.id === activeTab)?.links.map(link => (
                <a key={link} href="#" className="bg-white px-6 py-3 rounded-lg border border-gray-100 shadow-sm text-[10px] font-black uppercase tracking-widest text-red-600 hover:bg-red-600 hover:text-white transition-all">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-3 text-gray-900 font-bold tracking-wider">
              <i className="fa-solid fa-envelope text-red-600"></i>
              <span>{countries.find(c => c.id === activeTab)?.email}</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" className="rounded-xl shadow-2xl" alt="Contact Support" />
          </div>
        </div>
      </section>

      {/* Agency Advantages */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight">Advantages of joining the agency</h2>
            <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {advantages.map((adv, i) => (
              <div key={i} className="flex items-center space-x-6 bg-white/5 p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <i className="fa-solid fa-circle-check text-red-600 text-2xl group-hover:scale-125 transition-transform"></i>
                <span className="text-sm font-bold uppercase tracking-widest leading-relaxed">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Connect with SAKO Team</h2>
          <p className="text-gray-500 font-medium mt-4">Discuss home & business sales, distribution, and bulk orders.</p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-12 rounded-3xl border border-gray-100 shadow-2xl">
          <input type="text" placeholder="NAME (REQUIRED)" className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold uppercase tracking-widest outline-none focus:border-red-600 transition-all" required />
          <input type="email" placeholder="EMAIL (REQUIRED)" className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold uppercase tracking-widest outline-none focus:border-red-600 transition-all" required />
          <input type="text" placeholder="PHONE" className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold uppercase tracking-widest outline-none focus:border-red-600 transition-all" />
          <input type="text" placeholder="COUNTRY (REQUIRED)" className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold uppercase tracking-widest outline-none focus:border-red-600 transition-all" required />
          <textarea placeholder="MESSAGE (REQUIRED)" rows={4} className="md:col-span-2 px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold uppercase tracking-widest outline-none focus:border-red-600 transition-all resize-none" required></textarea>
          <div className="md:col-span-2 flex items-center justify-between">
            <div className="flex items-center space-x-4 bg-gray-50 px-6 py-3 rounded-lg border border-gray-100">
               <span className="text-[10px] font-black uppercase text-gray-400">Human Verification</span>
               <i className="fa-solid fa-robot text-red-600"></i>
            </div>
            <button className="bg-red-600 hover:bg-gray-900 text-white px-12 py-4 rounded-lg font-black uppercase text-xs tracking-[0.3em] transition-all shadow-xl">Send Now</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ServiceCentersPage;
