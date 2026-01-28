'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function AvisoLegal() {
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
                        Aviso Legal
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-[var(--color-neutral-600)] mb-8">
                            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-AR')}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                1. Datos Identificativos
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                En cumplimiento con el deber de información dispuesto en la legislación argentina,
                                se facilitan los siguientes datos:
                            </p>
                            <ul className="list-none pl-0 text-[var(--color-neutral-700)] space-y-2">
                                <li><strong>Titular del sitio web:</strong> Cooperativa de Construcción La Argentina</li>
                                <li><strong>Tipo de entidad:</strong> Cooperativa de Trabajo</li>
                                <li><strong>Domicilio:</strong> Balcarce 589, Villaguay, Entre Ríos, Argentina</li>
                                <li><strong>Teléfono:</strong> +54 3455 456696</li>
                                <li><strong>Email:</strong> coop.detrabajolaargentinaldta@gmail.com</li>
                                <li><strong>Sitio web:</strong> constructoralaargentina.com</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                2. Objeto del Sitio Web
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Este sitio web tiene como objeto proporcionar información institucional sobre la
                                Cooperativa de Construcción La Argentina y los servicios de construcción que ofrece
                                en la localidad de Villaguay, Entre Ríos, Argentina. El sitio facilita el contacto
                                entre potenciales clientes y la cooperativa para consultas y solicitudes de presupuesto.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                3. Condiciones de Uso
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                El acceso y uso de este sitio web implica la aceptación de las presentes condiciones
                                de uso. El usuario se compromete a:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li>Utilizar el sitio web de forma lícita y conforme a la legislación vigente</li>
                                <li>No realizar actividades que puedan dañar, inutilizar o sobrecargar el sitio</li>
                                <li>No introducir virus informáticos, código malicioso o cualquier elemento dañino</li>
                                <li>Proporcionar información veraz y actualizada en los formularios de contacto</li>
                                <li>Respetar los derechos de propiedad intelectual</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                4. Responsabilidad sobre los Contenidos
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                La Cooperativa de Construcción La Argentina se esfuerza por mantener la información
                                del sitio web actualizada y precisa. Sin embargo:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li>No garantizamos la exactitud, integridad o actualidad de todos los contenidos</li>
                                <li>Nos reservamos el derecho de modificar, actualizar o eliminar contenidos sin
                                    previo aviso</li>
                                <li>No nos responsabilizamos por errores u omisiones en la información publicada</li>
                                <li>La información del sitio no constituye asesoramiento profesional vinculante</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                5. Exclusión de Garantías y Responsabilidad
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                La Cooperativa de Construcción La Argentina no se responsabiliza por:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li>Interrupciones, errores o fallos en el acceso al sitio web</li>
                                <li>Virus informáticos o elementos dañinos que puedan afectar el equipo del usuario</li>
                                <li>Daños derivados del uso indebido del sitio web</li>
                                <li>Contenidos de sitios web de terceros enlazados desde este sitio</li>
                                <li>Decisiones tomadas en base a la información del sitio sin consulta profesional previa</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                6. Propiedad Intelectual e Industrial
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, diseños,
                                código fuente y demás elementos, son propiedad de la Cooperativa de Construcción
                                La Argentina o se utilizan con la debida autorización.
                            </p>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Queda prohibida la reproducción, distribución, comunicación pública, transformación
                                o cualquier otra forma de explotación de los contenidos sin autorización expresa
                                y por escrito del titular.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                7. Enlaces a Sitios de Terceros
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Este sitio web puede contener enlaces a sitios web de terceros (como Google Maps,
                                WhatsApp, etc.). La Cooperativa de Construcción La Argentina no controla ni se
                                responsabiliza por el contenido, políticas de privacidad o prácticas de sitios
                                web de terceros. El acceso a estos sitios es responsabilidad exclusiva del usuario.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                8. Protección de Datos Personales
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                El tratamiento de datos personales se realiza conforme a lo establecido en nuestra
                                <Link href="/politica-de-privacidad" className="text-[var(--color-primary)] hover:underline"> Política de Privacidad</Link> y
                                en cumplimiento de la Ley N° 25.326 de Protección de Datos Personales de la
                                República Argentina.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                9. Información sobre Servicios
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                La información sobre servicios de construcción publicada en este sitio web tiene
                                carácter meramente informativo y no constituye una oferta vinculante.
                            </p>
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                                <p className="text-[var(--color-neutral-700)] leading-relaxed mb-2">
                                    <strong>Descargo de Responsabilidad:</strong>
                                </p>
                                <ul className="list-disc pl-6 text-[var(--color-neutral-700)] text-sm">
                                    <li>Los presupuestos se realizan de forma personalizada según cada proyecto</li>
                                    <li>Los plazos y condiciones están sujetos a evaluación técnica</li>
                                    <li>Actualmente operamos exclusivamente en Villaguay, Entre Ríos</li>
                                    <li>Las zonas mencionadas como "en evaluación" no garantizan prestación de servicios</li>
                                    <li>Todos los servicios requieren contratación formal mediante contrato específico</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                10. Habilitación Legal
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                La Cooperativa de Construcción La Argentina opera como cooperativa de trabajo
                                debidamente habilitada. Contamos con Maestros Mayores de Obra con matrícula
                                profesional vigente. La documentación de habilitación está disponible para
                                verificación por parte de clientes y autoridades competentes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                11. Modificaciones del Aviso Legal
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Nos reservamos el derecho de modificar el presente Aviso Legal en cualquier momento.
                                Las modificaciones entrarán en vigor desde su publicación en el sitio web. Es
                                responsabilidad del usuario revisar periódicamente este aviso legal.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                12. Legislación Aplicable y Jurisdicción
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                El presente Aviso Legal se rige por la legislación de la República Argentina.
                                Para la resolución de cualquier controversia derivada del acceso o uso de este
                                sitio web, las partes se someten expresamente a la jurisdicción de los tribunales
                                ordinarios de Villaguay, Entre Ríos, Argentina, con renuncia expresa a cualquier
                                otro fuero que pudiera corresponderles.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                13. Contacto
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Para consultas, sugerencias o reclamaciones relacionadas con este Aviso Legal,
                                puede contactarnos:
                            </p>
                            <ul className="list-none pl-0 text-[var(--color-neutral-700)]">
                                <li><strong>Dirección:</strong> Balcarce 589, Villaguay, Entre Ríos, Argentina</li>
                                <li><strong>Teléfono:</strong> +54 3455 456696</li>
                                <li><strong>WhatsApp:</strong> +54 3455 456696</li>
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
