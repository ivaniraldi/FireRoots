'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Flame } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Produto', href: '/#produto' },
  { label: 'Sobre', href: '/#sobre-marca' },
  { label: 'Loja', href: '/loja', soon: true },
  { label: 'Blog', href: '/blog', soon: true },
  { label: 'Contato', href: '/#contato' },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-headline uppercase text-primary">
            <Flame className="h-7 w-7" />
            Fireroots
          </Link>
        </div>
      </header>
    );
  }

  const renderNavLinks = (isSheet = false) =>
    navItems.map((item) => (
      <Button
        key={item.label}
        variant="ghost"
        asChild
        className={`font-body text-sm ${isSheet ? 'w-full justify-start' : ''} ${item.soon ? 'text-muted-foreground cursor-not-allowed' : 'hover:bg-accent/50 hover:text-accent-foreground'}`}
      >
        <Link href={item.soon ? '#' : item.href}>
          {item.label}
          {item.soon && <span className="ml-2 text-xs opacity-70">(em breve)</span>}
        </Link>
      </Button>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline uppercase text-primary transition-transform hover:scale-105">
          <Flame className="h-7 w-7" />
          Fireroots
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <nav className="flex flex-col gap-4 mt-8">
                {renderNavLinks(true)}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-1">
            {renderNavLinks()}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
