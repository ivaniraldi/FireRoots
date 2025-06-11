
import { generateMangoMagmaTestimonials, type GenerateMangoMagmaTestimonialsOutput } from '@/ai/flows/generate-testimonials';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Flame, MessageSquareQuote } from 'lucide-react';
import React from 'react'; // Import React

const TestimonialCard = ({ testimonial, index }: { testimonial: GenerateMangoMagmaTestimonialsOutput['testimonials'][0], index: number }) => {
  const initials = `FÃ ${index + 1}`; 
  const avatarColors = ['bg-primary/70', 'bg-secondary/70', 'bg-orange-500/70']; // Para variar a cor do fallback
  return (
    <Card className="bg-card border-border shadow-lg transform transition-transform hover:scale-105 duration-300 flex flex-col h-full rounded-xl overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4 pb-3 pt-5 px-5 bg-card">
        <Avatar className="h-12 w-12 border-2 border-secondary">
          <AvatarImage src={`https://placehold.co/100x100.png?text=${initials.replace(' ','')}`} alt={`Foto do Fã ${index + 1} que provou Mango Magma`} data-ai-hint="pessoa feliz comida picante" />
          <AvatarFallback className={`${avatarColors[index % avatarColors.length]} text-primary-foreground font-semibold`}>{initials.substring(0,1)+(index+1)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-semibold text-secondary">Herói(na) da Pimenta #{index + 1}</CardTitle>
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
            <Flame key={i} className={`w-5 h-5 ${i < (testimonial.sentiment.toLowerCase().includes('apaixonado') || testimonial.sentiment.toLowerCase().includes('virei fã') || testimonial.sentiment.toLowerCase().includes('maluco') ? 5 : testimonial.sentiment.toLowerCase().includes('sensacional') || testimonial.sentiment.toLowerCase().includes('séria') ? 4 : 3) ? 'text-primary fill-primary animate-in fade-in zoom-in-50' : 'text-muted-foreground/30'}`} style={{animationDelay: `${i*50}ms`}} />
          ))}
          <span className="ml-2 text-xs text-muted-foreground">Avaliação do(a) Combatente</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const TestimonialsSection = async () => {
  let testimonialsData: GenerateMangoMagmaTestimonialsOutput | null = null;
  let errorLoadingTestimonials = false;

  try {
    testimonialsData = await generateMangoMagmaTestimonials({ numberOfTestimonials: 3 });
  } catch (error: any) { // Tipagem 'any' para capturar qualquer tipo de erro
    console.error("Erro ao carregar os depoimentos:", 
      error.message || error, 
      error.name || '', 
      error.stack || '',
      error.cause || ''
    );
    errorLoadingTestimonials = true;
  }

  const fallbackTestimonials: GenerateMangoMagmaTestimonialsOutput['testimonials'] = [
    { text: "Maluco, que molho é esse?! O Mango Magma transformou meu churrasco! Ardência na medida e um sabor de manga que vicia. Já quero mais um carregamento!", sentiment: "Apaixonado Real Oficial", flavorProfile: "Doce da manga com um toque cítrico e defumado, bagulho é doido!", heatLevel: "Uma onda de calor que te abraça e não larga mais. Bagulho é hard!" },
    { text: "Achei que era só mais um molho picante, mas o Mango Magma me pegou de jeito. É o equilíbrio perfeito entre o doce da manga e o fogo no rabo da pimenta. Recomendo pra quem tem culhão!", sentiment: "Virei Fã de Carteirinha", flavorProfile: "Manga madurinha e suculenta com umas paradas herbais que dão um toque especial.", heatLevel: "Uma picância que cresce e mostra quem manda, mas sem estragar a festa. Lá ele!" },
    { text: "Finalmente um molho que entrega o que promete e ainda tira uma onda! O Mango Magma dá aquele 'up' em qualquer prato. E o melhor: é natural, sem caô. Virou figurinha carimbada na minha cozinha.", sentiment: "Feliz da Vida (e Suando)", flavorProfile: "Refrescante, adocicado na medida certa, com a manga bem presente e um final picante que te faz querer mais.", heatLevel: "Um calorzinho gostoso que não domina, perfeito pro dia a dia de quem gosta de emoção (e de passar um perrengue chique)." },
  ];

  const testimonialsToDisplay = (testimonialsData?.testimonials?.length ?? 0) > 0 
    ? testimonialsData!.testimonials 
    : fallbackTestimonials;

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase text-center mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <span className="text-primary">A Voz da Galera</span> <span style={{color: 'hsl(var(--secondary))'}}>Sobre o Mango Magma</span>
        </h2>
        <p className="font-body text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
          Confira o que a galera (gerada por IA com um toque brasileiro, mas quem liga?) anda falando do nosso elixir de manga com pimenta Scorpion. Spoiler: é só elogio (e pedidos de socorro).
        </p>
        
        {errorLoadingTestimonials && testimonialsToDisplay === fallbackTestimonials && (
           <p className="text-center text-destructive mb-8 animate-in fade-in duration-700 delay-200">Ops! Deu ruim pra carregar os depoimentos fresquinhos da IA. Mas relaxa, dá uma olhada nesses aqui que são clássicos:</p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsToDisplay.map((testimonial, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-12 duration-700" style={{animationDelay: `${(index * 150) + 300}ms`}}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { src: "https://placehold.co/300x400.png", alt: "Pessoa fazendo careta de surpresa e prazer ao provar molho picante Mango Magma", hint: "rosto surpresa picante comida" },
            { src: "https://placehold.co/300x400.png", alt: "Pessoa comemorando com os braços para cima após experimentar o Mango Magma da Fireroots", hint: "felicidade comida pimenta" },
            { src: "https://placehold.co/300x400.png", alt: "Pessoa pensativa e com olhar satisfeito após provar o sabor intenso do molho picante", hint: "sabor intenso comida" },
            { src: "https://placehold.co/300x400.png", alt: "Pessoa com uma gota de suor escorrendo, mas sorrindo de satisfação após provar o molho Fireroots", hint: "suando fogo pimenta prazer" },
          ].map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg animate-in fade-in zoom-in-90 duration-700" style={{animationDelay: `${(testimonialsToDisplay.length + index) * 150 + 300}ms`}}>
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
