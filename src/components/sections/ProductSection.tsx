import Image from 'next/image';
import { Flame } from 'lucide-react';

const ProductSection = () => {
  const heatLevel = 5;

  return (
    <section id="produto" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <Image
              src="https://placehold.co/600x700.png"
              alt="Detalhes do molho Mango Magma com ingredientes"
              width={600}
              height={700}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="mango chili peppers"
            />
          </div>
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <h2 className="font-headline text-4xl md:text-5xl uppercase text-primary mb-6">
              Mango Magma
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Feito com manga natural e pimenta Scorpion. Sem conservantes. Apenas sabor puro, picante e real.
            </p>
            <ul className="space-y-4 font-body text-foreground">
              <li className="flex items-center gap-3">
                <Flame className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Ingredientes 100% naturais</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center flex-shrink-0">
                  {Array.from({ length: heatLevel }).map((_, i) => (
                    <Flame key={i} className="w-6 h-6 text-primary fill-primary" />
                  ))}
                  {Array.from({ length: 5 - heatLevel }).map((_, i) => (
                    <Flame key={i + heatLevel} className="w-6 h-6 text-muted-foreground/50" />
                  ))}
                </div>
                <span>Nível de picância: Extrema</span>
              </li>
              <li className="flex items-center gap-3">
                <Flame className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Artesanal, feito no Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Flame className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Ideal para carnes, hambúrgueres, tacos, batatas e mais</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
