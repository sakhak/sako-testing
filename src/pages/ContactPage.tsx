
import React from 'react';

const ContactPage: React.FC = () => {
  const team = [
    { name: 'David Wilson', title: 'Sales Director', region: 'Global / Strategic Accounts', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200' },
    { name: 'Succie Chen', title: 'Sales Manager', region: 'Southeast Asia & Oceania', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
    { name: 'Marco Rossi', title: 'Sales Manager', region: 'Europe & Africa', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
    { name: 'Sarah Ahmed', title: 'Sales Manager', region: 'Middle East', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200' },
    { name: 'Kevin Zhang', title: 'Sales Manager', region: 'North & South America', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200' },
  ];

  return (
    <div className="bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Communication Hero" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">Contact</h1>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Our Team</h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group text-center bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative w-28 h-28 mx-auto mb-6">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg" />
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">{member.name}</h4>
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">{member.title}</p>
              <div className="flex justify-center space-x-1 mb-6 text-red-600 text-[10px]">
                {[...Array(5)].map((_, star) => <i key={star} className="fa-solid fa-star"></i>)}
              </div>
              <div className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 border-t border-gray-100 pt-4">
                Region: {member.region}
              </div>
              <div className="flex justify-center space-x-4">
                <button className="w-9 h-9 bg-white text-gray-400 rounded-full flex items-center justify-center border border-gray-100 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                  <i className="fa-solid fa-envelope"></i>
                </button>
                <button className="w-9 h-9 bg-white text-gray-400 rounded-full flex items-center justify-center border border-gray-100 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                  <i className="fa-solid fa-comment-dots"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Addresses & Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Info */}
            <div className="lg:w-1/2 space-y-12">
              <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm space-y-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">
                    <i className="fa-solid fa-industry"></i>
                  </div>
                  <div>
                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-900">Factory Address</h3>
                    <p className="text-[10px] font-bold text-red-600 mt-1">Dongguan Tedepo New Energy Co., Ltd</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-500 text-sm font-medium">
                  <div className="flex items-start space-x-4">
                    <i className="fa-solid fa-map-location-dot text-red-600 mt-1"></i>
                    <p>No. 3, Industrial Park, Qingxi Town, Dongguan City, Guangdong Province, China</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-phone-volume text-red-600"></i>
                    <p>+86 769 1234 5678</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-at text-red-600"></i>
                    <p>factory@sakopower.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm space-y-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div>
                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-900">Office Address</h3>
                    <p className="text-[10px] font-bold text-red-600 mt-1">Shenzhen SAKO Solar Co., Ltd</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-500 text-sm font-medium">
                  <div className="flex items-start space-x-4">
                    <i className="fa-solid fa-map-location-dot text-red-600 mt-1"></i>
                    <p>Floor 5, Tower A, Tech Plaza, Nanshan District, Shenzhen, China</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-phone-volume text-red-600"></i>
                    <p>+86 755 1234 5678</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-at text-red-600"></i>
                    <p>sales@sakopower.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl">
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-8">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Name *</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-xs font-bold focus:border-red-600 outline-none transition-colors" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Email *</label>
                      <input type="email" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-xs font-bold focus:border-red-600 outline-none transition-colors" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Phone</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-xs font-bold focus:border-red-600 outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Country *</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-xs font-bold focus:border-red-600 outline-none transition-colors" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Your Message *</label>
                    <textarea rows={5} className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-xs font-bold focus:border-red-600 outline-none transition-colors resize-none" required></textarea>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 bg-gray-50 px-6 py-4 rounded-xl border border-gray-100">
                      <input type="checkbox" id="human" className="w-5 h-5 rounded bg-white border-gray-200 text-red-600 focus:ring-red-600" required />
                      <label htmlFor="human" className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 cursor-pointer">I'm a human</label>
                    </div>
                    <button className="bg-red-600 hover:bg-gray-900 text-white px-12 py-5 rounded-xl font-black uppercase text-xs tracking-[0.3em] transition-all shadow-xl">Send Now</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
