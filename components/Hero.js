'use client';

import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen min-h-[600px] flex items-center bg-[#0f172a] overflow-hidden pt-20">

            {/* IMAGEN DE FONDO con Overlay Industrial */}
            <div className="absolute inset-0 z-0 select-none">
                {/* Overlay gradiente para legibilidad perfecta del texto blanco */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/30 z-10"></div>
                <img
                    src="/hero-bg.jpg"
                    alt="Obra en construcción"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="container-custom relative z-20 mx-auto h-full flex items-center">
                <div className="max-w-4xl pt-12">

                    {/* Badge Superior */}
                    <div className="inline-flex items-center gap-2 pl-1 pr-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-8">
                        <span className="bg-[#ea580c] text-white px-2 py-0.5 rounded-full text-[10px]">OFICIAL</span>
                        Cooperativa Habilitada
                    </div>

                    {/* TÍTULO H1 TIPOGRÁFICO - Reemplaza al logo repetido para evitar redundancia */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-6 tracking-tight drop-shadow-lg" data-aos="fade-up">
                        CONSTRUCCIÓN <br />
                        <span className="text-[#94a3b8]">PROFESIONAL</span>
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-12 font-light border-l-4 border-[#ea580c] pl-6">
                        <strong className="text-white font-bold">COOP. I.A. ARGENTINA LTDA.</strong><br />
                        Maestros Mayores de Obra especializados en Steel Frame, obras industriales y construcción tradicional en Villaguay.
                    </p>

                    {/* Botones Profesionales (No verdes chillones) */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <a
                            href="https://wa.me/543455456696"
                            className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold rounded-sm text-lg transition-all shadow-lg hover:shadow-orange-500/20 group"
                        >
                            Contactar Ahora
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#obras"
                            className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-transparent border border-white/30 hover:border-white text-white font-semibold rounded-sm text-lg transition-all hover:bg-white/5"
                        >
                            Ver Proyectos
                        </a>
                    </div>

                    {/* Stats Rápidos */}
                    <div className="mt-20 flex gap-12 border-t border-white/10 pt-8">
                        <div>
                            <span className="text-3xl font-bold text-white block">100%</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">Matriculados</span>
                        </div>
                        <div>
                            <span className="text-3xl font-bold text-white block">+15</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">Años Exp.</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
