
import React from 'react';

const FloatingActionBar: React.FC = () => {
  const actions = [
    { icon: 'fa-regular fa-comment-dots', label: 'Inquiry' },
    { icon: 'fa-regular fa-envelope', label: 'Email' },
    { icon: 'fa-solid fa-phone', label: 'Phone' },
  ];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-1">
      {actions.map((action, idx) => (
        <div 
          key={idx} 
          className="group relative flex items-center justify-center w-14 h-14 bg-red-600 text-white cursor-pointer hover:bg-gray-900 transition-all duration-300"
        >
          <i className={`${action.icon} text-xl`}></i>
          {/* Tooltip */}
          <div className="absolute right-full mr-2 px-4 py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap rounded">
            {action.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingActionBar;
