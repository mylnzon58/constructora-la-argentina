import "./globals.css";

export const metadata = {
  title: "Cooperativa de Construcción La Argentina | Villaguay, Entre Ríos",
  description: "Cooperativa de construcción habilitada en Villaguay, Entre Ríos. Maestros Mayores de Obra especializados en albañilería, construcciones tradicionales, Steel Frame, Good Frame y más. Empresa seria con licencia vigente.",
  keywords: "construcción Villaguay, cooperativa construcción Entre Ríos, albañilería Villaguay, Steel Frame Entre Ríos, Good Frame, construcciones Villaguay, maestro mayor de obra, galpones tinglados Villaguay, construcción Paraná, construcción Concordia, construcción Viale, construcción Villa Elisa",
  authors: [{ name: "Cooperativa de Construcción La Argentina" }],
  creator: "Cooperativa de Construcción La Argentina",
  publisher: "Cooperativa de Construcción La Argentina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://constructoralaargentina.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Cooperativa de Construcción La Argentina | Villaguay, Entre Ríos",
    description: "Cooperativa de construcción habilitada en Villaguay, Entre Ríos. Maestros Mayores de Obra con experiencia en construcciones tradicionales, Steel Frame y Good Frame.",
    url: 'https://constructoralaargentina.com',
    siteName: 'Cooperativa de Construcción La Argentina',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cooperativa de Construcción La Argentina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cooperativa de Construcción La Argentina | Villaguay, Entre Ríos",
    description: "Cooperativa de construcción habilitada en Villaguay, Entre Ríos. Maestros Mayores de Obra especializados.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agregar Google Search Console verification cuando esté disponible
    // google: 'verification_token',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <head>
        <meta name="geo.region" content="AR-E" />
        <meta name="geo.placename" content="Villaguay" />
        <meta name="geo.position" content="-31.8667;-59.0167" />
        <meta name="ICBM" content="-31.8667, -59.0167" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
