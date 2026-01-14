
import React, { useState } from 'react';

const FAQPage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const sections = [
    {
      title: 'Service FAQs',
      id: 'service',
      items: [
        { q: 'Who is SAKO? Is SAKO a trading company or factory?', a: 'SAKO is a professional manufacturer and global supplier with its own state-of-the-art factories in Shenzhen, China. We are an integrated R&D and production company.' },
        { q: 'Why should I buy from SAKO?', a: 'SAKO offers 30+ years of experience, Tier-1 module quality, and comprehensive after-sales support with a global presence in over 30 countries.' },
        { q: 'Questions regards SAKO agent', a: 'We welcome global partners. Agents receive technical training, marketing support, and exclusive pricing. Please contact our sales team for regional availability.' },
        { q: 'How to get after-sales tech support?', a: 'Our technical team is available via email, phone, or local service centers. We provide remote diagnostic assistance and on-site support through authorized dealers.' }
      ]
    },
    {
      title: 'Inverter FAQs',
      id: 'inverter',
      items: [
        { q: 'What need I know before choose the right off grid solar inverter?', a: 'Consider your total load wattage, battery voltage requirements, and peak power needs. Our SUN-G and SUN-PRO series cater to different household scales.' },
        { q: 'How many years warranty of SAKO solar inverter has?', a: 'SAKO solar inverters typically come with a 2-5 year standard warranty, extendable based on specific project requirements.' },
        { q: 'Does SAKO have real hybrid solar inverter which can feed solar power to grid?', a: 'Yes, our hybrid series supports seamless switching and grid feedback functionality.' }
      ]
    },
    {
      title: 'Battery FAQs',
      id: 'battery',
      items: [
        { q: 'Why should I choose lithium battery?', a: 'Lithium batteries offer higher energy density, longer cycle life (6000+), and faster charging compared to lead-acid alternatives.' },
        { q: 'What is a BMS? Is all SAKO lithium battery have BMS built inside?', a: 'BMS stands for Battery Management System. Every SAKO lithium pack features an integrated BMS for safety, cell balancing, and protection.' }
      ]
    },
    {
      title: 'Solar Panel FAQs',
      id: 'panel',
      items: [
        { q: 'Is SAKO solar panel on Tier-1 module manufacturers list?', a: 'We follow Tier-1 manufacturing standards and adopt high-efficiency PERC and N-type cells from top-tier silicon providers.' },
        { q: 'How does SAKO ensure module product quality?', a: 'We perform 100% EL testing and triple flash testing on every module to ensure zero micro-cracks and precise power output.' }
      ]
    }
  ];

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <div className="bg-white animate-fade-in">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Solar Farm Sunset" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">FAQ</h1>
          <p className="text-lg text-gray-300 font-medium">Find answers to your questions about SAKO solar products and services.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 uppercase">Frequently Asked Questions</h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-12">
          {sections.map(section => (
            <div key={section.id}>
              <h3 className="text-[12px] font-black uppercase tracking-[0.25em] text-red-600 mb-6 border-b border-gray-100 pb-3">{section.title}</h3>
              <div className="space-y-3">
                {section.items.map((item, idx) => {
                  const id = `${section.id}-${idx}`;
                  const isOpen = openId === id;
                  return (
                    <div key={id} className="border border-gray-100 rounded-lg overflow-hidden transition-all">
                      <button 
                        onClick={() => toggle(id)}
                        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? 'bg-red-50' : 'bg-gray-50 hover:bg-gray-100'}`}
                      >
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-900">{item.q}</span>
                        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'} text-[10px] text-red-600`}></i>
                      </button>
                      {isOpen && (
                        <div className="p-8 bg-white border-t border-gray-50 animate-fade-in">
                          <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Any question CTA */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Any question?</h2>
          <p className="text-gray-500 font-medium mt-4">If we still haven't answered your question, contact us below.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
             <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 group hover:-translate-y-2 transition-all">
                <i className="fa-solid fa-headset text-4xl text-red-600 mb-6"></i>
                <h4 className="text-sm font-black uppercase tracking-widest mb-2">Customer Support</h4>
                <p className="text-red-600 font-bold">+86 755 1234 5678</p>
             </div>
             <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 group hover:-translate-y-2 transition-all">
                <i className="fa-solid fa-envelope-open-text text-4xl text-red-600 mb-6"></i>
                <h4 className="text-sm font-black uppercase tracking-widest mb-2">Send a Message</h4>
                <p className="text-red-600 font-bold">sako@sakopower.com</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
