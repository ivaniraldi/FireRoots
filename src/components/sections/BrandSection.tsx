
import Image from 'next/image';
import { Sparkles, Leaf, MapPin } from 'lucide-react'; // Adicionado MapPin

const BrandSection = () => {
  return (
    <section id="sobre-marca" className="py-16 md:py-24 bg-card text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-right-10 duration-700 order-last md:order-first">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
              <span style={{color: '#FDA302'}}>Nossas Raízes</span> <span className="text-primary">de Fogo</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              A Fireroots nasceu da pura paixão brasileira por sabores que incendeiam a alma (e a boca!). Acreditamos que pimenta não é só tempero, é um estilo de vida, uma experiência que acorda os sentidos com ingredientes de verdade e aquele toque artesanal que faz toda a diferença.
            </p>
            <div className="border-l-4 border-secondary pl-6 py-3 mb-8 bg-background/30 rounded-r-lg">
              <h3 className="font-headline text-2xl text-secondary uppercase mb-2 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-secondary" /> Nossa Missão (Quase Secreta)
              </h3>
              <p className="font-body text-xl italic text-foreground">
                &quot;Criar sabores que botam pra quebrar, 100% naturais e com aquele jeitinho brasileiro que conquista!&quot;
              </p>
            </div>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="flex items-start"><Leaf className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0" /> A Fireroots é mais que uma marca de molhos; é uma celebração da intensidade e da autenticidade dos sabores tropicais. Caçamos os ingredientes mais puros e as pimentas mais invocadas para criar experiências únicas, como o nosso Mango Magma - um elixir artesanal, feito em pequenos lotes pra garantir que cada gota seja lendária.</p>
              <p className="flex items-start"><MapPin className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0" /> Cada frasco é uma homenagem à nossa terra, ao fogo que mora na gente e à coragem de quem encara uma boa pimenta com um sorriso no rosto. Valorizamos o que é natural, o autêntico e o sabor que conta história (e às vezes faz a gente suar um pouquinho!).</p>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-left-10 duration-700 order-first md:order-last">
            <Image
              src="https://placehold.co/600x500.png"
              alt="Mãos habilidosas preparando ingredientes frescos como manga e pimentas para o molho artesanal Fireroots"
              width={600}
              height={500}
              className="rounded-xl shadow-xl object-cover transform transition-transform hover:scale-105 duration-300"
              data-ai-hint="artesanal ingredientes pimenta manga maos"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
