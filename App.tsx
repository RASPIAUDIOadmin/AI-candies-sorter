import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './views/Introduction';
import Assembly from './views/Assembly';
import Software from './views/Software';
import Training from './views/Training';
import Inference from './views/Inference';
import logoVillette from './photos/logo_villettemakerz.png';
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
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Etape 1</span>
               </div>
               <Introduction />
            </section>
            
            {/* Assembly */}
             <section id={SectionId.ASSEMBLY} className="scroll-mt-24 border-t border-slate-200 pt-16">
                <div className="flex items-center mb-8 justify-center">
                   <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Etape 2</span>
                </div>
                <Assembly />
            </section>
            
            {/* Software */}
             <section id={SectionId.SOFTWARE} className="scroll-mt-24 border-t border-slate-200 pt-16">
                <div className="flex items-center mb-8 justify-center">
                   <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Etape 3</span>
                </div>
                <Software />
            </section>

            {/* Training */}
             <section id={SectionId.TRAINING} className="scroll-mt-24 border-t border-slate-200 pt-16">
                <div className="flex items-center mb-8 justify-center">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Etape 4</span>
                </div>
                <Training />
            </section>

             {/* Inference */}
             <section id={SectionId.INFERENCE} className="scroll-mt-24 border-t border-slate-200 pt-16">
                 <div className="flex items-center mb-8 justify-center">
                   <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Etape 5</span>
                </div>
                <Inference />
            </section>

            <div className="space-y-4 mt-10">
              <div className="mt-4 bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-800">Atelier « Tiny Sorter : Comprendre l'IA » cree par RaspiAudio.com</h4>
                <p className="text-sm text-slate-700">
                  RaspiAudio est une societe francaise qui conçoit des cartes audio et des objets interactifs a base d’ESP32 et de Raspberry Pi.
                </p>
                <p className="text-sm text-slate-700">
                  Elle developpe des kits et ateliers melant electronique, IA et creativite pour les makers, les ecoles et les artistes.
                </p>
                <p className="text-sm text-slate-700">
                  Plus d’informations sur le site : <a className="text-blue-600 hover:underline" href="https://raspiaudio.com/" target="_blank" rel="noreferrer">https://raspiaudio.com</a>
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3 text-center">
                <h4 className="text-base font-bold text-slate-800">Atelier programme a la demande du FabLab VilletteMakerz</h4>
                <p className="text-sm text-slate-700">
                  Realise par <a className="text-blue-600 hover:underline" href="https://raspiaudio.com/" target="_blank" rel="noreferrer">RASPIAUDIO.COM</a> pour le FabLab <a className="text-blue-600 hover:underline" href="https://villettemakerz.com/" target="_blank" rel="noreferrer">VilletteMakerz</a>.
                </p>
                <div className="flex justify-center">
                  <img
                    src={logoVillette}
                    alt="Logo VilletteMakerz"
                    className="h-14 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Atelier IA Tiny Sorter. Inspire par Google Creative Lab.
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
