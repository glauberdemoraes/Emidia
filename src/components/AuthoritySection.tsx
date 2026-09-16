import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  const analysisItems = [
    { title: 'Produto', desc: 'Conceito, diferenciais e posicionamento perante o mercado' },
    { title: 'Público', desc: 'Comportamento, renda e capacidade de compra real' },
    { title: 'Preço', desc: 'Tabela de vendas, valor por m² e condições comerciais' },
    { title: 'Velocidade de vendas', desc: 'Ritmo planejado de escoamento e fluxo de caixa' },
    { title: 'Liquidez', desc: 'Viabilidade econômico-financeira de cada fase da obra' }
  ];

  const numbers = [
    { value: '+ de 100', label: 'Lançamentos', note: 'Empreendimentos estruturados' },
    { value: '4 Bi', label: 'VGV Comercializado', note: 'Volume de vendas gerado' },
    { value: '85', label: 'Cidades Atendidas', note: 'Presença e inteligência de mercado' },
    { value: '15', label: 'Estados', note: 'Abrangência nacional consolidada' },
    { value: '+ de 70', label: 'Incorporadoras', note: 'Já trabalhando com mais de 70 incorporadoras' }
  ];

  return (
    <section id="autoridade" className="py-28 bg-white border-t border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fe6600]/10 border border-[#fe6600]/30 text-[#fe6600] text-xs sm:text-sm font-bold font-heading uppercase tracking-wider mb-5">
            <Award className="w-4 h-4" />
            <span>Prova de Autoridade</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 font-heading uppercase tracking-tight leading-tight">
            Conhecemos o negócio por trás do lançamento.
          </h2>
          <p className="mt-5 text-2xl sm:text-3xl text-[#fe6600] font-black uppercase font-heading">
            18 anos de mercado imobiliário.
          </p>
          <p className="mt-4 text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-3xl">
            A Emedia foi construída com a visão de quem também atua na estruturação de incorporações, parcelamento de solo e desenvolvimento urbano.
          </p>
          <p className="mt-3 text-lg sm:text-xl font-bold text-neutral-900">
            Isso muda a forma de pensar marketing.
          </p>
        </div>

        {/* Análise Pré-Campanha */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#f8f9fa] border border-neutral-200/90 mb-16 shadow-sm">
          <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#fe6600] mb-3">
            Metodologia Estruturada
          </p>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-950 font-heading uppercase mb-8">
            Antes da campanha, analisamos:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {analysisItems.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:border-[#fe6600]/50 transition-colors"
              >
                <div>
                  <span className="text-sm font-mono font-bold text-[#fe6600] block mb-3">0{idx + 1}</span>
                  <h4 className="text-base sm:text-lg font-black text-neutral-900 font-heading uppercase mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Números Reais - 5 Cards Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {numbers.map((num) => (
              <div
                key={num.label}
                className="p-6 sm:p-8 rounded-3xl bg-[#f8f9fa] border border-neutral-200/90 hover:border-[#fe6600]/60 hover:shadow-xl transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#fe6600] font-heading mb-2">
                    {num.value}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-neutral-900 font-heading uppercase mb-1">
                    {num.label}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 font-medium mt-3 pt-3 border-t border-neutral-200/70">
                  {num.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
