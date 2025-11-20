import React from 'react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const navItems = [
    { id: SectionId.INTRO, label: '1. Introduction', icon: 'fa-brain' },
    { id: SectionId.ASSEMBLY, label: '2. Assemblage', icon: 'fa-tools' },
    { id: SectionId.TRAINING, label: '3. Entraînement', icon: 'fa-camera' },
    { id: SectionId.SOFTWARE, label: '4. Code & P5.js', icon: 'fa-laptop-code' },
    { id: SectionId.TIPS, label: '5. Astuces', icon: 'fa-lightbulb' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <i className="fas fa-robot text-xl"></i>
            </div>
            <span className="font-bold text-xl text-slate-800 hidden md:block">Tiny Sorter IA</span>
          </div>
          <div className="flex space-x-1 overflow-x-auto no-scrollbar py-2 ml-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                <span className="font-bold text-blue-600/50 hidden sm:inline">{item.label.split('.')[0]}.</span>
                <span>{item.label.split('.')[1]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;