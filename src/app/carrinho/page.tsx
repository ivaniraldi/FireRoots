
'use client';

import { useCart, type CartItem } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, MinusSquare, PlusSquare, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CartProductCard = ({ item }: { item: CartItem }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(item.id);
      toast({
        title: "Produto removido",
        description: `${item.name} (150ml) foi removido do carrinho.`,
        variant: "destructive"
      });
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
    toast({
      title: "Produto removido",
      description: `${item.name} (150ml) foi removido do carrinho.`,
      variant: "destructive"
    });
  };

  return (
    <Card className="flex flex-col md:flex-row items-center gap-4 p-4 bg-card border-border shadow-sm">
      <Image
        src={item.image}
        alt={`Garrafa do molho ${item.name} 150ml`}
        width={100}
        height={100}
        className="rounded-md object-cover w-24 h-24 md:w-32 md:h-32"
        data-ai-hint={item.dataAiHint || "imagem produto"}
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-primary">{item.name} <span className="text-sm text-muted-foreground">(150ml)</span></h3>
        <p className="text-sm text-muted-foreground">Preço Unitário: R$ {item.price.toFixed(2).replace('.', ',')}</p>
        <p className="text-md font-medium">Subtotal: R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(item.quantity - 1)} aria-label={`Diminuir quantidade de ${item.name}`}>
          <MinusSquare className="h-5 w-5" />
        </Button>
        <Input
          type="number"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10) || 1)}
          className="w-16 text-center h-9"
          min="1"
          aria-label={`Quantidade de ${item.name}`}
        />
        <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(item.quantity + 1)} aria-label={`Aumentar quantidade de ${item.name}`}>
          <PlusSquare className="h-5 w-5" />
        </Button>
      </div>
      <Button variant="ghost" size="icon" onClick={handleRemove} className="text-destructive hover:text-destructive/80" aria-label={`Remover ${item.name} do carrinho`}>
        <Trash2 className="h-5 w-5" />
        <span className="sr-only">Remover item</span>
      </Button>
    </Card>
  );
};

export default function CartPage() {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const { toast } = useToast();

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Carrinho limpo!",
      description: "Todos os itens foram removidos do seu carrinho.",
    });
  };
  
  const handleCheckout = () => {
    if (totalItems === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens ao carrinho antes de finalizar o pedido.",
        variant: "destructive",
      });
      return;
    }

    const phoneNumber = "554892058069";
    let message = `Olá Fireroots! Gostaria de fazer o seguinte pedido:\n\n`;

    items.forEach(item => {
      message += `${item.quantity}x ${item.name} (150ml) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    message += `\nTotal do Pedido: R$ ${totalPrice.toFixed(2).replace('.', ',')}\n`;
    message += `\nObrigado(a)!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Pedido enviado via WhatsApp!",
      description: "Continue a conversa no WhatsApp para finalizar seu pedido com a Fireroots. Seu carrinho foi limpo.",
    });
    clearCart();
  };


  if (totalItems === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center">
        <ShoppingBag className="w-24 h-24 text-muted-foreground mb-6" />
        <h1 className="font-headline text-4xl md:text-5xl uppercase text-primary mb-4">
          Seu carrinho está vazio
        </h1>
        <p className="font-body text-lg text-muted-foreground mb-8">
          Parece que você ainda não adicionou nosso delicioso Mango Magma. Que tal experimentar?
        </p>
        <Button size="lg" asChild className="font-headline uppercase">
          <Link href="/#produtos">Ver o Mango Magma</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[calc(100vh-200px)]">
      <Button variant="outline" asChild className="mb-6">
        <Link href="/#produtos">
          <ArrowLeft className="mr-2 h-4 w-4" /> Continuar Comprando
        </Link>
      </Button>
      <h1 className="font-headline text-4xl md:text-5xl uppercase text-primary mb-8">
        Seu Carrinho de Compras
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {items.map(item => (
            <CartProductCard key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24 bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl uppercase text-foreground">Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'itens'})</span>
                <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Frete</span>
                <span className="text-primary">Grátis</span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl font-semibold text-foreground">
                <span>Total</span>
                <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button size="lg" className="w-full font-headline uppercase" onClick={handleCheckout}>
                Finalizar Compra via WhatsApp
              </Button>
              <Button variant="outline" className="w-full" onClick={handleClearCart}>
                Limpar Carrinho
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

