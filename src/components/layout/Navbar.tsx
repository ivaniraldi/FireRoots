
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Flame, ShoppingCart, Handshake } from 'lucide-react'; // Adicionado Handshake
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'O Molho', href: '/#produtos' },
  { label: 'A Marca', href: '/#sobre-marca' },
  { label: 'Parcerias', href: '/parcerias' }, // Novo item de menu
  { label: 'Contato', href: '/#contato' },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <Link href="/" className="flex items-center gap-2 text-2xl font-headline uppercase">
            <Flame className="h-7 w-7" style={{ color: '#D73908' }} />
            <span style={{ color: '#FDA302' }}>Fire</span><span style={{ color: 'hsl(var(--custom-gray))' }}>roots</span>
          </Link>
        </div>
      </header>
    );
  }

  const renderNavLinks = (isSheet = false, closeSheet?: () => void) =>
    navItems.map((item) => (
      <Button
        key={item.label}
        variant="ghost"
        asChild
        className={`font-body text-sm font-medium ${isSheet ? 'w-full justify-start py-3 text-base' : 'hover:bg-secondary/80 hover:text-secondary-foreground'}`}
        onClick={() => {
          if (isSheet && closeSheet) closeSheet();
        }}
      >
        <Link href={item.href}>
          {item.label === 'Parcerias' && <Handshake className="mr-2 h-4 w-4" />}
          {item.label}
        </Link>
      </Button>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline uppercase transition-transform hover:scale-105">
          <Flame className="h-7 w-7" style={{ color: '#D73908' }} />
          <span style={{ color: '#FDA302' }}>Fire</span><span style={{ color: 'hsl(var(--custom-gray))' }}>roots</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" asChild className="relative hover:bg-secondary/80 hover:text-secondary-foreground">
                <Link href="/carrinho" aria-label="Carrinho de compras">
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <Badge variant="destructive" className="absolute top-0 right-0 h-5 w-5 p-0 flex items-center justify-center text-xs translate-x-1/3 -translate-y-1/3">
                      {totalItems}
                    </Badge>
                  )}
                </Link>
              </Button>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-secondary/80 hover:text-secondary-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
            </div>
            <SheetContent side="right" className="w-[280px] bg-card p-6">
                 <Link href="/" className="flex items-center gap-2 text-2xl font-headline uppercase mb-8">
                    <Flame className="h-7 w-7" style={{ color: '#D73908' }} />
                    <span style={{ color: '#FDA302' }}>Fire</span><span style={{ color: 'hsl(var(--custom-gray))' }}>roots</span>
                </Link>
                <nav className="flex flex-col gap-3">
                  {/* Pass closeSheet function here if Sheet had an internal way to close itself programmatically from SheetTrigger context */}
                  {renderNavLinks(true)}
                </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-1">
            {renderNavLinks()}
            <Button variant="ghost" size="icon" asChild className="relative hover:bg-secondary/80 hover:text-secondary-foreground">
              <Link href="/carrinho" aria-label="Carrinho de compras">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge variant="destructive" className="absolute top-1 right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
                 <span className="sr-only">Carrinho</span>
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
