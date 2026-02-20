import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Differentials() {
    const differentials = [
        "Nome forte no mercado",
        "Loja física em Maceió",
        "Entrega em toda Alagoas",
        "Credibilidade e transparência",
        "Grande volume de estoque"
    ];

    return (
        <section className="py-32 bg-brand-orange relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>

            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-orange to-orange-500 opacity-90"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <div className="md:w-1/2">
                        <h2 className="text-black/60 font-black tracking-widest uppercase text-xs mb-6 border-b border-black/10 pb-2 inline-block">Nosso Diferencial</h2>
                        <h3 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none drop-shadow-sm">
                            A Força da <br />
                            <span className="text-black">Marca TEO.</span>
                        </h3>
                        <p className="text-white text-xl leading-relaxed font-medium max-w-lg">
                            "Tudo isso será transformado em <strong>argumento de venda</strong> nos anúncios. Vamos usar a sua autoridade para vender mais barato e mais rápido."
                        </p>
                    </div>

                    <div className="md:w-1/2 grid gap-5">
                        {differentials.map((item, index) => (
                            <div key={index} className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 flex items-center gap-6 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-lg group cursor-default">
                                <div className="bg-black/10 p-3 rounded-xl group-hover:bg-black/20 transition-colors">
                                    <ShieldCheck className="w-8 h-8 text-black shrink-0" />
                                </div>
                                <span className="text-white font-bold text-xl tracking-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
