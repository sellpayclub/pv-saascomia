import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ShoppingCart, MessageCircle, BarChart2, Smartphone, Calendar } from 'lucide-react';

export const Projects: React.FC = () => {
  const categories = [
    { 
      title: "Gateways de pagamento / checkout", 
      sub: "(como a kiwify e hotmart)", 
      icon: <ShoppingCart className="text-cyan-400" />,
      image: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/imagens/checkout.png"
    },
    { 
      title: "Áreas de membros", 
      sub: "(para cursos)", 
      icon: <Smartphone className="text-purple-400" />,
      image: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/imagens/area%20de%20menbros.png"
    },
    { 
      title: "Automações com IA", 
      sub: "para WhatsApp e Instagram", 
      icon: <MessageCircle className="text-green-400" />,
      image: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/imagens/automocao%20ia.png"
    },
    { 
      title: "Dashboards de métricas", 
      sub: "", 
      icon: <BarChart2 className="text-blue-400" />,
      image: "https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/imagens/dashboard.png"
    },
    { 
      title: "Geradores de conteúdo com IA", 
      sub: "", 
      icon: <Brain className="text-pink-400" />,
      image: null
    },
    { 
      title: "SAAS de agendamento", 
      sub: "", 
      icon: <Calendar className="text-orange-400" />,
      image: null
    },
  ];

  const niches = ["Educação", "Saúde", "Fitness", "Negócios", "Entretenimento"];

  return (
    <section className="py-20 bg-slate-950 container mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 font-space">
          🧠 O QUE VOCÊ VAI CONSEGUIR CRIAR
        </h2>
        <p className="text-slate-400 text-base md:text-lg">Depois de dominar o método, você poderá criar SAAS como:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {categories.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, borderColor: 'rgba(6,182,212,0.5)' }}
            className={`p-6 bg-black/40 border border-slate-800 rounded-xl hover:bg-slate-900/60 transition-all group ${!item.image ? 'md:col-span-1' : ''}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-slate-900 rounded-lg inline-block group-hover:scale-110 transition-transform">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-slate-200">{item.title}</h3>
                {item.sub && <p className="text-sm text-slate-500">{item.sub}</p>}
              </div>
            </div>
            
            {item.image && (
               <div className="mt-4 rounded-lg overflow-hidden border border-slate-700/50 shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 md:h-64 object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
               </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center">
         <h3 className="text-2xl font-bold mb-6">Apps para:</h3>
         <div className="flex flex-wrap justify-center gap-4 mb-10">
            {niches.map((niche, i) => (
                <span key={i} className="px-6 py-2 rounded-full border border-slate-700 bg-slate-900/50 text-slate-300">
                    {niche}
                </span>
            ))}
         </div>
         <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 animate-pulse">
            👉 SAAS B2B, para empresas que pagam todo mês!
         </p>
      </div>
    </section>
  );
};