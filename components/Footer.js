'use client';

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#nosotros', label: 'Empresa' },
        { href: '#servicios', label: 'Servicios' },
        { href: '#obras', label: 'Proyectos' },
        { href: '#contacto', label: 'Contacto' },
    ];

    const legalLinks = [
        { href: '/terminos-y-condiciones', label: 'Términos y Condiciones' },
        { href: '/politica-de-privacidad', label: 'Política de Privacidad' },
        { href: '/aviso-legal', label: 'Aviso Legal' },
    ];

    return (
        <footer className="bg-[#0f172a] text-white border-t border-slate-800">
            <div className="container-custom mx-auto py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Company Info */}
                    <div>
                        <div className="mb-6">
                            <div className="relative h-32 w-80">
                                <Image
                                    src="/logo.png"
                                    alt="COOP. I.A. ARGENTINA LTDA."
                                    fill
                                    className="object-contain object-left drop-shadow-lg"
                                />
                            </div>
                        </div>

                        {/* TEXTO INSTITUCIONAL OFICIAL */}
                        <div className="space-y-2 mb-6 text-sm text-slate-300 leading-relaxed">
                            <p className="font-bold text-white">COOP. I.A. ARGENTINA LTDA.</p>
                            <p>Cooperativa de construcción habilitada en Villaguay, Entre Ríos.</p>
                            <p>Compromiso, calidad y responsabilidad en cada obra.</p>
                        </div>

                        <div className="flex gap-2 text-xs text-slate-500 uppercase tracking-wider font-semibold">
                            <span>Licencia Municipal Vigente</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg text-white mb-6 uppercase tracking-wider">Navegación</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg text-white mb-6 uppercase tracking-wider">Contacto</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://wa.me/543455456696"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group"
                                >
                                    <FaWhatsapp className="text-xl text-[#25D366] mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">+54 3455 456696</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@constructoralaargentina.com"
                                    className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group"
                                >
                                    <FaEnvelope className="text-lg text-blue-400 mt-0.5" />
                                    <span className="text-sm">info@constructoralaargentina.com</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-slate-300">
                                <FaMapMarkerAlt className="text-lg text-red-400 mt-0.5" />
                                <span className="text-sm leading-relaxed">
                                    Balcarce 589 – E3240<br />
                                    Villaguay, Entre Ríos, Argentina
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold text-lg text-white mb-6 uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-3 mb-6">
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors text-xs"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 bg-[#020617]">
                <div className="container-custom mx-auto py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <div>
                            © {currentYear} COOP. I.A. ARGENTINA LTDA. Todos los derechos reservados.
                        </div>
                        <div>
                            <a href="https://constructoralaargentina.com" className="hover:text-slate-300 transition-colors">
                                www.constructoralaargentina.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
