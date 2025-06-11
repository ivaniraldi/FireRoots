
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';
// import FireParticlesLoader from '@/components/fx/FireParticlesLoader'; // Mantido comentado

export const metadata: Metadata = {
  title: 'Mango Magma - Fireroots: Molho de Pimenta Artesanal Picante Nível Hard!',
  description: 'Experimente o Mango Magma da Fireroots! Molho de pimenta artesanal com manga e pimenta Scorpion. Sabor tropical com ardência de verdade (150ml). Compre já e sinta o calor!',
  keywords: 'molho de pimenta, mango magma, fireroots, artesanal, picante, ultra picante, manga, scorpion, comprar molho de pimenta, molho brasileiro, pimenta forte, natural, gourmet',
  manifest: '/manifest.json', // Link para o PWA manifest
};

export const viewport: Viewport = { // Adicionado para PWA
  themeColor: '#1A1A1A',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        {/* Adicionar link para o ícone da Apple aqui se necessário, ex: <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" /> */}
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <CartProvider>
          {/* <FireParticlesLoader /> */}
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
