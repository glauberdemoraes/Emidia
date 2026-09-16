import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      id: '01',
      title: 'Mídia sem estratégia',
      description: 'A campanha gera tráfego, mas não necessariamente demanda qualificada.',
    },
    {
      id: '02',
      title: 'Lead sem qualificação',
      description: 'O contato chega, mas ninguém sabe rapidamente se existe perfil e intenção de compra.',
    },
    {
      id: '03',
      title: 'Comercial sobrecarregado',
      description: 'O corretor perde tempo fazendo triagem em vez de avançar oportunidades.',
    },
    {
      id: '04',
      title: 'Marca sem valor percebido',
      description: 'Quando o empreendimento não comunica seu diferencial, preço e velocidade de venda sofrem.',
    }
  ];

  return (
    <section id="problema" className="py-28 bg-[#080808] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-neutral-300 text-xs sm:text-sm font-semibold font-heading uppercase mb-5">
            <AlertCircle className="w-4 h-4 text-[#fe6600]" />
            <span>Diagnóstico da Operação</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading uppercase tracking-tight leading-tight">
            Onde os lançamentos costumam perder dinheiro?
          </h2>
        </div>

        {/* 4 Cards Grid with generous space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-white/[0.08] hover:border-[#fe6600]/40 transition-all flex flex-col justify-between shadow-2xl"
            >
              <div>
                <span className="text-sm font-mono font-bold text-[#fe6600] uppercase block mb-4">
                  GARGALO {problem.id}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading uppercase mb-4">
                  {problem.title}
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div className="p-10 sm:p-14 rounded-3xl bg-[#121212] border border-[#fe6600]/40 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-4xl font-black text-white font-heading uppercase max-w-3xl mx-auto leading-snug">
            Marketing, mídia e atendimento precisam funcionar como uma única operação.
          </h3>
        </div>
      </div>
    </section>
  );
};
