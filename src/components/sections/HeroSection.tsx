
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Explosão de sabor tropical com manga e pimenta Scorpion em chamas, representando o molho Mango Magma"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-30"
          data-ai-hint="molho manga pimenta fogo tropical"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 p-4 md:p-8 flex flex-col items-center">
        <div className="mb-8 animate-in fade-in slide-in-from-top-8 duration-1000">
          <Image
            src="https://placehold.co/400x400.png"
            alt="Garrafa do molho de pimenta artesanal Mango Magma 150ml, 100% natural"
            width={300}
            height={300}
            className="rounded-lg shadow-2xl mx-auto transform transition-transform hover:scale-105 duration-300"
            data-ai-hint="mango magma garrafa natural"
            priority
          />
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl uppercase text-primary mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Mango Magma: Sabor Tropical, Fogo Real.
        </h1>
        <p className="font-body text-lg md:text-xl text-foreground max-w-2xl mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          Experimente a fusão perfeita de manga doce e pimenta Scorpion ardente. Nosso molho artesanal 100% natural, em garrafas de 150ml, é feito para quem ousa desafiar o paladar com uma intensidade inesquecível.
        </p>
        <Button 
          size="lg" 
          className="font-headline uppercase text-lg py-6 px-10 bg-primary text-primary-foreground hover:bg-primary/90 transform transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600"
          asChild
        >
          <Link href="/#produtos">Quero o Mango Magma</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
