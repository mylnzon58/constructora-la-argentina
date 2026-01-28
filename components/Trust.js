'use client';

import { FaCertificate, FaShieldAlt, FaFileContract, FaCheckCircle, FaFileAlt } from 'react-icons/fa';

const Trust = () => {
    return (
        <section id="confianza" className="section-padding bg-[#f1f5f9]">
            <div className="container-custom">
                <div className="section-title" data-aos="fade-up">
                    <h2 className="text-[#0f172a]">Confianza y Legalidad</h2>
                    <p className="text-[#475569]">Respaldo profesional y habilitación legal para su tranquilidad</p>
                </div>

                {/* Credentials Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0] text-center hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="0">
                        <div className="w-16 h-16 mx-auto mb-6 bg-[#eff6ff] rounded-full flex items-center justify-center text-[#1e3a8a]">
                            <FaCertificate className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold text-[#0f172a] mb-3">Licencia Habilitante</h3>
                        <p className="text-[#475569] text-sm mb-4">Cooperativa con licencia municipal vigente.</p>
                        <span className="inline-block px-3 py-1 bg-[#f1f5f9] text-[#64748b] text-xs font-semibold rounded">Registro Oficial</span>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0] text-center hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="100">
                        <div className="w-16 h-16 mx-auto mb-6 bg-[#eff6ff] rounded-full flex items-center justify-center text-[#1e3a8a]">
                            <FaShieldAlt className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold text-[#0f172a] mb-3">Matrícula Profesional</h3>
                        <p className="text-[#475569] text-sm mb-4">Maestros Mayores de Obra matriculados.</p>
                        <span className="inline-block px-3 py-1 bg-[#f1f5f9] text-[#64748b] text-xs font-semibold rounded">Profesionales</span>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0] text-center hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-16 h-16 mx-auto mb-6 bg-[#eff6ff] rounded-full flex items-center justify-center text-[#1e3a8a]">
                            <FaFileContract className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold text-[#0f172a] mb-3">Cooperativa Registrada</h3>
                        <p className="text-[#475569] text-sm mb-4">Entidad legalmente constituida e inscripta.</p>
                        <span className="inline-block px-3 py-1 bg-[#f1f5f9] text-[#64748b] text-xs font-semibold rounded">Entidad Local</span>
                    </div>
                </div>

                {/* Content Split */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Visual Representation */}
                    <div data-aos="fade-right">
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-[#1e3a8a] p-8 md:p-10 relative overflow-hidden">
                            {/* Watermark */}
                            <FaFileAlt className="absolute -bottom-10 -right-10 text-[10rem] text-[#f1f5f9] opacity-50 transform -rotate-12" />

                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-[#e0e7ff]">
                                    <FaCheckCircle className="text-4xl text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-[#0f172a] mb-1">COOP. I.A. ARGENTINA LTDA.</h3>
                                <p className="text-[#1e3a8a] font-semibold mb-6">Villaguay, Entre Ríos</p>

                                <div className="border-t border-[#e2e8f0] pt-6 space-y-3 text-left">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-[#64748b]">Tipo de Entidad:</span>
                                        <span className="font-bold text-[#1e293b]">Cooperativa de Trabajo</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-[#64748b]">Rubro:</span>
                                        <span className="font-bold text-[#1e293b]">Construcción</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-[#64748b]">Estado:</span>
                                        <span className="font-bold text-[#16a34a] flex items-center gap-1">
                                            <FaCheckCircle className="text-xs" /> Habilitado
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Guarantees List */}
                    <div data-aos="fade-left">
                        <h3 className="text-2xl font-bold text-[#0f172a] mb-6">
                            Compromiso con la Transparencia
                        </h3>
                        <p className="text-[#334155] mb-8 leading-relaxed text-lg">
                            Operamos bajo estrictos estándares de legalidad y buenas prácticas.
                            Garantizamos a nuestros clientes total transparencia en presupuestos,
                            plazos y cumplimiento normativo.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                'Cumplimiento de normativas',
                                'Seguridad laboral en obra',
                                'Responsabilidad civil',
                                'Transparencia total',
                                'Garantía de ejecución',
                                'Asesoramiento técnico'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-lg">
                                    <FaCheckCircle className="text-[#16a34a] flex-shrink-0" />
                                    <span className="text-[#334155] font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-[#cbd5e1]">
                            <p className="text-sm text-[#475569]">
                                Puede solicitar ver nuestra documentación habilitante al contactarnos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
