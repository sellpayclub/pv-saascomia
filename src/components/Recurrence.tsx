import React from 'react';
import { RefreshCw, TrendingUp } from 'lucide-react';

export const Recurrence: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500 text-green-500 mb-4 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <RefreshCw size={40} className="animate-spin-slow" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white">
            🔁 O PODER DA RECORRÊNCIA
          </h2>
          <p className="text-lg md:text-xl text-slate-400">Imagine isso 👇</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/80 border border-green-500/30 rounded-2xl p-6 md:p-12 relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <TrendingUp size={80} className="text-green-500 md:w-[120px] md:h-[120px]"/>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl md:text-3xl lg:text-4xl font-mono font-bold text-slate-300 z-10 relative">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-white">100 clientes</span>
                        <span className="text-sm font-normal text-slate-500">pagando</span>
                    </div>
                    <div className="hidden md:block text-slate-500">x</div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-white">R$ 97/mês</span>
                    </div>
                    <span className="text-green-500 rotate-90 md:rotate-0">=</span>
                    <div className="bg-green-900/30 border border-green-500 text-green-400 px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        R$ 9.700 MRR
                    </div>
                </div>

                <div className="mt-12 space-y-4 text-center">
                    <p className="text-lg text-slate-300">
                        No mês seguinte, você não começa do zero..
                    </p>
                    <p className="text-white font-bold text-xl uppercase tracking-wider">
                        Você acumula!
                    </p>
                    <div className="text-green-400 font-mono text-base border-t border-slate-700 pt-6 mt-6">
                        <p>👉 SAAS é o único modelo onde o esforço de hoje paga o mês que vem…</p>
                        <p>E o próximo…</p>
                        <p>E o outro…</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};