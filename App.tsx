import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Introduction from './views/Introduction';
import Assembly from './views/Assembly';
import Training from './views/Training';
import Software from './views/Software';
import Tips from './views/Tips';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.INTRO);

  const renderSection = () => {
    switch (activeSection) {
      case SectionId.INTRO:
        return <Introduction />;
      case SectionId.ASSEMBLY:
        return <Assembly />;
      case SectionId.TRAINING:
        return <Training />;
      case SectionId.SOFTWARE:
        return <Software />;
      case SectionId.TIPS:
        return <Tips />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
        {renderSection()}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Atelier IA Tiny Sorter. Inspiré par Google Creative Lab.
          </div>
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors"><i className="fab fa-github text-xl"></i></a>
            <a href="#" className="hover:text-slate-600 transition-colors"><i className="fas fa-graduation-cap text-xl"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;