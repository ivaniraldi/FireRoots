
import { generateMangoMagmaTestimonials, type GenerateMangoMagmaTestimonialsOutput } from '@/ai/flows/generate-testimonials';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Flame } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }: { testimonial: GenerateMangoMagmaTestimonialsOutput['testimonials'][0], index: number }) => {
  const initials = `C${index + 1}`; // Cliente 1, Cliente 2, etc.
  return (
    <Card className="bg-card border-border shadow-lg transform transition-transform hover:scale-105 duration-300 flex flex-col h-full">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar>
          <AvatarImage src={`https://placehold.co/100x100.png?text=${initials}`} alt={`Foto do Cliente ${index + 1} que provou Mango Magma`} data-ai-hint="pessoa retrato" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-semibold text-primary">Cliente Satisfeito {index + 1}</CardTitle>
          <p className="text-xs text-muted-foreground">{testimonial.sentiment}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground italic mb-3">&quot;{testimonial.text}&quot;</p>
        <div className="text-sm space-y-1 mt-2">
          <p><strong className="text-accent">Sabor Percebido:</strong> {testimonial.flavorProfile}</p>
          <p><strong className="text-primary">Nível de Picância:</strong> {testimonial.heatLevel}</p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Flame key={i} className={`w-4 h-4 ${i < 4 ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`} />
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
  } catch (error) {
    console.error("Falha ao carregar depoimentos:", error);
    errorLoadingTestimonials = true;
  }

  const fallbackTestimonials: GenerateMangoMagmaTestimonialsOutput['testimonials'] = [
    { text: "Nunca provei algo tão intenso e saboroso. O Mango Magma é incrível!", sentiment: "Extasiado", flavorProfile: "Doce, cítrico com um toque defumado delicioso.", heatLevel: "Explosão de calor intenso e muito duradouro." },
    { text: "É fogo na boca com gosto de paraíso tropical. Perfeito equilíbrio entre manga e pimenta!", sentiment: "Muito Positivo", flavorProfile: "Manga madura suculenta com notas herbais complexas.", heatLevel: "Picância forte que cresce gradualmente e permanece." },
    { text: "Adiciona um toque especial e picante em tudo! Recomendo demais o Mango Magma.", sentiment: "Positivo", flavorProfile: "Refrescante e levemente adocicado, com a manga bem presente.", heatLevel: "Calor agradável que não domina o sabor, perfeito para o dia a dia." },
  ];

  const testimonialsToDisplay = (testimonialsData?.testimonials.length ?? 0) > 0 
    ? testimonialsData!.testimonials 
    : fallbackTestimonials;

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-headline text-4xl md:text-5xl uppercase text-center text-primary mb-4">
          O Que Dizem do Mango Magma?
        </h2>
        <p className="font-body text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Reações reais (ou quase) de quem se atreveu a provar nosso molho de manga com pimenta Scorpion.
        </p>
        
        {errorLoadingTestimonials && testimonialsToDisplay === fallbackTestimonials && (
           <p className="text-center text-destructive mb-8">Não foi possível carregar os depoimentos dinâmicos. Mostrando exemplos.</p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsToDisplay.map((testimonial, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{animationDelay: `${index * 150}ms`}}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { src: "https://placehold.co/300x400.png", alt: "Pessoa com expressão surpresa ao provar molho picante", hint: "rosto surpreso picante" },
            { src: "https://placehold.co/300x400.png", alt: "Pessoa suando ao experimentar o molho Mango Magma", hint: "suando pimenta" },
            { src: "https://placehold.co/300x400.png", alt: "Pessoa emocionada com o sabor intenso do molho", hint: "comida emocionante sabor" },
            { src: "https://placehold.co/300x400.png", alt: "Pessoa com expressão de 'fogo na boca' após provar o molho", hint: "boca fogo pimenta" },
          ].map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg animate-in fade-in zoom-in-90 duration-700" style={{animationDelay: `${(testimonialsToDisplay.length + index) * 150}ms`}}>
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
