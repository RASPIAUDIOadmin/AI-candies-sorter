import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import FlowDiagram from '../components/FlowDiagram';

const MediaPlaceholder: React.FC<{ type: 'video' | 'image'; filename: string }> = ({ type, filename }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 border-2 border-dashed border-slate-300 text-slate-400 p-4 text-center">
    <i className={`fas ${type === 'video' ? 'fa-video' : 'fa-image'} text-3xl mb-2`}></i>
    <span className="font-bold text-slate-600 text-sm">Fichier manquant</span>
    <code className="bg-slate-200 px-2 py-1 rounded text-xs mt-2 text-slate-700 select-all">{filename}</code>
    <span className="text-[10px] mt-2">Ajoutez votre fichier dans le dossier public</span>
  </div>
);

const Introduction: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  const photoSlots = [
    {
      title: 'Photo 1',
      filename: 'public/photos/photo-1.png',
      description: 'Ajoutez une première vue de votre robot (ex: bras ou capteurs).',
    },
    {
      title: 'Photo 2',
      filename: 'public/photos/photo-2.png',
      description: 'Montrez la face avant ou un détail important du montage.',
    },
    {
      title: 'Photo 3',
      filename: 'public/photos/photo-3.png',
      description: 'Illustrez l’ensemble du robot prêt à trier les bonbons.',
    },
    {
      title: 'Photo 4',
      filename: 'public/photos/photo-4.png',
      description: 'Ajoutez une photo en situation réelle lors d’une démonstration.',
    },
  ];

  const videoId = '4Id9SKHNyLM';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

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
                <iframe
                  className="w-full h-full object-contain bg-black"
                  src={`${youtubeEmbedUrl}?rel=0&modestbranding=1&autoplay=1&loop=1&playlist=${videoId}`}
                  title="Démonstration du robot trieur"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  onError={() => setVideoError(true)}
                />
              </>
            ) : (
              <MediaPlaceholder type="video" filename={youtubeEmbedUrl} />
            )}
          </div>
          <p className="text-center text-slate-500 text-sm italic mt-2">
            Démonstration du robot en action
          </p>
        </div>

        {/* Galerie Photos */}
        <div>
          <h3 className="text-lg font-bold text-slate-700 mb-4 pl-2 border-l-4 border-blue-500">Photos du projet</h3>
          <p className="text-slate-600 text-sm mb-3">
            Pour ajouter vos propres visuels, placez vos images dans <code className="bg-slate-100 px-1 rounded">public/photos</code>
            {' '}avec les noms indiqués ci-dessous. Des cartes placeholders sont affichées tant qu’aucun fichier n’est présent.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photoSlots.map((photo) => (
              <div
                key={photo.filename}
                className="relative group aspect-[3/4] rounded-xl overflow-hidden shadow-sm border border-dashed border-slate-300 bg-white p-4 flex flex-col justify-between"
              >
                <div className="flex-1 flex flex-col items-center justify-center text-center text-slate-500 space-y-2">
                  <i className="fas fa-image text-2xl text-slate-400"></i>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">{photo.title}</p>
                    <p className="text-xs leading-snug">{photo.description}</p>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-slate-500 bg-slate-100 rounded px-2 py-1 font-mono break-words">
                  {photo.filename}
                </div>
                <div className="absolute inset-0 bg-slate-50/0 group-hover:bg-slate-50/70 transition-colors pointer-events-none"></div>
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
