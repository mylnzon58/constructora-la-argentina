'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center bg-[#0f172a] overflow-hidden pt-32 md:pt-20">

            {/* IMAGEN DE FONDO con Overlay Industrial */}
            <div className="absolute inset-0 z-0 select-none">
                {/* Overlay gradiente para legibilidad perfecta del texto blanco */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/30 z-10"></div>
                <Image
                    src="/hero-bg.jpg"
                    alt="Obra en construcción"
                    fill
                    className="object-cover opacity-60"
                    quality={75}
                    priority
                />
            </div>

            <div className="container-custom relative z-20 mx-auto h-full flex items-center">
                <div className="max-w-4xl pt-12">

                    {/* Badge Superior */}
                    <div className="inline-flex items-center gap-2 pl-1 pr-3 sm:pr-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-[0.2em] rounded-full mb-6 sm:mb-8 max-w-full">
                        <span className="bg-[#ea580c] text-white px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] flex-shrink-0 shadow-sm">OFICIAL</span>
                        <span className="truncate">Cooperativa Habilitada</span>
                    </div>

                    {/* TÍTULO H1 TIPOGRÁFICO - Contenido Institucional Adaptado */}
                    <AnimateOnScroll animation="fade-up">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none mb-6 tracking-tight drop-shadow-lg uppercase">
                            ¡CONCRETÁ TUS IDEAS <br />
                            <span className="text-[#94a3b8]">CON CALIDAD!</span>
                        </h1>
                    </AnimateOnScroll>

                    {/* Texto Institucional */}
                    <AnimateOnScroll animation="fade-up" delay={100}>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-12 font-light border-l-4 border-[#ea580c] pl-6">
                            Con experiencia en el sector, ofrecemos servicios de construcción integral en Entre Ríos, adaptándonos a cada proyecto con compromiso y calidad. <br /><br />
                            <strong className="text-white">Construcción, remodelación y ampliaciones con un enfoque profesional, responsable y orientado a resultados reales.</strong>
                        </p>
                    </AnimateOnScroll>

                    {/* Botones Profesionales */}
                    <AnimateOnScroll animation="fade-up" delay={200}>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a
                                href="#contacto"
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
                    </AnimateOnScroll>

                    {/* Stats Rápidos */}
                    <AnimateOnScroll animation="fade-up" delay={300}>
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
                    </AnimateOnScroll>

                </div>
            </div>
        </section>
    );
};

export default Hero;
