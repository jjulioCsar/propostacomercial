import React from 'react';
import { Instagram, TrendingUp, Users } from 'lucide-react';

export default function CurrentScenario() {
    return (
        <section className="py-24 bg-brand-gray/5 border-b border-brand-gray/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-4 mb-20">
                    <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm flex items-center gap-2 before:w-8 before:h-0.5 before:bg-brand-orange">Cenário Atual</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
                        O Poder da Comunidade <span className="text-gray-600">@teomotos1</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-20 items-start">
                    {/* Slide 1: Profile Analysis */}
                    <div className="space-y-8">
                        <div className="bg-brand-dark/50 p-8 rounded-3xl border border-brand-gray/20 shadow-xl">
                            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Instagram className="text-brand-orange w-8 h-8" />
                                Presença Digital
                            </h4>
                            <p className="text-gray-400 mb-6 font-medium">Análise do Perfil Principal</p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 text-gray-300 items-center">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-sm">✓</div>
                                    <span className="flex-1">Mais de 50 mil seguidores.</span>
                                </li>
                                <li className="flex gap-4 text-gray-300 items-center">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-sm">✓</div>
                                    <span className="flex-1">Alta frequência de postagens.</span>
                                </li>
                                <li className="flex gap-4 text-gray-300 items-center">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-sm">✓</div>
                                    <span className="flex-1">Reconhecimento local forte.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-brand-dark p-3 rounded-2xl border border-brand-gray/30 relative group shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/assets/TeoMotos_Profile.png"
                                alt="Perfil TEO MOTOS"
                                className="w-full rounded-lg shadow-inner"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.parentNode.innerHTML = '<div class="aspect-[4/5] bg-neutral-800 rounded flex flex-col items-center justify-center text-center p-4 text-gray-500">Aguarda Imagem: TeoMotos_Profile.png</div>';
                                }}
                            />
                        </div>

                        <div className="pl-6 border-l-4 border-brand-orange">
                            <p className="text-xl text-white font-medium leading-relaxed">
                                "O problema não é falta de visibilidade. O ponto de melhoria é transformar essa visibilidade em <span className="text-brand-orange font-bold">mais vendas e retorno.</span>"
                            </p>
                        </div>
                    </div>

                    {/* Slide 2: Feed Analysis */}
                    <div className="space-y-8 md:mt-16">
                        <div className="bg-brand-dark/50 p-8 rounded-3xl border border-brand-gray/20 shadow-xl">
                            <h4 className="text-2xl font-bold text-white mb-6">
                                O Conteúdo Atual
                            </h4>
                            <p className="text-gray-400 mb-6 font-medium">Análise do Feed (Vitrine)</p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 text-gray-300 items-center">
                                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold text-sm">!</div>
                                    <span className="flex-1">Visual repetitivo.</span>
                                </li>
                                <li className="flex gap-4 text-gray-300 items-center">
                                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold text-sm">!</div>
                                    <span className="flex-1">Falta estratégia para anúncios.</span>
                                </li>
                                <li className="flex gap-4 text-gray-300 items-center">
                                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold text-sm">!</div>
                                    <span className="flex-1">Falta diferenciação clara.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-brand-dark p-3 rounded-2xl border border-brand-gray/30 relative group shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/assets/TeoMotos_Feed.png"
                                alt="Feed TEO MOTOS"
                                className="w-full rounded-lg shadow-inner"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.parentNode.innerHTML = '<div class="aspect-[4/3] bg-neutral-800 rounded flex flex-col items-center justify-center text-center p-4 text-gray-500">Aguarda Imagem: TeoMotos_Feed.png</div>';
                                }}
                            />
                        </div>

                        <div className="pl-6 border-l-4 border-brand-orange">
                            <p className="text-xl text-white font-medium leading-relaxed">
                                "Ou seja: é bonito, mas <span className="text-brand-orange font-bold">pode vender muito mais.</span>"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
