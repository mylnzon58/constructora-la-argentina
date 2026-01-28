'use client';

import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Location = () => {
    const address = 'Balcarce 589, Villaguay, Entre Ríos, Argentina';
    const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Balcarce+589+Villaguay+Entre+Rios+Argentina';
    const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5!2d-59.0167!3d-31.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDUyJzAwLjEiUyA1OcKwMDEnMDAuMSJX!5e0!3m2!1ses!2sar!4v1234567890';

    return (
        <section id="ubicacion" className="section-padding bg-[#f8fafc]">
            <div className="container-custom">
                <div className="section-title" data-aos="fade-up">
                    <h2 className="text-[#0f172a]">Ubicación</h2>
                    <p className="text-[#475569]">Encuéntrenos en Villaguay, Entre Ríos</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Map Frame */}
                    <div className="lg:col-span-3" data-aos="fade-right">
                        <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#e2e8f0] h-[500px] bg-white">
                            <iframe
                                src={embedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Cooperativa de Construcción La Argentina"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div className="lg:col-span-2" data-aos="fade-left">
                        <div className="bg-white p-8 rounded-xl shadow-md border border-[#e2e8f0] h-full flex flex-col justify-center">
                            <div>
                                <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mb-6 shadow-md mx-auto lg:mx-0">
                                    <FaMapMarkerAlt className="text-3xl text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-[#0f172a] mb-6 text-center lg:text-left">
                                    Oficina Central
                                </h3>

                                <div className="space-y-6 mb-8">
                                    <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
                                        <div className="text-sm font-bold text-[#64748b] uppercase tracking-wide mb-1">
                                            Dirección
                                        </div>
                                        <div className="text-lg text-[#1e293b] font-medium">
                                            Balcarce 589
                                        </div>
                                    </div>

                                    <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
                                        <div className="text-sm font-bold text-[#64748b] uppercase tracking-wide mb-1">
                                            Localidad
                                        </div>
                                        <div className="text-lg text-[#1e293b] font-medium">
                                            Villaguay, Entre Ríos
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#dbeafe] rounded-lg p-5 mb-8 border border-[#bfdbfe]">
                                    <h4 className="font-bold text-[#1e40af] mb-2 text-sm">
                                        Referencia
                                    </h4>
                                    <p className="text-sm text-[#1e3a8a] leading-relaxed">
                                        Estamos ubicados en zona céntrica, con fácil acceso y estacionamiento.
                                    </p>
                                </div>
                            </div>

                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full shadow-md text-center justify-center"
                            >
                                <FaExternalLinkAlt />
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
