import React from 'react';
import { Camera, Zap } from 'lucide-react';

export default function Opportunities() {
    return (
        <section className="py-24 bg-brand-dark border-t border-brand-gray/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-4 mb-20 text-center">
                    <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm inline-block mx-auto border-b-2 border-brand-orange pb-1">O Que Pode Ser Melhorado</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">Oportunidades Imediatas</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Opportunity 1: Ads Creatives */}
                    <div className="group bg-brand-gray/5 p-6 rounded-3xl border border-brand-gray/10 hover:border-brand-gray/30 transition-colors">
                        {/* Changed aspect-video to h-80/h-96 for better post visibility, and object-cover to object-contain */}
                        <div className="h-80 md:h-96 bg-neutral-900 rounded-2xl flex flex-col items-center justify-center border border-brand-gray/30 mb-8 overflow-hidden relative shadow-lg">
                            <img
                                src="/assets/TeoMotos_Stock.png"
                                alt="Post de Estoque"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.parentNode.innerHTML = '<div class="absolute inset-0 flex flex-col items-center justify-center"><span class="text-gray-500 font-mono text-xs mb-2">Aguarda Imagem</span><span class="text-white font-bold text-lg">TeoMotos_Stock.png</span></div>';
                                }}
                            />
                            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide z-10 shadow-md">
                                Baixa Conversão
                            </div>
                        </div>

                        <div className="flex gap-5 mb-4">
                            <div className="bg-red-500/10 p-3 rounded-2xl h-fit shrink-0">
                                <Zap className="text-red-500 w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-3">Criativos de Venda</h4>
                                <p className="text-gray-400 text-base leading-relaxed mb-6">
                                    Posts orgânicos são ótimos, mas no tráfego pago precisamos de outra abordagem:
                                </p>
                                <div className="space-y-3">
                                    <div className="bg-red-500/5 p-4 rounded-xl border border-red-500/20 flex items-start gap-3">
                                        <span className="text-red-500 font-bold text-xs uppercase mt-1 bg-red-500/10 px-2 py-0.5 rounded">HOJE</span>
                                        <span className="text-gray-400 text-sm">Muito texto, informativo, visual poluído.</span>
                                    </div>
                                    <div className="bg-green-500/5 p-4 rounded-xl border border-green-500/20 flex items-start gap-3">
                                        <span className="text-green-500 font-bold text-xs uppercase mt-1 bg-green-500/10 px-2 py-0.5 rounded">NOVO</span>
                                        <span className="text-gray-300 text-sm">Headline forte, persuasivo, foco no clique.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Opportunity 2: Humanization */}
                    <div className="group bg-brand-gray/5 p-6 rounded-3xl border border-brand-gray/10 hover:border-brand-gray/30 transition-colors">
                        <div className="h-80 md:h-96 bg-neutral-900 rounded-2xl flex flex-col items-center justify-center border border-brand-gray/30 mb-8 overflow-hidden relative shadow-lg">
                            <img
                                src="/assets/TeoMotos_Delivery.png"
                                alt="Entrega / Cliente Feliz"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.parentNode.innerHTML = '<div class="absolute inset-0 flex flex-col items-center justify-center"><span class="text-gray-500 font-mono text-xs mb-2">Aguarda Imagem</span><span class="text-white font-bold text-lg">TeoMotos_Delivery.png</span></div>';
                                }}
                            />
                            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide z-10 shadow-md">
                                Potencial Oculto
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="bg-brand-orange/10 p-3 rounded-2xl h-fit shrink-0">
                                <Camera className="text-brand-orange w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-3">Humanização Estratégica</h4>
                                <p className="text-gray-400 text-base leading-relaxed mb-6 italic">
                                    "Fotos de entrega e clientes felizes são o maior ativo de confiança de uma loja de motos."
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(255,102,0,0.5)]"></div>
                                        Transformar em Anúncios (Prova Social)
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(255,102,0,0.5)]"></div>
                                        Conteúdo de Autoridade
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(255,102,0,0.5)]"></div>
                                        Redução do Custo por Lead (CPL)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
