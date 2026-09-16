import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  const weDo = [
    'Estratégia completa de posicionamento e lançamento',
    'Criação de identidade, conceito e enxoval comercial',
    'Landing pages com alta taxa de conversão',
    'Gestão de Meta Ads e Google Ads com foco em demanda',
    'Atendimento 24/7 com IA e triagem financeira (Venda Total)',
    'Acompanhamento do funil de vendas até o fechamento',
    'Consultoria mensal com o fundador (Venda Total)'
  ];

  const weDontDo = [
    'Não vendemos templates prontos ou soluções genéricas',
    'Não cobramos percentual sobre a verba de mídia',
    'Não retemos a propriedade das contas de anúncios do cliente',
    'Não misturamos verba de mídia com honorários de agência',
    'Não atendemos e-commerce, varejo ou outros setores',
    'Não prometemos resultados sem analisar a viabilidade do produto'
  ];

  return (
    <section id="transparencia" className="py-28 bg-[#f8f9fa] border-t border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold font-heading uppercase tracking-wider mb-5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#fe6600]" />
            <span>Alinhamento de Expectativas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 font-heading uppercase tracking-tight leading-tight">
            Transparência antes de qualquer contrato.
          </h2>
          <p className="mt-5 text-base sm:text-xl text-neutral-600">
            Acreditamos que clareza sobre o escopo é o primeiro passo para uma parceria de longo prazo.
          </p>
        </div>

        {/* 2-Column Transparent Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* O Que Fazemos */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-emerald-500/40 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 font-heading uppercase tracking-tight">
                O que fazemos
              </h3>
            </div>

            <ul className="space-y-4">
              {weDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-base sm:text-lg text-neutral-800 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* O Que Não Fazemos */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-red-300/60 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center">
                <X className="w-5 h-5 stroke-[3]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 font-heading uppercase tracking-tight">
                O que não fazemos
              </h3>
            </div>

            <ul className="space-y-4">
              {weDontDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-base sm:text-lg text-neutral-700">
                  <div className="w-6 h-6 rounded-full bg-red-100/80 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
