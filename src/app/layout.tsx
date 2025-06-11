
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'Mango Magma - Fireroots: Molho de Pimenta Artesanal Ultra Picante',
  description: 'Experimente o Mango Magma, nosso molho de pimenta artesanal ultra picante com manga e pimenta Scorpion. Garrafa de 150ml. Sabor tropical, fogo real. Compre já!',
  keywords: 'molho de pimenta, mango magma, fireroots, artesanal, picante, ultra picante, manga, scorpion, comprar molho de pimenta',
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
      <body className="font-body antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
