---
name: Web Performance Optimization & Best Practices
description: Comprehensive guide for maintaining optimal web performance, SEO, security, and code quality in Next.js applications
---

# Web Performance Optimization & Best Practices

Este skill documenta las mejores prácticas para mantener un rendimiento web óptimo, SEO excelente, código mantenible y seguro en aplicaciones Next.js.

---

## 🎯 Objetivos de Rendimiento

### PageSpeed Insights Targets
- **Móvil**: ≥ 90/100
- **Desktop**: ≥ 95/100
- **LCP**: < 2.5s
- **FCP**: < 1.8s
- **TBT**: < 200ms
- **CLS**: < 0.1

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID/TBT (First Input Delay/Total Blocking Time)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

---

## 📦 1. Optimización de Fuentes

### ✅ Siempre Usar next/font/google

```javascript
// app/layout.js
import { Manrope, Oswald } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap', // CRÍTICO: evita FOIT
  variable: '--font-body',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});
```

### ✅ Agregar Preconnect Hints

```javascript
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="es-AR" className={`${manrope.variable} ${oswald.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### ❌ NUNCA Usar @import en CSS

```css
/* ❌ MAL - Bloquea renderizado */
@import url('https://fonts.googleapis.com/css2?family=Manrope...');

/* ✅ BIEN - Usar next/font/google */
```

---

## 🖼️ 2. Optimización de Imágenes

### ✅ Siempre Usar Next.js Image Component

```javascript
import Image from 'next/image';

// ✅ Imagen con priority (LCP element)
<Image
  src="/hero-bg.jpg"
  alt="Descripción"
  fill
  priority
  fetchPriority="high"
  quality={75}
  sizes="100vw"
/>

// ✅ Imagen lazy loaded
<Image
  src="/about.jpg"
  alt="Descripción"
  fill
  quality={75}
  sizes="(max-width: 1024px) 100vw, 50vw"
/>
```

### ✅ Configuración en next.config.mjs

```javascript
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

### 📏 Guía de Quality

- **Hero/Background**: quality={75}
- **Thumbnails**: quality={70}
- **Logos**: quality={85}
- **Fotos de equipo**: quality={75}

### 🎯 Priority y FetchPriority

```javascript
// ✅ Elemento LCP (logo, hero image)
<Image priority fetchPriority="high" />

// ✅ Above-fold pero no LCP
<Image priority />

// ✅ Below-fold
<Image loading="lazy" />
```

---

## ⚡ 3. Lazy Loading de Componentes

### ✅ Estrategia Balanceada

```javascript
// app/page.js
import dynamic from 'next/dynamic';

// Carga normal: componentes above-fold y visuales
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';

// Lazy load: componentes pesados del final
const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="min-h-screen" />,
});
const Location = dynamic(() => import('../components/Location'), {
  loading: () => <div className="min-h-screen" />,
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
});
```

### 📋 Reglas para Lazy Loading

1. **NO lazy load**: Hero, Navbar, componentes above-fold
2. **SÍ lazy load**: Formularios pesados, mapas, componentes con muchas dependencias
3. **CONSIDERAR lazy load**: Componentes visuales below-fold (Portfolio, Team)
4. **Siempre incluir loading state** para evitar CLS

---

## 🎨 4. Animaciones CSS vs JavaScript

### ✅ Usar CSS + Intersection Observer

```javascript
// hooks/useIntersectionObserver.js
export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, ...options });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return [elementRef, isVisible];
}
```

```css
/* globals.css */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  opacity: 0;
}

