import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import FlowDiagram from '../components/FlowDiagram';
import photo1 from '../photos/photo-1.jpg';
import photo2 from '../photos/photo-2.jpg';

const MediaPlaceholder: React.FC<{ type: 'video' | 'image'; filename: string }> = ({ type, filename }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 border-2 border-dashed border-slate-300 text-slate-400 p-4 text-center">
    <i className={`fas ${type === 'video' ? 'fa-video' : 'fa-image'} text-3xl mb-2`}></i>
    <span className="font-bold text-slate-600 text-sm">Fichier manquant</span>
    <code className="bg-slate-200 px-2 py-1 rounded text-xs mt-2 text-slate-700 select-all">{filename}</code>
    <span className="text-[10px] mt-2">Ajoutez votre fichier dans photos/</span>
  </div>
);

const Introduction: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  const videoId = '4Id9SKHNyLM';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

  const photoGallery = [
    {
      title: 'Photo 1',
      filename: 'photo-1.jpg',
      description: 'Vue rapprochee du robot en train de trier.',
      src: photo1,
    },
    {
      title: 'Photo 2',
      filename: 'photo-2.jpg',
      description: 'Seconde photo du montage et de la rampe.',
      src: photo2,
    },
    {
      title: 'Photo 3',
      filename: 'photo-3.jpg',
      description: 'Ajoutez une autre vue du robot.',
      src: undefined,
    },
    {
      title: 'Photo 4',
      filename: 'photo-4.jpg',
      description: 'Ajoutez une photo en situation reelle.',
      src: undefined,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader
        title="Comprendre l'IA"
        subtitle="Objectif : Comprendre comment fonctionne l'IA grace a un robot trieur de bonbons."
      />

      <div className="mb-12 space-y-8">
        {/* Video Principale - YouTube conserve */}
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-video relative group">
            {!videoError ? (
              <>
                <div className="absolute top-4 left-4 z-10 pointer-events-none flex items-center gap-2">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm animate-pulse">
                    <i className="fas fa-circle text-[8px] mr-1 align-middle"></i>
                    YouTube
                  </span>
                  <span className="bg-slate-800/80 text-white text-[11px] px-2 py-1 rounded shadow-sm">Lien conserve</span>
                </div>
                <iframe
                  className="w-full h-full object-contain bg-black"
                  src={`${youtubeEmbedUrl}?rel=0&modestbranding=1`}
                  title="Demonstration du robot trieur"
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
            Demonstration du robot en action (YouTube)
          </p>
        </div>

        {/* Galerie Photos */}
        <div>
          <h3 className="text-lg font-bold text-slate-700 mb-4 pl-2 border-l-4 border-blue-500">Photos du projet</h3>
          <p className="text-slate-600 text-sm mb-3">
            Les photos presentes dans <code className="bg-slate-100 px-1 rounded">photos/</code> sont affichees automatiquement.
            Ajoutez d'autres fichiers avec le bon nom pour completer la galerie.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photoGallery.map((photo) => (
              <div
                key={photo.filename}
                className="group rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white flex flex-col"
              >
                <div className="relative aspect-[3/4] bg-slate-100">
                  {photo.src ? (
                    <img
                      src={photo.src}
                      alt={photo.description}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <MediaPlaceholder type="image" filename={`photos/${photo.filename}`} />
                  )}
                </div>
                <div className="p-3 space-y-1">
                  <p className="text-sm font-semibold text-slate-700">{photo.title}</p>
                  <p className="text-xs leading-snug text-slate-600">{photo.description}</p>
                  <div className="text-[11px] text-slate-500 bg-slate-100 rounded px-2 py-1 font-mono inline-block">
                    {photo.filename}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Comment ca marche ?</h3>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          L'IA fonctionne grace a <strong>l'entrainement</strong> qui cree un <strong>modele</strong>, ce qui permet ensuite de faire une <strong>inference</strong> (une action).
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
          <h4 className="font-bold text-slate-700 mb-4 text-center uppercase tracking-wider text-sm">Schema de fonctionnement</h4>
          <FlowDiagram />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-700 text-lg mb-2"><i className="fas fa-times-circle mr-2"></i>Mauvais Entrainement</h4>
            <p className="text-slate-700">
              Si l'entrainement n'est pas de bonne qualite, cela se sentira sur le modele qui aura des erreurs.
              Cela donnera une <strong>mauvaise inference</strong>. A l'evaluation finale, il aura donc une <strong>note mediocre</strong>.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 text-lg mb-2"><i className="fas fa-check-circle mr-2"></i>Bon Entrainement</h4>
            <p className="text-slate-700">
              Si l'entrainement est de bonne qualite, cela se sentira sur le modele avec aucune faute.
              Cela fera une <strong>inference parfaite</strong>. L'evaluation sera de <strong>bonne qualite</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a href="https://experiments.withgoogle.com/tiny-sorter/view/" target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
          Inspire du projet Google Tiny Sorter <i className="fas fa-external-link-alt ml-2 text-sm"></i>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
