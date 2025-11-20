import React from 'react';

const FlowDiagram: React.FC = () => {
  return (
    <div className="w-full py-8 overflow-x-auto">
      <div className="flex items-center justify-center min-w-[600px]">
        {/* Step 1: Training */}
        <div className="flex flex-col items-center group">
          <div className="w-32 h-32 bg-blue-50 border-4 border-blue-200 rounded-full flex items-center justify-center shadow-lg transform transition group-hover:scale-105 group-hover:border-blue-400">
            <i className="fas fa-images text-4xl text-blue-600"></i>
          </div>
          <h3 className="mt-4 font-bold text-lg text-slate-700">Données (Photos)</h3>
          <p className="text-xs text-center text-slate-500 mt-1 w-32">Exemples de bonbons</p>
        </div>

        <div className="w-16 h-2 bg-slate-200 mx-2 relative">
            <div className="absolute right-0 -top-1 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-slate-200 border-b-[6px] border-b-transparent"></div>
        </div>

        {/* Step 2: Model */}
        <div className="flex flex-col items-center group">
          <div className="w-40 h-40 bg-purple-50 border-4 border-purple-200 rounded-xl flex flex-col items-center justify-center shadow-lg relative transform transition group-hover:scale-105 group-hover:border-purple-400">
             <div className="absolute -top-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Entraînement</div>
            <i className="fas fa-brain text-5xl text-purple-600"></i>
            <span className="mt-2 font-bold text-purple-800">Modèle IA</span>
          </div>
          <h3 className="mt-4 font-bold text-lg text-slate-700">Le Cerveau</h3>
        </div>

        <div className="w-16 h-2 bg-slate-200 mx-2 relative">
            <div className="absolute right-0 -top-1 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-slate-200 border-b-[6px] border-b-transparent"></div>
        </div>

        {/* Step 3: Inference */}
        <div className="flex flex-col items-center group">
          <div className="w-32 h-32 bg-green-50 border-4 border-green-200 rounded-full flex items-center justify-center shadow-lg transform transition group-hover:scale-105 group-hover:border-green-400">
            <i className="fas fa-robot text-4xl text-green-600"></i>
          </div>
          <h3 className="mt-4 font-bold text-lg text-slate-700">Inférence (Action)</h3>
          <p className="text-xs text-center text-slate-500 mt-1 w-32">Trier le bonbon</p>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;