import React from 'react';
import { Sparkles, ArrowRight, Quote } from 'lucide-react';

interface FounderSectionProps {
  onOpenSchedule: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenSchedule }) => {
  return (
    <section id="fundador" className="py-28 bg-[#080808] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#111111] border border-white/[0.08] p-8 sm:p-14 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col: Founder Profile & Visual */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative mb-8 group">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-[#fe6600]/60 shadow-2xl relative bg-neutral-900">
                  <img
                    src="https://media.licdn.com/dms/image/v2/C4D03AQGwZ4mgHqSIBQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516632862617?e=1791417600&v=beta&t=szq-5EXsQ1LCKdE_w9I1xgb8lUWr40DIiLRR33wjes0"
                    alt="Diogo Garcia - Fundador da Emedia"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#fe6600] text-white p-3.5 rounded-2xl shadow-xl shadow-[#fe6600]/30 hidden sm:flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fe6600]/15 border border-[#fe6600]/40 text-[#fe6600] text-xs font-black font-heading uppercase tracking-wider mb-2">
                <span>Fundador & Estrategista</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white font-heading uppercase tracking-tight">
                Diogo Garcia
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 mt-1">
                18+ anos no mercado imobiliário e incorporação
              </p>
            </div>

            {/* Right Col: Editorial Pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#fe6600] uppercase tracking-wider mb-4">
                <Quote className="w-4 h-4" />
                <span>Visão de Negócio</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white font-heading uppercase tracking-tight leading-tight mb-8">
                Quem atua na estruturação do negócio entende a dor do incorporador.
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                <p>
                  A maioria das agências olha apenas para métricas de vaidade — curtidas, impressões e cliques. Mas no mercado imobiliário, a métrica real é a velocidade de vendas e a preservação da margem do VGV.
                </p>
                <p>
                  Com quase duas décadas vivenciando o dia a dia de lançamentos, aprovações e comercialização de unidades, construímos a Emedia para ser um braço estratégico do incorporador.
                </p>
                <div className="font-bold text-white border-l-4 border-[#fe6600] pl-4 py-2 bg-white/[0.03] rounded-r-xl">
                  No plano Venda Total, você tem uma sessão executiva mensal diretamente comigo para analisar o funil, precificação, absorção do produto e ritmo comercial.
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenSchedule}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#fe6600] hover:bg-[#ff7b24] shadow-xl shadow-[#fe6600]/30 transition-all cursor-pointer font-heading flex items-center justify-center gap-2"
                >
                  <span>Iniciar Diagnóstico Executivo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs sm:text-sm text-neutral-400">
                  Direcionamento estratégico em poucos passos para o seu lançamento.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
