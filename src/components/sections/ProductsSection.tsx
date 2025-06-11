
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
    description: 'Nosso carro-chefe: uma combinação ousada de manga doce com a intensidade da Pimenta Scorpion. Perfeito para quem busca sabor e emoção. Artesanal e 100% natural.',
    image: 'https://placehold.co/600x700.png',
    price: 24.99,
    heatLevel: 5,
    dataAiHint: 'mango magma molho pimenta natural artesanal',
    ingredients: [
      'Polpa de manga fresca e selecionada',
      'Pimenta Scorpion (ardência nível hard!)',
      'Vinagre de álcool para conservação natural',
      'Sal marinho para realçar o sabor',
      'Açúcar de cana para equilibrar a picância',
      'E só! Sem aditivos químicos ou conservantes artificiais.',
    ],
    flavorProfile: 'Começa com a doçura tropical da manga, seguida por uma onda de calor crescente e marcante da pimenta Scorpion. Uma experiência de sabor única e inesquecível!',
    usageSuggestions: [
      'Ideal para carnes, aves, peixes e petiscos.',
      'Experimente em tacos, hambúrgueres e sanduíches.',
      'Dê um toque especial em molhos para salada e marinadas.',
      'Use a criatividade e adicione onde sua imaginação permitir!',
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
      title: "🌶️ Item no Carrinho!",
      description: `${product.name} (150ml) foi adicionado. Prepare-se para o sabor!`,
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
        <Badge variant="destructive" className="absolute top-4 right-4 text-sm py-1 px-3 font-headline animate-pulse">NÍVEL INTENSO</Badge>
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
              <Leaf className="mr-2 h-5 w-5" /> Ingredientes (Pura Natureza)
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
                <Info className="mr-2 h-5 w-5" /> Sabor & Sugestões
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
                 <span className="text-xs text-muted-foreground">(Para paladares aventureiros!)</span>
              </div>
            )}
            {product.flavorProfile && (
                <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Perfil de Sabor:</strong> {product.flavorProfile}</p>
            )}
            {product.usageSuggestions && (
                <>
                    <p className="text-sm font-medium text-foreground mt-3 mb-1">Sugestões de Uso:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                        {product.usageSuggestions.slice(0, 3).map((sug, idx) => <li key={idx}>{sug}</li>)}
                        {product.usageSuggestions.length > 3 && <li>E muito mais!</li>}
                    </ul>
                </>
            )}
        </div>

        {product.allergens && (
          <div className="mb-4">
            <h4 className="font-headline text-xl uppercase text-secondary mb-2 flex items-center">
              <PackageOpen className="mr-2 h-5 w-5" /> Informações Adicionais
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
          R$ {product.price.toFixed(2).replace('.', ',')} <span className="text-lg text-muted-foreground">/ 150ml de pura experiência</span>
        </p>
      </CardContent>
      <CardFooter className="p-5 md:p-7 mt-2 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-200">
        <Button 
          className="w-full font-headline uppercase text-lg py-3 bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-primary-foreground transform transition-transform hover:scale-105" 
          onClick={handleAddToCart}
          size="lg"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Adicionar ao Carrinho
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
          {productsList.map((product) => ( 
            <div key={product.id} className="animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400">
            <p className="text-md text-muted-foreground max-w-2xl mx-auto">
                <strong>Detalhes Importantes:</strong> Conteúdo líquido: 150ml. Validade: 12 meses. Após aberto, conserve na geladeira e consuma em até 60 dias. Produzido em pequenos lotes com ingredientes selecionados.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
