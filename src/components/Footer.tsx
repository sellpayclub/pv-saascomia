import React from 'react';

export const Footer: React.FC = () => {
  const handleCheckout = () => {
    window.location.href = "https://app.sellpay.com.br/checkout/1769437909764_59vfvfa/1769437909764_vcyzwfo";
  };

  return (
    <footer className="pt-20 pb-12 border-t border-slate-800 bg-black text-center relative z-10">
      
      {/* Final CTA Section */}
      <div className="container mx-auto px-4 mb-20">
         <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl text-slate-300 mb-8">Você pode:</h3>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                <div className="p-4 bg-red-950/20 border border-red-900/30 rounded-lg text-red-300">
                    ❌ Continuar tentando modelos saturados
                </div>
                <div className="p-4 bg-cyan-950/20 border border-cyan-900/30 rounded-lg text-cyan-300">
                    ❌ Ou entrar cedo na maior onda do digital
                </div>
            </div>

            <p className="text-2xl font-bold text-white mb-8">
               👉 SAAS + IA é o futuro.<br/>
               👉 E agora você tem um atalho.
            </p>

            <button 
                onClick={handleCheckout}
                className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xl rounded-full shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all transform hover:scale-105 cursor-pointer"
            >
                🔥 Clique no botão abaixo e comece hoje.
            </button>
         </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 border-t border-slate-900 pt-8">
        <h3 className="text-xl font-bold font-space mb-4 tracking-tighter">
            DOMINANDO <span className="text-cyan-500 italic">SAAS-IA</span>
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          &copy; {new Date().getFullYear()} Daniel Paixão. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 text-slate-600 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-cyan-500 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-cyan-500 transition-colors">Políticas de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};