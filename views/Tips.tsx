import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Tips: React.FC = () => {
  const tips = [
    {
      title: "Position du servo",
      content: "Garde la tete du robot bien droite avant d'allumer. Sinon, enleve la tete du moteur (le petit bras plastique) et reclipse-la droite quand le moteur est a sa position initiale (90 degres).",
      icon: "fa-arrows-alt-v",
      color: "blue"
    },
    {
      title: "Versions Arduino",
      content: "Verifie le bootloader selectionne dans l'IDE Arduino ou l'editeur Web. Il peut exister deux versions (Old Bootloader) selon les cartes.",
      icon: "fa-code-branch",
      color: "teal"
    },
    {
      title: "Vitesse de communication",
      content: "Le port serie doit rester a 9600 bps dans le code Arduino et ta configuration P5.js.",
      icon: "fa-tachometer-alt",
      color: "red"
    },
    {
      title: "Lumiere stable",
      content: "Aligne l'environnement d'entrainement et d'inference (lumiere, angle de camera) pour eviter les ombres changeantes.",
      icon: "fa-lightbulb",
      color: "yellow"
    },
    {
      title: "Tube de distribution",
      content: "Fais un tube un peu plus large qu'un Smarties pour que les bonbons glissent bien, puis fixe-le a la gouttiere.",
      icon: "fa-scroll",
      color: "orange"
    },
    {
      title: "Anti-chute des bonbons",
      content: "Ajoute un petit bout de papier a la tete retournee du moteur 2 pour bloquer les bonbons quand c'est ferme.",
      icon: "fa-stop",
      color: "slate"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Astuces & Depannage" 
        subtitle="Quelques conseils pour que tout fonctionne parfaitement." 
      />

      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className={`bg-white p-6 rounded-xl shadow-sm border-t-4 border-${tip.color}-500 hover:shadow-md transition-shadow`}>
            <div className="flex items-start mb-4">
              <div className={`bg-${tip.color}-100 p-3 rounded-lg mr-4`}>
                <i className={`fas ${tip.icon} text-${tip.color}-600 text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mt-1">{tip.title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {tip.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-slate-100 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Le robot ne trie pas correctement ?</h3>
        <p className="text-slate-600 mb-6">
          Reviens a l'etape d'entrainement ! Une IA vaut ce que valent les donnees qu'on lui donne.
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-blue-600 font-medium hover:underline"
        >
          Retourner en haut de page
        </button>
      </div>
    </div>
  );
};

export default Tips;
