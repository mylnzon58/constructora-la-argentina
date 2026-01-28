'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#nosotros', label: 'Empresa' },
        { href: '#servicios', label: 'Servicios' },
        { href: '#obras', label: 'Proyectos' },
        { href: '#contacto', label: 'Contacto' },
    ];

    return (
        <header
            // Header más alto en móvil (h-auto con padding) para acomodar logo grande
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white border-b border-gray-100 ${isScrolled ? 'shadow-md lg:py-0 py-2' : 'lg:py-4 py-3'}`}
        >
            <div className="container-custom mx-auto">
                <div className="flex items-center justify-between h-28 lg:h-32 transition-all duration-300">

                    {/* LOGO - Responsivo: EXTRA GRANDE en Móvil (h-24 w-72) y Gigante en Desktop (h-32) */}
                    <div className="flex-shrink-0 relative h-24 w-72 lg:h-32 lg:w-[600px] -ml-2 lg:-ml-8 flex items-center overflow-visible transition-all duration-300">
                        <a href="#inicio" className="block relative w-full h-full lg:transform lg:scale-125 lg:origin-left hover:opacity-90 transition-opacity">
                            <Image
                                src="/logo.png"
                                alt="COOP. I.A. ARGENTINA LTDA."
                                fill
                                className="object-contain object-left"
                                priority
                                sizes="(max-width: 768px) 300px, 600px"
                            />
                        </a>
                    </div>

                    {/* MENÚ ESCRITORIO */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-[#1e293b] hover:text-[#1e3a8a] font-bold text-sm uppercase tracking-wider transition-colors border-b-2 border-transparent hover:border-[#1e3a8a] pb-1"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* BOTONES DE CONTACTO */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="https://wa.me/543455456696"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold rounded text-sm flex items-center gap-2 transition-all shadow-sm"
                        >
                            <FaWhatsapp className="text-lg text-[#4ade80]" />
                            WhatsApp
                        </a>
                    </div>

                    {/* BOTÓN HAMBURGUESA MÓVIL */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-[#1e293b] hover:text-[#1e3a8a] transition-colors"
                        aria-label="Abrir menú"
                    >
                        {isMobileMenuOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
                    </button>
                </div>

                {/* MENÚ MÓVIL DESPLEGABLE */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-0 flex flex-col animate-fade-in">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-4 px-6 text-[#1e293b] font-bold uppercase border-b border-gray-50 hover:bg-gray-50 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="p-4 bg-gray-50">
                            <a
                                href="https://wa.me/543455456696"
                                className="w-full py-4 bg-[#1e293b] text-white font-bold text-center rounded flex justify-center items-center gap-2"
                            >
                                <FaWhatsapp size={20} />
                                Contactar Ahora
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
