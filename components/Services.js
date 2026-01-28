'use client';

import {
    FaHammer,
    FaHome,
    FaWarehouse,
    FaTools,
    FaRulerCombined,
    FaPaintRoller
} from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: FaHammer,
            title: 'Albañilería General',
            description: 'Muros, revoques, contrapisos y mampostería de alta calidad.',
        },
        {
            icon: FaHome,
            title: 'Construcciones Tradicionales',
            description: 'Viviendas y edificaciones residenciales con métodos probados.',
        },
        {
            icon: FaWarehouse,
            title: 'Galpones y Tinglados',
            description: 'Estructuras metálicas resistentes para uso industrial y comercial.',
        },
        {
            icon: FaTools,
            title: 'Steel Frame',
            description: 'Construcción en seco rápida, eficiente y térmica.',
        },
        {
            icon: FaRulerCombined,
            title: 'Good Frame',
            description: 'Estructuras de acero galvanizado liviano de última tecnología.',
        },
        {
            icon: FaPaintRoller,
            title: 'Revestimientos',
            description: 'Colocación de cerámicos, porcelanatos y revestimientos plásticos.',
        },
    ];

    return (
        <section id="servicios" className="py-24 bg-white">
            <div className="container-custom mx-auto">

                {/* Encabezado de sección con márgenes correctos */}
                <div className="max-w-2xl mb-16 px-4 md:px-0">
                    <span className="text-[#1e3a8a] font-bold tracking-wider uppercase text-sm mb-2 block">Nuestros Servicios</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">Soluciones Profesionales para cada Necesidad</h2>
                    <p className="text-lg text-[#475569] leading-relaxed">
                        Ofrecemos un abanico completo de soluciones constructivas, desde la obra tradicional hasta los sistemas más modernos del mercado.
                    </p>
                </div>

                {/* Grilla de tarjetas con espaciado generoso */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-[#f8fafc] border border-gray-100 hover:border-[#1e3a8a] rounded-xl transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center border border-gray-200 mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="text-2xl text-[#1e3a8a]" />
                            </div>

                            <h3 className="text-xl font-bold text-[#1e293b] mb-3 group-hover:text-[#1e3a8a] transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-[#475569] leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#contacto" className="inline-block px-8 py-3 bg-[#1e293b] text-white font-bold rounded hover:bg-[#0f172a] transition-colors">
                        Solicitar Asesoramiento
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Services;
