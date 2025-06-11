
import { generateMangoMagmaTestimonials, type GenerateMangoMagmaTestimonialsOutput } from '@/ai/flows/generate-testimonials';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Flame, MessageSquareQuote } from 'lucide-react';
import React from 'react'; 

const TestimonialCard = ({ testimonial, index }: { testimonial: GenerateMangoMagmaTestimonialsOutput['testimonials'][0], index: number }) => {
  const initials = `Cliente ${index + 1}`; 
  const avatarColors = ['bg-primary/70', 'bg-secondary/70', 'bg-orange-500/70']; 
  return (
    <Card className="bg-card border-border shadow-lg transform transition-transform hover:scale-105 duration-300 flex flex-col h-full rounded-xl overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4 pb-3 pt-5 px-5 bg-card">
        <Avatar className="h-12 w-12 border-2 border-secondary">
          <AvatarImage src={`https://placehold.co/100x100.png?text=${initials.replace(' ','')}`} alt={`Foto do Cliente ${index + 1} que provou Mango Magma`} data-ai-hint="pessoa feliz comida picante" />
          <AvatarFallback className={`${avatarColors[index % avatarColors.length]} text-primary-foreground font-semibold`}>{initials.substring(0,1)+(index+1)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-semibold text-secondary">Apreciador(a) #{index + 1}</CardTitle>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.sentiment}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-5 py-4">
        <MessageSquareQuote className="w-8 h-8 text-primary/70 mb-2" />
        <p className="text-foreground italic mb-3 leading-relaxed">&quot;{testimonial.text}&quot;</p>
        <div className="text-sm space-y-1 mt-3 pt-3 border-t border-border/50">
          <p><strong className="text-secondary">Impressão sobre o Sabor:</strong> {testimonial.flavorProfile}</p>
          <p><strong className="text-primary">Nível de Ardência:</strong> {testimonial.heatLevel}</p>
        </div>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-3">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Flame key={i} className={`w-5 h-5 ${i < (testimonial.sentiment.toLowerCase().includes('apaixonante') || testimonial.sentiment.toLowerCase().includes('adorei') || testimonial.sentiment.toLowerCase().includes('inacreditável') ? 5 : testimonial.sentiment.toLowerCase().includes('recomendo') || testimonial.sentiment.toLowerCase().includes('top') ? 4 : 3) ? 'text-primary fill-primary animate-in fade-in zoom-in-50' : 'text-muted-foreground/30'}`} style={{animationDelay: `${i*50}ms`}} />
          ))}
          <span className="ml-2 text-xs text-muted-foreground">Avaliação do Cliente</span>
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
  } catch (error: any) { 
    console.error("Erro ao carregar os depoimentos:", 
      error.message || error, 
      error.name || '', 
      error.stack || '',
      error.cause || ''
    );
    errorLoadingTestimonials = true;
  }

  const fallbackTestimonials: GenerateMangoMagmaTestimonialsOutput['testimonials'] = [
    { text: "Que molho incrível! O Mango Magma deu um toque especial no meu churrasco. A ardência é na medida certa e o sabor da manga é delicioso. Já indiquei pra todo mundo!", sentiment: "Adorei!", flavorProfile: "Doce da manga com um toque cítrico sutil e um defumado leve da pimenta.", heatLevel: "Uma onda de calor prazerosa que complementa o sabor." },
    { text: "Estava procurando um molho picante e saboroso, e o Mango Magma superou minhas expectativas. O equilíbrio entre o doce e o ardido é perfeito. Virou meu molho preferido!", sentiment: "Recomendo Muito", flavorProfile: "Manga madura e suculenta com notas herbais que dão um toque sofisticado.", heatLevel: "Uma picância que se destaca, mas não agride o paladar." },
    { text: "Finalmente um molho que entrega sabor e picância de verdade! O Mango Magma é ótimo para dar um 'up' em qualquer prato. E o melhor: é 100% natural. Já faz parte da minha cozinha.", sentiment: "Experiência Top", flavorProfile: "Refrescante, com a doçura da manga bem presente e um final picante que convida a mais.", heatLevel: "Um calor agradável que não domina, ideal para quem gosta de um toque de emoção." },
  ];

  const testimonialsToDisplay = (testimonialsData?.testimonials?.length ?? 0) > 0 
    ? testimonialsData!.testimonials 
    : fallbackTestimonials;

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase text-center mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <span className="text-primary">A Opinião</span> <span style={{color: 'hsl(var(--secondary))'}}>de Quem Já Provou</span>
        </h2>
        <p className="font-body text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
          Veja o que nossos clientes (gerados por IA com um toque brasileiro, mas com carinho!) estão dizendo sobre o Mango Magma.
        </p>
        
        {errorLoadingTestimonials && testimonialsToDisplay === fallbackTestimonials && (
           <p className="text-center text-destructive mb-8 animate-in fade-in duration-700 delay-200">Ops! Não conseguimos carregar os depoimentos mais recentes. Mas confira alguns dos nossos favoritos:</p>
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
            { src: "https://placehold.co/300x400.png", alt: "Pessoa expressando surpresa e prazer ao provar o molho Mango Magma", hint: "rosto surpresa picante comida" },
            { src: "https://placehold.co/300x400.png", alt: "Pessoa comemorando após experimentar o Mango Magma da Fireroots", hint: "felicidade comida pimenta" },
            { src: "https://placehold.co/300x400.png", alt: "Pessoa com olhar satisfeito após provar o sabor intenso do molho", hint: "sabor intenso comida" },
            { src: "https://placehold.co/300x400.png", alt: "Pessoa sorrindo de satisfação após provar o molho Fireroots", hint: "satisfeito picante prazer" },
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
