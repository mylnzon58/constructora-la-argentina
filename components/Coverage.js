'use client';

import { FaMapMarkerAlt, FaCheckCircle, FaClock } from 'react-icons/fa';

const Coverage = () => {
    const currentLocation = {
        name: 'Villaguay',
        status: 'active',
        description: 'Zona de operación actual',
    };

    const futureLocations = [
        { name: 'Paraná', status: 'future' },
        { name: 'Concordia', status: 'future' },
        { name: 'Viale', status: 'future' },
        { name: 'Villa Elisa', status: 'future' },
    ];

    return (
        <section id="alcance" className="section-padding bg-white">
            <div className="container-custom">
                <div className="section-title" data-aos="fade-up">
                    <h2 className="text-[#0f172a]">Alcance Geográfico</h2>
                    <p className="text-[#475569]">Nuestra área de cobertura en Entre Ríos</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Map Representation */}
                    <div data-aos="fade-right">
                        <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#e2e8f0] bg-[#f8fafc] h-[500px]">
                            {/* Fondo de mapa conceptual */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="w-full h-full border-2 border-dashed border-[#cbd5e1] rounded-lg relative opacity-50"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                    {/* Villaguay Center Point */}
                                    <div className="flex flex-col items-center">
                                        <FaMapMarkerAlt className="text-6xl text-[#1e3a8a] drop-shadow-lg mb-4 animate-bounce" />
                                        <h3 className="text-2xl font-bold text-[#0f172a] bg-white/80 px-4 py-1 rounded-md mb-2">
                                            Villaguay
                                        </h3>
                                        <span className="text-[#16a34a] font-bold bg-white/80 px-2 py-0.5 rounded text-sm border border-[#16a34a]">
                                            ZONA ACTIVA
                                        </span>
                                    </div>
                                </div>

                                {/* Decorative dots for other cities */}
                                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#94a3b8] rounded-full"></div>
                                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#94a3b8] rounded-full"></div>
                                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#94a3b8] rounded-full"></div>
                            </div>

                            {/* Map Legend Panel */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg p-4 shadow-md border border-[#e2e8f0]">
                                <div className="flex flex-wrap gap-6 justify-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                                        <span className="text-[#334155] font-medium">Zona actual (Villaguay)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-[#94a3b8] rounded-full"></div>
                                        <span className="text-[#64748b] font-medium">Proyección futura</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="mt-4 text-center text-sm text-[#64748b] italic">
                            Mapa ilustrativo de nuestra zona de influencia principal.
                        </p>
                    </div>

                    {/* Locations List */}
                    <div data-aos="fade-left">
                        {/* Current Location - Highlighted */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#cae6d5] rounded-full">
                                    <FaCheckCircle className="text-xl text-[#16a34a]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0f172a]">
                                    Zona de Operación Actual
                                </h3>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-[#e2e8f0] p-6 hover:border-[#16a34a] transition-colors duration-300">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="text-2xl text-[#1e3a8a]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0f172a] mb-2">
                                            {currentLocation.name}
                                        </h4>
                                        <p className="text-[#475569] mb-3">
                                            {currentLocation.description}. Sede central y base operativa logística.
                                        </p>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#dcfce7] rounded-full text-sm font-bold text-[#166534]">
                                            <span className="w-2 h-2 bg-[#16a34a] rounded-full animate-pulse"></span>
                                            Operativo
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Future Locations */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#e2e8f0] rounded-full">
                                    <FaClock className="text-xl text-[#64748b]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a]">
                                    Zonas en Evaluación
                                </h3>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {futureLocations.map((location, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 rounded-lg border border-[#e2e8f0] flex items-center justify-between hover:bg-[#f8fafc] transition-colors"
                                    >
                                        <div>
                                            <h4 className="font-bold text-[#334155]">
                                                {location.name}
                                            </h4>
                                            <p className="text-xs text-[#64748b]">Entre Ríos</p>
                                        </div>
                                        <span className="text-xs px-2 py-1 bg-[#f1f5f9] text-[#64748b] rounded font-medium">
                                            Futuro
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Disclaimer Box */}
                            <div className="mt-8 bg-[#f8fafc] border-l-4 border-[#94a3b8] p-5 rounded-r-lg">
                                <p className="text-sm text-[#475569] leading-relaxed">
                                    <strong className="text-[#334155]">Nota importante:</strong> Actualmente operamos exclusivamente en Villaguay.
                                    Las localidades marcadas como "en evaluación" son parte de nuestro plan estratégico de expansión a largo plazo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coverage;
