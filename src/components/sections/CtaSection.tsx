
import { Button } from '@/components/ui/button';
import { Flame, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section id="cta-final" className="py-16 md:py-24 bg-gradient-to-br from-primary via-red-700 to-orange-600 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <Flame className="w-20 h-20 text-secondary mx-auto mb-6 animate-bounce" />
        <h2 className="font-headline text-4xl md:text-6xl uppercase mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          Pronto para a experiência <span className="text-secondary">Mango Magma?</span>
        </h2>
        <p className="font-body text-lg md:text-xl max-w-xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          Aventureiro(a) do paladar, o convite está feito! Experimente nosso molho artesanal 100% natural Mango Magma e transforme suas refeições em uma aventura de sabor picante e tropical.
        </p>
        <Button 
          size="lg" 
          variant="default"
          className="font-headline uppercase text-lg py-6 px-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400 group"
          asChild
        >
          <Link href="/#produtos">
            Comprar Mango Magma 
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <p className="font-body text-sm mt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600 opacity-80">
          Entregamos essa delícia em todo o Brasil. Molho artesanal Mango Magma 150ml, feito com ingredientes selecionados e uma dose extra de paixão.
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
