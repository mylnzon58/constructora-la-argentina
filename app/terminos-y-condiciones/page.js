'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function TerminosYCondiciones() {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-50)]">
            {/* Header */}
            <div className="bg-white shadow-md">
                <div className="container-custom py-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium transition-colors duration-200"
                    >
                        <FaArrowLeft />
                        Volver al inicio
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="container-custom py-16">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-8">
                        Términos y Condiciones
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-[var(--color-neutral-600)] mb-8">
                            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-AR')}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                1. Información General
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Los presentes Términos y Condiciones regulan el uso del sitio web de la
                                <strong> Cooperativa de Construcción La Argentina</strong>, con domicilio en
                                Balcarce 589, Villaguay, Entre Ríos, Argentina.
                            </p>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos
                                y condiciones. Si no está de acuerdo con alguna parte de estos términos,
                                no debe utilizar nuestro sitio web.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                2. Uso del Sitio Web
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Este sitio web tiene carácter exclusivamente informativo sobre los servicios
                                de construcción que ofrece nuestra cooperativa. La información contenida en
                                este sitio no constituye una oferta comercial vinculante.
                            </p>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                El usuario se compromete a utilizar el sitio web de forma lícita y conforme
                                a la legislación vigente en la República Argentina.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                3. Servicios Ofrecidos
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                La Cooperativa de Construcción La Argentina ofrece servicios de construcción
                                en la modalidad de cooperativa de trabajo. Los servicios incluyen, entre otros:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li>Albañilería general</li>
                                <li>Construcciones tradicionales</li>
                                <li>Galpones y tinglados</li>
                                <li>Steel Frame y Good Frame</li>
                                <li>Revestimientos plásticos y cerámicos</li>
                            </ul>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Todos los servicios están sujetos a evaluación técnica previa y disponibilidad.
                                Los presupuestos se realizan de forma personalizada según las características
                                de cada proyecto.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                4. Alcance Geográfico
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Actualmente, nuestros servicios se prestan exclusivamente en la localidad de
                                <strong> Villaguay, Entre Ríos</strong>. Las zonas mencionadas como "en evaluación"
                                (Paraná, Concordia, Viale, Villa Elisa) representan áreas de posible expansión
                                futura y no constituyen un compromiso de prestación de servicios en dichas localidades.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                5. Presupuestos y Contratación
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Los presupuestos proporcionados tienen una validez de 30 días corridos desde
                                su emisión, salvo indicación contraria. Los precios están sujetos a variaciones
                                según las condiciones del mercado de materiales de construcción.
                            </p>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                La contratación de servicios se formaliza mediante la firma de un contrato
                                específico que detalla alcance, plazos, condiciones de pago y garantías aplicables.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                6. Responsabilidades
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                La Cooperativa de Construcción La Argentina se compromete a:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li>Ejecutar los trabajos con profesionalismo y calidad</li>
                                <li>Cumplir con las normativas de construcción vigentes</li>
                                <li>Mantener las condiciones de seguridad laboral en obra</li>
                                <li>Respetar los plazos acordados, salvo causas de fuerza mayor</li>
                            </ul>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                La cooperativa no se responsabiliza por demoras causadas por condiciones
                                climáticas adversas, falta de suministros por parte de terceros, o modificaciones
                                solicitadas por el cliente que alteren el proyecto original.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                7. Propiedad Intelectual
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos
                                y diseños, son propiedad de la Cooperativa de Construcción La Argentina o se
                                utilizan con la debida autorización. Queda prohibida su reproducción total o
                                parcial sin autorización expresa.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                8. Limitación de Responsabilidad
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                La información contenida en este sitio web se proporciona "tal cual" y con
                                fines informativos. Si bien nos esforzamos por mantener la información actualizada
                                y precisa, no garantizamos la exactitud, integridad o actualidad de la misma.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                9. Enlaces a Terceros
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Este sitio web puede contener enlaces a sitios de terceros. No nos responsabilizamos
                                por el contenido, políticas de privacidad o prácticas de sitios web de terceros.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                10. Modificaciones
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier
                                momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web.
                                Es responsabilidad del usuario revisar periódicamente estos términos.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                11. Legislación Aplicable y Jurisdicción
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Estos Términos y Condiciones se rigen por las leyes de la República Argentina.
                                Para cualquier controversia derivada del uso de este sitio web o de la contratación
                                de servicios, las partes se someten a la jurisdicción de los tribunales ordinarios
                                de Villaguay, Entre Ríos, Argentina.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                12. Contacto
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Para consultas sobre estos Términos y Condiciones, puede contactarnos:
                            </p>
                            <ul className="list-none pl-0 text-[var(--color-neutral-700)]">
                                <li><strong>Dirección:</strong> Balcarce 589, Villaguay, Entre Ríos</li>
                                <li><strong>Teléfono:</strong> +54 3455 456696</li>
                                <li><strong>Email:</strong> coop.detrabajolaargentinaldta@gmail.com</li>
                            </ul>
                        </section>
                    </div>

                    <div className="mt-12 pt-8 border-t border-[var(--color-neutral-200)]">
                        <Link
                            href="/"
                            className="btn-primary"
                        >
                            <FaArrowLeft />
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
