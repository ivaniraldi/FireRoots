
import Image from 'next/image';
import { Sparkles, Leaf, MapPin, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

const BrandSection = () => {
  return (
    <section id="sobre-marca" className="py-16 md:py-24 bg-card text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-right-10 duration-700 order-last md:order-first">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
              <span style={{color: 'hsl(var(--secondary))'}}>Nossas Raízes,</span> <span className="text-primary">Nossa Essência</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              A Fireroots nasceu da paixão brasileira por sabores autênticos e experiências marcantes. Acreditamos que a pimenta é mais que ardência: é um despertar de sensações. Utilizamos ingredientes de verdade, com um processo artesanal que valoriza cada detalhe.
            </p>
            <div className="border-l-4 border-secondary pl-6 py-3 mb-8 bg-background/30 rounded-r-lg animate-in fade-in slide-in-from-left-5 duration-500 delay-200">
              <h3 className="font-headline text-2xl text-secondary uppercase mb-2 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-secondary" /> Nossa Missão
              </h3>
              <p className="font-body text-xl italic text-foreground">
                &quot;Criar sabores que inspiram, 100% naturais e com a alma brasileira em cada gota!&quot;
              </p>
            </div>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="flex items-start animate-in fade-in slide-in-from-bottom-5 duration-500 delay-300"><Leaf className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0" /> A Fireroots é uma celebração da intensidade e riqueza dos sabores tropicais. Selecionamos os melhores ingredientes e pimentas especiais para criar produtos únicos, como nosso Mango Magma - um molho artesanal, produzido em pequenos lotes para garantir a máxima qualidade e sabor.</p>
              <p className="flex items-start animate-in fade-in slide-in-from-bottom-5 duration-500 delay-400"><MapPin className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0" /> Cada frasco é uma homenagem à nossa terra e à coragem de quem aprecia uma boa pimenta. Valorizamos o natural, o autêntico e o sabor que conta uma história.</p>
               <p className="flex items-start animate-in fade-in slide-in-from-bottom-5 duration-500 delay-500"><HeartHandshake className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0" /> Interessado em parcerias? Se você é influencer, tem uma marca alinhada com nossos valores ou quer colaborar, <Link href="/parcerias" className="text-secondary hover:text-primary underline ml-1">visite nossa página de parcerias!</Link></p>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-left-10 duration-700 order-first md:order-last flex justify-center items-center">
            <video 
              src="https://i.imgur.com/es0kOV6.mp4" 
              width="281" 
              height="500" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="rounded-xl shadow-xl object-cover transform transition-transform hover:scale-105 duration-300 max-w-full"
              data-ai-hint="producao artesanal molho pimenta ingredientes frescos"
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
