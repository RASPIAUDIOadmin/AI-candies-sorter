import React from 'react';
import SectionHeader from '../components/SectionHeader';
import motor1 from '../photos/motor1.png';
import motor2 from '../photos/motor2.png';
import motor1and2 from '../photos/motor1and2.png';

const Assembly: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader 
        title="Assemblage du Robot" 
        subtitle="Preparez vos ciseaux, votre scotch et votre Arduino !" 
      />

      <details className="mb-10 flex flex-col items-center justify-center text-center" open>
        <summary className="cursor-pointer text-sm font-semibold text-slate-700 mb-3">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-2 rounded-lg">
            <i className="fas fa-file-pdf"></i> Gabarit a imprimer (PDF)
          </span>
        </summary>
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 max-w-2xl w-full shadow-sm">
          <i className="fas fa-print text-4xl text-orange-500 mb-4"></i>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Gabarit a imprimer</h3>
          <p className="text-slate-600 mb-6">
            Pour construire le corps du robot, imprime le patron sur du papier cartonne (de preference).
          </p>
          <a
            href="https://github.com/RASPIAUDIOadmin/AI-candies-sorter/blob/e2332909b46129247f8d1e8fd5c8ac17c1bb40a5/doc/candy_sorter_cuting_template.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <i className="fas fa-file-pdf text-2xl text-red-400"></i>
            <div className="text-left">
              <div className="font-bold text-lg leading-tight">Telecharger le PDF</div>
              <div className="text-xs text-slate-400 font-normal">Format A4 - Imprimer a 100%</div>
            </div>
            <i className="fas fa-download ml-4"></i>
          </a>
        </div>
      </details>

      <div className="space-y-12">
        {/* Instructions */}
        <details className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100" open>
          <summary className="bg-slate-800 p-4 text-white flex items-center justify-between cursor-pointer">
            <h3 className="text-xl font-bold">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3 text-sm">1</span>
              Assemblage
            </h3>
            <i className="fas fa-tools text-slate-400"></i>
          </summary>
          <div className="p-8">
            <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2"><i className="fas fa-info-circle mr-2"></i>Note sur les Moteurs</h4>
              <p className="text-blue-700 text-sm">
                Ce robot a ete modifie pour avoir <strong>2 moteurs</strong> : un pour distribuer les bonbons et l'autre pour trier (gauche/droite) en fonction de la couleur.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start p-4 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold mr-4">1</div>
                <div>
                  <strong className="block text-slate-800 text-lg">Decoupage</strong>
                  <span className="text-slate-600">Decouper le perimetre des deux figures (lignes pleines).</span>
                </div>
              </li>
              <li className="flex items-start p-4 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold mr-4">2</div>
                <div>
                  <strong className="block text-slate-800 text-lg">Pliage</strong>
                  <span className="text-slate-600">Plier les figures au niveau des pointilles. Utiliser une regle pour des plis nets.</span>
                </div>
              </li>
              <li className="flex items-start p-4 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold mr-4">3</div>
                <div>
                  <strong className="block text-slate-800 text-lg">Assemblage Papier</strong>
                  <span className="text-slate-600">Ajouter le scotch au niveau des lettres correspondantes (A sur A, B sur B...) pour les relier.</span>
                </div>
              </li>
              <li className="flex items-start p-4 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold mr-4">4</div>
                <div>
                  <strong className="block text-slate-800 text-lg">Installation des Moteurs</strong>
                  <span className="text-slate-600 mb-2 block">
                    Place le servo de tri dans la figure au niveau de la <strong>lettre C</strong> et scotche-le. Accroche ensuite le deuxieme moteur sur le tube ou la gouttiere pour faire pivoter la tete du robot. Fixe la tete du mini-robot sur le moteur 1 et, sur le moteur 2, mets la meme tete a l'envers.
                  </span>
                </div>
              </li>
              <li className="flex items-start p-4 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold mr-4">5</div>
                <div className="w-full">
                  <strong className="block text-slate-800 text-lg">Branchement Electrique</strong>
                  <span className="text-slate-600 mb-4 block">
                    Branche les 2 moteurs en respectant les couleurs : <strong>rouge = +</strong>, <strong>noir = GND</strong>, <strong>jaune = signal</strong>. Resume rapide : Moteur 1 (Tri) rouge 5V / noir GND / jaune D9. Moteur 2 rouge 3V3 / noir GND / jaune sur D6.
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Moteur 1 */}
                    <div className="bg-white p-4 rounded-lg border-2 border-yellow-100 shadow-sm">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                        <span className="font-bold text-slate-800">Moteur 1 (Tri)</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">PIN D9</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between bg-red-50 p-2 rounded">
                          <span className="text-red-700 font-medium"><i className="fas fa-bolt mr-2"></i>Rouge</span>
                          <span className="font-bold text-slate-700">3V3</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-100 p-2 rounded">
                          <span className="text-slate-600 font-medium"><i className="fas fa-ground mr-2"></i>Noir</span>
                          <span className="font-bold text-slate-700">GND</span>
                        </div>
                        <div className="flex items-center justify-between bg-yellow-50 p-2 rounded border border-yellow-200">
                          <span className="text-yellow-700 font-medium"><i className="fas fa-wave-square mr-2"></i>Jaune</span>
                          <span className="font-bold text-slate-900">PIN D9</span>
                        </div>
                      </div>
                    </div>

                    {/* Moteur 2 */}
                    <div className="bg-white p-4 rounded-lg border-2 border-blue-100 shadow-sm">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                        <span className="font-bold text-slate-800">Moteur 2 (Distribution)</span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">PIN D6</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between bg-red-50 p-2 rounded">
                          <span className="text-red-700 font-medium"><i className="fas fa-bolt mr-2"></i>Rouge</span>
                          <span className="font-bold text-slate-700">5V</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-100 p-2 rounded">
                          <span className="text-slate-600 font-medium"><i className="fas fa-ground mr-2"></i>Noir</span>
                          <span className="font-bold text-slate-700">GND</span>
                        </div>
                        <div className="flex items-center justify-between bg-blue-50 p-2 rounded border border-blue-200">
                          <span className="text-blue-700 font-medium"><i className="fas fa-wave-square mr-2"></i>Jaune</span>
                          <span className="font-bold text-slate-900">PIN D6</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-slate-100 rounded text-xs text-slate-500 italic">
                    <i className="fas fa-exclamation-triangle mr-1"></i>
                    Si vous manquez de ports 5V ou GND sur l'Arduino, vous pouvez utiliser une breadboard (planche a pain) pour multiplier les connexions.
                  </div>

                  <div className="mt-6">
                    <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <i className="fas fa-plug text-slate-500"></i>
                      Photos branchement moteurs
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { src: motor1, label: 'motor1.png', caption: 'Servo moteur 1 (Tri) - vue detaillee' },
                        { src: motor2, label: 'motor2.png', caption: 'Servo moteur 2 (Distribution) - vue detaillee' },
                        { src: motor1and2, label: 'motor1and2.png', caption: 'Les 2 moteurs branches ensemble' },
                      ].map((item) => (
                        <figure key={item.label} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                          <img src={item.src} alt={item.caption} className="w-full h-40 object-cover" loading="lazy" />
                          <figcaption className="p-3">
                            <p className="text-sm font-semibold text-slate-800">{item.caption}</p>
                            <p className="text-[11px] text-slate-500 font-mono">{item.label}</p>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-start p-4 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold mr-4">6</div>
                <div>
                  <strong className="block text-slate-800 text-lg">Connexion USB</strong>
                  <span className="text-slate-600">Brancher votre carte Arduino avec votre ordinateur via le cable USB.</span>
                </div>
              </li>
              <li className="flex items-start p-4 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold mr-4">7</div>
                <div>
                  <strong className="block text-slate-800 text-lg">Le Tube</strong>
                  <span className="text-slate-600 block">
                    Faire un tube en papier (un peu plus large qu'un Smarties) et l'accrocher a la gouttiere de bonbons. Fixer le 2e moteur dessus, ajouter la tete du mini-robot a l'envers sur ce moteur et, si besoin, coller un petit bout de papier a l'arriere pour empecher les bonbons de tomber quand c'est ferme.
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 text-sm">
              <i className="fas fa-grin-alt mr-2"></i>
              Note avec humour : les yeux mobiles colles sur la tete sont fortement conseilles. Ca ne rend pas le robot plus precis, mais nettement plus cool. :)
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Assembly;
