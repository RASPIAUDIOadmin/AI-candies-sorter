import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './views/Introduction';
import Assembly from './views/Assembly';
import Training from './views/Training';
import Software from './views/Software';
import Tips from './views/Tips';
import { SectionId } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-24 pb-24">
            {/* Intro */}
            <section id={SectionId.INTRO} className="scroll-mt-24">
               <div className="flex items-center mb-8 justify-center">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Étape 1</span>
               </div>
               <Introduction />
            </section>
            
            {/* Assembly */}
             <section id={SectionId.ASSEMBLY} className="scroll-mt-24 border-t border-slate-200 pt-16">
                <div className="flex items-center mb-8 justify-center">
                   <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Étape 2</span>
                </div>
                <Assembly />
            </section>
            
            {/* Training */}
             <section id={SectionId.TRAINING} className="scroll-mt-24 border-t border-slate-200 pt-16">
                <div className="flex items-center mb-8 justify-center">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Étape 3</span>
                </div>
                <Training />
            </section>

             {/* Software */}
             <section id={SectionId.SOFTWARE} className="scroll-mt-24 border-t border-slate-200 pt-16">
                <div className="flex items-center mb-8 justify-center">
                   <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Étape 4</span>
                </div>
                <Software />
            </section>

             {/* Tips */}
             <section id={SectionId.TIPS} className="scroll-mt-24 border-t border-slate-200 pt-16">
                 <div className="flex items-center mb-8 justify-center">
                   <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Bonus</span>
                </div>
                <Tips />
            </section>
        </div>
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