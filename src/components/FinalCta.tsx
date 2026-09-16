import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onOpenSchedule: () => void;
  onOpenDiagnostic: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenSchedule }) => {
  const meetingPoints = [
    'O momento do seu empreendimento e o público-alvo',
    'Qual plano faz mais sentido para a maturidade do projeto',
    'A estrutura necessária para colocar a operação para rodar'
  ];

  return (
    <section id="cta-final" className="py-28 bg-[#f8f9fa] border-t border-neutral-200/80 relative overflow-hidden">
      {/* Subtle orange accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#fe6600]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-white border-2 border-[#fe6600]/30 p-8 sm:p-16 lg:p-20 shadow-2xl text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fe6600]/10 border border-[#fe6600]/30 text-[#fe6600] text-xs sm:text-sm font-black font-heading uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Próximo Passo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 font-heading uppercase tracking-tight leading-tight max-w-4xl mx-auto">
            Vamos conversar sobre o seu lançamento?
          </h2>

          <div className="mt-10 max-w-2xl mx-auto text-left bg-neutral-50 p-8 sm:p-10 rounded-3xl border border-neutral-200/90 shadow-sm">
            <p className="text-base sm:text-lg font-black text-neutral-900 uppercase font-heading mb-6">
              Uma reunião de 45 minutos para entender:
            </p>
            <ul className="space-y-4">
              {meetingPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-base sm:text-lg text-neutral-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#fe6600]/15 text-[#fe6600] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <button
              id="btn-cta-direct-schedule"
              onClick={onOpenSchedule}
              className="px-10 py-5 rounded-full text-xs sm:text-base font-black uppercase tracking-wider text-white bg-[#fe6600] hover:bg-[#ff7b24] shadow-xl shadow-[#fe6600]/30 transition-all cursor-pointer font-heading inline-flex items-center gap-3 transform hover:-translate-y-0.5"
            >
              <span>INICIAR DIAGNÓSTICO & AGENDAR REUNIÃO</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-6 text-sm text-neutral-500 font-medium">
            Planos a partir de R$ 5 mil/mês. Sem compromisso: uma análise técnica e estratégica do seu empreendimento.
          </p>
        </div>
      </div>
    </section>
  );
};
