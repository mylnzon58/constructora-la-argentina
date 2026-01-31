'use client';

import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const About = () => {
    return (
        <section id="nosotros" className="py-24 bg-[#f8fafc]">
            <div className="container-custom mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Imagen Institucional */}
                    <div className="relative order-2 lg:order-1 px-4 lg:px-0">
                        <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                            <Image
                                src="/about-image.jpg"
                                alt="Equipo de trabajo en obra"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={65}
                            />
                        </div>
                        {/* Badge Flotante */}
                        <div className="absolute -bottom-6 -right-6 lg:-right-6 bg-[#1e3a8a] text-white p-6 rounded shadow-lg hidden md:block">
                            <span className="block text-4xl font-bold text-center">+15</span>
                            <span className="text-sm uppercase tracking-wide">Años de Trayectoria</span>
                        </div>
                    </div>

                    {/* Contenido Textual - INFORMACIÓN REAL INSERTADA */}
                    <div className="order-1 lg:order-2">
                        <span className="text-[#1e3a8a] font-bold tracking-wider uppercase text-sm mb-2 block">Nuestra Empresa</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">Quiénes Somos</h2>

                        <div className="space-y-6 text-lg text-[#475569]">
                            <p className="leading-relaxed">
                                Somos una empresa constructora joven, con trayectoria y experiencia, integrada por profesionales habilitados y un equipo plenamente comprometido con el cumplimiento de cada proyecto.
                            </p>

                            <p className="leading-relaxed">
                                Nuestro trabajo se basa en brindar soluciones constructivas rápidas, creativas y eficaces, priorizando siempre la calidad técnica, la seguridad y el respeto por los plazos acordados.
                            </p>

                            <div className="bg-white p-6 rounded-lg border-l-4 border-[#ea580c] shadow-sm my-6">
                                <p className="font-medium text-[#1e293b] italic">
                                    "Nuestro esfuerzo está enfocado en entregar obras que mejoran la calidad de vida de las personas y agregan valor real a nuestros clientes."
                                </p>
                            </div>

                            {/* Lista de características (Mantenida por coherencia visual) */}
                            <ul className="grid sm:grid-cols-2 gap-4 pt-2">
                                {[
                                    'Profesionales Habilitados',
                                    'Cumplimiento de Plazos',
                                    'Calidad Técnica',
                                    'Seguridad en Obra'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#dbeafe] flex items-center justify-center text-[#1e3a8a]">
                                            <FaCheck size={12} />
                                        </div>
                                        <span className="text-base font-medium text-[#334155]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Nota Institucional Oficial */}
                            <div className="pt-6">
                                <p className="text-sm text-[#64748b] bg-[#f1f5f9] p-3 rounded">
                                    <strong>Nota institucional:</strong> Nuestra historia formal, misión y visión se encuentran actualmente en proceso de desarrollo y digitalización para ser publicadas próximamente en este sitio.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
