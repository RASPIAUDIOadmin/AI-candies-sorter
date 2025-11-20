import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Training: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Entraînement du Modèle" 
        subtitle="Apprenons à notre robot à voir les couleurs avec Google Teachable Machine." 
      />

      <div className="grid gap-6">
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between">
            <div>
                <h3 className="text-2xl font-bold mb-2">Teachable Machine</h3>
                <p className="text-blue-100 mb-4">L'outil de Google pour créer des modèles de Machine Learning rapidement.</p>
            </div>
            <a 
                href="https://teachablemachine.withgoogle.com/train/image" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap"
            >
                Ouvrir Teachable Machine <i className="fas fa-external-link-alt ml-2"></i>
            </a>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-xl mb-6 text-slate-800 border-b pb-2">Procédure pas à pas</h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                
                {/* Step 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <i className="fas fa-folder-plus"></i>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Configuration des Classes</div>
                        </div>
                        <div className="text-slate-600 text-sm">
                            Ajoutez une classe pour en avoir 3 au total. Renommez-les exactement ainsi :
                            <ul className="mt-2 space-y-1 font-mono bg-white p-2 rounded border">
                                <li><span className="text-red-500">0</span> : Rien (Sans bonbon)</li>
                                <li><span className="text-blue-500">1</span> : Couleur A (ex: Rouge)</li>
                                <li><span className="text-green-500">2</span> : Couleur B (ex: Jaune)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <i className="fas fa-camera"></i>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Prise de Photos</div>
                        </div>
                        <div className="text-slate-600 text-sm">
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Pour la classe 0 :</strong> Ajouter des photos du fond vide (sans bonbon).</li>
                                <li><strong>Pour les classes 1 et 2 :</strong> Ajouter des bonbons de la couleur correspondante.</li>
                            </ul>
                            <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
                                <i className="fas fa-lightbulb mr-1"></i>
                                <strong>Important :</strong> Pour les classes 1 et 2, changez la position du bonbon pour chaque photo afin que le robot le reconnaisse partout.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Entraînement</div>
                        </div>
                        <div className="text-slate-600 text-sm">
                            Appuyez sur le bouton <strong>"Train Model"</strong>. Patientez pendant l'entraînement.
                        </div>
                    </div>
                </div>
                 {/* Step 4 */}
                 <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Exporter le modèle</div>
                        </div>
                        <div className="text-slate-600 text-sm">
                           Une fois entraîné :
                           <ol className="list-decimal list-inside mt-1 ml-1">
                               <li>Cliquez sur "Export Model"</li>
                               <li>Choisissez l'onglet "Upload" (Cloud)</li>
                               <li>Cliquez sur "Upload my model"</li>
                               <li>Copiez le lien généré (URL)</li>
                           </ol>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Training;