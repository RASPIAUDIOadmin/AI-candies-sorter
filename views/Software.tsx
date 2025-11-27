import React from 'react';
import SectionHeader from '../components/SectionHeader';
import arduinoVideo from '../photos/Arduino.mp4';

const Software: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Programmation Arduino" 
        subtitle="Faisons le lien entre le navigateur web et l'Arduino." 
      />

      <details className="mb-8" open>
        <summary className="cursor-pointer text-sm font-semibold text-slate-700 mb-3 bg-white border border-slate-200 rounded-lg px-3 py-2 inline-flex items-center gap-2 shadow-sm">
          <i className="fas fa-laptop-code text-slate-500"></i> Ouvrir / fermer la programmation Arduino
        </summary>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Arduino Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-teal-500 flex flex-col">
            <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                     <i className="fas fa-microchip text-teal-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">1. Arduino</h3>
            </div>
            <p className="text-slate-600 mb-6 flex-grow">
                Utilisez le compilateur en ligne Arduino pour televerser le code sur votre carte. Cela permet de controler les 2 moteurs.
            </p>
            <div className="bg-slate-50 p-3 rounded border mb-4 text-sm">
                <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                Vitesse du port : <strong>9600 bps</strong>
            </div>
            <a 
                href="https://app.arduino.cc/sketches/b4cb0ba5-a9b4-474d-a899-16bec93c7241?view-mode=preview" 
                target="_blank" 
                rel="noreferrer"
                className="w-full block text-center bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
                Ouvrir le compilateur en ligne Arduino <i className="fas fa-upload ml-2"></i>
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
                C'est le cerveau logiciel ! Ce script fait le lien entre la camera (IA) et l'Arduino.
            </p>
            <div className="bg-slate-50 p-3 rounded border mb-4 text-sm">
                <i className="fas fa-exclamation-circle text-pink-500 mr-2"></i>
                Remplacez l'URL du modele dans le code par la votre !
            </div>
            <a 
                href="https://editor.p5js.org/olivier.ros/sketches/S0Hg4Jlt2" 
                target="_blank" 
                rel="noreferrer"
                className="w-full block text-center bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors font-medium"
            >
                Acceder au code P5.js <i className="fas fa-external-link-alt ml-2"></i>
            </a>
        </div>
      </div>
      </details>

      <details className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8" open>
        <summary className="cursor-pointer text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <i className="fas fa-video"></i> Connexion Arduino en video
        </summary>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-5/12 space-y-2">
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Arduino.mp4</span>
            <h3 className="text-xl font-bold text-slate-800">Connexion Arduino en video</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Apercu du branchement et du code cote carte, charge directement depuis <code className="bg-slate-100 px-1 rounded">photos/Arduino.mp4</code>.
            </p>
          </div>
          <div className="md:flex-1 w-full">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-black aspect-video shadow-sm">
              <video
                src={arduinoVideo}
                className="w-full h-full object-cover"
                controls
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-2">Fichier: photos/Arduino.mp4</p>
          </div>
        </div>
      </details>

      <details className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8" open>
        <summary className="cursor-pointer text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <i className="fas fa-browser"></i> Connecter le mini robot au navigateur
        </summary>
        <h4 className="text-lg font-bold text-slate-800 mb-3">Connecter le mini robot au navigateur</h4>
        <ol className="list-decimal list-inside text-slate-700 space-y-2">
          <li>Brancher l'Arduino en USB et ouvrir le sketch P5.js fourni.</li>
          <li>Remplacer l'URL du modele par celle exportee depuis Teachable Machine.</li>
          <li>Lancer le sketch, autoriser la webcam et verifier que les predictions controlent les moteurs.</li>
        </ol>
      </details>

      <div className="bg-slate-800 text-white p-6 rounded-xl">
         <h4 className="font-bold text-lg mb-2"><i className="fas fa-sync-alt mr-2 animate-spin-slow"></i>Flux de donnees</h4>
         <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-center text-sm">
            <div className="bg-slate-700 px-4 py-2 rounded">Webcam</div>
            <i className="fas fa-arrow-right hidden md:block"></i>
            <i className="fas fa-arrow-down md:hidden"></i>
            <div className="bg-slate-700 px-4 py-2 rounded">Teachable Machine (IA)</div>
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
