
'use client';
import Image from 'next/image';
import { Flame, ShoppingCart, Leaf, CheckCircle, Info, PackageOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

const allProducts: Product[] = [
  {
    id: 'mango-magma',
    name: 'Mango Magma',
    description: 'Nosso carro-chefe e sua passagem só de ida pro paraíso (ou inferno?) dos sabores. Manga docinha encontra a Pimenta Scorpion numa dança que vai te fazer suar a camisa. Artesanal, 100% natural e sem frescura.',
    image: 'https://placehold.co/600x700.png',
    price: 24.99,
    heatLevel: 5,
    dataAiHint: 'mango magma molho pimenta natural artesanal',
    ingredients: [
      'Polpa de manga de verdade (direto do pé, quase)',
      'Pimenta Scorpion (a braba, pra dar aquele susto gostoso)',
      'Vinagre de álcool (pra conservar essa joia)',
      'Sal marinho (o toque do chef)',
      'Açúcar de cana (só uma pitada pra equilibrar a picardia)',
      'E só! Sem bruxaria química, sem nome esquisito no rótulo.',
    ],
    flavorProfile: 'Começa com um "oi" docinho e tropical da manga, aí a Scorpion chega chegando, sem pedir licença, com uma ardência que cresce e te abraça forte. Uma verdadeira montanha-russa de sabor!',
    usageSuggestions: [
      'Turbinar carnes, frangos e até aquela saladinha sem graça.',
      'Dar um "grau" em tacos, burgers e laricas em geral.',
      'Transformar sua pipoca numa experiência transcendental.',
      'Marinadas ousadas: misture com azeite e prepare-se pro elogio (ou espanto).',
      'Um pingo no café? Por sua conta e risco, campeão!',
    ],
    allergens: ['Sem Glúten', 'Sem Lactose', '100% Vegano', 'Livre de Soja'],
  },
];

const productsList: Product[] = allProducts.filter(p => p.id === 'mango-magma');

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "🌶️ No Carrinho!",
      description: `${product.name} (150ml) foi adicionado. Prepare o paladar (e um copo de leite, talvez?)!`,
      variant: "default", 
    });
  };

  return (
    <Card className="bg-card border-border shadow-xl flex flex-col h-full transform transition-transform hover:scale-[1.02] duration-300 max-w-lg mx-auto rounded-xl overflow-hidden">
      <CardHeader className="p-0 relative animate-in fade-in duration-500">
        <Image
          src={product.image}
          alt={`Garrafa do Molho de Pimenta ${product.name} Artesanal 150ml da Fireroots`}
          width={600}
          height={400}
          className="rounded-t-lg object-cover w-full h-72 md:h-80"
          data-ai-hint={product.dataAiHint || "molho pimenta produto"}
        />
        <Badge variant="destructive" className="absolute top-4 right-4 text-sm py-1 px-3 font-headline animate-pulse">NÍVEL HARD</Badge>
      </CardHeader>
      <CardContent className="flex-grow pt-6 px-5 md:px-7 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
        <CardTitle className="font-headline text-3xl md:text-4xl uppercase mb-2">
          <span className="text-primary">{product.name.split(' ')[0]}</span> <span style={{color: 'hsl(var(--secondary))'}}>{product.name.split(' ')[1]}</span> <span className="text-lg font-body text-muted-foreground tracking-normal normal-case">(150ml)</span>
        </CardTitle>
        
        <p className="font-body text-md text-foreground mb-5 leading-relaxed">
          {product.description}
        </p>

        {product.ingredients && (
          <div className="mb-5">
            <h4 className="font-headline text-xl uppercase text-secondary mb-2 flex items-center">
              <Leaf className="mr-2 h-5 w-5" /> Ingredientes (Puro Veneno do Bem)
            </h4>
            <ul className="list-none text-sm text-muted-foreground space-y-1 pl-1">
              {product.ingredients.map((ing, idx) => (
                <li key={idx} className={`flex items-start ${idx === product.ingredients!.length - 1 ? 'italic' : ''}`}>
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-secondary flex-shrink-0" /> {ing}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mb-5">
            <h4 className="font-headline text-xl uppercase text-secondary mb-2 flex items-center">
                <Info className="mr-2 h-5 w-5" /> Sabor & Sugestões (Pra Botar Fogo!)
            </h4>
            {product.heatLevel && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-foreground">Nível de Ardência:</span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Flame
                    key={i}
                    className={`w-6 h-6 ${i < product.heatLevel! ? 'text-primary fill-primary animate-in fade-in zoom-in-50 duration-300' : 'text-muted-foreground/20'}`}
                    style={{animationDelay: `${i * 100}ms`}}
                  />
                ))}
                 <span className="text-xs text-muted-foreground">(Use com moderação... ou não, a vida é sua!)</span>
              </div>
            )}
            {product.flavorProfile && (
                <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Como é o sabor?</strong> {product.flavorProfile}</p>
            )}
            {product.usageSuggestions && (
                <>
                    <p className="text-sm font-medium text-foreground mt-3 mb-1">Onde usar pra brilhar (e fazer chorar de alegria):</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                        {product.usageSuggestions.slice(0, 3).map((sug, idx) => <li key={idx}>{sug}</li>)}
                        {product.usageSuggestions.length > 3 && <li>E onde mais sua imaginação (e coragem) permitir!</li>}
                    </ul>
                </>
            )}
        </div>

        {product.allergens && (
          <div className="mb-4">
            <h4 className="font-headline text-xl uppercase text-secondary mb-2 flex items-center">
              <PackageOpen className="mr-2 h-5 w-5" /> Bom Pra Geral (Até Pros Frescos)
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.allergens.map(allergen => (
                <Badge key={allergen} variant="outline" className="text-xs bg-muted/50 hover:bg-muted/70 text-muted-foreground border-muted">
                  {allergen}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <p className="font-body text-3xl font-semibold text-secondary mt-8 text-center">
          R$ {product.price.toFixed(2).replace('.', ',')} <span className="text-lg text-muted-foreground">/ 150ml de pura ousadia</span>
        </p>
      </CardContent>
      <CardFooter className="p-5 md:p-7 mt-2 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-200">
        <Button 
          className="w-full font-headline uppercase text-lg py-3 bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-primary-foreground transform transition-transform hover:scale-105" 
          onClick={handleAddToCart}
          size="lg"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Adicionar ao Carrinho (Se tiver coragem!)
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-gradient-to-b from-background to-card text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase text-center mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <span style={{color: 'hsl(var(--secondary))'}}>Conheça o</span> <span className="text-primary">Mango Magma</span>
        </h2>
        <div className="flex justify-center">
          {productsList.map((product) => ( // Removido index não utilizado
            <div key={product.id} className="animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400">
            <p className="text-md text-muted-foreground max-w-2xl mx-auto">
                <strong>Detalhes Importantes (pra não dizer que não avisei):</strong> Conteúdo líquido: 150ml. Validade: 12 meses (se durar tudo isso, né?). Após aberto, conserve na geladeira e mande ver em até 60 dias. Produzido em pequenos lotes, com amor e uma pitada de maldade (no bom sentido!).
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
