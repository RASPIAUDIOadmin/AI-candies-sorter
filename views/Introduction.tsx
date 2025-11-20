import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import FlowDiagram from '../components/FlowDiagram';

// Helper pour gérer les chemins sur GitHub Pages
const getAssetPath = (filename: string) => {
  const meta = import.meta as any;
  // Fallback si env n'est pas défini (cas de certains environnements de prévisualisation)
  const base = meta.env?.BASE_URL ?? '/AI-candies-sorter/';
  
  // Retire le slash final de base si présent et le slash initial de filename si présent pour éviter les doubles slashs
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanFile = filename.startsWith('/') ? filename.slice(1) : filename;
  return `${cleanBase}/${cleanFile}`;
};

const MediaPlaceholder: React.FC<{ type: 'video' | 'image', filename: string }> = ({ type, filename }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 border-2 border-dashed border-slate-300 text-slate-400 p-4 text-center">
    <i className={`fas ${type === 'video' ? 'fa-video' : 'fa-image'} text-3xl mb-2`}></i>
    <span className="font-bold text-slate-600 text-sm">Fichier manquant</span>
    <code className="bg-slate-200 px-2 py-1 rounded text-xs mt-2 text-slate-700 select-all">public/{filename}</code>
    <span className="text-[10px] mt-2">Ajoutez votre fichier dans le dossier public</span>
  </div>
);

const Introduction: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Comprendre l'IA" 
        subtitle="Objectif : Comprendre comment fonctionne l’IA grâce à un robot trieur de bonbons." 
      />
      
      {/* Section Média : Vidéo et Photos */}
      <div className="mb-12 space-y-8">
        
        {/* Vidéo Principale */}
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-video relative group">
            {!videoError ? (
                <>
                    <div className="absolute top-4 left-4 z-10 pointer-events-none">
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm animate-pulse">
                        <i className="fas fa-circle text-[8px] mr-1 align-middle"></i>
                        DÉMO
                        </span>
                    </div>
                    <video 
                        className="w-full h-full object-contain bg-black" 
                        controls 
                        autoPlay 
                        muted 
                        loop
                        playsInline
                        onError={() => setVideoError(true)}
                    >
                        <source src={getAssetPath('video.mp4')} type="video/mp4" />
                        Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                </>
            ) : (
                <MediaPlaceholder type="video" filename="video.mp4" />
            )}
            </div>
            <p className="text-center text-slate-500 text-sm italic mt-2">
                Démonstration du robot en action
            </p>
        </div>

        {/* Galerie Photos */}
        <div>
            <h3 className="text-lg font-bold text-slate-700 mb-4 pl-2 border-l-4 border-blue-500">Photos du projet</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative group aspect-[3/4] bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200">
                        {!imageErrors[i] ? (
                            <>
                                <img 
                                    src={getAssetPath(`photo${i}.jpg`)} 
                                    alt={`Vue du robot ${i}`} 
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    onError={() => handleImageError(i)}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                            </>
                        ) : (
                            <MediaPlaceholder type="image" filename={`photo${i}.jpg`} />
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Comment ça marche ?</h3>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          L’IA fonctionne grâce à <strong>l'entraînement</strong> qui crée un <strong>modèle</strong>, ce qui permet ensuite de faire une <strong>inférence</strong> (une action).
        </p>
        
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
            <h4 className="font-bold text-slate-700 mb-4 text-center uppercase tracking-wider text-sm">Schéma de fonctionnement</h4>
            <FlowDiagram />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-red-700 text-lg mb-2"><i className="fas fa-times-circle mr-2"></i>Mauvais Entraînement</h4>
                <p className="text-slate-700">
                    Si l'entraînement n’est pas de bonne qualité, cela se sentira sur le modèle qui aura des erreurs.
                    Cela donnera une <strong>mauvaise inférence</strong>. À l'évaluation finale, il aura donc une <strong>note médiocre</strong>.
                </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 text-lg mb-2"><i className="fas fa-check-circle mr-2"></i>Bon Entraînement</h4>
                <p className="text-slate-700">
                    Si l'entraînement est de bonne qualité, cela se sentira sur le modèle avec aucune faute.
                    Cela fera une <strong>inférence parfaite</strong>. L'évaluation sera de <strong>bonne qualité</strong>.
                </p>
            </div>
        </div>
      </div>

      <div className="text-center">
        <a href="https://experiments.withgoogle.com/tiny-sorter/view/" target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
            Inspiré du projet Google Tiny Sorter <i className="fas fa-external-link-alt ml-2 text-sm"></i>
        </a>
      </div>
    </div>
  );
};

export default Introduction;