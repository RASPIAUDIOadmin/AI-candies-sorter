import React from 'react';
import SectionHeader from '../components/SectionHeader';
import inferenceVideo from '../photos/Inference.mp4';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Inference: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Inference" 
        subtitle="Voir le robot prendre des decisions a partir du modele entraine." 
      />

      <details className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200" open>
        <summary className="cursor-pointer text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <i className="fas fa-magic"></i> Voir l'inference en action
        </summary>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-5/12 space-y-2">
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Inference.mp4</span>
            <h3 className="text-xl font-bold text-slate-800">Demonstration locale</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Lecture du tri en temps reel depuis <code className="bg-slate-100 px-1 rounded">photos/Inference.mp4</code>. 
              Le bras bouge selon la classe predite par le modele.
            </p>
          </div>
          <div className="md:flex-1 w-full">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-black aspect-video shadow-sm">
              <video
                src={inferenceVideo}
                className="w-full h-full object-cover"
                controls
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-2">Fichier: photos/Inference.mp4</p>
          </div>
        </div>
      </details>

      <details className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6" open>
        <summary className="cursor-pointer text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <i className="fas fa-code"></i> P5.js (logique d'inference)
        </summary>
        <p className="text-slate-600 mb-4">
          P5.js est le script qui fait le lien entre la webcam (modele Teachable Machine) et l'Arduino pour bouger les moteurs.
          Remplace l'URL du modele par la tienne avant de lancer le sketch.
        </p>
        <a 
          href="https://editor.p5js.org/olivier.ros/sketches/S0Hg4Jlt2" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors font-medium"
        >
          Acceder au code P5.js <FaExternalLinkAlt className="text-xs" />
        </a>
      </details>
    </div>
  );
};

export default Inference;
