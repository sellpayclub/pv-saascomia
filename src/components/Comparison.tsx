import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, AlertTriangle, X, Check } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* The Pain */}
        <div className="text-center mb-12 md:mb-16 space-y-6">
          <h2 className="text-2xl md:text-5xl font-bold font-space leading-tight">
            Você já percebeu que o mercado digital tradicional está cada vez mais difícil?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto mt-8">
             {[
               "Afiliado brigando por comissão baixa",
               "Infoproduto saturado e muitos golpes",
               "Anúncios caros no facebook ads",
               "Promessas vazias e mentirosas",
               "Muito esforço pra pouco resultado!"
             ].map((item, i) => (
                 <div key={i} className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                    <X className="text-red-500 shrink-0 mt-1" size={18} />
                    <span className="text-slate-300 text-sm">{item}</span>
                 </div>
             ))}
          </div>

          <div className="bg-slate-900/80 p-6 rounded-xl border-l-4 border-yellow-500 max-w-3xl mx-auto text-left mt-8">
             <p className="text-slate-300 mb-2">Talvez você já tenha:</p>
             <ul className="list-disc list-inside text-slate-400 space-y-1 mb-4">
                <li>Tentado afiliado</li>
                <li>Tentado infoproduto/ low ticket</li>
                <li>Até feito algumas vendas…</li>
             </ul>
             <p className="text-white font-bold flex items-center gap-2 mb-4">
                <AlertTriangle className="text-yellow-500" size={20}/>
                👉 Mas nunca conseguiu algo estável, previsível e recorrente.
             </p>
             <div className="pt-4 border-t border-slate-700 text-red-400 font-mono text-sm">
                O pior de tudo?<br/>
                👉 Todo mês você volta pra estaca zero.<br/>
                Todo mês é um teste novo etc..<br/>
                Sem vendas = sem dinheiro.
             </div>
          </div>
        </div>

        {/* The Truth */}
        <div className="mt-24">
            <h3 className="text-4xl font-bold text-center mb-4">💣 A VERDADE QUE NINGUÉM TE CONTA</h3>
            <p className="text-center text-slate-400 mb-12">
              O problema não é você.<br/>
              O problema é o <span className="text-white font-bold border-b border-cyan-500">MODELO DE NEGÓCIO</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Infoproduto */}
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="relative p-8 rounded-2xl bg-gradient-to-br from-red-950/40 to-slate-900 border border-red-900/50 backdrop-blur-sm grayscale-[0.3]"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <TrendingDown className="text-red-500 w-8 h-8"/>
                        <h4 className="text-2xl font-bold text-red-500">📉 Infoproduto:</h4>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Precisa lançar o tempo todo",
                            "Receita instável",
                            "Valor percebido baixo com produto LIXO",
                            "Ebook sem qualidade",
                            "Cursos mentirosos",
                            "Alta taxa de reembolso",
                            "Concorrência absurda e clonadores de oferta"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-400">
                                <X className="text-red-500 shrink-0 mt-1" size={16}/>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* SAAS */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <TrendingUp className="text-cyan-400 w-8 h-8"/>
                        <h4 className="text-2xl font-bold text-cyan-400">📈 SAAS:</h4>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Receita recorrente (MRR) $",
                            "Quanto mais clientes, mais cresce",
                            "Valor alto percebido (clientes gostam do produto)",
                            "Empresas pagam todo mês sem questionar",
                            "Muito mais fácil vender e escalar"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-white">
                                <Check className="text-green-400 shrink-0 mt-1" size={16}/>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/20 text-center">
                        <p className="text-cyan-300 font-bold text-lg mb-2">👉 É por isso que as empresas bilionárias são SAAS!</p>
                        <p className="text-sm text-slate-400">Você nunca vai ver uma Empresa de Marketing Digital/ infoproduto Bilionaria!</p>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};