import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenSchedule: () => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSchedule, onOpenDiagnostic }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1c1c1c] pt-20 pb-16 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[#1c1c1c]">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://grupoemidia.com/wp-content/uploads/2024/03/grupo-emidia-logo-01branco.png"
                alt="Grupo Emedia"
                className="h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-black uppercase tracking-widest text-[#fe6600] px-2.5 py-0.5 rounded-full bg-[#fe6600]/15 border border-[#fe6600]/30 font-heading">
                IMOB
              </span>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base max-w-lg leading-relaxed mb-6 font-normal">
              Marketing, performance e atendimento com inteligência artificial para lançamentos imobiliários, incorporadoras e loteadoras. 18 anos de experiência com visão de quem também estrutura empreendimentos.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-heading font-black uppercase">
              <span className="px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                18+ Anos de Mercado
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                Incorporação & Loteamento
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                Operação de Lançamento
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white mb-5 font-heading">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#momento" className="hover:text-[#fe6600] transition-colors">
                  Qual é o momento do seu projeto?
                </a>
              </li>
              <li>
                <a href="#tese" className="hover:text-[#fe6600] transition-colors">
                  A Tese da Emedia (3 Pilares)
                </a>
              </li>
              <li>
                <a href="#autoridade" className="hover:text-[#fe6600] transition-colors">
                  Visão de Incorporador
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-[#fe6600] transition-colors">
                  Planos (Performance, Venda Total, Branding)
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-[#fe6600] transition-colors">
                  Cases & Métricas Reais
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#fe6600] transition-colors">
                  Depoimentos de Clientes (Vídeo)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#fe6600] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div>
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white mb-5 font-heading">
              Contato Comercial
            </h4>
            <p className="text-sm text-neutral-400 mb-5 leading-relaxed">
              Agende uma reunião de 45 minutos ou converse diretamente pelo WhatsApp oficial.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => onOpenSchedule()}
                className="w-full py-3.5 px-5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#fe6600] hover:bg-[#ff7b24] shadow-lg shadow-[#fe6600]/30 transition-all cursor-pointer text-center font-heading"
              >
                Agendar Reunião (45 min)
              </button>
              <a
                href="https://wa.me/553299624648?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20os%20planos%20da%20Emedia%20para%20lan%C3%A7amentos."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-[#25D366] hover:text-white transition-colors cursor-pointer text-center font-heading flex items-center justify-center gap-2"
              >
                <span>WhatsApp: (32) 9962-4648</span>
              </a>
              <button
                onClick={onOpenDiagnostic}
                className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-400 hover:text-[#fe6600] transition-colors cursor-pointer text-center font-heading uppercase"
              >
                Fazer Diagnóstico do Lançamento
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Grupo Emedia. Todos os direitos reservados. Foco exclusivo em lançamentos imobiliários.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer text-xs uppercase font-heading font-bold"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
