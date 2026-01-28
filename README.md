# Cooperativa de Construcción La Argentina - Sitio Web Institucional

Sitio web profesional para la Cooperativa de Construcción La Argentina en Villaguay, Entre Ríos, Argentina.

## 🏗️ Características

- ✅ **One-page responsive** con scroll suave entre secciones
- ✅ **Diseño profesional** con paleta de colores institucional
- ✅ **SEO optimizado** para Villaguay, Entre Ríos y zonas aledañas
- ✅ **Formulario de contacto** con validaciones y antispam (honeypot)
- ✅ **Integración WhatsApp** para contacto directo
- ✅ **Animaciones sutiles** con AOS (Animate On Scroll)
- ✅ **Páginas legales** completas (Términos, Privacidad, Aviso Legal)
- ✅ **Google Maps** embebido
- ✅ **Mobile-first** y totalmente responsive
- ✅ **Accesibilidad** y buenas prácticas

## 📋 Secciones

1. **Hero/Portada** - Presentación principal con CTAs
2. **Quiénes Somos** - Información institucional
3. **Servicios** - Listado de servicios de construcción
4. **Obras Realizadas** - Galería de proyectos (portfolio)
5. **Equipo de Trabajo** - Presentación del equipo
6. **Alcance Geográfico** - Mapa de cobertura
7. **Confianza y Legalidad** - Credenciales y habilitaciones
8. **Contacto** - Formulario y datos de contacto
9. **Ubicación** - Google Maps embebido

## 🚀 Instalación y Desarrollo

### Requisitos previos
- Node.js 18+ 
- npm

### Instalación

```bash
# Las dependencias ya están instaladas, pero si necesita reinstalar:
npm install
```

### Desarrollo local

```bash
# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Build para producción

```bash
# Crear build optimizado
npm run build

# Iniciar servidor de producción
npm start
```

## 🎨 Personalización

### Colores y Estilos

Los colores y estilos están centralizados en `app/globals.css`. Puede modificar las variables CSS:

```css
:root {
  --color-primary: hsl(210, 70%, 45%);    /* Azul principal */
  --color-accent: hsl(35, 80%, 55%);      /* Naranja construcción */
  --color-secondary: hsl(200, 15%, 30%);  /* Gris azulado */
  /* ... más variables */
}
```

### Contenido

Los componentes están en la carpeta `components/`:
- `Navbar.js` - Barra de navegación
- `Hero.js` - Sección principal
- `About.js` - Quiénes somos
- `Services.js` - Servicios
- `Portfolio.js` - Obras realizadas
- `Team.js` - Equipo
- `Coverage.js` - Alcance geográfico
- `Trust.js` - Confianza y legalidad
- `Contact.js` - Formulario de contacto
- `Location.js` - Ubicación con mapa
- `Footer.js` - Pie de página

### Imágenes

Las imágenes están en `public/`:
- `hero-bg.jpg` - Imagen de fondo del hero
- `about-image.jpg` - Imagen de la sección "Quiénes Somos"
- `obras/` - Carpeta para imágenes de obras (actualmente usa placeholders)
- `team/` - Carpeta para fotos del equipo (actualmente usa placeholders)

**Para reemplazar las imágenes:**
1. Agregue sus imágenes reales en las carpetas correspondientes
2. Mantenga los nombres de archivo o actualice las referencias en los componentes

### Datos de Contacto

Para actualizar teléfono, email, dirección, etc., busque y reemplace en:
- `components/Navbar.js`
- `components/Contact.js`
- `components/Footer.js`
- `app/layout.js` (metadatos SEO)

**Número de WhatsApp actual:** +54 3455 456696

### Google Maps

Para actualizar la ubicación del mapa en `components/Location.js`:
1. Vaya a Google Maps
2. Busque su dirección exacta
3. Haga clic en "Compartir" → "Insertar un mapa"
4. Copie el código iframe y reemplace el `embedUrl` en el componente

## 📱 Contacto WhatsApp

El formulario de contacto redirige automáticamente a WhatsApp con los datos completados. 
Para cambiar el número, busque `543455456696` en:
- `components/Contact.js`
- `components/Navbar.js`
- `components/Hero.js`

## 🔒 Páginas Legales

Las páginas legales están en:
- `/terminos-y-condiciones`
- `/politica-de-privacidad`
- `/aviso-legal`

Están adaptadas a la legislación argentina (Ley 25.326) y Villaguay, Entre Ríos.

## 📊 SEO

El SEO está configurado en `app/layout.js` con:
- Meta tags optimizados
- Open Graph para redes sociales
- Geo-localización (Villaguay, Entre Ríos)
- Keywords relevantes

## 🚀 Deploy en Vercel

1. Cree una cuenta en [Vercel](https://vercel.com)
2. Conecte su repositorio de GitHub
3. Vercel detectará automáticamente Next.js
4. Configure el dominio `constructoralaargentina.com`
5. Deploy automático en cada push

### Variables de entorno (si las necesita en el futuro)

Cree un archivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://constructoralaargentina.com
```

## 📝 Notas Importantes

### Imágenes Placeholder
Las imágenes de obras y equipo actualmente usan placeholders de https://placehold.co. 
**Debe reemplazarlas con fotos reales** antes del lanzamiento.

### Licencia y Credenciales
En la sección "Confianza y Legalidad" (`components/Trust.js`), actualice:
- Número de licencia habilitante
- Número de matrícula profesional
- Cualquier otra credencial específica

### Google Maps
El mapa actual usa coordenadas aproximadas de Villaguay. Actualice con la ubicación exacta de Balcarce 589.

### Información Institucional
En `components/About.js`, hay un aviso que indica que la historia, misión y visión están en proceso de formalización. Actualice este contenido cuando esté disponible.

## 🛠️ Tecnologías Utilizadas

- **Next.js 15** - Framework React
- **Tailwind CSS** - Estilos
- **AOS** - Animaciones al scroll
- **React Icons** - Iconografía
- **Google Maps** - Mapas embebidos

## 📞 Soporte

Para consultas sobre el sitio web:
- Email: info@constructoralaargentina.com
- WhatsApp: +54 3455 456696

---

**Desarrollado para:** Cooperativa de Construcción La Argentina  
**Ubicación:** Villaguay, Entre Ríos, Argentina  
**Año:** 2026
