
'use client';
import Image from 'next/image';
import { Flame, ShoppingCart, Leaf, CheckCircle, Info } from 'lucide-react';
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
    description: 'Mango Magma é um molho artesanal ultra picante que combina a doçura natural da manga madura com o calor extremo da pimenta Scorpion. Formulado para quem busca uma experiência sensorial intensa, sem concessões de sabor.',
    image: 'https://placehold.co/600x700.png',
    price: 24.99,
    heatLevel: 5,
    dataAiHint: 'mango magma molho pimenta natural artesanal',
    ingredients: [
      'Polpa de manga (manga)',
      'Pimenta Scorpion',
      'Sal marinho',
      'Açúcar de cana',
      'Nada além disso: sem corantes, sem conservantes artificiais e sem aditivos químicos.',
    ],
    flavorProfile: 'Início levemente adocicado pela manga, seguido de ardência progressiva que perdura no paladar.',
    usageSuggestions: [
      'Acompanhamento em carnes grelhadas, hambúrgueres e frango.',
      'Finalização de tacos, burritos e bowls mexicanos.',
      'Temperar petiscos: batatas fritas, nachos, espetinhos.',
      'Marinadas rápidas: misturar com azeite e utilizar em churrascos.',
      '“Shot” de coragem: uma dose direta antes do prato principal.',
    ],
    allergens: ['Sem Glúten', 'Sem Lactose', 'Vegano', 'Sem Soja'],
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
    <Card className="bg-card border-border shadow-lg flex flex-col h-full transform transition-transform hover:scale-105 duration-300 max-w-lg mx-auto">
      <CardHeader className="p-0">
        <Image
          src={product.image}
          alt={`Molho de Pimenta ${product.name} Artesanal 150ml com manga e pimenta Scorpion`}
          width={600}
          height={400}
          className="rounded-t-lg object-cover w-full h-64 md:h-80"
          data-ai-hint={product.dataAiHint}
        />
      </CardHeader>
      <CardContent className="flex-grow pt-6 px-4 md:px-6">
        <CardTitle className="font-headline text-3xl md:text-4xl uppercase text-primary mb-2">
          {product.name} <span className="text-lg font-body text-muted-foreground">(150ml)</span>
        </CardTitle>
        
        <p className="font-body text-md text-foreground mb-4 leading-relaxed">
          {product.description}
        </p>

        {product.ingredients && (
          <div className="mb-4">
            <h4 className="font-headline text-lg uppercase text-accent mb-2 flex items-center">
              <Leaf className="mr-2 h-5 w-5" /> Ingredientes (100% Naturais)
            </h4>
            <ul className="list-none text-sm text-muted-foreground space-y-1">
              {product.ingredients.map((ing, idx) => (
                <li key={idx} className={idx === product.ingredients!.length - 1 ? 'italic' : ''}>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mb-4">
            <h4 className="font-headline text-lg uppercase text-accent mb-2 flex items-center">
                <Info className="mr-2 h-5 w-5" /> Sabor & Uso
            </h4>
            {product.heatLevel && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-foreground">Nível de Picância:</span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Flame
                    key={i}
                    className={`w-5 h-5 ${i < product.heatLevel! ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`}
                  />
                ))}
              </div>
            )}
            {product.flavorProfile && (
                <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Notas de sabor:</strong> {product.flavorProfile}</p>
            )}
            {product.usageSuggestions && (
                <>
                    <p className="text-sm font-medium text-foreground mt-2 mb-1">Sugestões de uso:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                        {product.usageSuggestions.slice(0, 3).map((sug, idx) => <li key={idx}>{sug}</li>)}
                        {product.usageSuggestions.length > 3 && <li>E muito mais!</li>}
                    </ul>
                </>
            )}
        </div>


        {product.allergens && (
          <div className="mb-4">
            <h4 className="font-headline text-lg uppercase text-accent mb-2 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" /> Ideal Para Você
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.allergens.map(allergen => (
                <Badge key={allergen} variant="secondary" className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground">
                  {allergen}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <p className="font-body text-2xl font-semibold text-accent mt-6">
          R$ {product.price.toFixed(2).replace('.', ',')} / 150ml
        </p>
      </CardContent>
      <CardFooter className="p-4 md:p-6">
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
        <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
                <strong>Informações Adicionais:</strong> Conteúdo líquido: 150ml. Validade: 12 meses (vide rótulo). Após aberto, refrigerar e consumir em até 60 dias. Produzido em pequenos lotes para máxima qualidade.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
