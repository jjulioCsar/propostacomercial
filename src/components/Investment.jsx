import React from 'react';
import { Check } from 'lucide-react';

export default function Investment() {
    return (
        <section className="py-24 bg-brand-dark border-t border-brand-gray/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Investimento</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">
                        O Próximo Passo
                    </h3>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Um plano estruturado para escalar o TEO MOTOS sem desperdício de verba.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-gradient-to-b from-brand-gray/20 to-brand-dark border border-brand-gray/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    {/* Tag */}
                    <div className="absolute top-6 right-6 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Recomendado
                    </div>

                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex-1 space-y-6">
                            <h4 className="text-2xl font-bold text-white">Plano de Crescimento Digital</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Escopo completo cobrindo todas as frentes necessárias para transformar o digital em um canal de vendas robusto.
                            </p>

                            <div className="space-y-4 pt-4">
                                {[
                                    "Gestão de Tráfego Pago (Meta & Google)",
                                    "Planejamento de Conteúdo Semanal",
                                    "Otimização de Perfil e LP",
                                    "Consultoria de CRM e Vendas",
                                    "Relatórios Quinzenais"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="bg-brand-orange/20 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-brand-orange" />
                                        </div>
                                        <span className="text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center items-center md:border-l border-brand-gray/30 md:pl-12">
                            <span className="text-gray-400 text-sm mb-2">Investimento Mensal</span>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                R$ <span className="text-brand-orange">X.XXX</span>
                            </div>
                            <span className="text-gray-500 text-xs mb-8">Consulte condições de setup</span>

                            <button className="w-full bg-white text-brand-dark hover:bg-gray-200 font-bold py-4 rounded-xl transition-colors">
                                Solicitar Proposta Detalhada
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
