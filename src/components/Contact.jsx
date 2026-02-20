import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-brand-dark relative">
            {/* Background Gradient */}
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-0"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                    Pronto para <span className="text-brand-orange">acelerar?</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                    Não deixe a oportunidade passar. Vamos agendar uma reunião para alinhar os detalhes e iniciar a transformação.
                </p>

                <a
                    href="#" // User would add actual WhatsApp link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#20bd5a] transition-all transform hover:scale-105 shadow-glow shadow-[#25D366]/20"
                >
                    <MessageCircle className="w-8 h-8" />
                    Vamos conversar no WhatsApp
                    <ArrowRight className="w-6 h-6" />
                </a>

                <div className="mt-24 pt-8 border-t border-brand-gray/10 text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} TEO MOTOS. Todos os direitos reservados.</p>
                </div>
            </div>
        </section>
    );
}
