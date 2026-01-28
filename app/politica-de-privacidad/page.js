'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function PoliticaDePrivacidad() {
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
                        Política de Privacidad
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-[var(--color-neutral-600)] mb-8">
                            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-AR')}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                1. Introducción
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                La <strong>Cooperativa de Construcción La Argentina</strong>, con domicilio en
                                Balcarce 589, Villaguay, Entre Ríos, Argentina, se compromete a proteger la
                                privacidad de los datos personales de sus usuarios y clientes.
                            </p>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y
                                protegemos su información personal, en cumplimiento con la Ley N° 25.326 de
                                Protección de Datos Personales de la República Argentina.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                2. Información que Recopilamos
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Podemos recopilar los siguientes tipos de información personal:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li><strong>Información de contacto:</strong> nombre, apellido, dirección de email,
                                    número de teléfono, dirección postal</li>
                                <li><strong>Información del proyecto:</strong> localidad, tipo de obra, detalles
                                    del proyecto de construcción</li>
                                <li><strong>Información técnica:</strong> dirección IP, tipo de navegador,
                                    sistema operativo, páginas visitadas</li>
                                <li><strong>Comunicaciones:</strong> mensajes enviados a través del formulario
                                    de contacto o WhatsApp</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                3. Cómo Recopilamos la Información
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Recopilamos información personal de las siguientes maneras:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li><strong>Formulario de contacto:</strong> cuando completa y envía el formulario
                                    en nuestro sitio web</li>
                                <li><strong>WhatsApp:</strong> cuando se comunica con nosotros a través de WhatsApp</li>
                                <li><strong>Llamadas telefónicas:</strong> cuando nos contacta telefónicamente</li>
                                <li><strong>Email:</strong> cuando nos envía un correo electrónico</li>
                                <li><strong>Cookies:</strong> información técnica recopilada automáticamente al
                                    navegar por nuestro sitio</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                4. Uso de la Información
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Utilizamos la información personal recopilada para los siguientes fines:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li>Responder a sus consultas y solicitudes de información</li>
                                <li>Elaborar presupuestos personalizados</li>
                                <li>Gestionar la contratación y ejecución de servicios de construcción</li>
                                <li>Mantener comunicación sobre el estado de proyectos</li>
                                <li>Mejorar nuestros servicios y la experiencia del usuario</li>
                                <li>Cumplir con obligaciones legales y regulatorias</li>
                            </ul>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                <strong>No utilizamos</strong> su información personal para fines de marketing
                                masivo, publicidad no solicitada o venta a terceros.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                5. Compartir Información con Terceros
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                No vendemos, alquilamos ni compartimos su información personal con terceros,
                                excepto en los siguientes casos:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li><strong>Proveedores de servicios:</strong> empresas que nos ayudan a operar
                                    nuestro sitio web (hosting, servicios de email), bajo estrictos acuerdos de
                                    confidencialidad</li>
                                <li><strong>Obligaciones legales:</strong> cuando sea requerido por ley, orden
                                    judicial o autoridad competente</li>
                                <li><strong>Protección de derechos:</strong> para proteger nuestros derechos,
                                    propiedad o seguridad, o los de nuestros usuarios</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                6. WhatsApp y Comunicaciones
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Al contactarnos a través de WhatsApp, sus datos serán procesados de acuerdo con
                                la política de privacidad de WhatsApp (Meta). Le recomendamos revisar sus términos.
                                Nosotros utilizamos WhatsApp únicamente como canal de comunicación directa con
                                clientes y no compartimos la información recibida con terceros ajenos a la prestación
                                del servicio solicitado.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                7. Cookies y Tecnologías Similares
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Nuestro sitio web puede utilizar cookies y tecnologías similares para:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li>Mejorar la funcionalidad del sitio</li>
                                <li>Analizar el tráfico y uso del sitio</li>
                                <li>Recordar sus preferencias</li>
                            </ul>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Puede configurar su navegador para rechazar cookies, aunque esto puede afectar
                                la funcionalidad del sitio.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                8. Seguridad de los Datos
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Implementamos medidas de seguridad técnicas y organizativas apropiadas para
                                proteger su información personal contra acceso no autorizado, alteración,
                                divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet
                                o almacenamiento electrónico es 100% seguro.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                9. Retención de Datos
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Conservamos su información personal durante el tiempo necesario para cumplir con
                                los fines descritos en esta política, salvo que la ley requiera o permita un
                                período de retención más prolongado. Los datos relacionados con proyectos de
                                construcción se conservan según lo establecido por la normativa vigente en materia
                                de construcción y responsabilidad civil.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                10. Sus Derechos (Ley 25.326)
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                De acuerdo con la Ley N° 25.326 de Protección de Datos Personales, usted tiene
                                derecho a:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-[var(--color-neutral-700)]">
                                <li><strong>Acceso:</strong> solicitar información sobre qué datos personales
                                    tenemos sobre usted</li>
                                <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos
                                    o incompletos</li>
                                <li><strong>Supresión:</strong> solicitar la eliminación de sus datos personales</li>
                                <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos personales</li>
                                <li><strong>Actualización:</strong> mantener sus datos actualizados</li>
                            </ul>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Para ejercer estos derechos, puede contactarnos a través de los medios indicados
                                en la sección de contacto.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                11. Menores de Edad
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos
                                intencionalmente información personal de menores de edad. Si tiene conocimiento
                                de que un menor ha proporcionado información personal, por favor contáctenos para
                                que podamos eliminarla.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                12. Modificaciones a esta Política
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier
                                momento. Los cambios entrarán en vigor inmediatamente después de su publicación
                                en el sitio web. Le recomendamos revisar periódicamente esta política.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                13. Contacto
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                                Para consultas sobre esta Política de Privacidad o para ejercer sus derechos,
                                puede contactarnos:
                            </p>
                            <ul className="list-none pl-0 text-[var(--color-neutral-700)]">
                                <li><strong>Responsable:</strong> Cooperativa de Construcción La Argentina</li>
                                <li><strong>Dirección:</strong> Balcarce 589, Villaguay, Entre Ríos, Argentina</li>
                                <li><strong>Teléfono:</strong> +54 3455 456696</li>
                                <li><strong>Email:</strong> info@constructoralaargentina.com</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                                14. Autoridad de Aplicación
                            </h2>
                            <p className="text-[var(--color-neutral-700)] leading-relaxed">
                                La Agencia de Acceso a la Información Pública es la autoridad de aplicación de
                                la Ley N° 25.326. Tiene la atribución de atender las denuncias y reclamos que
                                se interpongan con relación al incumplimiento de las normas sobre protección de
                                datos personales.
                            </p>
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
