import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Lock, Zap } from 'lucide-react';

export const Pricing: React.FC = () => {
  const handleCheckout = () => {
    window.location.href = "https://app.sellpay.com.br/checkout/1769437909764_59vfvfa/1769437909764_vcyzwfo";
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Plan 1 */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-3xl p-8 flex flex-col order-2 md:order-1 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-2 font-space text-white">Plano Básico</h3>
                <p className="text-slate-400 mb-6">Ideal para começar</p>
                
                <div className="mb-6">
                    <div className="flex items-end gap-2">
                        <span className="text-4xl text-white font-bold">R$ 29,90</span>
                    </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3 text-slate-300">
                        <Check className="text-cyan-500 shrink-0 mt-1" size={18} /> 
                        <span>Apenas o curso básico com aulas</span>
                    </li>
                </ul>

                <button 
                    onClick={handleCheckout}
                    className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    COMEÇAR AGORA
                </button>
            </div>

            {/* Plan 2 */}
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-black border-2 border-green-500 rounded-3xl p-2 shadow-[0_0_50px_rgba(34,197,94,0.2)] order-1 md:order-2"
            >
                <div className="bg-slate-900 h-full rounded-2xl p-8 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-green-400 to-cyan-400" />
                    <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                        MAIS VENDIDO
                    </div>
                    
                    <h3 className="text-2xl font-bold font-space text-white mb-2">Plano Completo</h3>
                    <p className="text-slate-400 mb-6">Acesso total ao método</p>

                    <div className="mb-6">
                        <div className="flex items-end gap-2">
                            <span className="text-4xl text-green-500 font-bold">R$ 49,90</span>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-3 text-slate-300">
                            <Check className="text-green-500 shrink-0 mt-1" size={18} /> 
                            <span>Curso completo</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-300">
                            <Check className="text-green-500 shrink-0 mt-1" size={18} /> 
                            <span>Sistemas prontos para copiar</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-300">
                            <Check className="text-green-500 shrink-0 mt-1" size={18} /> 
                            <span>Mentoria ao vivo</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-300">
                            <Check className="text-green-500 shrink-0 mt-1" size={18} /> 
                            <span>Ferramentas gratuitas</span>
                        </li>
                    </ul>

                    <button 
                        onClick={handleCheckout}
                        className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all mb-4 flex items-center justify-center gap-2 cursor-pointer"
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