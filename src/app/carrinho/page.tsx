
'use client';

import { useCart, type CartItem } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, MinusSquare, PlusSquare, ShoppingBag, ArrowLeft, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import React, { useState, useEffect } from 'react';

const CartProductCard = ({ item }: { item: CartItem }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(item.id);
      toast({
        title: "🌶️ Produto Fora!",
        description: `${item.name} (150ml) saiu voando do carrinho. Menos mal, né?`,
        variant: "destructive"
      });
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
     toast({
        title: "🌶️ Produto Removido!",
        description: `${item.name} (150ml) foi pro beleléu. Relaxa, tem mais de onde veio!`,
        variant: "destructive"
      });
  };

  return (
    <Card className="flex flex-col md:flex-row items-center gap-4 p-4 bg-card border-border shadow-sm rounded-lg">
      <Image
        src={item.image}
        alt={`Garrafa do molho ${item.name} 150ml da Fireroots`}
        width={100}
        height={100}
        className="rounded-md object-cover w-24 h-24 md:w-32 md:h-32 border border-border/50"
        data-ai-hint={item.dataAiHint || "imagem produto molho"}
      />
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-lg font-semibold text-secondary">{item.name} <span className="text-sm text-muted-foreground">(150ml)</span></h3>
        <p className="text-sm text-muted-foreground">Preço Unitário: R$ {item.price.toFixed(2).replace('.', ',')}</p>
        <p className="text-md font-medium text-primary">Subtotal: R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(item.quantity - 1)} aria-label={`Diminuir quantidade de ${item.name}`} className="hover:text-destructive">
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
        <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(item.quantity + 1)} aria-label={`Aumentar quantidade de ${item.name}`} className="hover:text-primary">
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
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    neighborhood: '',
    zipCode: '',
    city: '',
    state: '',
    phone: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const { fullName, address, neighborhood, zipCode, city, state } = shippingInfo;
    // Telefone é opcional
    if (fullName && address && neighborhood && zipCode && city && state) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [shippingInfo]);

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "🗑️ Carrinho Vazio!",
      description: "Limpamos tudo! Agora é só encher de novo com mais Mango Magma.",
    });
  };
  
  const handleCheckout = () => {
    if (!isFormValid) {
      toast({
        title: "✋ Calma lá, Fera!",
        description: "Preencha os dados de entrega pra gente saber onde mandar essa belezura.",
        variant: "destructive",
      });
      return;
    }

    const phoneNumber = "554892058069"; // Seu número de WhatsApp
    let message = `Olá, Fireroots! 🔥\nQuero fazer um pedido:\n\n`;

    items.forEach(item => {
      message += `${item.quantity}x ${item.name} (150ml) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    message += `\nTotal do Pedido: R$ ${totalPrice.toFixed(2).replace('.', ',')}\n`;
    message += `\n-- DADOS PARA ENTREGA --\n`;
    message += `Nome: ${shippingInfo.fullName}\n`;
    message += `Endereço: ${shippingInfo.address}\n`;
    message += `Bairro: ${shippingInfo.neighborhood}\n`;
    message += `CEP: ${shippingInfo.zipCode}\n`;
    message += `Cidade: ${shippingInfo.city}\n`;
    message += `Estado: ${shippingInfo.state}\n`;
    if (shippingInfo.phone) {
      message += `Telefone: ${shippingInfo.phone}\n`;
    }
    message += `\nObrigado(a) e pode caprichar na pimenta! 😉`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: "🚀 Pedido no Grau!",
      description: "Seu pedido foi enviado via WhatsApp. Agora é só aguardar o calor chegar! Seu carrinho foi esvaziado.",
    });
    clearCart();
    setShippingInfo({ fullName: '', address: '', neighborhood: '', zipCode: '', city: '', state: '', phone: '' }); // Limpa o formulário
  };

  if (totalItems === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
        <ShoppingBag className="w-24 h-24 text-muted-foreground mb-6" />
        <h1 className="font-headline text-4xl md:text-5xl uppercase mb-4">
          <span style={{color: '#FDA302'}}>Seu carrinho tá</span> <span className="text-primary">mais vazio que prato de dieta!</span>
        </h1>
        <p className="font-body text-lg text-muted-foreground mb-8 max-w-md">
          Bora botar um Mango Magma aí pra dar um jeito nisso? A vida é muito curta pra comida sem graça!
        </p>
        <Button 
          size="lg" 
          asChild 
          className="font-headline uppercase bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform hover:scale-105"
        >
          <Link href="/#produtos">Quero Pimenta!</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[calc(100vh-200px)]">
      <div className="animate-in fade-in slide-in-from-top-10 duration-500">
        <Button variant="outline" asChild className="mb-6 hover:bg-secondary/10 hover:border-secondary group">
          <Link href="/#produtos">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Voltar e Pegar Mais Fogo
          </Link>
        </Button>
        <h1 className="font-headline text-4xl md:text-5xl uppercase mb-8">
           <span className="text-primary">Seu Carrinho</span> <span style={{color: '#FDA302'}}>Turbinado</span>
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6 animate-in fade-in slide-in-from-left-10 duration-500 delay-100">
          {items.map(item => (
            <CartProductCard key={item.id} item={item} />
          ))}

          <Card className="bg-card border-border shadow-md rounded-lg mt-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl uppercase text-secondary">Informações para Entrega (Capricha aí!)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-muted-foreground">Nome Completo</Label>
                  <Input type="text" id="fullName" name="fullName" value={shippingInfo.fullName} onChange={handleInputChange} placeholder="Seu nome completo, chefia" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="zipCode" className="text-sm font-medium text-muted-foreground">CEP</Label>
                  <Input type="text" id="zipCode" name="zipCode" value={shippingInfo.zipCode} onChange={handleInputChange} placeholder="Ex: 00000-000" required className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="address" className="text-sm font-medium text-muted-foreground">Endereço Completo (Rua, Número, Complemento)</Label>
                <Input type="text" id="address" name="address" value={shippingInfo.address} onChange={handleInputChange} placeholder="Ex: Rua das Pimentas, 123, Ap 4B" required className="mt-1" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="neighborhood" className="text-sm font-medium text-muted-foreground">Bairro</Label>
                  <Input type="text" id="neighborhood" name="neighborhood" value={shippingInfo.neighborhood} onChange={handleInputChange} placeholder="Seu bairro" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="city" className="text-sm font-medium text-muted-foreground">Cidade</Label>
                  <Input type="text" id="city" name="city" value={shippingInfo.city} onChange={handleInputChange} placeholder="Sua cidade" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="state" className="text-sm font-medium text-muted-foreground">Estado (UF)</Label>
                  <Input type="text" id="state" name="state" value={shippingInfo.state} onChange={handleInputChange} placeholder="Ex: SP" required maxLength={2} className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Telefone (Opcional, mas ajuda!)</Label>
                <Input type="tel" id="phone" name="phone" value={shippingInfo.phone} onChange={handleInputChange} placeholder="(XX) XXXXX-XXXX" className="mt-1" />
              </div>
               {!isFormValid && (
                <div className="flex items-center text-xs text-destructive p-2 bg-destructive/10 rounded-md">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Preencha todos os campos obrigatórios de entrega para continuar.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 animate-in fade-in slide-in-from-right-10 duration-500 delay-200">
          <Card className="sticky top-24 bg-card border-border shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl uppercase text-secondary">Resumo da Brincadeira</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal ({totalItems} {totalItems === 1 ? 'produtinho' : 'produtinhos'})</span>
                <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Frete</span>
                <span className="text-primary font-semibold">Grátis! (Por nossa conta!)</span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl font-semibold text-foreground">
                <span className="text-primary">Total da Zoeira:</span>
                <span className="text-primary">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-6">
              <Button 
                size="lg" 
                className="w-full font-headline uppercase bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transform transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group" 
                onClick={handleCheckout}
                disabled={!isFormValid || items.length === 0}
                aria-label={!isFormValid ? "Preencha os dados de entrega para finalizar" : "Finalizar compra via WhatsApp"}
              >
                <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Mandar Pedido pro WhatsApp
                {isFormValid && <CheckCircle className="ml-2 h-5 w-5 text-green-200"/>}
              </Button>
              <Button variant="outline" className="w-full hover:border-destructive hover:text-destructive" onClick={handleClearCart}>
                Limpar Carrinho (Recomeçar a Zoeira)
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
