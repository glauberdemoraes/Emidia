import React, { useState } from 'react';
import { X, Calendar, Building2, User, Phone, Mail, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
  diagnosticNotes?: string;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  defaultPlan = 'Reunião de 45 Minutos',
  diagnosticNotes
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Incorporador / Diretor');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Olá, equipe Emedia! Gostaria de agendar a reunião estratégica de 45 minutos.\n\n` +
      `*Nome:* ${name || 'Não informado'}\n` +
      `*Empresa:* ${company || 'Incorporadora'}\n` +
      `*Cargo:* ${role}\n` +
      `*Interesse:* ${selectedPlan}\n` +
      (diagnosticNotes ? `*Diagnóstico:* ${diagnosticNotes}\n` : '') +
      `\nPodemos combinar o melhor horário?`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#141414] border border-neutral-700 shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#fe6600]" />
              <span className="text-xs font-mono font-black text-[#fe6600] uppercase tracking-wider">
                Alinhamento Comercial de 45 Minutos
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase mb-2">
              Agendar Reunião Estratégica
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Análise do momento do seu empreendimento, objetivo de vendas e validação do plano ideal com nossa diretoria.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5 font-heading">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Roberto Silva"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#1f1f1f] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#fe6600]"
                  />
                  <User className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5 font-heading">
                    Incorporadora / Loteadora *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ex: Habitar Empreendimentos"
                      className="w-full px-3.5 py-3 rounded-xl bg-[#1f1f1f] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#fe6600]"
                    />
                    <Building2 className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5 font-heading">
                    Seu Cargo / Atuação
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#1f1f1f] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#fe6600]"
                  >
                    <option value="Incorporador / Sócio">Incorporador / Sócio</option>
                    <option value="Diretor Comercial">Diretor Comercial</option>
                    <option value="Gerente de Marketing">Gerente de Marketing</option>
                    <option value="Loteador">Loteador</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5 font-heading">
                    WhatsApp Comercial *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full px-3.5 py-3 rounded-xl bg-[#1f1f1f] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#fe6600]"
                    />
                    <Phone className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5 font-heading">
                    E-mail Corporativo *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="roberto@habitar.com.br"
                      className="w-full px-3.5 py-3 rounded-xl bg-[#1f1f1f] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#fe6600]"
                    />
                    <Mail className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5 font-heading">
                  Plano de Interesse Principal
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-[#1f1f1f] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#fe6600]"
                >
                  <option value="Plano Performance (R$ 5k/mês)">Plano Performance (R$ 5.000/mês)</option>
                  <option value="Plano Venda Total (R$ 7.9k/mês)">Plano Venda Total (R$ 7.900/mês + R$ 3k)</option>
                  <option value="Plano Branding (R$ 25k)">Plano Branding (R$ 25.000 pontual)</option>
                  <option value="Ainda quero avaliar na reunião">Ainda quero avaliar com a Emedia na reunião</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full font-black text-xs sm:text-sm tracking-wider uppercase text-white bg-[#fe6600] hover:bg-[#ff7b24] shadow-lg shadow-[#fe6600]/30 flex items-center justify-center gap-2 cursor-pointer transition-all font-heading"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirmar Solicitação de Reunião</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#fe6600]" />
                <span>Seus dados são 100% confidenciais.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto mb-5 text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white font-heading uppercase mb-2">
              Solicitação Recebida!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto mb-6">
              Nossa equipe comercial entrará em contato via WhatsApp e e-mail em até <strong className="text-white font-bold">2 horas úteis</strong> para enviar as opções de horários de agenda.
            </p>

            <div className="p-4 rounded-2xl bg-[#1a1a1a] border border-neutral-800 text-left text-xs text-neutral-300 mb-6 space-y-1">
              <div><strong className="text-neutral-400">Responsável:</strong> {name} ({company})</div>
              <div><strong className="text-neutral-400">Plano Focado:</strong> {selectedPlan}</div>
              <div><strong className="text-neutral-400">Canal de Contato:</strong> {phone}</div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-4 px-6 rounded-full font-black text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-emerald-900/30 font-heading"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Iniciar Conversa Agora no WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="text-xs text-neutral-400 hover:text-white py-2 font-semibold uppercase font-heading cursor-pointer"
              >
                Fechar janela
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
