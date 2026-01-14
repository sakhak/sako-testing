
import React, { useState, useEffect } from 'react';

interface CategoryData {
  name: string;
  isOpen: boolean;
  sub: string[];
}

interface Product {
  id: number;
  name: string;
  img: string;
}

// interface SectionData {
//   title: string;
//   items: Product[];
// }

interface ProductsPageProps {
  initialCategory?: string;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ initialCategory = 'Products' }) => {
  // Use "Products" as a sentinel value for the Overview Page
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const isOverview = activeCategory === 'Products' || activeCategory === 'products';

  const [categories, setCategories] = useState<CategoryData[]>([
    {
      name: 'On / Off Grid Solar Inverter',
      isOpen: true,
      sub: ['SUN-G Series', 'SUN-PRO Series', 'Off Grid 1-5KW', 'Off Grid 8-12KW']
    },
    { name: 'Hybrid Solar Inverter', isOpen: false, sub: ['Single Phase Hybrid', 'Three Phase Hybrid', 'High Voltage Hybrid'] },
    { name: 'Lithium Battery', isOpen: false, sub: ['12V Lithium Pack', '24V Lithium Pack', '48V Lithium Pack', 'High Voltage Pack'] },
    { name: 'Small Energy Storage System', isOpen: false, sub: ['All-in-one ESS 5KWH', 'Portable Power Station', 'Home ESS'] },
    { name: 'Mega Energy Storage System', isOpen: false, sub: ['Cabinet ESS', 'Container ESS', 'Commercial Storage'] },
    { name: 'Micro Inverter', isOpen: false, sub: ['300W-800W', '1200W-2000W'] },
    { name: 'Solar Panel', isOpen: false, sub: ['Mono Half-cut Cell', 'Poly Modules', 'N-Type Modules'] },
    { name: 'Solar Charge Controller', isOpen: false, sub: ['PWM Controller', 'MPPT Controller'] },
    { name: 'Uninterruptible Power Supply', isOpen: false, sub: ['Offline UPS', 'Line-interactive UPS', 'Online UPS'] },
  ]);

  useEffect(() => {
    setActiveCategory(initialCategory);
    if (initialCategory !== 'Products' && initialCategory !== 'products') {
      // Auto-expand category in sidebar if a specific one is chosen
      setCategories(prev => prev.map(cat => ({
        ...cat,
        isOpen: cat.name === initialCategory || cat.sub.includes(initialCategory) ? true : cat.isOpen
      })));
    }
  }, [initialCategory]);

  const toggleCategory = (catName: string) => {
    setCategories(prev => prev.map(cat => 
      cat.name === catName ? { ...cat, isOpen: !cat.isOpen } : cat
    ));
  };

  // Helper to generate mock products for a category
  const getMockProducts = (catName: string, count: number = 4): Product[] => {
    const prefix = catName.toLowerCase().includes('battery') ? 'BAT' : 
                   catName.toLowerCase().includes('inverter') ? 'INV' : 
                   catName.toLowerCase().includes('panel') ? 'PAN' : 'SYS';
    
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      name: `SAKO ${catName} ${prefix}-${1000 + i}`,
      img: `https://picsum.photos/seed/${catName}-${i}/400/400`
    }));
  };

  // --- OVERVIEW MODE ---
  if (isOverview) {
    return (
      <div className="bg-white animate-fade-in">
        {/* Hero Section */}
        <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1920" 
              className="w-full h-full object-cover" 
              alt="SAKO Banner" 
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-widest">Products</h1>
            <p className="max-w-2xl text-lg text-gray-300 leading-relaxed font-medium">
              SAKO is a professional manufacturer of off-grid solar power systems. 
              We provide clean energy solutions for residential, commercial, and industrial 
              applications with our industry-leading storage and conversion technology.
            </p>
          </div>
        </section>

        {/* Stacked Product Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
          {categories.map((cat, idx) => (
            <div key={idx} className="section-category">
              <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">{cat.name}</h2>
                  <div className="w-12 h-1 bg-red-600"></div>
                </div>
                <button 
                  onClick={() => setActiveCategory(cat.name)}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-red-600 transition-colors flex items-center space-x-2"
                >
                  <span>View More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {getMockProducts(cat.name, 4).map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="aspect-square bg-white border border-gray-50 flex items-center justify-center p-10 mb-5 transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="max-w-full max-h-full object-contain filter grayscale-[0.2] group-hover:grayscale-0 transition-all" 
                      />
                    </div>
                    <h3 className="text-center text-[11px] font-bold text-gray-700 uppercase tracking-wide group-hover:text-red-600 transition-colors px-4 leading-relaxed line-clamp-2 h-8">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- LISTING MODE ---
  const listingProducts = getMockProducts(activeCategory, 12);
  // const parentCategory = categories.find(c => c.name === activeCategory || c.sub.includes(activeCategory))?.name || 'Products';

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-red-600 transition-colors" onClick={() => setActiveCategory('Products')}>Home</a>
            <span>/</span>
            <span className="hover:text-red-600 cursor-pointer" onClick={() => setActiveCategory('Products')}>Products</span>
            <span>/</span>
            <span className="text-gray-900">{activeCategory}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4 flex-shrink-0 space-y-10">
            <div className="border border-gray-100 rounded-sm bg-white shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-900">Categories</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {categories.map((cat) => (
                  <div key={cat.name}>
                    <button 
                      onClick={() => toggleCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-6 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors ${activeCategory === cat.name || cat.sub.includes(activeCategory) ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
                    >
                      <span>{cat.name}</span>
                      <i className={`fa-solid ${cat.isOpen ? 'fa-minus' : 'fa-plus'} text-[8px]`}></i>
                    </button>
                    {cat.isOpen && (
                      <div className="bg-gray-50/30 pb-4">
                        {cat.sub.map((sub) => (
                          <button 
                            key={sub}
                            onClick={() => setActiveCategory(sub)}
                            className={`w-full text-left px-8 py-2.5 text-[10px] font-bold uppercase tracking-wider flex items-center space-x-3 transition-all ${activeCategory === sub ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`}
                          >
                            <div className={`w-1 h-1 rounded-full ${activeCategory === sub ? 'bg-red-600' : 'bg-transparent border border-gray-200'}`}></div>
                            <span>{sub}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sales Card */}
            <div className="bg-white border border-gray-100 rounded-sm p-8 text-center shadow-sm">
              <div className="relative w-20 h-20 mx-auto mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                  alt="Succie" 
                  className="w-full h-full object-cover rounded-full border-2 border-gray-100" 
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-1">Succie Chen</h4>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Sales Manager</p>
              <div className="flex justify-center space-x-3">
                <button className="w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                  <i className="fa-solid fa-comment-dots text-sm"></i>
                </button>
                <button className="w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                  <i className="fa-solid fa-envelope text-sm"></i>
                </button>
              </div>
            </div>
          </aside>

          {/* Listing Grid */}
          <main className="lg:w-3/4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-100 pb-6">
              <div>
                <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-3">{activeCategory}</h1>
                <div className="w-20 h-1.5 bg-red-600"></div>
              </div>
              <div className="mt-6 md:mt-0 flex items-center space-x-10 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                <span>Showing 1–{listingProducts.length} of 24 results</span>
                <div className="flex items-center text-gray-700 cursor-pointer hover:text-red-600">
                  <span>Sort by latest</span>
                  <i className="fa-solid fa-chevron-down ml-2 text-[8px]"></i>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
              {listingProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-square bg-white flex items-center justify-center p-8 mb-4 transition-all group-hover:-translate-y-2">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="max-w-full max-h-full object-contain filter grayscale-[0.2] group-hover:grayscale-0 transition-all" 
                    />
                  </div>
                  <h3 className="text-center text-[10px] font-bold text-gray-700 uppercase tracking-wide group-hover:text-red-600 transition-colors leading-relaxed px-2 line-clamp-2 h-8">
                    {product.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex justify-center space-x-2">
              <button className="w-9 h-9 border border-gray-100 text-gray-400 hover:border-red-600 hover:text-red-600 transition-all">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="w-9 h-9 bg-red-600 text-white font-bold">1</button>
              <button className="w-9 h-9 border border-gray-100 text-gray-500 hover:border-red-600 hover:text-red-600 transition-all">2</button>
              <button className="w-9 h-9 border border-gray-100 text-gray-400 hover:border-red-600 hover:text-red-600 transition-all">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
