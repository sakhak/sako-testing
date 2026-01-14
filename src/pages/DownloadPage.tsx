
import React, { useState } from 'react';

const DownloadPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('manual');

  const downloadData = [
    {
      id: 'manual',
      title: 'User Manual',
      items: [
        'User Manual – SAKO ESS Series',
        'User Manual – E-SUN Series',
        'User Manual – SUNPOLO 3KVA–11KVA Series',
        'User Manual – SUNON IV Series',
        'User Manual – SUNSEE Series',
        'User Manual – SUNON Series',
        'User Manual – SUNON PRO Series',
        'User Manual – SUNON PLUS Series',
        'User Manual – SVP Series',
        'User Manual – SC-M Controller'
      ]
    },
    {
      id: 'software',
      title: 'Software',
      items: [
        'Communication Software',
        'Watch Power Software',
        'WiFi Monitor',
        'NOVATEK',
        'xBMS',
        'BMS TOOL_1',
        'LFP-BT APP'
      ]
    },
    {
      id: 'brochure',
      title: 'Brochure',
      items: [
        'General Brochure',
        'Solar Inverter Catalog',
        'Lithium Ion Batteries Brochure',
        'Solar Panel Datasheet',
        'Solar System Overview'
      ]
    },
    {
      id: 'certificate',
      title: 'Certificate',
      items: [
        'SGS CNAS17020 Quality Certificate',
        'SGS CNAS17025 Testing Certificate',
        'SGS CNAS17065 Product Certificate'
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      items: [
        'LiFePO4 Setup Instructions',
        'How to check the MOSFET',
        'How to check error code 01 (Fan lock)',
        'How to check error code 02 (Over temperature)',
        'How to check error code 03–04 (Battery voltage high/low)',
        'How to check error code 05 (Output short circuited)',
        'How to check error code 51 (Over current)',
        'How to check error code 58 (Output voltage low)'
      ]
    }
  ];

  return (
    <div className="bg-white animate-fade-in">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Solar Farm Golden Hour" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">Download</h1>
        </div>
      </section>

      {/* Download Center */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase">Support Center</h2>
          <p className="text-gray-500 font-medium mt-4">Access our full library of technical resources and documentation.</p>
        </div>

        <div className="space-y-4">
          {downloadData.map((section) => (
            <div key={section.id} className="border border-gray-100 rounded-lg overflow-hidden transition-all shadow-sm">
              <button 
                onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openSection === section.id ? 'bg-red-600 text-white' : 'bg-gray-50 hover:bg-gray-100 text-gray-900'}`}
              >
                <span className="text-sm font-black uppercase tracking-widest">{section.title}</span>
                <i className={`fa-solid ${openSection === section.id ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`}></i>
              </button>
              
              {openSection === section.id && (
                <div className="bg-white divide-y divide-gray-50 animate-fade-in">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center space-x-4">
                         <i className={`fa-solid ${section.id === 'troubleshooting' ? 'fa-wrench' : 'fa-file-pdf'} text-red-600`}></i>
                         <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wide group-hover:text-red-600 transition-colors">{item}</span>
                      </div>
                      <button className="flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded text-[9px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
                        <i className="fa-solid fa-download"></i>
                        <span>Download</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Block */}
      <section className="bg-gray-900 py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-xl font-black uppercase tracking-tight mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-400 text-sm mb-8">Contact our technical support team directly for specialized assistance.</p>
          <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-10 py-4 rounded font-black uppercase text-xs tracking-[0.3em] transition-all">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
