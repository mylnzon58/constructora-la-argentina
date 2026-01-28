'use client';

import { FaHardHat, FaUserTie, FaTools } from 'react-icons/fa';

const Team = () => {
    const team = [
        {
            name: 'Ing. Carlos Rodríguez', // Nombre ficticio profesional
            role: 'Director Técnico',
            icon: FaUserTie,
            description: 'Maestro Mayor de Obra con más de 20 años de experiencia liderando proyectos de gran envergadura.',
            image: '/team/team-1.png',
        },
        {
            name: 'Equipo de Coordinación',
            role: 'Supervisión de Obra',
            icon: FaHardHat,
            description: 'Encargados de garantizar el cumplimiento de plazos y estándares de calidad en cada etapa.',
            image: '/team/team-2.png',
        },
        {
            name: 'Cuerpo de Oficiales',
            role: 'Ejecución Especializada',
            icon: FaTools,
            description: 'Personal altamente capacitado en sistemas Steel Frame, albañilería tradicional y terminaciones finas.',
            image: '/team/team-3.png',
        },
    ];

    return (
        <section id="equipo" className="py-24 bg-[#f8fafc]">
            <div className="container-custom mx-auto">

                <div className="mb-12 text-center md:text-left">
                    <span className="text-[#1e3a8a] font-bold tracking-wider uppercase text-sm mb-2 block">Profesionales</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">Nuestro Equipo</h2>
                    <p className="text-lg text-[#475569] mt-4 max-w-2xl">
                        Contamos con personal matriculado y en constante capacitación para brindar seguridad y confianza.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Imagen Responsiva - Aspect Ratio cuadrado en móvil, más alto en desktop */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent"></div>

                                {/* Icono Flotante */}
                                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1e3a8a] shadow-lg">
                                    <member.icon size={20} />
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-[#1e293b] mb-1">
                                    {member.name}
                                </h3>
                                <span className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wide block mb-4">
                                    {member.role}
                                </span>
                                <p className="text-[#475569] text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
