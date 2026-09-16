import React from 'react';
import { ArrowRight, Sparkles, Building2 } from 'lucide-react';

interface HeroProps {
  onScrollToPlans: () => void;
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToPlans, onOpenDiagnostic }) => {
  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#080808]">
      {/* Background glow and expansive grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#fe6600]/15 rounded-full blur-[160px]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,#000_75%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 3-second immediate identifier pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.12] text-neutral-200 text-xs sm:text-sm font-semibold font-heading uppercase tracking-wider mb-8">
          <Building2 className="w-4 h-4 text-[#fe6600]" />
          <span>Para Incorporadoras e Loteadoras</span>
        </div>

        {/* Headline strictly matching prompt with expansive scale */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-white uppercase font-heading leading-[1.08] max-w-5xl mx-auto">
          Marketing e Vendas para <br className="hidden sm:inline" />
          <span className="text-[#fe6600]">Lançamentos Imobiliários</span>
        </h1>

        {/* Core Subtitle */}
        <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-neutral-100 font-bold max-w-4xl mx-auto font-heading tracking-tight leading-snug">
          Do posicionamento à venda: um sistema completo para colocar seu empreendimento no mercado.
        </p>

        {/* Copy paragraph with spacious readability */}
        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          A Emedia integra <strong className="text-white font-bold">Branding</strong>, <strong className="text-white font-bold">Performance</strong> e <strong className="text-white font-bold">Atendimento</strong> para transformar o lançamento em uma operação estruturada de marketing e vendas.
        </p>

        {/* Experience & Vision */}
        <p className="mt-6 text-base sm:text-lg text-neutral-300 font-medium max-w-2xl mx-auto">
          18 anos de experiência no mercado imobiliário. Visão de quem também estrutura incorporações.
        </p>

        {/* Price point */}
        <div className="mt-8 inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fe6600] animate-pulse" />
          <p className="text-sm sm:text-base text-white font-semibold">
            Planos a partir de <span className="text-[#fe6600] font-black">R$ 5 mil/mês</span>.
          </p>
        </div>

        {/* Primary CTA Block */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <button
            id="btn-hero-plans"
            onClick={onScrollToPlans}
            className="w-full sm:w-auto px-9 py-4 rounded-full font-black text-sm tracking-wider uppercase text-white bg-[#fe6600] hover:bg-[#ff7b24] shadow-xl shadow-[#fe6600]/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group cursor-pointer font-heading"
          >
            <span>Conhecer os Planos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </button>

          <button
            id="btn-hero-diagnostic"
            onClick={onOpenDiagnostic}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase text-neutral-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] hover:border-[#fe6600]/60 transition-all flex items-center justify-center gap-2.5 cursor-pointer font-heading shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#fe6600]" />
            <span>Descobrir Meu Plano</span>
          </button>
        </div>

        {/* Small filter text */}
        <p className="mt-5 text-sm text-neutral-500 font-medium">
          Para incorporadoras e loteadoras.
        </p>
      </div>
    </section>
  );
};
