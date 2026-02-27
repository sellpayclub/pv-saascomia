import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const questions = [
  { q: "Preciso saber programar?", a: "Não. Todo o método é baseado em IA." },
  { q: "Funciona para iniciantes?", a: "Sim. Do absoluto zero até o SAAS pronto." },
  { q: "Em quanto tempo consigo criar um SAAS?", a: "Em 1 dia você já consegue ter o sistema criado." },
  { q: "Vou ganhar 10k garantido?", a: "Não existe ganho garantido. Os valores mostrados são possibilidades reais com base no modelo e na aplicação correta." },
  { q: "O acesso é vitalício?", a: "Sim, incluindo as atualizações constantes." }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 container mx-auto px-4 max-w-3xl">
      <div className="flex items-center justify-center gap-3 mb-12">
        <HelpCircle className="text-slate-500" />
        <h2 className="text-2xl md:text-3xl font-bold font-space">❓ FAQ</h2>
      </div>
      
      <div className="space-y-4">
        {questions.map((item, idx) => (
          <div key={idx} className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900/30">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-900/50 transition-colors"
            >
              <span className="font-semibold text-slate-200">{item.q}</span>
              {openIndex === idx ? <Minus className="text-cyan-500" /> : <Plus className="text-slate-500" />}
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 text-slate-400 border-t border-slate-800/50 leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};