'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Vivienda Steel Frame',
            category: 'Steel Frame',
            location: 'Zona Norte, Villaguay',
            image: '/obras/obra-vivienda.png',
            description: 'Construcción integral de vivienda moderna utilizando sistema Steel Frame de alta eficiencia térmica.',
        },
        {
            id: 2,
            title: 'Nave Industrial',
            category: 'Galpones',
            location: 'Parque Industrial',
            image: '/obras/obra-galpon.png',
            description: 'Estructura metálica de gran escala para uso logístico e industrial, con piso de hormigón alisado.',
        },
        {
            id: 3,
            title: 'Revestimientos y Terminaciones',
            category: 'Terminaciones',
            location: 'Centro, Villaguay',
            image: '/obras/obra-revestimiento.png',
            description: 'Aplicación profesional de revestimientos texturados y acabados finos en fachadas.',
        },
        {
            id: 4,
            title: 'Ampliación Residencial',
            category: 'Tradicional',
            location: 'Barrio San Judas',
            image: '/obras/obra-vivienda.png',
            description: 'Ampliación de planta alta respetando la arquitectura existente.',
        },
        {
            id: 5,
            title: 'Tinglado Rural',
            category: 'Estructuras',
            location: 'Zona Rural',
            image: '/obras/obra-galpon.png',
            description: 'Techado parabólico para guarda de maquinaria agrícola.',
        },
        {
            id: 6,
            title: 'Remodelación Comercial',
            category: 'Comercial',
            location: 'Villaguay',
            image: '/obras/obra-revestimiento.png',
            description: 'Renovación de fachada y aplicación de revestimientos plásticos.',
        }
    ];

    return (
        <section id="obras" className="py-24 bg-white">
            <div className="container-custom mx-auto">

                <div className="mb-12">
                    <span className="text-[#1e3a8a] font-bold tracking-wider uppercase text-sm mb-2 block">Nuestro Trabajo</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">Obras Recientes</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedImage(project)}
                        >
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    quality={85}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <FaSearchPlus className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 text-3xl drop-shadow-lg" />
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold text-[#1e3a8a] bg-[#eff6ff] px-2 py-1 rounded uppercase tracking-wide">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-[#1e293b] mb-1 group-hover:text-[#1e3a8a] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-[#64748b] mb-0">
                                    {project.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* TEXTO DE APOYO AGREGADO */}
                <div className="mt-12 p-6 bg-[#f8fafc] rounded-lg border border-gray-200 text-center md:text-left">
                    <p className="text-sm text-[#64748b] leading-relaxed italic">
                        <strong>Nota:</strong> Las obras exhibidas corresponden a trabajos realizados y ejemplos ilustrativos.
                        Cada proyecto representa nuestro compromiso con la calidad, la seguridad y la correcta ejecución técnica.
                    </p>
                </div>

            </div>

            {/* Modal Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2">
                        <FaTimes size={32} />
                    </button>

                    <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="md:w-2/3 bg-gray-100 relative min-h-[300px]">
                            <Image
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 66vw"
                                quality={90}
                            />
                        </div>
                        <div className="md:w-1/3 p-8 flex flex-col justify-center bg-white">
                            <span className="text-[#1e3a8a] font-bold uppercase text-xs tracking-wider mb-2">{selectedImage.category}</span>
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{selectedImage.title}</h3>
                            <p className="text-[#334155] leading-relaxed mb-6">
                                {selectedImage.description}
                            </p>
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <span className="block text-xs text-gray-400 uppercase font-semibold">Ubicación</span>
                                <span className="text-[#0f172a] font-medium">{selectedImage.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
