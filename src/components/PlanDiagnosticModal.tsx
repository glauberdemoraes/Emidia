import React, { useState } from 'react';
import { X, Check, ArrowLeft, Sparkles, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import { DIAGNOSTIC_QUESTIONS } from '../data/content';
import { PlanId } from '../types';

interface PlanDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (recommendedPlan: PlanId, summary: string) => void;
}

const WHATSAPP_PHONE = '553299624648';

function getWhatsappMessage(planId: PlanId): string {
  switch (planId) {
    case 'performance':
      return 'Olá! Respondi o quiz no site da Emedia e o plano recomendado para o meu empreendimento foi o Plano Performance (R$ 5.000/mês). Tenho interesse nesse plano e gostaria de mais informações.';
    case 'venda-total':
      return 'Olá! Respondi o quiz no site da Emedia e o plano recomendado para o meu empreendimento foi o Plano Venda Total (R$ 7.900/mês). Tenho interesse nesse plano e gostaria de mais informações.';
    case 'branding':
      return 'Olá! Respondi o quiz no site da Emedia e o plano recomendado para o meu empreendimento foi o Plano Branding (R$ 25.000). Tenho interesse nesse plano e gostaria de mais informações.';
    default:
      return 'Olá! Respondi o quiz no site da Emedia e gostaria de conversar sobre os planos para o meu lançamento.';
  }
}

