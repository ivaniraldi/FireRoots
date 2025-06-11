
'use client';
import Image from 'next/image';
import { Flame, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

const allProducts: Product[] = [
  {
    id: 'mango-magma',
    name: 'Mango Magma',
    description: 'Feito com manga natural e pimenta Scorpion em uma garrafa de 150ml. Sem conservantes. Sabor puro, picante e real.',
    image: 'https://placehold.co/600x700.png',
    price: 24.99,
    heatLevel: 5,
    dataAiHint: 'mango magma molho pimenta',
  },
  {
    id: 'pineapple-inferno',
    name: 'Abacaxi Inferno',
    description: 'Uma explosão tropical de abacaxi doce com a picância ardente da Habanero. Garrafa de 150ml. Perfeito para grelhados.',
    image: 'https://placehold.co/600x700.png',
    price: 27.50,
    heatLevel: 4,
    dataAiHint: 'abacaxi pimenta picante',
  },
  {
    id: 'ghost-guava',
    name: 'Goiaba Fantasma',
    description: 'A doçura exótica da goiaba encontra o calor assombroso da pimenta Ghost Pepper. Garrafa de 150ml. Para os corajosos.',
    image: 'https://placehold.co/600x700.png',
    price: 32.00,
    heatLevel: 5, 
    dataAiHint: 'goiaba ghost pepper molho',
  },
];

const productsList: Product[] = allProducts.filter(p => p.id === 'mango-magma'); // MVP: Show only Mango Magma

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.name} (150ml) foi adicionado ao seu carrinho.`,
    });
  };

  return (
    <Card className="bg-card border-border shadow-lg flex flex-col h-full transform transition-transform hover:scale-105 duration-300 max-w-md mx-auto">
      <CardHeader className="p-0">
        <Image
          src={product.image}
          alt={`Molho de Pimenta ${product.name} Artesanal 150ml`}
          width={600}
          height={400}
          className="rounded-t-lg object-cover w-full h-64 md:h-80"
          data-ai-hint={product.dataAiHint}
        />
      </CardHeader>
      <CardContent className="flex-grow pt-6">
        <CardTitle className="font-headline text-3xl md:text-4xl uppercase text-primary mb-3">
          {product.name}
        </CardTitle>
        <p className="font-body text-md text-muted-foreground mb-4 leading-relaxed">
          {product.description}
        </p>
        {product.heatLevel && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-foreground">Nível de Picância:</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <Flame
                key={i}
                className={`w-5 h-5 ${i < product.heatLevel! ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`}
              />
            ))}
          </div>
        )}
        <p className="font-body text-2xl font-semibold text-accent">
          R$ {product.price.toFixed(2).replace('.', ',')} / 150ml
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full font-headline uppercase text-lg py-3" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-headline text-4xl md:text-5xl uppercase text-center text-primary mb-12">
          Conheça o Mango Magma
        </h2>
        <div className="flex justify-center">
          {productsList.map((product, index) => (
            <div key={product.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
