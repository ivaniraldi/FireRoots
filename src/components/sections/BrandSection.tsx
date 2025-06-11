
import Image from 'next/image';
import { Sparkles, Leaf, MapPin, HeartHandshake } from 'lucide-react'; // Adicionado HeartHandshake
import Link from 'next/link'; // Adicionado a importação do Link

const BrandSection = () => {
  return (
    <section id="sobre-marca" className="py-16 md:py-24 bg-card text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-right-10 duration-700 order-last md:order-first">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
              <span style={{color: 'hsl(var(--secondary))'}}>Nossas Raízes</span> <span className="text-primary">de Fogo</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              A Fireroots nasceu daquela paixão bem brasileira por sabores que dão um chega pra lá na mesmice. Acreditamos que pimenta não é só pra arder, é pra despertar, pra dar aquele "tchans" na vida. Usamos ingredientes de verdade, com um toque artesanal que faz toda a diferença (e talvez te faça chorar um pouquinho, de alegria, claro!).
            </p>
            <div className="border-l-4 border-secondary pl-6 py-3 mb-8 bg-background/30 rounded-r-lg animate-in fade-in slide-in-from-left-5 duration-500 delay-200">
              <h3 className="font-headline text-2xl text-secondary uppercase mb-2 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-secondary" /> Nossa Missão (Quase Secreta)
              </h3>
              <p className="font-body text-xl italic text-foreground">
                &quot;Criar sabores que botam pra quebrar, 100% naturais e com aquele jeitinho brasileiro que conquista até coração de pedra (ou paladar de alface)!&quot;
              </p>
            </div>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="flex items-start animate-in fade-in slide-in-from-bottom-5 duration-500 delay-300"><Leaf className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0" /> A Fireroots é mais que uma marca; é uma celebração da intensidade e da zoeira dos sabores tropicais. Caçamos os ingredientes mais puros e as pimentas mais invocadas pra criar paradas únicas, tipo o nosso Mango Magma - um elixir artesanal, feito em pequenos lotes pra garantir que cada gota seja uma lenda (ou um meme).</p>
              <p className="flex items-start animate-in fade-in slide-in-from-bottom-5 duration-500 delay-400"><MapPin className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0" /> Cada frasco é uma homenagem à nossa terra, ao fogo que mora na gente e à coragem de quem encara uma boa pimenta com um sorriso no rosto (e um copo de água na mão). Valorizamos o que é natural, o autêntico e o sabor que conta história.</p>
               <p className="flex items-start animate-in fade-in slide-in-from-bottom-5 duration-500 delay-500"><HeartHandshake className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0" /> Quer colar com a gente? Se você é influencer, tem uma marca daora ou só quer trocar uma ideia sobre como botar mais fogo no mundo, <Link href="/parcerias" className="text-secondary hover:text-primary underline ml-1">chega mais na página de parcerias!</Link></p>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-left-10 duration-700 order-first md:order-last">
            <Image
              src="https://placehold.co/600x500.png"
              alt="Mãos habilidosas preparando ingredientes frescos como manga e pimentas para o molho artesanal Mango Magma da Fireroots"
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
