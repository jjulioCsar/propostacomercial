import React from 'react';

export default function Closing() {
    return (
        <section className="py-40 bg-brand-dark relative flex items-center justify-center text-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black via-brand-dark to-brand-dark z-0"></div>

            {/* Subtle glow center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-light text-gray-300 italic mb-10 leading-relaxed font-serif">
                        “A <strong className="text-brand-orange not-italic font-sans font-black">TEO MOTOS</strong> já é grande. <br className="hidden md:block" />
                        Meu trabalho é fazer o digital trabalhar no mesmo nível da loja física, transformando visual e anúncios em vendas.”
                    </h2>
                </div>

                <div className="w-32 h-1.5 bg-brand-orange mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(255,102,0,0.5)]"></div>

                <div className="flex flex-col items-center gap-4 animate-fade-in-up">
                    <p className="text-gray-500 font-mono text-sm tracking-[0.3em] uppercase">
                        Fim da Apresentação
                    </p>
                    <p className="text-gray-700 text-xs">
                        &copy; 2026 Proposta Comercial
                    </p>
                </div>
            </div>
        </section>
    );
}
