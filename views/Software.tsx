import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Software: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Code & Connexion" 
        subtitle="Faisons le lien entre le navigateur web et l'Arduino." 
      />

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Arduino Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-teal-500 flex flex-col">
            <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                     <i className="fas fa-microchip text-teal-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">1. Arduino</h3>
            </div>
            <p className="text-slate-600 mb-6 flex-grow">
                Il faut téléverser le code nécessaire dans l'Arduino pour qu'il puisse recevoir les ordres du navigateur.
                Assurez-vous que le Bootloader est le bon.
            </p>
            <div className="bg-slate-50 p-3 rounded border mb-4 text-sm">
                <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                Vitesse du port : <strong>9600 bps</strong>
            </div>
            <a 
                href="https://create.arduino.cc/editor" 
                target="_blank" 
                rel="noreferrer"
                className="w-full block text-center bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
                Ouvrir Arduino Web Editor
            </a>
        </div>

        {/* P5.js Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-pink-500 flex flex-col">
            <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                     <i className="fas fa-code text-pink-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">2. P5.js</h3>
            </div>
            <p className="text-slate-600 mb-6 flex-grow">
                C'est le cerveau logiciel ! Ce script P5.js utilise votre modèle Teachable Machine pour dire à l'Arduino quel moteur bouger.
            </p>
            <div className="bg-slate-50 p-3 rounded border mb-4 text-sm">
                <i className="fas fa-exclamation-circle text-pink-500 mr-2"></i>
                N'oubliez pas de coller votre <strong>Lien Modèle</strong> dans le code P5.js !
            </div>
            <a 
                href="https://editor.p5js.org/olivier.ros/sketches/S0Hg4Jlt2" 
                target="_blank" 
                rel="noreferrer"
                className="w-full block text-center bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors font-medium"
            >
                Ouvrir le Sketch P5.js
            </a>
        </div>
      </div>

      <div className="bg-slate-800 text-white p-6 rounded-xl">
         <h4 className="font-bold text-lg mb-2"><i className="fas fa-sync-alt mr-2 animate-spin-slow"></i>Flux de données</h4>
         <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-center text-sm">
            <div className="bg-slate-700 px-4 py-2 rounded">Webcam</div>
            <i className="fas fa-arrow-right hidden md:block"></i>
            <i className="fas fa-arrow-down md:hidden"></i>
            <div className="bg-slate-700 px-4 py-2 rounded">Teachable Machine (Navigateur)</div>
            <i className="fas fa-arrow-right hidden md:block"></i>
            <i className="fas fa-arrow-down md:hidden"></i>
            <div className="bg-pink-600 px-4 py-2 rounded font-bold">P5.js (Logique)</div>
            <i className="fas fa-arrow-right hidden md:block"></i>
            <i className="fas fa-arrow-down md:hidden"></i>
            <div className="bg-teal-600 px-4 py-2 rounded font-bold">Arduino (Moteurs)</div>
         </div>
      </div>
    </div>
  );
};

export default Software;