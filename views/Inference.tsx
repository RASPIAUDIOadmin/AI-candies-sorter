import React from 'react';
import SectionHeader from '../components/SectionHeader';
import inferenceVideo from '../photos/Inference.mp4';

const Inference: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Inference" 
        subtitle="Voir le robot prendre des decisions a partir du modele entraine." 
      />

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-5/12 space-y-2">
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Inference.mp4</span>
            <h3 className="text-xl font-bold text-slate-800">Démonstration locale</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Lecture du tri en temps réel depuis <code className="bg-slate-100 px-1 rounded">photos/Inference.mp4</code>. 
              Le bras bouge selon la classe prédite par le modèle.
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
      </div>
    </div>
  );
};

export default Inference;
