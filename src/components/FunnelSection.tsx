import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FunnelSectionProps {
  onOpenSchedule: () => void;
}

export const FunnelSection: React.FC<FunnelSectionProps> = ({ onOpenSchedule }) => {
  const steps = [
    { num: '01', title: 'Chegada do Lead', desc: 'Captura via campanhas de alta intenção' },
    { num: '02', title: 'Atendimento com IA', desc: 'Resposta imediata em menos de 2 minutos' },
    { num: '03', title: 'Triagem e Qualificação', desc: 'Filtro de perfil financeiro e horizonte de compra' },
    { num: '04', title: 'Distribuição ao Corretor', desc: 'Encaminhamento com histórico direto no WhatsApp' },
    { num: '05', title: 'Avanço de Propostas', desc: 'Acompanhamento do pipeline pelo time comercial' },
    { num: '06', title: 'Visita ao Plantão', desc: 'Agendamento e comparecimento no estande de vendas' },
    { num: '07', title: 'Fechamento e Venda', desc: 'Contrato assinado e conversão do VGV' }
  ];

  return (
    <section id="funil" className="py-28 bg-white border-t border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#fe6600] px-4 py-1.5 rounded-full bg-[#fe6600]/10 border border-[#fe6600]/30 inline-block mb-5">
            Do Lead à Venda
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 font-heading uppercase tracking-tight leading-tight">
            Não é só gerar lead. É acompanhar até a venda.
          </h2>
          <p className="mt-5 text-base sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Uma operação comercial eficiente conecta a geração de demanda diretamente ao atendimento, garantindo velocidade e zero perda de oportunidades.
          </p>
        </div>

        {/* 7-Step Responsive Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5 mb-14">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-5 sm:p-6 rounded-2xl bg-[#f8f9fa] border border-neutral-200/90 hover:border-[#fe6600]/60 hover:shadow-md transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#fe6600]">
                    ETAPA {step.num}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-neutral-400 group-hover:text-[#fe6600] transition-colors" />
                  )}
                </div>
                <h3 className="text-sm sm:text-base font-black text-neutral-900 font-heading uppercase mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Connection to Venda Total Plan Card */}
        <div className="rounded-3xl bg-[#f8f9fa] border-2 border-[#fe6600]/30 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase text-[#fe6600] font-heading mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Diferencial Exclusivo</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 font-heading uppercase tracking-tight mb-3">
              É exatamente isso que o plano Venda Total faz.
            </h3>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Integração completa de anúncios, resposta imediata por IA, qualificação comercial e acompanhamento do funil até o fechamento.
            </p>
          </div>

          <button
            onClick={onOpenSchedule}
            className="px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#fe6600] hover:bg-[#ff7b24] shadow-xl shadow-[#fe6600]/30 transition-all cursor-pointer font-heading whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Descobrir Meu Plano</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
