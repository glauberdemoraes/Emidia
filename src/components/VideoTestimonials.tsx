import React, { useState } from 'react';
import { Play, CheckCircle2, Quote, ArrowRight, Video } from 'lucide-react';

interface VideoTestimonial {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  youtubeId: string;
  highlight: string;
  stats: string;
}

export const VideoTestimonials: React.FC<{ onOpenSchedule: () => void }> = ({ onOpenSchedule }) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const testimonials: VideoTestimonial[] = [
    {
      id: 'mirante-granbery',
      title: 'Mirante Granbery',
      subtitle: 'Empreendimento Vertical de Alto Padrão',
      client: 'Diretoria de Incorporação',
      role: 'Incorporadora & Construtora',
      youtubeId: 'lpZe-5goZ6E',
      highlight: 'Operação integrada de tráfego qualificado e atendimento rápido que acelerou a velocidade de vendas.',
      stats: '100% de ocupação do plantão nos primeiros finais de semana'
    },
    {
      id: 'parque-das-palmeiras',
      title: 'Parque das Palmeiras',
      subtitle: 'Bairro Planejado & Loteamento Fechado',
      client: 'Gestão Comercial & Loteadora',
      role: 'Loteamento Fechado',
      youtubeId: '5o_aefR12rg',
      highlight: 'Do posicionamento à esteira de conversão de lotes com IA respondendo os interessados em menos de 2 minutos.',
      stats: 'Recorde de cadastros pré-qualificados antes da abertura de vendas'
    },
    {
      id: 'portal-das-pedras',
      title: 'Portal das Pedras',
      subtitle: 'Condomínio Residencial Estruturado',
      client: 'Coordenação de Lançamento',
      role: 'Lançamento Residencial',
      youtubeId: 'NgAsy07G50s',
      highlight: 'Branding sólido com materiais de venda que valorizaram o metro quadrado e facilitaram o fechamento dos corretores.',
      stats: 'Alinhamento completo entre marketing, corretores e diretoria'
    }
  ];

  return (
    <section id="depoimentos" className="py-28 bg-[#0d0d0d] border-t border-[#222222] relative overflow-hidden">
      {/* Background orange glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#fe6600]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fe6600]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fe6600]/15 border border-[#fe6600]/40 text-[#fe6600] text-xs sm:text-sm font-black font-heading uppercase tracking-wider mb-5">
            <Video className="w-4 h-4" />
            <span>Depoimentos em Vídeo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading uppercase tracking-tight leading-tight">
            Quem viveu a operação <span className="text-[#fe6600]">na prática</span>
          </h2>

          <p className="mt-5 text-base sm:text-xl text-neutral-300 font-normal max-w-3xl mx-auto leading-relaxed">
            Assista aos relatos reais de incorporadores e loteadores que confiaram o lançamento dos seus empreendimentos ao Grupo Emídia.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item) => {
            const isPlaying = activeVideoId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-[#141414] border border-[#262626] hover:border-[#fe6600]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-2xl group"
              >
                {/* Video Container (16:9) */}
                <div className="relative w-full aspect-video bg-black overflow-hidden border-b border-[#262626]">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                      title={item.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      onClick={() => setActiveVideoId(item.id)}
                      className="relative w-full h-full cursor-pointer overflow-hidden group/thumb"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 opacity-80"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-[#fe6600] text-white flex items-center justify-center shadow-xl shadow-[#fe6600]/50 group-hover/thumb:scale-110 transition-transform mb-2">
                          <Play className="w-7 h-7 fill-white ml-0.5" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-wider text-white bg-black/75 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10 font-heading">
                          Clique para Assistir
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-black uppercase tracking-wider text-[#fe6600] bg-[#fe6600]/10 px-3 py-1 rounded-md border border-[#fe6600]/30 font-heading">
                        {item.role}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white font-heading uppercase tracking-wide mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-400 font-medium mb-5">
                      {item.subtitle}
                    </p>

                    <div className="p-4 rounded-2xl bg-[#1c1c1c] border border-neutral-800 text-sm text-neutral-300 mb-6 leading-relaxed relative">
                      <Quote className="w-4 h-4 text-[#fe6600] mb-2 opacity-70" />
                      "{item.highlight}"
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-neutral-300 font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#fe6600]" />
                      {item.stats}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-[#2e2e2e] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <h4 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase tracking-tight mb-2">
              Quer ver resultados como esses no seu empreendimento?
            </h4>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Descubra qual plano se adequa ao seu momento através do nosso diagnóstico executivo.
            </p>
          </div>

          <button
            onClick={onOpenSchedule}
            className="px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#fe6600] hover:bg-[#ff7b24] shadow-xl shadow-[#fe6600]/30 transition-all cursor-pointer font-heading whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Descobrir Meu Plano</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
