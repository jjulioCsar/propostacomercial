import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-brand-dark overflow-hidden pt-20">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gray/20 via-brand-dark to-brand-dark z-0"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Logo Representation */}
                <div className="mb-12 animate-fade-in-down">
                    <div className="inline-block relative">
                        <div className="flex items-center justify-center gap-4">
                            {/* Simplified Wing Left */}
                            <div className="hidden md:flex flex-col gap-1 w-24">
                                <div className="h-1 bg-brand-orange w-full rounded-l-full"></div>
                                <div className="h-1 bg-brand-orange w-3/4 self-end rounded-l-full opacity-60"></div>
                            </div>

                            <div className="flex flex-col items-center">
                                {/* Shield Shape Mock */}
                                <div className="text-5xl md:text-7xl font-black italic tracking-tighter text-white">
                                    <span className="text-white">TEO</span> <span className="text-brand-orange">MOTOS</span>
                                </div>
                            </div>

                            {/* Simplified Wing Right */}
                            <div className="hidden md:flex flex-col gap-1 w-24">
                                <div className="h-1 bg-brand-orange w-full rounded-r-full"></div>
                                <div className="h-1 bg-brand-orange w-3/4 self-start rounded-r-full opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-none uppercase">
                    Transformando <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-500">
                        Visibilidade
                    </span>
                    <br />
                    em <span className="text-white">Vendas</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                    Uma estratégia digital feita sob medida para levar a <strong className="text-white">TEO MOTOS</strong> ao próximo nível de faturamento.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="bg-brand-orange/10 border border-brand-orange/30 px-10 py-4 rounded-full text-brand-orange font-bold uppercase tracking-[0.2em] text-sm animate-pulse shadow-[0_0_20px_rgba(255,102,0,0.2)]">
                        Plano de Crescimento 2026
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600">
                <ArrowDown size={28} />
            </div>
        </section>
    );
}
