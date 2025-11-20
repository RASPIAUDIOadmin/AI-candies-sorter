import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FlowDiagram from '../components/FlowDiagram';

const Introduction: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Comprendre l'IA" 
        subtitle="Objectif : Comprendre comment fonctionne l’IA grâce à un robot trieur de bonbons." 
      />
      
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Comment ça marche ?</h3>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          L’IA fonctionne grâce à <strong>l'entraînement</strong> qui crée un <strong>modèle</strong>. 
          Ce modèle permet ensuite de faire une <strong>inférence</strong> (prendre une décision ou faire une action).
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
                    Cela donnera une <strong>mauvaise inférence</strong>. À l'évaluation finale, il aura une note médiocre.
                </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 text-lg mb-2"><i className="fas fa-check-circle mr-2"></i>Bon Entraînement</h4>
                <p className="text-slate-700">
                    Si l'entraînement est de bonne qualité, le modèle sera performant sans faute.
                    Cela fera une <strong>inférence parfaite</strong>. L'évaluation sera de très bonne qualité.
                </p>
            </div>
        </div>
      </div>

      <div className="text-center">
        <a href="https://experiments.withgoogle.com/tiny-sorter/view/" target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
            Voir le projet original Google Tiny Sorter <i className="fas fa-external-link-alt ml-2 text-sm"></i>
        </a>
      </div>
    </div>
  );
};

export default Introduction;