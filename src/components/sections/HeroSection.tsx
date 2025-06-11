
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Explosão de manga e pimenta Scorpion em chamas, representando o molho Mango Magma da Fireroots"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-20"
          data-ai-hint="molho manga pimenta fogo tropical"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 p-4 md:p-8 flex flex-col items-center">
        <div className="mb-8 animate-in fade-in slide-in-from-top-12 duration-1000">
          <Image
            src="https://placehold.co/350x350.png"
            alt="Garrafa do molho de pimenta artesanal Mango Magma 150ml, 100% natural e picante"
            width={280}
            height={280}
            className="shadow-2xl mx-auto transform transition-transform hover:scale-105 duration-300"
            data-ai-hint="mango magma garrafa natural"
            priority
          />
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl uppercase mb-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          <span className="text-primary">Mango Magma:</span> <span style={{color: '#FDA302'}}>Sabor Tropical,</span> <span style={{color: '#C2BDC0'}}>Fogo Real!</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-foreground max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
          Experimente a explosão de manga docinha com a pimenta Scorpion que não alivia pra ninguém. Nosso molho artesanal é 100% natural, em garrafas de 150ml. Para quem tem coragem de encarar um sabor que é pura ousadia.
        </p>
        <Button 
          size="lg" 
          className="font-headline uppercase text-lg py-6 px-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-600"
          asChild
        >
          <Link href="/#produtos">Quero Esse Fogo Todo!</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
