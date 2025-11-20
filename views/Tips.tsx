import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Tips: React.FC = () => {
  const tips = [
    {
      title: "Position du Servo Moteur",
      content: "Il faut garder la tête du robot bien droite avant de l'allumer. Sinon, enlevez la tête du moteur (le petit bras plastique) et re-clipsez-la droite quand le moteur est à sa position initiale (90°).",
      icon: "fa-arrows-alt-v",
      color: "blue"
    },
    {
      title: "Versions Arduino",
      content: "Bien vérifier la version du bootloader sélectionnée dans l'IDE Arduino ou l'éditeur Web. Il y a parfois deux versions (Old Bootloader) pour les Nano, ou des différences pour Leonardo.",
      icon: "fa-code-branch",
      color: "teal"
    },
    {
      title: "Vitesse de Communication",
      content: "La vitesse du port de communication (Baud Rate) doit être impérativement réglée à 9600 bps (bauds) dans votre code Arduino et votre configuration P5.js.",
      icon: "fa-tachometer-alt",
      color: "red"
    },
    {
      title: "Environnement Lumineux",
      content: "L’IA est sensible à la lumière ! L'environnement de l'entraînement doit être le plus proche possible de l'environnement de l'inférence (utilisation réelle). Évitez les ombres changeantes.",
      icon: "fa-lightbulb",
      color: "yellow"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Astuces & Dépannage" 
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
          Revenez à l'étape d'entraînement ! Une IA n'est aussi intelligente que les données qu'on lui donne.
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