'use client';

import {
    FaHammer,
    FaSwimmingPool,
    FaTools,
    FaHardHat,
    FaShieldAlt,
    FaWarehouse,
    FaFileInvoiceDollar
} from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: FaHardHat,
            title: 'Obra Nueva Tradicional y Seco',
            description: 'Ejecución integral de viviendas y proyectos desde cero. Expertos en sistemas tradicionales y Steel Frame de alta eficiencia.',
        },
        {
            icon: FaSwimmingPool,
            title: 'Quinchos y Piletas',
            description: 'Diseño y construcción de espacios de recreación. Garantizamos estanqueidad técnica y terminaciones estéticas de primer nivel.',
        },
        {
            icon: FaTools,
            title: 'Reformas y Renovaciones',
            description: 'Especialistas en remodelación de cocinas y baños. Optimizamos la funcionalidad y estética de los ambientes más vitales de tu hogar.',
        },
        {
            icon: FaHammer,
            title: 'Ampliaciones y Remodelaciones',
            description: 'Transformamos espacios existentes con soluciones rápidas y eficaces en construcción tradicional o en seco.',
        },
        {
            icon: FaFileInvoiceDollar,
            title: 'Instalaciones Especializadas',
            description: 'Servicios profesionales de plomería, electricidad y pintura bajo normas de seguridad vigentes para un acabado impecable.',
        },
        {
            icon: FaShieldAlt,
            title: 'Mantenimiento e Impermeabilización',
            description: 'Protección avanzada de techos y terrazas. Soluciones definitivas para garantizar la durabilidad de la estructura ante el clima.',
        },
        {
            icon: FaWarehouse,
            title: 'Galpones y Estructuras',
            description: 'Ingeniería aplicada a naves industriales y tinglados rurales con máxima resistencia mecánica.',
        }
    ];

    return (
        <section id="servicios" className="py-24 bg-white">
            <div className="container-custom mx-auto">

                {/* Encabezado con Copy Estratégico */}
                <div className="max-w-4xl mb-16 md:mb-20">
                    <span className="text-[#ea580c] font-bold tracking-wider uppercase text-sm mb-2 block">Soluciones de Ingeniería</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-8 uppercase font-display bg-clip-text text-transparent bg-gradient-to-r from-[#1e293b] to-[#64748b]">
                        Servicio de Construcción Integral
                    </h2>

                    <div className="text-lg text-[#475569] leading-relaxed space-y-4 border-l-4 border-[#ea580c] pl-6 md:pl-8">
                        <p className="font-semibold text-[#1e293b]">
                            Ofrecemos un servicio de construcción integral que abarca obras nuevas, ampliaciones y remodelaciones, dominando tanto el sistema tradicional como la construcción en seco de vanguardia.
                        </p>
                        <p className="text-base">
                            Cada proyecto es ejecutado bajo normas de excelencia, cuidando meticulosamente los detalles técnicos, la durabilidad de los materiales y la total funcionalidad de los espacios. Nuestra capacidad operativa nos permite integrar todas las especialidades en una solución completa y profesional.
                        </p>
                    </div>
                </div>

                {/* Grilla de Servicios Mejorada */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-[#f8fafc] border border-gray-100 hover:border-[#ea580c] rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-b from-white to-[#f8fafc]"
                        >
                            <div className="w-16 h-16 bg-[#0f172a] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#ea580c] transition-colors duration-500 shadow-lg">
                                <service.icon className="text-2xl text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-[#1e293b] mb-4 group-hover:text-[#ea580c] transition-colors uppercase font-display tracking-tight">
                                {service.title}
                            </h3>

                            <p className="text-[#475569] leading-relaxed text-sm md:text-base">
                                {service.description}
                            </p>

                            <div className="mt-6 w-10 h-1 bg-gray-200 group-hover:w-full group-hover:bg-[#ea580c] transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a href="#contacto" className="inline-flex items-center gap-3 px-10 py-5 bg-[#0f172a] text-white font-bold rounded-sm hover:bg-[#ea580c] transition-all shadow-2xl uppercase tracking-widest text-sm">
                        Iniciar mi proyecto ahora
                        <FaHammer className="animate-pulse" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Services;
