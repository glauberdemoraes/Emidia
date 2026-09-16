import React, { useState } from 'react';
import { Award, ArrowRight, X } from 'lucide-react';
import { CaseStudy } from '../types';
import { CASES_DATA } from '../data/content';

interface CasesSectionProps {
  onOpenSchedule: (caseName?: string) => void;
}

export const CasesSection: React.FC<CasesSectionProps> = ({ onOpenSchedule }) => {
  const [activeCaseModal, setActiveCaseModal] = useState<CaseStudy | null>(null);

  return (
    <section id="cases" className="py-28 bg-[#f8f9fa] border-t border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fe6600]/10 border border-[#fe6600]/30 text-[#fe6600] text-xs sm:text-sm font-black font-heading uppercase tracking-wider mb-5">
            <Award className="w-4 h-4" />
            <span>Casos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 font-heading uppercase tracking-tight leading-tight">
            Experiência que precisa aparecer <span className="text-[#fe6600]">nos números</span>.
          </h2>
          <p className="mt-5 text-base sm:text-xl text-neutral-600 max-w-3xl leading-relaxed">
            Conheça os resultados estruturados de quem colocou o lançamento no mercado com a operação integrada da Emedia.
          </p>
        </div>

        {/* 2-Column Editorial Grid for Crescer & Parque das Palmeiras */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CASES_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-neutral-200/90 hover:border-[#fe6600]/60 hover:shadow-xl transition-all duration-300 overflow-hidden shadow-sm flex flex-col group"
            >
              {/* Image & Header with Location */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Badge Case Number & Location */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-white bg-[#fe6600] px-3.5 py-1 rounded-full shadow-md">
                    CASE 0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-white bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                    {item.location}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-8 right-8">
                  <span className="text-xs sm:text-sm font-bold text-[#fe6600] uppercase font-heading tracking-wider block mb-1">
                    {item.productType}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-white font-heading uppercase tracking-tight">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Data Table / Metrics on card */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm sm:text-base text-neutral-600 mb-8 leading-relaxed font-normal">
                    {item.tagline}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#f8f9fa] border border-neutral-200/80 mb-8">
                    <div>
                      <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Investimento Mídia</span>
                      <span className="text-base font-black text-neutral-900 font-mono">{item.mediaInvestment}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Leads Gerados</span>
                      <span className="text-base font-black text-neutral-900 font-mono">{item.leads}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">CPL</span>
                      <span className="text-base font-black text-[#fe6600] font-mono">{item.cpl}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Visitas</span>
                      <span className="text-base font-black text-neutral-900 font-mono">{item.visits}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Propostas</span>
                      <span className="text-base font-black text-neutral-900 font-mono">{item.proposals}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Vendas</span>
                      <span className="text-base font-black text-emerald-600 font-mono">{item.sales}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 mb-8">
                    <div>
                      <span className="text-xs text-neutral-500 uppercase font-bold block mb-0.5">VGV Total Liquidado</span>
                      <span className="text-lg font-black text-[#fe6600] font-mono">{item.vgv}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-neutral-800 bg-white border border-neutral-200/80 px-3 py-1.5 rounded-full shadow-sm">
                      {item.vso}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveCaseModal(item)}
                    className="px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-all flex items-center gap-2 cursor-pointer font-heading"
                  >
                    <span>Ver case completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenSchedule(`Case: ${item.name}`)}
                    className="text-xs sm:text-sm font-black text-[#fe6600] hover:text-[#ff7b24] transition-colors cursor-pointer uppercase font-heading flex items-center gap-1.5"
                  >
                    <span>Validar este modelo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 text-center text-sm text-neutral-700 max-w-3xl mx-auto flex items-center justify-center gap-3 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fe6600] shrink-0" />
          <span>Apresentamos dados analíticos detalhados e histórico operacional em nossa reunião de 45 minutos.</span>
        </div>
      </div>

      {/* Modal Detail with Full Audit Metrics */}
      {activeCaseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-neutral-200 shadow-2xl p-6 sm:p-10 overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveCaseModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-black uppercase text-[#fe6600] font-heading">Case Auditado</span>
              <span className="text-neutral-400">•</span>
              <span className="text-xs text-neutral-500">{activeCaseModal.location}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-neutral-950 font-heading uppercase mb-2">
              {activeCaseModal.name}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 mb-8 leading-relaxed">
              {activeCaseModal.tagline} ({activeCaseModal.productType})
            </p>

            {/* Metrics Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#f8f9fa] border border-neutral-200 mb-8">
              <div className="p-2">
                <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Investimento Mídia</span>
                <span className="text-base font-black text-neutral-900 font-mono">{activeCaseModal.mediaInvestment}</span>
              </div>
              <div className="p-2">
                <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Leads Gerados</span>
                <span className="text-base font-black text-neutral-900 font-mono">{activeCaseModal.leads}</span>
              </div>
              <div className="p-2">
                <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">CPL Médio</span>
                <span className="text-base font-black text-[#fe6600] font-mono">{activeCaseModal.cpl}</span>
              </div>
              <div className="p-2">
                <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Visitas</span>
                <span className="text-base font-black text-neutral-900 font-mono">{activeCaseModal.visits}</span>
              </div>
              <div className="p-2">
                <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Propostas</span>
                <span className="text-base font-black text-neutral-900 font-mono">{activeCaseModal.proposals}</span>
              </div>
              <div className="p-2">
                <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Vendas</span>
                <span className="text-base font-black text-emerald-600 font-mono">{activeCaseModal.sales}</span>
              </div>
              <div className="p-2">
                <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Velocidade VSO</span>
                <span className="text-base font-black text-neutral-900 font-mono">{activeCaseModal.vso}</span>
              </div>
              <div className="p-2">
                <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">VGV Liquidado</span>
                <span className="text-base font-black text-[#fe6600] font-mono">{activeCaseModal.vgv}</span>
              </div>
            </div>

            {/* Differential executed */}
            <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200 text-sm sm:text-base text-neutral-800 leading-relaxed mb-8">
              <strong className="text-[#fe6600] font-black uppercase block mb-2 font-heading">Diferencial Executado pela Emedia:</strong>
              {activeCaseModal.highlightResult}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-100">
              <span className="text-sm text-neutral-600">
                Quer aplicar esta estratégia ao seu projeto?
              </span>

              <button
                onClick={() => {
                  const caseName = activeCaseModal.name;
                  setActiveCaseModal(null);
                  onOpenSchedule(caseName);
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#fe6600] hover:bg-[#ff7b24] shadow-lg shadow-[#fe6600]/30 cursor-pointer font-heading"
              >
                Analisar Meu Projeto
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
