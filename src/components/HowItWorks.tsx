import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico',
      desc: 'Entendemos o momento do empreendimento, o público, o produto e os objetivos comerciais da incorporadora ou loteadora.'
    },
    {
      num: '02',
      title: 'Escolha do Plano',
      desc: 'Definimos o escopo mais adequado (Branding, Performance ou Venda Total) para a maturidade e velocidade desejadas.'
    },
    {
      num: '03',
      title: 'Estruturação',
      desc: 'Construção ou alinhamento do conceito, criação de páginas de alta conversão, enxoval de peças e configuração dos anúncios.'
    },
    {
      num: '04',
      title: 'Go-to-Market',
      desc: 'Campanhas ativas no Meta Ads e Google Ads, esteira de captação e ativação da Inteligência Artificial para atendimento.'
    },
    {
      num: '05',
      title: 'Operação Comercial',
      desc: 'Leads qualificados distribuídos com histórico para os corretores, garantindo resposta imediata e avanço de propostas.'
    },
    {
      num: '06',
      title: 'Acompanhamento',
      desc: 'Otimização contínua de mídia, análise de indicadores do funil e consultoria mensal com o fundador (plano Venda Total).'
    }
  ];

  return (
    <section id="como-funciona" className="py-28 bg-[#f8f9fa] border-t border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#fe6600] px-4 py-1.5 rounded-full bg-[#fe6600]/10 border border-[#fe6600]/30 inline-block mb-5">
            Processo Transparente
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 font-heading uppercase tracking-tight leading-tight">
            Como funciona na prática.
          </h2>
          <p className="mt-5 text-base sm:text-xl text-neutral-600">
            Passo a passo descomplicado para colocar sua operação para rodar com governança e previsibilidade.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 hover:border-[#fe6600]/60 hover:shadow-xl transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl sm:text-3xl font-mono font-black text-[#fe6600]">
                    {step.num}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-neutral-400 uppercase tracking-widest">
                    ETAPA
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 font-heading uppercase mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
