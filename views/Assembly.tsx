import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Assembly: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Assemblage du Robot" 
        subtitle="Préparez vos ciseaux, votre scotch et votre Arduino !" 
      />

      <div className="space-y-12">
        
        {/* Papercraft */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
          <div className="bg-slate-800 p-4 text-white flex items-center justify-between">
             <h3 className="text-xl font-bold"><span className="bg-blue-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3 text-sm">1</span>Découpage & Pliage</h3>
             <i className="fas fa-cut text-slate-400"></i>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8 items-start">
            <div>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <i className="fas fa-print mt-1 text-blue-500 mr-3"></i>
                        <span>Découper le périmètre des deux figures (Modèles PDF).</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fas fa-copy mt-1 text-blue-500 mr-3"></i>
                        <span>Plier les figures au niveau des pointillés.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fas fa-tape mt-1 text-blue-500 mr-3"></i>
                        <span>Ajouter le scotch au niveau des lettres correspondantes pour relier les parties (A sur A, B sur B...).</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fas fa-scroll mt-1 text-blue-500 mr-3"></i>
                        <span>Fabriquer un tube en papier pour guider les bonbons vers le trieur.</span>
                    </li>
                </ul>
            </div>
            <div className="bg-slate-100 rounded-lg p-4 flex items-center justify-center h-64">
                 {/* Placeholder for PDF instructional image */}
                 <img src="https://picsum.photos/400/300?grayscale" alt="Papercraft assembly" className="object-contain h-full opacity-80 hover:opacity-100 transition-opacity rounded" />
            </div>
          </div>
        </div>

        {/* Electronics */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
           <div className="bg-slate-800 p-4 text-white flex items-center justify-between">
             <h3 className="text-xl font-bold"><span className="bg-blue-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3 text-sm">2</span>Électronique</h3>
             <i className="fas fa-microchip text-slate-400"></i>
          </div>
          <div className="p-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="font-bold text-yellow-800">Modification 2 Moteurs :</p>
                <p className="text-yellow-700 text-sm">Ce robot est modifié pour avoir un moteur de distribution et un moteur de tri.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-lg mb-4 border-b pb-2">Moteur de Tri (Servo)</h4>
                    <ul className="space-y-3 text-sm md:text-base">
                        <li className="flex items-center justify-between bg-slate-50 p-2 rounded border">
                            <span>Fil Rouge</span>
                            <span className="font-mono font-bold text-red-600">5V</span>
                        </li>
                        <li className="flex items-center justify-between bg-slate-50 p-2 rounded border">
                            <span>Fil Noir/Marron</span>
                            <span className="font-mono font-bold text-slate-800">GND (Masse)</span>
                        </li>
                        <li className="flex items-center justify-between bg-slate-50 p-2 rounded border">
                            <span>Fil Jaune/Orange</span>
                            <span className="font-mono font-bold text-blue-600">Pin D9</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-sm text-slate-500 italic">Placer ce moteur au niveau de la lettre C et le fixer avec du scotch.</p>
                </div>
                 <div>
                    <h4 className="font-bold text-lg mb-4 border-b pb-2">Moteur Distributeur</h4>
                    <ul className="space-y-3 text-sm md:text-base">
                        <li className="flex items-center justify-between bg-slate-50 p-2 rounded border">
                            <span>Alimentation</span>
                            <span className="font-mono font-bold text-red-600">5V / GND</span>
                        </li>
                        <li className="flex items-center justify-between bg-slate-50 p-2 rounded border">
                            <span>Signal</span>
                            <span className="font-mono font-bold text-blue-600">Voir P5.js Code</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-sm text-slate-500 italic">Ce moteur permet de faire tomber les bonbons un par un.</p>
                </div>
            </div>
            
            <div className="mt-8 text-center">
                <span className="inline-block bg-slate-100 px-4 py-2 rounded-full text-slate-600 text-sm font-medium">
                    <i className="fas fa-usb mr-2"></i>
                    Connecter la carte Arduino à l'ordinateur via USB
                </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Assembly;