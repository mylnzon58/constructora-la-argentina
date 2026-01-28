'use client';

import { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        localidad: '',
        tipoObra: '',
        mensaje: '',
        honeypot: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const tiposObra = [
        'Seleccione tipo de obra',
        'Construcción nueva',
        'Ampliación',
        'Refacción',
        'Galpón/Tinglado',
        'Steel Frame',
        'Good Frame',
        'Revestimientos',
        'Otro',
    ];

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
        if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido';
        if (!formData.localidad.trim()) newErrors.localidad = 'La localidad es requerida';
        if (!formData.tipoObra || formData.tipoObra === 'Seleccione tipo de obra') newErrors.tipoObra = 'Seleccione un tipo de obra';
        if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.honeypot) return;
        if (!validateForm()) return;

        setIsSubmitting(true);

        const mensaje = `Hola, mi nombre es ${formData.nombre}.%0A%0A` +
            `📞 Teléfono: ${formData.telefono}%0A` +
            `📍 Localidad: ${formData.localidad}%0A` +
            `🏗️ Tipo de obra: ${formData.tipoObra}%0A%0A` +
            `Mensaje:%0A${formData.mensaje}`;

        const whatsappUrl = `https://wa.me/543455456696?text=${mensaje}`;

        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
            setFormData({
                nombre: '', telefono: '', localidad: '', tipoObra: '', mensaje: '', honeypot: '',
            });
        }, 500);
    };

    return (
        <section id="contacto" className="py-24 bg-white">
            <div className="container-custom mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <div>
                        <span className="text-[#1e3a8a] font-bold tracking-wider uppercase text-sm mb-2 block">Contacto</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">Solicitar Presupuesto</h2>
                        <p className="text-lg text-[#475569] mb-10 leading-relaxed">
                            Estamos para asesorarlo en su proyecto. Contáctenos para coordinar una visita técnica o recibir un presupuesto preliminar sin cargo.
                        </p>

                        <div className="space-y-6">
                            <a href="https://wa.me/543455456696" className="flex items-center gap-5 p-6 bg-white border border-gray-200 rounded-xl hover:border-[#25D366] hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                                    <FaWhatsapp size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1e293b] text-lg">WhatsApp</h3>
                                    <p className="text-[#64748b]">+54 3455 456696</p>
                                </div>
                            </a>

                            <a href="tel:+543455456696" className="flex items-center gap-5 p-6 bg-white border border-gray-200 rounded-xl hover:border-[#1e3a8a] hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
                                    <FaPhone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1e293b] text-lg">Teléfono</h3>
                                    <p className="text-[#64748b]">3455 456696</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-5 p-6 bg-white border border-gray-200 rounded-xl">
                                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1e293b] text-lg">Oficina</h3>
                                    <p className="text-[#64748b]">Balcarce 589, Villaguay</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-[#f8fafc] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-[#1e293b] mb-6">Envíenos un mensaje</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex="-1" autoComplete="off" />

                            <div>
                                <label className="block text-sm font-bold text-[#64748b] mb-2">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] outline-none transition-colors"
                                    placeholder="Su nombre completo"
                                />
                                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-[#64748b] mb-2">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] outline-none transition-colors"
                                        placeholder="Ej: 3455..."
                                    />
                                    {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#64748b] mb-2">Localidad</label>
                                    <input
                                        type="text"
                                        name="localidad"
                                        value={formData.localidad}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] outline-none transition-colors"
                                        placeholder="Ciudad"
                                    />
                                    {errors.localidad && <p className="text-red-500 text-sm mt-1">{errors.localidad}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-[#64748b] mb-2">Tipo de Obra</label>
                                <select
                                    name="tipoObra"
                                    value={formData.tipoObra}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] outline-none transition-colors bg-white"
                                >
                                    {tiposObra.map((tipo, i) => <option key={i} value={tipo}>{tipo}</option>)}
                                </select>
                                {errors.tipoObra && <p className="text-red-500 text-sm mt-1">{errors.tipoObra}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-[#64748b] mb-2">Mensaje</label>
                                <textarea
                                    name="mensaje"
                                    rows="4"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] outline-none transition-colors resize-none"
                                    placeholder="Describa brevemente su proyecto..."
                                ></textarea>
                                {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
                            </div>

                            {/* BOTÓN WHATSAPP CORREGIDO: Verde, centrado, buen padding */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-lg text-lg transition-all shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed mt-4"
                            >
                                {isSubmitting ? (
                                    'Abriendo WhatsApp...'
                                ) : (
                                    <>
                                        <FaWhatsapp size={24} />
                                        Enviar Consulta por WhatsApp
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