export const PlanDiagnosticModal: React.FC<PlanDiagnosticModalProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCalculated, setIsCalculated] = useState(false);
  const [recommendedPlan, setRecommendedPlan] = useState<{
    id: PlanId;
    name: string;
    price: string;
    stageText: string;
    description: string;
    whatsappUrl: string;
    whatsappMessage: string;
  }>({
    id: 'performance',
    name: 'Plano Performance',
    price: 'R$ 5.000/mês',
    stageText: 'geração de demanda e tração comercial',
    description: 'Ideal para colocar campanhas ativas no ar com Meta Ads, Google Ads e gerar volume contínuo de leads qualificados.',
    whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(getWhatsappMessage('performance'))}`,
    whatsappMessage: getWhatsappMessage('performance')
  });

  if (!isOpen) return null;

  const handleSelectOption = (optionIndex: number) => {
    const updated = { ...selectedAnswers, [currentStep]: optionIndex };
    setSelectedAnswers(updated);

    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(updated);
    }
  };

  const calculateResult = (answers: Record<number, number>) => {
    let brandingScore = 0;
    let performanceScore = 0;
    let vendaTotalScore = 0;

    DIAGNOSTIC_QUESTIONS.forEach((q, qIndex) => {
      const selectedOptIdx = answers[qIndex];
      if (selectedOptIdx !== undefined) {
        const weights = q.options[selectedOptIdx].planWeight;
        if (weights) {
          brandingScore += weights.branding || 0;
          performanceScore += weights.performance || 0;
          vendaTotalScore += weights['venda-total'] || 0;
        }
      }
    });

    let bestPlan: PlanId = 'performance';
    let planName = 'Plano Performance';
    let planPrice = 'R$ 5.000/mês';
    let stageText = 'geração de demanda e tração comercial';
    let description = 'Ideal para colocar campanhas ativas no ar com Meta Ads, Google Ads e gerar volume contínuo de leads qualificados.';

    if (brandingScore > performanceScore && brandingScore > vendaTotalScore) {
      bestPlan = 'branding';
      planName = 'Plano Branding';
      planPrice = 'R$ 25.000 pontual';
      stageText = 'estruturação do conceito, identidade e enxoval comercial';
      description = 'Perfeito para projetos em concepção ou aprovação que precisam de posicionamento premium, naming e materiais de venda antes de acelerar a mídia.';
    } else if (vendaTotalScore >= performanceScore) {
      bestPlan = 'venda-total';
      planName = 'Plano Venda Total';
      planPrice = 'R$ 7.900/mês + R$ 3k implantação';
      stageText = 'uma operação integrada de marketing, atendimento com IA e qualificação de leads';
      description = 'A solução mais completa para quem busca velocidade de vendas, com resposta ao lead em menos de 2 minutos, triagem financeira e dashboard em tempo real.';
    }

    const message = getWhatsappMessage(bestPlan);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

    setRecommendedPlan({
      id: bestPlan,
      name: planName,
      price: planPrice,
      stageText,
      description,
      whatsappUrl,
      whatsappMessage: message
    });
    setIsCalculated(true);

    // Automatically trigger redirection to WhatsApp
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Ignore pop-up blocker error and let user click the prominent WhatsApp button
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setIsCalculated(false);
  };

  const handleAdvanceToSchedule = () => {
    const summaryText = `Perfil: ${DIAGNOSTIC_QUESTIONS[0].options[selectedAnswers[0] || 0]?.label} | Estágio: ${DIAGNOSTIC_QUESTIONS[1].options[selectedAnswers[1] || 0]?.label} | Meta: ${DIAGNOSTIC_QUESTIONS[3].options[selectedAnswers[3] || 0]?.label}`;
    onComplete(recommendedPlan.id, summaryText);
  };

  const currentQ = DIAGNOSTIC_QUESTIONS[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#141414] border border-neutral-700 shadow-2xl p-6 sm:p-10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCalculated ? (
          <div>
            {/* Header / Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-400 mb-3 font-mono">
                <span className="font-bold uppercase tracking-wider text-[#fe6600]">DIAGNÓSTICO EXECUTIVO</span>
                <span>Pergunta {currentStep + 1} de {DIAGNOSTIC_QUESTIONS.length}</span>
              </div>
              <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#fe6600] transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Title */}
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase mb-8 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentStep] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-5 rounded-2xl text-left text-sm sm:text-base font-medium transition-all flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-[#1c1c1c] border-[#fe6600] text-white shadow-xl'
                        : 'bg-[#181818] border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-[#202020]'
                    }`}
                  >
                    <span className="leading-relaxed">{option.label}</span>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ml-4 ${
                      isSelected ? 'border-[#fe6600] bg-[#fe6600] text-white' : 'border-neutral-700'
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Navigation */}
            <div className="flex items-center justify-between pt-5 border-t border-neutral-800">
              {currentStep > 0 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs sm:text-sm text-neutral-400 hover:text-white flex items-center gap-1.5 font-bold uppercase font-heading"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar pergunta
                </button>
              ) : <div />}

              <span className="text-xs text-neutral-400 font-medium">
                Leva menos de 1 minuto
              </span>
            </div>
          </div>
        ) : (
          /* Recommendation & Redirection Screen */
          <div className="text-center py-2 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/15 px-4 py-1.5 rounded-full border border-emerald-500/40 inline-block mb-3 font-heading">
              Diagnóstico Concluído
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase mb-2">
              Plano Recomendado para Seu Empreendimento
            </h3>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#181818] border border-neutral-800 text-left my-5">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#222222] border-2 border-[#fe6600]/60 flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs text-neutral-400 uppercase font-black font-heading block mb-1">Resultado do Quiz</span>
                  <span className="text-xl sm:text-2xl font-black text-[#fe6600] font-heading uppercase">
                    {recommendedPlan.name}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-300 font-mono block mt-0.5">
                    {recommendedPlan.price}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#fe6600]/20 flex items-center justify-center text-[#fe6600]">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                Pelo perfil das suas respostas, o foco estratégico imediato é <strong className="text-white">{recommendedPlan.stageText}</strong>.
              </p>

              {/* Message preview to be sent on WhatsApp */}
              <div className="bg-[#121212] border border-neutral-700/80 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                  Mensagem para o WhatsApp (32 9962-4648):
                </span>
                <p className="text-neutral-200 italic">
                  "{recommendedPlan.whatsappMessage}"
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Redirection Action */}
            <div className="flex flex-col gap-3">
              <a
                id="btn-whatsapp-redirect"
                href={recommendedPlan.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4.5 px-6 rounded-full font-black text-xs sm:text-sm tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl shadow-[#25D366]/25 flex items-center justify-center gap-2.5 transition-all font-heading cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Conversar no WhatsApp (32 9962-4648)</span>
              </a>

              <button
                onClick={handleAdvanceToSchedule}
                className="w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-neutral-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-neutral-500 flex items-center justify-center gap-2 transition-all font-heading cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#fe6600]" />
                <span>Ou agendar reunião de 45 min por formulário</span>
              </button>

              <button
                onClick={handleReset}
                className="text-xs text-neutral-400 hover:text-white py-1 font-semibold uppercase font-heading cursor-pointer"
              >
                Refazer diagnóstico
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

