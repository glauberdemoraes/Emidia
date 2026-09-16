import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 bg-[#0d0d0d] border-t border-[#222222] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fe6600]/15 border border-[#fe6600]/40 text-[#fe6600] text-xs sm:text-sm font-black font-heading uppercase tracking-wider mb-5">
            <HelpCircle className="w-4 h-4" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading uppercase tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-5 text-base sm:text-xl text-neutral-300">
            Respostas diretas sobre contratação, prazos, entregáveis e estrutura dos planos.
          </p>
        </div>

        {/* Accordion list with spacious items */}
        <div className="space-y-5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#181818] border-[#fe6600] shadow-2xl'
                    : 'bg-[#141414] border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 px-8 text-left flex items-center justify-between gap-6 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-black text-white font-heading uppercase leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#fe6600] text-white' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-8 pb-8 pt-2 text-base sm:text-lg text-neutral-300 leading-relaxed border-t border-neutral-800 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note */}
        <div className="mt-14 p-8 rounded-3xl bg-[#141414] border border-neutral-800 text-center shadow-xl">
          <p className="text-base sm:text-lg text-neutral-300">
            Ainda tem alguma dúvida específica sobre o seu projeto?
            <span className="text-white font-bold ml-2 font-heading uppercase block sm:inline mt-1 sm:mt-0">
              Validamos tudo em nossa reunião de 45 minutos.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
