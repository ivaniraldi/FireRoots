
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Flame, MessageSquareQuote } from 'lucide-react';
import React from 'react'; 

interface Testimonial {
  name: string;
  avatarImage: string;
  avatarFallback: string;
  text: string;
  sentiment: string;
  flavorProfile: string;
  heatLevel: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const avatarColors = ['bg-primary/70', 'bg-secondary/70', 'bg-orange-500/70']; 
  // Gerar índice de cor com base no nome para consistência (simples hash)
  const colorIndex = testimonial.name.length % avatarColors.length;

  return (
    <Card className="bg-card border-border shadow-lg transform transition-transform hover:scale-105 duration-300 flex flex-col h-full rounded-xl overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4 pb-3 pt-5 px-5 bg-card">
        <Avatar className="h-12 w-12 border-2 border-secondary">
          <AvatarImage src={testimonial.avatarImage} alt={`Foto de ${testimonial.name}, cliente da Fireroots`} data-ai-hint="pessoa feliz comida picante" />
          <AvatarFallback className={`${avatarColors[colorIndex]} text-primary-foreground font-semibold`}>{testimonial.avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-semibold text-secondary">{testimonial.name}</CardTitle>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.sentiment}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-5 py-4">
        <MessageSquareQuote className="w-8 h-8 text-primary/70 mb-2" />
        <p className="text-foreground italic mb-3 leading-relaxed">&quot;{testimonial.text}&quot;</p>
        <div className="text-sm space-y-1 mt-3 pt-3 border-t border-border/50">
          <p><strong className="text-secondary">Relato do Sabor:</strong> {testimonial.flavorProfile}</p>
          <p><strong className="text-primary">Nível da Brasa:</strong> {testimonial.heatLevel}</p>
        </div>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-3">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Flame key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-primary fill-primary animate-in fade-in zoom-in-50' : 'text-muted-foreground/30'}`} style={{animationDelay: `${i*50}ms`}} />
          ))}
          <span className="ml-2 text-xs text-muted-foreground">Avaliação Incandescente</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const TestimonialsSection = () => {
  const fallbackTestimonials: Testimonial[] = [
    { 
      name: "Lucas 'Brasa' Costa",
      avatarImage: "https://placehold.co/100x100.png?text=LC",
      avatarFallback: "LC",
      text: "Maluco, que molho é esse?! O Mango Magma transformou meu churras de domingo. Ardência na medida certa e um sabor de manga que vicia. Já quero um caminhão disso!", 
      sentiment: "Apaixonado Real Oficial!", 
      flavorProfile: "Doce da manga com um toque cítrico e defumado, o equilíbrio perfeito.", 
      heatLevel: "Uma onda de calor prazerosa que complementa, não domina. Na medida!",
      rating: 5,
    },
    { 
      name: "Juliana 'Pimentinha' Alves",
      avatarImage: "https://placehold.co/100x100.png?text=JA",
      avatarFallback: "JA",
      text: "Achei que era só mais um molho picante, mas o Mango Magma me surpreendeu! É o equilíbrio perfeito entre o doce e o fogo. Recomendo pra quem tem coragem (e bom gosto)!", 
      sentiment: "Virei Fã de Carteirinha!", 
      flavorProfile: "Manga madurinha e suculenta com notas herbais que dão um toque sofisticado.", 
      heatLevel: "Uma picância que cresce e mostra quem manda, mas sem estragar a festa.",
      rating: 5,
    },
    { 
      name: "Fernando 'Magma' Oliveira",
      avatarImage: "https://placehold.co/100x100.png?text=FO",
      avatarFallback: "FO",
      text: "Finalmente um molho que entrega o que promete! O Mango Magma dá aquele 'up' em qualquer prato. E o melhor: é natural. Já virou item essencial na minha cozinha.", 
      sentiment: "Experiência Incrível!", 
      flavorProfile: "Refrescante, com a doçura da manga bem presente e um final picante que convida a mais.", 
      heatLevel: "Um calor agradável que não domina, ideal para quem gosta de um toque de emoção.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 text-foreground"> {/* Removido bg-background */}
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase text-center mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <span className="text-primary">A Voz da Galera</span> <span style={{color: 'hsl(var(--secondary))'}}>Sobre o Mango Magma</span>
        </h2>
        <p className="font-body text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
          Confira o que nossos clientes mais corajosos (e com ótimo paladar) andam dizendo sobre nosso elixir de manga com pimenta Scorpion.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fallbackTestimonials.map((testimonial, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-12 duration-700" style={{animationDelay: `${(index * 150) + 300}ms`}}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { src: "https://i.imgur.com/KARXwjB.png", alt: "Pessoa fazendo careta de surpresa e prazer ao provar molho picante Mango Magma", hint: "rosto surpresa picante comida" },
            { src: "https://i.imgur.com/kU51qEb.png", alt: "Pessoa comemorando com os braços para cima após experimentar o Mango Magma da Fireroots", hint: "felicidade comida pimenta" },
            { src: "https://i.imgur.com/GngBdnd.png", alt: "Pessoa pensativa e com olhar satisfeito após provar o sabor intenso do molho picante", hint: "sabor intenso comida" },
            { src: "https://i.imgur.com/Xfr5LTH.png", alt: "Pessoa com uma gota de suor escorrendo, mas sorrindo de satisfação após provar o molho Fireroots", hint: "suando fogo pimenta prazer" },
          ].map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg animate-in fade-in zoom-in-90 duration-700" style={{animationDelay: `${(fallbackTestimonials.length + index) * 150 + 300}ms`}}>
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={400}
                className="w-full h-auto object-cover transition-transform hover:scale-110 duration-300"
                data-ai-hint={item.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
