import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Gift, Lock, Zap } from 'lucide-react';

export const Pricing: React.FC = () => {
  const handleCheckout = () => {
    window.location.href = "https://app.sellpay.com.br/checkout/1769437909764_59vfvfa/1769437909764_vcyzwfo";
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Bonus Section */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-3xl p-6 md:p-8 flex flex-col justify-center order-2 md:order-1 backdrop-blur-sm">
                <div className="inline-flex items-center gap-2 text-yellow-400 font-bold mb-6">
                    <Gift size={24} />
                    <span>🎁 BÔNUS EXCLUSIVO</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-space">SAAS SECRETOS E VALIDADOS</h3>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-300">
                        <Check className="text-green-500" size={18} /> Sistemas prontos
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <Check className="text-green-500" size={18} /> Já testados
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <Check className="text-green-500" size={18} /> Alguns já gerando lucro
                    </li>
                </ul>
                <div className="mt-auto p-4 bg-yellow-900/20 border border-yellow-600/30 rounded-xl text-yellow-200 text-sm font-bold text-center">
                    👉 Para você copiar, adaptar e vender
                </div>
            </div>

            {/* Main Offer */}
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-black border-2 border-cyan-500 rounded-3xl p-2 shadow-[0_0_50px_rgba(6,182,212,0.2)] order-1 md:order-2"
            >
                <div className="bg-slate-900 h-full rounded-2xl p-8 text-center flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 to-green-400" />
                    
                    <h3 className="text-xl text-slate-400 uppercase tracking-widest mb-2">💰 OFERTA</h3>
                    <h2 className="text-3xl font-bold font-space text-white mb-6">Acesso completo ao Dominando SAAS IA</h2>

                    <div className="my-6">
                        <p className="text-red-500 line-through text-lg">🔥 Valor normal: R$ 597/ano</p>
                        <div className="flex flex-col items-center justify-center gap-2 mt-2">
                            <span className="text-4xl text-green-500 font-bold">⚡ Hoje: R$ 97</span>
                            <span className="text-sm text-slate-400">à vista!</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleCheckout}
                        className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-xl rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all mb-4 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <Zap fill="black" size={20} /> QUERO MEU ACESSO AGORA
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                        <Lock size={12} /> Pagamento 100% Seguro
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 max-w-3xl mx-auto text-center border-t border-slate-800 pt-12">
            <ShieldCheck size={48} className="text-cyan-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">🛡️ GARANTIA</h3>
            <p className="text-slate-400 mb-6">Você tem 7 dias de garantia total, conforme a lei.</p>
            <div className="inline-block text-left bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <p className="text-slate-300">👉 Se achar que não é pra você,</p>
                <p className="text-slate-300">👉 Basta pedir o reembolso.</p>
                <p className="text-slate-300">👉 Sem perguntas.</p>
                <p className="text-white font-bold mt-2 text-center uppercase tracking-widest">O risco é zero.</p>
            </div>
        </div>

      </div>
    </section>
  );
};