import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

export const Instructor: React.FC = () => {
  return (
    <section className="py-24 container mx-auto px-4 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        
        {/* Image Placeholder - Stylized */}
        <div className="w-full md:w-1/3 relative group">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-700 relative shadow-[0_0_30px_rgba(6,182,212,0.15)]">
             <img 
                src="https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/imagens/daniel%20foto%20especialista.png" 
                alt="Daniel Paixão" 
                className="w-full h-full object-cover transition-all duration-500"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
             <div className="absolute bottom-4 left-4">
                 <h3 className="text-2xl font-bold text-white font-space specialist-shadow">Daniel Paixão</h3>
                 <p className="text-cyan-500 font-mono text-sm font-bold specialist-shadow">Especialista em Marketing Digital e IA</p>
             </div>
          </div>
          {/* Decorative Elements behind */}
          <div className="absolute -z-10 top-4 -right-4 w-full h-full border border-cyan-500/30 rounded-2xl" />
        </div>
        
        <div className="w-full md:w-2/3 space-y-8">
           <h2 className="text-4xl font-bold font-space">Quem vai te guiar:</h2>
           
           <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                 <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400"><TrendingUp /></div>
                 <div>
                    <h4 className="font-bold text-white">+ de R$ 20 milhões vendidos online</h4>
                 </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                 <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400"><Award /></div>
                 <div>
                    <h4 className="font-bold text-white">CEO da Clonefy</h4>
                    <p className="text-sm text-slate-400">(hub de ferramentas de IA para WhatsApp com + de 3.000 usuários ativos)</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                 <div className="p-3 bg-green-500/10 rounded-lg text-green-400"><Users /></div>
                 <div>
                    <h4 className="font-bold text-white">Criador da Imersão Marketing & IA</h4>
                    <p className="text-sm text-slate-400">(Curso presencial para empresários)</p>
                 </div>
              </div>
           </div>

           <div className="border-l-4 border-cyan-500 pl-6 text-slate-300 space-y-2">
              <p>Pivotei 100% pra IA após identificar a nova onda e você pode aproveitar ela comigo!.</p>
              <p className="font-bold text-white">👉 Eu não ensino teoria.</p>
              <p className="font-bold text-white">👉 Eu mostro o que eu faço, todos os dias.</p>
           </div>
        </div>
      </div>
    </section>
  );
};