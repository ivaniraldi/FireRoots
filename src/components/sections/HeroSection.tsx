
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Vídeo de Fundo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline // Importante para mobile
          className="w-full h-full object-cover opacity-40"
          poster="https://placehold.co/1920x1080.png" // Poster para carregar antes do vídeo
          data-ai-hint="fogo manga pimenta explosao"
        >
          <source src="https://i.imgur.com/ZuJ4WZO.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>

      {/* Imagem do Produto - Atrás do texto, acima do vídeo */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <Image
          src="https://i.imgur.com/Ah0Q4et.png"
          alt="Garrafa do molho de pimenta artesanal Mango Magma 150ml, 100% natural e picante da Fireroots"
          width={300} 
          height={300}
          className="opacity-90 transform transition-transform hover:scale-105 -translate-y-12 md:-translate-y-10" // Movida um pouco para cima
          data-ai-hint="mango magma garrafa natural"
          priority
        />
      </div>

      {/* Conteúdo da Hero Section - Texto no topo */}
      <div className="relative z-20 p-4 md:p-8 flex flex-col items-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl uppercase mb-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
        <span className="text-primary">Mango Magma:</span> <span style={{color: 'hsl(var(--secondary))'}}>Sabor Tropical,</span> <span style={{color: 'hsl(var(--custom-gray))'}}>Fogo Real!</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-foreground max-w-2xl mb-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
          Experimente a explosão de manga docinha com a pimenta Scorpion que não alivia pra ninguém. Nosso molho artesanal é 100% natural.
        </p>
        <Button 
          size="lg" 
          className="font-headline uppercase text-lg py-6 px-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-600"
          asChild
        >
          <Link href="/#produtos">Quero Esse Fogo Todo!</Link>
        </Button>
         <p className="font-body text-sm mt-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 opacity-90">
          Preço especial de lançamento! Leve essa brasa por R$ 19,90.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
