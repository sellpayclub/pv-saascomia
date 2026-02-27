import React from 'react';
import { Layers, Clock, Rocket } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Mesh Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
           <h3 className="text-slate-400 uppercase tracking-widest text-xs md:text-sm mb-4">Por isso eu criei o:</h3>
           {/* Futuristic Logo */}
           <h2 className="text-4xl md:text-7xl font-bold font-space mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text italic">Dominando SAAS-IA</span>
           </h2>
           
           <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed mb-6">
             Um curso 100% prático, onde você acompanha todos os dias a criação real de SAAS usando IA — do zero até a venda.
           </p>
           
           <div className="flex flex-col gap-2 text-slate-400 font-mono text-lg mb-8">
              <span>Nada de teoria.</span>
              <span>Nada de aula genérica.</span>
           </div>

           <div className="mt-8 bg-slate-900/50 border border-slate-700 p-6 rounded-xl max-w-2xl mx-auto backdrop-blur-sm">
             <p className="text-lg mb-2">
               👉 Eu crio sistemas ao vivo, valido ideias, escalo, erro, ajusto…
             </p>
             <p className="text-green-400 font-bold text-lg">
               👉 E você copia exatamente o processo.
             </p>
           </div>
           
           <p className="mt-8 text-2xl font-bold text-white">Tudo baseado em IA</p>
           <p className="text-slate-400 mt-2">Ou seja:</p>
        </div>

        {/* The IA Logic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-20">
           {["Não precisa saber programar", "Não precisa ser desenvolvedor", "Não precisa montar equipe"].map((text, i) => (
             <div key={i} className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg text-red-200 flex items-center justify-center gap-2">
               <span className="text-red-500 text-xl font-bold">❌</span> {text}
             </div>
           ))}
        </div>

        {/* How it works steps */}
        <div className="mb-20">
           <div className="flex items-center gap-4 mb-10 justify-center">
             <Layers className="text-cyan-500 w-8 h-8" />
             <h3 className="text-3xl font-bold">⚙️ COMO FUNCIONA O MÉTODO</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border border-cyan-500/30 bg-cyan-950/10 p-8 rounded-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                 <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Clock className="text-cyan-400"/> Em 1 único dia, você consegue:
                 </h4>
                 <ul className="space-y-4">
                    {["Escolher uma ideia de SAAS", "Criar o sistema usando IA", "Estruturar o produto", "Deixar pronto para vender"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-slate-300">
                          <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">{i+1}</div>
                          {item}
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="border border-purple-500/30 bg-purple-950/10 p-8 rounded-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
                 <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Rocket className="text-purple-400"/> E nos dias seguintes, você acompanha:
                 </h4>
                 <ul className="space-y-4">
                    {["Validação", "Precificação", "Primeiras vendas", "Estrutura de recorrência", "Escala"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-slate-300">
                          <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs">{i+1}</div>
                          {item}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
        
        <div className="text-center p-8 border border-green-500/30 bg-green-950/20 rounded-2xl max-w-4xl mx-auto shadow-[0_0_30px_rgba(34,197,94,0.1)]">
           <h3 className="text-2xl font-bold text-green-400 mb-6">👉 O mesmo processo que já me gerou mais de 500k com SAAS.</h3>
           <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
              <img 
                 src="https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/imagens/resultado.png" 
                 alt="Resultado de Vendas" 
                 className="w-full h-auto object-cover"
              />
           </div>
        </div>

      </div>
    </section>
  );
};