import { Button } from '@/components/ui/button';
import { Flame } from 'lucide-react';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section id="loja" className="py-16 md:py-24 bg-gradient-to-br from-primary via-red-700 to-background text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <Flame className="w-16 h-16 text-accent mx-auto mb-6 animate-bounce" />
        <h2 className="font-headline text-4xl md:text-6xl uppercase mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Quero sentir o fogo!
        </h2>
        <p className="font-body text-lg md:text-xl max-w-md mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Peça seu Mango Magma agora e transforme suas refeições em uma aventura picante.
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="font-headline uppercase text-lg py-6 px-10 bg-accent text-accent-foreground hover:bg-accent/90 transform transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400"
          asChild
        >
          <Link href="#">Pedir Mango Magma</Link>
        </Button>
        <p className="font-body text-sm mt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
          Entrega em todo o Brasil. Molho artesanal, direto da raiz.
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
