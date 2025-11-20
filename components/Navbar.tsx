import React from 'react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: SectionId.INTRO, label: 'Introduction & Théorie', icon: 'fa-brain' },
    { id: SectionId.ASSEMBLY, label: 'Assemblage', icon: 'fa-tools' },
    { id: SectionId.TRAINING, label: 'Entraînement IA', icon: 'fa-camera' },
    { id: SectionId.SOFTWARE, label: 'Code & P5.js', icon: 'fa-laptop-code' },
    { id: SectionId.TIPS, label: 'Astuces', icon: 'fa-lightbulb' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <i className="fas fa-robot text-xl"></i>
            </div>
            <span className="font-bold text-xl text-slate-800 hidden sm:block">Tiny Sorter IA</span>
          </div>
          <div className="flex space-x-1 overflow-x-auto no-scrollbar py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap
                  ${activeSection === item.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                `}
              >
                <i className={`fas ${item.icon}`}></i>
                <span className="hidden md:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;