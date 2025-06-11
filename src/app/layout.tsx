
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';
// import FireParticlesLoader from '@/components/fx/FireParticlesLoader'; // Mantido comentado

export const metadata: Metadata = {
  title: 'Mango Magma - Fireroots: Molho Artesanal Picante Nível Hard!',
  description: 'Prepare-se para o Mango Magma da Fireroots! Molho de pimenta artesanal com manga e pimenta Scorpion. Sabor tropical com ardência de verdade. Garrafa 150ml. Compre já, se tiver coragem!',
  keywords: 'molho de pimenta, mango magma, fireroots, artesanal, picante, ultra picante, manga, scorpion, comprar molho de pimenta, molho brasileiro, pimenta forte',
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
