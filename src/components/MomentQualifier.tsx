import React, { useState } from 'react';
import { Layers, Flame, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { PlanId } from '../types';

interface MomentQualifierProps {
  onSelectMoment: (planId: PlanId) => void;
  selectedPlan: PlanId | null;
}

export const MomentQualifier: React.FC<MomentQualifierProps> = ({ onSelectMoment, selectedPlan }) => {
  const [activeCard, setActiveCard] = useState<PlanId | null>(selectedPlan);

  const handleCardClick = (planId: PlanId) => {
    setActiveCard(planId);
    onSelectMoment(planId);
  };

  const cards = [
    {
      id: 'performance' as PlanId,
      number: '01',
      icon: Flame,
      title: '“O empreendimento já está no mercado”',
      description: 'Preciso de demanda ativa, tráfego qualificado e geração contínua de leads para alimentar a equipe comercial.',
      planLabel: 'Acelerar com Performance',
    },
    {
      id: 'venda-total' as PlanId,
      number: '02',
      icon: TrendingUp,
      title: '“Já tenho uma operação comercial”',
      description: 'Quero integrar atendimento imediato com IA, qualificação em tempo real, acompanhamento de funil e consultoria do fundador.',
      planLabel: 'Operação Venda Total',
    },
    {
      id: 'branding' as PlanId,
      number: '03',
      icon: Layers,
      title: '“Estou estruturando o lançamento”',
      description: 'Ainda preciso de posicionamento, identidade, conceito e materiais de venda para apresentar o projeto ao mercado.',
      planLabel: 'Iniciar com Branding',
    }
  ];

  return (
    <section id="momento" className="py-28 bg-[#f8f9fa] border-t border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fe6600]/10 border border-[#fe6600]/30 text-[#fe6600] text-xs sm:text-sm font-bold font-heading uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autoqualificação</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 font-heading uppercase tracking-tight leading-tight">
            Em que momento está o seu empreendimento?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-600">
            Selecione a situação atual para iniciar o diagnóstico e definir o escopo ideal da sua operação.
          </p>
        </div>

        {/* 3 Expansive Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSelected = activeCard === card.id;

            return (
              <div
                key={card.id}
                id={`card-moment-${card.id}`}
                onClick={() => handleCardClick(card.id)}
                className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white border-2 border-[#fe6600] shadow-2xl shadow-[#fe6600]/15 -translate-y-1.5'
                    : 'bg-white border-neutral-200/90 shadow-sm hover:border-[#fe6600]/60 hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200/60 text-[#fe6600] flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs sm:text-sm font-mono font-bold text-neutral-600 tracking-wider">
                      OPÇÃO {card.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900 font-heading uppercase mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-sm sm:text-base font-black text-[#fe6600] uppercase tracking-wider font-heading flex items-center gap-2">
                    {card.planLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-[#fe6600] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 text-neutral-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
