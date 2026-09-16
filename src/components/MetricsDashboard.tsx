import React from 'react';
import { BarChart3, TrendingUp, Clock, Target, CheckCircle2, DollarSign } from 'lucide-react';

export const MetricsDashboard: React.FC = () => {
  const metrics = [
    { title: 'Custo por Lead (CPL)', desc: 'Monitoramento contínuo de custo de aquisição em Meta Ads e Google Ads.', icon: DollarSign },
    { title: 'Taxa de Qualificação', desc: 'Percentual de contatos com capacidade financeira e momento de compra.', icon: Target },
    { title: 'Tempo de Resposta', desc: 'Velocidade de contato do primeiro atendimento para reter o lead aquecido.', icon: Clock },
    { title: 'Conversão em Visitas', desc: 'Volume de leads que avançam para apresentação e visita ao estande.', icon: CheckCircle2 },
    { title: 'Velocidade de Vendas', desc: 'Ritmo de comercialização das unidades em relação ao cronograma de obra.', icon: TrendingUp },
    { title: 'VGV Comercializado', desc: 'Valor Geral de Vendas convertido a partir das oportunidades geradas.', icon: BarChart3 },
  ];

  return (
    <section id="metricas" className="py-28 bg-[#080808] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#fe6600] px-4 py-1.5 rounded-full bg-[#fe6600]/10 border border-[#fe6600]/30 inline-block mb-5">
            Gestão por Indicadores
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading uppercase tracking-tight leading-tight">
            Métricas que acompanhamos de perto.
          </h2>
          <p className="mt-5 text-base sm:text-xl text-neutral-300">
            Decisões baseadas em números reais do funil comercial, não em suposições.
          </p>
        </div>

        {/* 6 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.title}
                className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-white/[0.08] hover:border-[#fe6600]/50 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] text-[#fe6600] flex items-center justify-center border border-white/[0.06]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-mono font-bold text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading uppercase mb-3">
                    {metric.title}
                  </h3>
                  <p className="text-base text-neutral-300 leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Preview Banner */}
        <div className="rounded-3xl bg-[#121212] border border-white/[0.08] p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div>
              <span className="text-xs sm:text-sm font-mono font-bold text-[#fe6600] uppercase tracking-wider block mb-2">
                Visão Executiva em Tempo Real
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase">
                Dashboard de Acompanhamento do Lançamento
              </h3>
            </div>
            <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold font-mono uppercase tracking-wider">
              Disponível no Plano Venda Total
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="p-6 rounded-2xl bg-[#181818] border border-white/[0.04]">
              <span className="text-xs sm:text-sm text-neutral-400 uppercase font-bold block mb-1">Taxa de Resposta</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">&lt; 2 min</span>
              <span className="text-xs sm:text-sm text-emerald-400 block mt-1">24/7 com IA</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#181818] border border-white/[0.04]">
              <span className="text-xs sm:text-sm text-neutral-400 uppercase font-bold block mb-1">Qualificação Média</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">68%</span>
              <span className="text-xs sm:text-sm text-emerald-400 block mt-1">Perfil confirmado</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#181818] border border-white/[0.04]">
              <span className="text-xs sm:text-sm text-neutral-400 uppercase font-bold block mb-1">Visitas Agendadas</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">+140</span>
              <span className="text-xs sm:text-sm text-neutral-300 block mt-1">No plantão</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#181818] border border-white/[0.04]">
              <span className="text-xs sm:text-sm text-neutral-400 uppercase font-bold block mb-1">Acompanhamento</span>
              <span className="text-2xl sm:text-3xl font-black text-[#fe6600] font-mono">Mensal</span>
              <span className="text-xs sm:text-sm text-neutral-300 block mt-1">Com o fundador</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
