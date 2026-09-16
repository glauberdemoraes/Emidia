import React from 'react';
import { Check, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Plan, PlanId } from '../types';
import { PLANS_DATA } from '../data/content';

interface PlansSectionProps {
  selectedPlanId: PlanId | null;
  onSelectPlan: (plan: Plan) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ selectedPlanId, onSelectPlan }) => {
  return (
    <section id="planos" className="py-28 bg-[#f8f9fa] border-t border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fe6600]/10 border border-[#fe6600]/30 text-[#fe6600] text-xs sm:text-sm font-semibold font-heading uppercase tracking-wider mb-5">
            <Sparkles className="w-4 h-4 text-[#fe6600]" />
            <span>Níveis de Operação</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 font-heading uppercase tracking-tight leading-tight">
            Três formas de estruturar seu lançamento.
          </h2>
          <p className="mt-5 text-base sm:text-xl text-neutral-600">
            Escolha o nível de operação que faz sentido para o momento do seu empreendimento.
          </p>
        </div>

        {/* 3 Expansive Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS_DATA.map((plan) => {
            const isHighlighted = plan.highlighted || selectedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-white border-2 border-[#fe6600] shadow-2xl shadow-[#fe6600]/15 lg:-translate-y-2 ring-1 ring-[#fe6600]/20'
                    : 'bg-white border border-neutral-200/90 shadow-sm hover:border-[#fe6600]/50 hover:shadow-xl'
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fe6600] text-white text-xs font-black font-heading px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-[#fe6600]/40 flex items-center gap-2 whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Card Title */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-wide text-neutral-950 font-heading uppercase">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 mb-8 leading-relaxed">
                    {plan.summary}
                  </p>

                  {/* Price Block */}
                  <div className="mb-8 pb-8 border-b border-neutral-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 font-heading tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-base font-bold text-neutral-500">
                        {plan.pricePeriod}
                      </span>
                    </div>

                    {plan.setupFee && (
                      <div className="mt-2 text-sm sm:text-base font-black text-[#fe6600] font-heading uppercase">
                        {plan.setupFee}
                      </div>
                    )}

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-600">
                      <span className="px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200/80 font-medium text-neutral-700">
                        {plan.contractTerm}
                      </span>
                      {plan.mediaBudgetNote && (
                        <span className="text-neutral-500">
                          {plan.mediaBudgetNote}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Inherited Line */}
                  {plan.includesInherited && (
                    <div className="mb-6 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#fe6600] bg-orange-50 px-4 py-2 rounded-xl border border-orange-200/70 w-full">
                      <Sparkles className="w-4 h-4 shrink-0" />
                      <span>{plan.includesInherited}</span>
                    </div>
                  )}

                  {/* Deliverables Checklist with high legibility */}
                  <div className="space-y-4 mb-10">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-neutral-500 font-heading">
                      Inclui:
                    </p>
                    {plan.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-700">
                        <Check className="w-5 h-5 text-[#fe6600] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Exclusions Note & Action Button */}
                <div className="pt-6 border-t border-neutral-100">
                  {plan.exclusionsNote && (
                    <p className="text-xs sm:text-sm text-neutral-500 mb-6 leading-relaxed">
                      {plan.exclusionsNote}
                    </p>
                  )}

                  <button
                    id={`btn-plan-action-${plan.id}`}
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 px-6 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer font-heading ${
                      plan.highlighted
                        ? 'bg-[#fe6600] hover:bg-[#ff7b24] text-white shadow-xl shadow-[#fe6600]/30 transform hover:-translate-y-0.5'
                        : 'bg-neutral-900 hover:bg-black text-white shadow-sm'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
