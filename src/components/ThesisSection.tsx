import React from 'react';
import { Sparkles, BarChart3, Bot } from 'lucide-react';

export const ThesisSection: React.FC = () => {
  const pillars = [
    {
      name: 'BRANDING',
      subtitle: 'Construa valor antes de vender.',
      description: 'Posicionamento, identidade, conceito criativo e materiais que apresentam o empreendimento da forma certa ao mercado.',
      icon: Sparkles,
      tag: '01',
    },
    {
      name: 'PERFORMANCE',
      subtitle: 'Coloque demanda no funil.',
      description: 'Planejamento, Meta Ads, Google Ads, geração contínua de leads, remarketing e acompanhamento dos indicadores.',
      icon: BarChart3,
      tag: '02',
    },
    {
      name: 'ATENDIMENTO',
      subtitle: 'Não deixe o lead esperando.',
      description: 'IA para realizar o primeiro atendimento, qualificar o perfil e o horizonte de compra e distribuir a oportunidade ao corretor.',
      icon: Bot,
      tag: '03',
    }
  ];

  return (
    <section id="tese" className="py-28 bg-[#080808] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Thesis Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#fe6600] px-4 py-2 rounded-full bg-[#fe6600]/10 border border-[#fe6600]/30 inline-block mb-6 font-heading">
            A Tese da Emedia
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading uppercase tracking-tight leading-[1.15]">
            Um lançamento imobiliário não depende apenas de publicidade.
          </h2>

          <div className="mt-8 space-y-4 text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            <p className="border-b border-white/[0.06] pb-3">Antes de gerar leads, é preciso construir valor percebido.</p>
            <p className="border-b border-white/[0.06] pb-3">Depois, é preciso gerar demanda qualificada.</p>
            <p>E quando os leads chegam, é preciso atender, qualificar e encaminhar cada oportunidade para o comercial.</p>
          </div>

          <p className="mt-10 text-sm sm:text-base font-bold uppercase tracking-wider text-[#fe6600] font-heading">
            Por isso, a Emedia trabalha em três pilares integrados:
          </p>
        </div>

        {/* 3 Pillars Expansive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.name}
                className="rounded-3xl bg-[#111111] border border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between hover:border-[#fe6600]/60 transition-all duration-300 group shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs sm:text-sm font-mono font-bold text-neutral-400 uppercase tracking-widest">
                      PILAR {pillar.tag}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#fe6600] flex items-center justify-center group-hover:bg-[#fe6600] group-hover:text-white transition-all shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase tracking-tight mb-2">
                    {pillar.name}
                  </h3>
                  <h4 className="text-sm sm:text-base font-bold text-[#fe6600] uppercase font-heading mb-5">
                    {pillar.subtitle}
                  </h4>
                  <p className="text-base text-neutral-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-neutral-500 font-medium">Operação</span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-200 uppercase tracking-wider font-heading">
                    Emedia Integrada
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
