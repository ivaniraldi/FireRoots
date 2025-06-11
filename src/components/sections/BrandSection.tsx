
import Image from 'next/image';

const BrandSection = () => {
  return (
    <section id="sobre-marca" className="py-16 md:py-24 bg-background/70 text-foreground backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 order-last md:order-first">
            <h2 className="font-headline text-4xl md:text-5xl uppercase text-primary mb-6">
              Nossas Raízes de Fogo
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              Nascemos das raízes brasileiras, cultivando sabores com fogo e paixão. Acreditamos que o picante é um estilo de vida, uma experiência que desperta os sentidos através de ingredientes puros e processos artesanais.
            </p>
            <div className="border-l-4 border-accent pl-6 py-2 mb-8">
              <h3 className="font-headline text-2xl text-accent uppercase mb-2">Nossa Missão</h3>
              <p className="font-body text-xl italic text-foreground">
                &quot;Raízes ardentes, sabores selvagens e inesquecíveis, 100% naturais.&quot;
              </p>
            </div>
            <div className="mt-8 space-y-3 text-muted-foreground">
              <p>A Fireroots é mais que uma marca de molhos; é uma celebração da intensidade e da autenticidade dos sabores tropicais. Buscamos os ingredientes mais puros e as pimentas mais potentes para criar experiências de sabor únicas, como o nosso Mango Magma - um molho artesanal feito em pequenos lotes para garantir a máxima qualidade.</p>
              <p>Cada gota é uma homenagem à terra, ao fogo e à coragem de quem enfrenta o calor com prazer. Valorizamos o natural, o autêntico e o sabor que conta uma história.</p>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-left-8 duration-700 order-first md:order-last">
            <Image
              src="https://placehold.co/600x500.png"
              alt="Representação da marca Fireroots: raízes de fogo simbolizando ingredientes naturais e produção artesanal de molhos picantes"
              width={600}
              height={500}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="raizes fogo natural artesanal marca"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
