import React from 'react';
import { ArrowRight } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* For Who */}
        <div>
           <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
             <span className="text-cyan-500">👤</span> PRA QUEM É ESSE CURSO
           </h3>
           <ul className="space-y-4">
             {[
               "✅ Para quem quer viver do digital",
               "✅ Para quem está frustrado com afiliado e infoproduto",
               "✅ Para quem quer renda previsível",
               "✅ Para quem não sabe programar",
               "✅ Para quem quer criar algo de verdade"
             ].map((item, i) => (
               <li key={i} className="flex items-start gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
                 <span className="text-slate-300 font-medium">{item}</span>
               </li>
             ))}
           </ul>
        </div>

        {/* Not For Who */}
        <div>
           <ul className="space-y-4 mt-14">
             {[
               "❌ Não é para desenvolvedores avançados",
               "❌ Não é para quem busca dinheiro fácil",
               "❌ Não é para quem não quer aplicar"
             ].map((item, i) => (
               <li key={i} className="flex items-start gap-3 p-3 bg-red-950/10 rounded-lg border border-red-900/20 grayscale">
                 <span className="text-slate-400 font-medium">{item}</span>
               </li>
             ))}
           </ul>
        </div>

      </div>

      {/* Outcome */}
      <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-black border border-slate-700 p-8 rounded-2xl relative">
         <h3 className="text-2xl font-bold mb-6 mt-2">Após o Curso você vai...</h3>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                "Você para de depender de lançamentos",
                "Cria um ativo digital de verdade que tem valor e pode até receber Investimento.",
                "Tem previsibilidade financeira (clientes pagam todos os meses)",
                "Constrói algo escalável de verdade.",
                "Tem previsibilidade (todos os meses você sabe quanto $ vai cair na sua conta)"
            ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                    <ArrowRight className="text-cyan-500 shrink-0 mt-1" size={16} />
                    <span className="text-slate-300 text-sm">{item}</span>
                </div>
            ))}
         </div>

         <div className="mt-8 text-center bg-cyan-900/10 p-4 rounded-xl border border-cyan-500/20">
            <p className="text-lg font-bold text-white">
               👉 Você deixa de “tentar ganhar dinheiro na internet”<br/>
               👉 E passa a construir negócios real.
            </p>
         </div>
      </div>
    </section>
  );
};