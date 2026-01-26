import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Code, DollarSign, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleCheckout = () => {
    window.location.href = "https://app.sellpay.com.br/checkout/1769437909764_59vfvfa/1769437909764_vcyzwfo";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black">
      
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-8 relative"
        >
          {/* Header Image with Overlap */}
          <div className="relative z-0 -mb-24 md:-mb-32 w-full max-w-[500px] pointer-events-none select-none">
             <img 
               src="https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/imagens/ADS%20EVENTO%20TALITA.png" 
               alt="Event Banner" 
               className="w-full h-auto object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>

          <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-space tracking-tight text-white drop-shadow-[0_10px_10px_rgba(0,0,0,1)] [text-shadow:0px_0px_20px_rgba(0,0,0,1),0px_0px_40px_rgba(0,0,0,1),0px_5px_10px_rgba(0,0,0,1)]">
            Crie um SAAS com IA em 1 dia — mesmo sem saber programar.
          </h1>
          
          <p className="relative z-10 text-xl md:text-2xl text-slate-300 font-light border-l-4 border-cyan-500 pl-6 leading-relaxed bg-black/30 backdrop-blur-sm rounded-r-lg py-2">
            construa uma renda recorrente que pode chegar a <span className="text-green-400 font-bold">10k/mês</span> em até 30 dias
          </p>

          <div className="flex flex-col gap-3 border-t border-slate-800 pt-6 relative z-10">
             <div className="flex items-center gap-3 text-slate-300 font-mono text-sm md:text-base">
                <span className="text-cyan-500">👉</span> Sem código. Sem teoria. Sem achismo.
             </div>
             <div className="flex items-center gap-3 text-slate-300 font-mono text-sm md:text-base">
                <span className="text-cyan-500">👉</span> Copie exatamente o que eu faço e aplique.
             </div>
          </div>

          <button 
            onClick={handleCheckout}
            className="group relative w-full md:w-auto px-8 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg rounded-xl transition-all shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer z-20"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Visual Content - Dashboard/Futuristic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-black/80 border border-slate-700 rounded-2xl p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"/>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                        <div className="w-3 h-3 rounded-full bg-green-500"/>
                    </div>
                    <div className="font-mono text-xs text-slate-500">SYSTEM_ACTIVE</div>
                </div>

                {/* Simulated Code/Dashboard */}
                <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded border border-slate-800">
                        <span className="text-purple-400 flex items-center gap-2"><Code size={16}/> Generating Backend...</span>
                        <span className="text-green-500">DONE</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded border border-slate-800">
                        <span className="text-blue-400 flex items-center gap-2"><Cpu size={16}/> AI Integration...</span>
                        <span className="text-green-500">CONNECTED</span>
                    </div>
                    
                    <div className="mt-8 p-6 bg-green-950/20 border border-green-500/30 rounded-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors"></div>
                        <div className="text-slate-400 text-xs uppercase mb-1">Monthly Recurring Revenue</div>
                        <div className="text-4xl font-bold text-green-400 flex items-center gap-2 neon-green-text">
                           R$ 10.000,00 <Zap className="text-yellow-400 fill-yellow-400 animate-pulse" />
                        </div>
                        <div className="mt-2 text-xs text-green-600">+ 100 Active Subs</div>
                    </div>
                </div>

                {/* Floating Tech Icons */}
                <motion.div 
                    animate={{ y: [-10, 10, -10] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 p-3 bg-black border border-cyan-500 text-cyan-500 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                    <Cpu size={24} />
                </motion.div>
                <motion.div 
                    animate={{ y: [10, -10, 10] }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-10 p-3 bg-black border border-green-500 text-green-500 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                    <DollarSign size={24} />
                </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};