.animate-on-scroll.animate-visible.fade-up {
  animation: fadeUp 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

### ❌ EVITAR Librerías Pesadas

```javascript
// ❌ MAL - AOS agrega ~70 KiB
import AOS from 'aos';

// ✅ BIEN - CSS puro + Intersection Observer
```

---

## 🔧 5. Configuración de Next.js

### ✅ next.config.mjs Optimizado

```javascript
const nextConfig = {
  reactCompiler: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
```

### ✅ .browserslistrc

```
> 0.5%
last 2 versions
not dead
not IE 11
```

---

## ♿ 6. Accesibilidad (WCAG AA)

### ✅ Labels Asociados

```javascript
// ✅ BIEN
<label htmlFor="email">Email</label>
<input id="email" name="email" type="email" />

// ❌ MAL
<label>Email</label>
<input name="email" type="email" />
```

### ✅ Contraste de Colores

- **Texto normal**: Ratio mínimo 4.5:1
- **Texto grande**: Ratio mínimo 3:1
- **Elementos interactivos**: Ratio mínimo 3:1

### ✅ Áreas Táctiles

- **Mínimo**: 44x44 px
- **Recomendado**: 48x48 px
- **Espaciado**: 8px entre elementos

---

## 🔒 7. Seguridad

### ✅ Headers de Seguridad

```javascript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### ✅ Validación de Formularios

```javascript
// ✅ Siempre validar en cliente Y servidor
const validateForm = () => {
  const errors = {};
  if (!formData.email.trim()) errors.email = 'Email requerido';
  if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email inválido';
  return errors;
};

// ✅ Honeypot para bots
<input 
  type="text" 
  name="honeypot" 
  className="hidden" 
  tabIndex="-1" 
  autoComplete="off" 
/>
```

---

## 📊 8. SEO Best Practices

### ✅ Metadata en layout.js

```javascript
export const metadata = {
  title: 'Título Principal | Empresa',
  description: 'Descripción concisa de 150-160 caracteres',
  keywords: ['palabra1', 'palabra2', 'palabra3'],
  authors: [{ name: 'Nombre Empresa' }],
  openGraph: {
    title: 'Título para Redes Sociales',
    description: 'Descripción para compartir',
    images: ['/og-image.jpg'],
  },
};
```

### ✅ Estructura Semántica

```javascript
// ✅ BIEN - Jerarquía correcta
<h1>Título Principal</h1>
<h2>Sección 1</h2>
<h3>Subsección 1.1</h3>
<h2>Sección 2</h2>

// ❌ MAL - Saltar niveles
<h1>Título</h1>
<h3>Subsección</h3>
```

### ✅ Sitemap y Robots.txt

```javascript
// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: 'https://ejemplo.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}

// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ejemplo.com/sitemap.xml',
  };
}
```

---

## 🧹 9. Código Limpio y Mantenible

### ✅ Estructura de Componentes

```
components/
├── layout/
│   ├── Navbar.js
│   ├── Footer.js
│   └── ScrollToTop.js
├── sections/
│   ├── Hero.js
│   ├── About.js
│   └── Contact.js
├── ui/
│   ├── Button.js
│   └── Card.js
└── shared/
    └── AnimateOnScroll.js
```

### ✅ Convenciones de Nombres

```javascript
// Componentes: PascalCase
const HeroSection = () => {};

// Funciones: camelCase
const handleSubmit = () => {};

// Constantes: UPPER_SNAKE_CASE
const API_URL = 'https://api.ejemplo.com';

// Archivos CSS: kebab-case
// globals.css, hero-section.module.css
```

### ✅ Comentarios Útiles

```javascript
// ✅ BIEN - Explica el "por qué"
// Usamos dynamic import para reducir el bundle inicial
// y mejorar el TBT en móviles
const Contact = dynamic(() => import('./Contact'));

// ❌ MAL - Explica el "qué" (obvio)
// Importa el componente Contact
const Contact = dynamic(() => import('./Contact'));
```

---

## 🔍 10. Checklist de Pre-Deploy

### Antes de cada deploy, verificar:

- [ ] `npm run build` sin errores
- [ ] PageSpeed Insights > 90 en móvil
- [ ] PageSpeed Insights > 95 en desktop
- [ ] Todas las imágenes usan Next.js Image
- [ ] Fuentes optimizadas con next/font
- [ ] No hay console.logs en producción
- [ ] Labels asociados en formularios
- [ ] Contraste de colores WCAG AA
- [ ] Metadata y SEO completos
- [ ] Sitemap actualizado
- [ ] Robots.txt configurado

---

## 📈 11. Monitoreo Continuo

### Herramientas Recomendadas

1. **PageSpeed Insights**: Mensual
2. **Lighthouse CI**: En cada PR
3. **Web Vitals**: Google Search Console
4. **Bundle Analyzer**: Trimestral

### Comandos Útiles

```bash
# Analizar bundle
npm run build
npx @next/bundle-analyzer

# Lighthouse local
npx lighthouse https://ejemplo.com --view

# Verificar imágenes
find . -name "*.jpg" -o -name "*.png" | grep -v node_modules
```

---

## 🎯 12. Métricas de Éxito

### Targets Mínimos

| Métrica | Móvil | Desktop |
|---------|-------|---------|
| Performance | ≥ 90 | ≥ 95 |
| Accesibilidad | ≥ 95 | ≥ 95 |
| SEO | 100 | 100 |
| Best Practices | 100 | 100 |

### KPIs de Negocio

- **Bounce Rate**: < 40%
- **Time on Page**: > 2 min
- **Conversion Rate**: Mejorar 10% trimestral

---

## 🚨 Errores Comunes a Evitar

### ❌ NUNCA Hacer

1. Usar `<img>` en lugar de `<Image>`
2. Importar fuentes con `@import` en CSS
3. Lazy load de componentes above-fold
4. Quality > 85 en imágenes (excepto logos)
5. Olvidar `priority` en elemento LCP
6. Usar librerías de animación pesadas (AOS, GSAP para animaciones simples)
7. No validar formularios en cliente
8. Saltar niveles de heading (h1 → h3)
9. Áreas táctiles < 44px
10. Deploy sin verificar PageSpeed

---

## 📚 Referencias

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web Vitals](https://web.dev/vitals/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

**Última actualización**: 30 de enero de 2026
**Versión**: 1.0
**Proyecto**: Constructora La Argentina
