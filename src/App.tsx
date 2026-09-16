import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MomentQualifier } from './components/MomentQualifier';
import { ThesisSection } from './components/ThesisSection';
import { AuthoritySection } from './components/AuthoritySection';
import { ProblemSection } from './components/ProblemSection';
import { PlansSection } from './components/PlansSection';
import { ComparisonTable } from './components/ComparisonTable';
import { FunnelSection } from './components/FunnelSection';
import { MetricsDashboard } from './components/MetricsDashboard';
import { CasesSection } from './components/CasesSection';
import { VideoTestimonials } from './components/VideoTestimonials';
import { HowItWorks } from './components/HowItWorks';
import { FounderSection } from './components/FounderSection';
import { TransparencySection } from './components/TransparencySection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PlanDiagnosticModal } from './components/PlanDiagnosticModal';
import { ScheduleModal } from './components/ScheduleModal';
import { PlanId, Plan } from './types';
import { Calendar, Compass } from 'lucide-react';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<PlanId | null>(null);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [scheduleDefaultPlan, setScheduleDefaultPlan] = useState<string>('Reunião de 45 Minutos');
  const [diagnosticNotes, setDiagnosticNotes] = useState<string>('');

  // Trigger quiz first for any schedule intent
  const handleOpenDiagnosticForSchedule = (contextPlan?: string) => {
    if (contextPlan) {
      setScheduleDefaultPlan(contextPlan);
    }
    setIsDiagnosticOpen(true);
  };

  // Scroll to plans section
  const handleScrollToPlans = (planId?: PlanId) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    const plansEl = document.getElementById('planos');
    if (plansEl) {
      plansEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // When a card in Dobra 2 is selected -> open quiz to validate moment
  const handleSelectMoment = (planId: PlanId) => {
    setSelectedPlanId(planId);
    let planName = 'Plano Performance';
    if (planId === 'branding') planName = 'Plano Branding';
    if (planId === 'venda-total') planName = 'Plano Venda Total';
    handleOpenDiagnosticForSchedule(planName);
  };

  // Plan select from Dobra 6 cards -> open quiz first
  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlanId(plan.id);
    handleOpenDiagnosticForSchedule(`Plano ${plan.name} (${plan.price})`);
  };

  // Plan select from Dobra 7 comparison table -> open quiz first
  const handleSelectPlanById = (planId: PlanId) => {
    setSelectedPlanId(planId);
    let planName = 'Plano Performance';
    if (planId === 'branding') planName = 'Plano Branding';
    if (planId === 'venda-total') planName = 'Plano Venda Total';
    handleOpenDiagnosticForSchedule(planName);
  };

  // When 5-step diagnostic completes -> opens the schedule modal with recommendations
  const handleDiagnosticComplete = (recommendedPlanId: PlanId, summary: string) => {
    setIsDiagnosticOpen(false);
    setSelectedPlanId(recommendedPlanId);
    setDiagnosticNotes(summary);
    
    let planLabel = 'Plano Performance (R$ 5k/mês)';
    if (recommendedPlanId === 'branding') planLabel = 'Plano Branding (R$ 25k)';
    if (recommendedPlanId === 'venda-total') planLabel = 'Plano Venda Total (R$ 7.9k/mês + R$ 3k)';
    
    setScheduleDefaultPlan(planLabel);
    setIsScheduleOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans flex flex-col selection:bg-[#fe6600]/40 selection:text-white">
      {/* Top Sticky Header */}
      <Header
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        onOpenSchedule={() => handleOpenDiagnosticForSchedule('Reunião Geral')}
      />

      <main className="flex-grow">
        {/* DOBRA 1: Hero */}
        <Hero
          onScrollToPlans={() => handleScrollToPlans()}
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* DOBRA 2: Qual é o momento do seu empreendimento? */}
        <MomentQualifier
          onSelectMoment={handleSelectMoment}
          selectedPlan={selectedPlanId}
        />

        {/* DOBRA 3: A Tese da Emedia */}
        <ThesisSection />

        {/* DOBRA 4: Prova de Autoridade */}
        <AuthoritySection />

        {/* DOBRA 5: O Problema */}
        <ProblemSection />

        {/* DOBRA 6: Os 3 Planos */}
        <PlansSection
          selectedPlanId={selectedPlanId}
          onSelectPlan={handleSelectPlan}
        />

        {/* DOBRA 7: Comparação Rápida */}
        <ComparisonTable
          onSelectPlanById={handleSelectPlanById}
        />

        {/* DOBRA 8: "Não é só gerar lead" (Do Lead à Venda) */}
        <FunnelSection
          onOpenSchedule={() => handleOpenDiagnosticForSchedule('Plano Venda Total')}
        />

        {/* DOBRA 9: Métricas */}
        <MetricsDashboard />

        {/* DOBRA 10: Cases */}
        <CasesSection
          onOpenSchedule={(caseName) => handleOpenDiagnosticForSchedule(`Case: ${caseName || 'Geral'}`)}
        />

        {/* Depoimentos em Vídeo (Mirante Granbery, Parque das Palmeiras, Portal das Pedras) */}
        <VideoTestimonials
          onOpenSchedule={() => handleOpenDiagnosticForSchedule('Depoimentos em Vídeo')}
        />

        {/* DOBRA 11: Como Funciona */}
        <HowItWorks />

        {/* DOBRA 12: Diferencial do Fundador */}
        <FounderSection
          onOpenSchedule={() => handleOpenDiagnosticForSchedule('Consultoria Mensal com Fundador')}
        />

        {/* DOBRA 13: Transparência */}
        <TransparencySection />

        {/* DOBRA 14: FAQ */}
        <FaqSection />

        {/* DOBRA 15: CTA Final */}
        <FinalCta
          onOpenSchedule={() => handleOpenDiagnosticForSchedule('Reunião Estratégica Final')}
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenSchedule={() => handleOpenDiagnosticForSchedule('Rodapé')}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
      />

      {/* Floating Bottom Quick Bar on Mobile */}
      <div className="fixed bottom-3 inset-x-3 sm:hidden z-40 flex gap-2">
        <button
          onClick={() => setIsDiagnosticOpen(true)}
          className="flex-1 py-4 px-3 rounded-full bg-[#181818]/95 backdrop-blur-md border border-neutral-700 text-xs font-black uppercase text-neutral-200 flex items-center justify-center gap-1.5 shadow-xl font-heading"
        >
          <Compass className="w-4 h-4 text-[#fe6600]" />
          <span>Descobrir Plano</span>
        </button>
        <button
          onClick={() => handleOpenDiagnosticForSchedule('Mobile Bar')}
          className="flex-1 py-4 px-3 rounded-full bg-[#fe6600] text-white text-xs font-black uppercase flex items-center justify-center gap-1.5 shadow-xl shadow-[#fe6600]/30 font-heading"
        >
          <Calendar className="w-4 h-4" />
          <span>Reunião 45m</span>
        </button>
      </div>

      {/* Modal: Descubra seu plano (5-question diagnostic) */}
      <PlanDiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onComplete={handleDiagnosticComplete}
      />

      {/* Modal: Agendar Reunião 45 min */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        defaultPlan={scheduleDefaultPlan}
        diagnosticNotes={diagnosticNotes}
      />
    </div>
  );
}
