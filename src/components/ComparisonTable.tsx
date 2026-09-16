import React from 'react';
import { Check, Minus } from 'lucide-react';
import { PlanId } from '../types';

interface ComparisonTableProps {
  onSelectPlanById: (planId: PlanId) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onSelectPlanById }) => {
  const rows = [
    { feature: 'Posicionamento e identidade', branding: true, performance: true, vendaTotal: true },
    { feature: 'Materiais de venda', branding: true, performance: true, vendaTotal: true },
    { feature: 'Landing Page de Alta Conversão', branding: true, performance: true, vendaTotal: true },
    { feature: 'Gestão Profissional Meta + Google', branding: false, performance: true, vendaTotal: true },
    { feature: 'Geração contínua de leads qualificados', branding: false, performance: true, vendaTotal: true },
    { feature: 'Remarketing e reengajamento', branding: false, performance: true, vendaTotal: true },
    { feature: 'Conteúdo recorrente e alinhamento', branding: false, performance: true, vendaTotal: true },
    { feature: 'IA para atendimento imediato 24/7', branding: false, performance: false, vendaTotal: true },
    { feature: 'Qualificação ativa de perfil e renda', branding: false, performance: false, vendaTotal: true },
    { feature: 'Distribuição ágil ao corretor responsável', branding: false, performance: false, vendaTotal: true },
    { feature: 'Dashboard executivo do funil em tempo real', branding: false, performance: false, vendaTotal: true },
    { feature: 'Consultoria mensal com o fundador (Diogo Garcia)', branding: false, performance: false, vendaTotal: true },
  ];

  return (
    <section id="comparativo" className="py-28 bg-[#080808] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#fe6600] px-4 py-1.5 rounded-full bg-[#fe6600]/10 border border-[#fe6600]/30 inline-block mb-5">
            Comparação Rápida
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading uppercase tracking-tight leading-tight">
            Qual nível de operação você precisa?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-400">
            Compare os entregáveis e selecione a modalidade ideal para o estágio do seu empreendimento.
          </p>
        </div>

        {/* Comparison Table Card with ample width and comfortable breathing room */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#111111] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="py-6 px-6 sm:px-8 text-sm sm:text-base font-black text-neutral-300 uppercase font-heading w-2/5">
                    Entregáveis da Operação
                  </th>
                  <th className="py-6 px-4 text-center w-1/5 border-l border-white/[0.06]">
                    <div className="text-base sm:text-lg font-black text-white font-heading uppercase">Performance</div>
                    <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-mono">R$ 5.000/mês</div>
                  </th>
                  <th className="py-6 px-4 text-center w-1/5 bg-[#fe6600]/10 border-x border-[#fe6600]/30">
                    <div className="text-base sm:text-lg font-black text-[#fe6600] font-heading uppercase">Venda Total</div>
                    <div className="text-xs sm:text-sm text-neutral-200 mt-1 font-mono">R$ 7.900/mês</div>
                  </th>
                  <th className="py-6 px-4 text-center w-1/5 border-l border-white/[0.06]">
                    <div className="text-base sm:text-lg font-black text-white font-heading uppercase">Branding</div>
                    <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-mono">R$ 25.000</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-sm sm:text-base">
                {rows.map((item, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4.5 px-6 sm:px-8 text-neutral-200 font-medium">
                      {item.feature}
                    </td>
                    <td className="py-4.5 px-4 text-center border-l border-white/[0.06]">
                      {item.performance ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fe6600]/20 text-[#fe6600]">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <Minus className="w-4 h-4 text-neutral-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4.5 px-4 text-center bg-[#fe6600]/5 border-x border-[#fe6600]/20">
                      {item.vendaTotal ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fe6600] text-white">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <Minus className="w-4 h-4 text-neutral-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4.5 px-4 text-center border-l border-white/[0.06]">
                      {item.branding ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fe6600]/20 text-[#fe6600]">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <Minus className="w-4 h-4 text-neutral-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
