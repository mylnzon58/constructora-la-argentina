'use client';

import { FaCheck } from 'react-icons/fa';

const About = () => {
    return (
        <section id="nosotros" className="py-24 bg-[#f8fafc]">
            <div className="container-custom mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Imagen con márgenes correctos */}
                    <div className="relative order-2 lg:order-1 px-4 lg:px-0">
                        <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                            <img
                                src="/about-image.jpg"
                                alt="Equipo de trabajo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Elemento decorativo flotante alineado */}
                        <div className="absolute -bottom-6 -right-6 lg:-right-6 bg-[#1e3a8a] text-white p-6 rounded shadow-lg hidden md:block">
                            <span className="block text-4xl font-bold">+15</span>
                            <span className="text-sm uppercase tracking-wide">Años Exp.</span>
                        </div>
                    </div>

                    {/* Contenido textual alineado y legible */}
                    <div className="order-1 lg:order-2">
                        <span className="text-[#1e3a8a] font-bold tracking-wider uppercase text-sm mb-2 block">Quiénes Somos</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">Cooperativa de Construcción La Argentina</h2>

                        <div className="space-y-6 text-lg text-[#475569]">
                            <p className="leading-relaxed">
                                Somos una organización conformada por profesionales habilitados, comprometidos con la excelencia técnica y la responsabilidad social. Nuestra base operativa se encuentra en <strong>Villaguay, Entre Ríos</strong>.
                            </p>

                            <p className="leading-relaxed">
                                A diferencia de empresas convencionales, nuestra estructura cooperativa nos permite ofrecer precios competitivos sin sacrificar la calidad, priorizando siempre la honestidad en los materiales y los plazos.
                            </p>

                            {/* Lista de características limpia */}
                            <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                                {[
                                    'Licencia Municipal Vigente',
                                    'Maestros Mayores de Obra',
                                    'Seguros y ART al día',
                                    'Facturación Oficial'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#dbeafe] flex items-center justify-center text-[#1e3a8a]">
                                            <FaCheck size={12} />
                                        </div>
                                        <span className="text-base font-medium text-[#334155]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <div className="p-4 bg-[#eff6ff] border-l-4 border-[#1e3a8a] rounded-r text-sm text-[#1e40af]">
                                    <strong>Nota Institucional:</strong> Nuestra historia oficial y estatuto se encuentran en proceso de digitalización para ser presentados próximamente en este sitio.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
