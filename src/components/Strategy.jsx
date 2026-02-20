import React from 'react';
import { Target, MessageSquare, Palette, Video, Settings, TrendingUp } from 'lucide-react';

export default function Strategy() {
    const solutions = [
        {
            icon: <Settings className="w-6 h-6 text-brand-orange" />,
            title: "1. Gestão de Tráfego Pago (Meta Ads)",
            points: [
                "Campanhas focadas em WhatsApp",
                "Segmentação local (Maceió + Alagoas)",
                "Campanhas separadas por tipo de moto",
                "Otimização focada em venda, não curtida"
            ]
        },
        {
            icon: <Palette className="w-6 h-6 text-brand-orange" />,
            title: "2. Criativos Estratégicos",
            points: [
                "Criativos pensados para anúncios",
                "Menos texto, mais impacto visual",
                "Layouts para não cansar o público",
                "Destaque para benefícios"
            ]
        },
        {
            icon: <Target className="w-6 h-6 text-brand-orange" />,
            title: "3. Padronização Visual",
            points: [
                "Criação de layouts fixos",
                "Padronização de cores e fontes",
                "Feed organizado e profissional",
                "Percepção de \"Loja Grande e Séria\""
            ]
        },
        {
            icon: <Video className="w-6 h-6 text-brand-orange" />,
            title: "4. Conteúdo Real (Diferencial)",
            points: [
                "Gravações pontuais na loja (ex: sábado)",
                "Conteúdo com motos, equipe e clientes",
                "Uso desse material em anúncios",
                "Humanização gera conversão"
            ]
        }
    ];

    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Objectives Section */}
                <div className="mb-32 bg-gradient-to-br from-brand-gray/10 to-transparent p-10 md:p-14 rounded-[3rem] border border-brand-gray/20 shadow-2xl relative overflow-hidden group">
                    {/* Decorative glow */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                    <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                        <div className="bg-brand-orange/20 p-3 rounded-2xl">
                            <TrendingUp className="text-brand-orange w-8 h-8" />
                        </div>
                        Objetivos do Trabalho
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Aumentar conversas qualificadas no WhatsApp",
                            "Melhorar o retorno sobre o investimento (ROI)",
                            "Padronizar o visual da marca",
                            "Diferenciar a TEO MOTOS das concorrentes",
                            "Transformar seguidores em compradores"
                        ].map((obj, i) => (
                            <div key={i} className="flex items-center gap-4 bg-brand-dark/80 backdrop-blur p-5 rounded-2xl border border-brand-gray/30 hover:border-brand-orange/50 transition-colors shadow-lg">
                                <div className="w-3 h-3 rounded-full bg-brand-orange shrink-0 shadow-[0_0_8px_rgba(255,102,0,0.6)]"></div>
                                <span className="text-gray-200 text-base font-medium leading-tight">{obj}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solutions Grid */}
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm">Solução Proposta</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white">4 Pilares da Execução</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {solutions.map((item, index) => (
                        <div key={index} className="bg-brand-gray/5 p-8 md:p-10 rounded-3xl border border-brand-gray/20 hover:border-brand-orange/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="bg-brand-dark p-4 rounded-2xl border border-brand-gray/30 group-hover:border-brand-orange/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    {React.cloneElement(item.icon, { className: "w-8 h-8 text-brand-orange" })}
                                </div>
                                <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange/90 transition-colors">{item.title}</h4>
                            </div>
                            <ul className="space-y-4 pl-4 border-l-2 border-brand-gray/20 group-hover:border-brand-orange/30 transition-colors ml-2">
                                {item.points.map((point, i) => (
                                    <li key={i} className="text-gray-400 group-hover:text-gray-300 text-base pl-6 relative transition-colors">
                                        <span className="absolute left-0 top-2.5 w-2 h-2 bg-brand-gray/50 rounded-full group-hover:bg-brand-orange transition-colors"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
