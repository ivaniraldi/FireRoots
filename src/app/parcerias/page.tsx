
'use client';

import type { Metadata } from 'next';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // Importando Textarea
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Handshake, Send, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

// Metadata estática, pois 'use client' não permite exportação direta de metadata dinâmica
export const dynamic = 'force-static'; // Garante que a página seja estática
const pageTitle = 'Parcerias de Peso - Fireroots';
const pageDescription = 'Quer botar fogo no mundo com a gente? Manda sua ideia de parceria pra Fireroots e vamos incendiar o mercado juntos!';

export function generateMetadata(): Metadata {
  return {
    title: pageTitle,
    description: pageDescription,
    keywords: 'parceria fireroots, influencer molho de pimenta, marketing de influencia, mango magma, contato comercial',
  };
}

interface FormData {
  name: string;
  email: string;
  socialHandle: string;
  message: string;
}

export default function PartnershipsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    socialHandle: '',
    message: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const { name, email, socialHandle, message } = formData;
    // Validação simples: todos os campos devem ser preenchidos
    if (name.trim() && email.trim() && socialHandle.trim() && message.trim() && email.includes('@')) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) {
      toast({
        title: '✋ Ih, faltou algo!',
        description: 'Preencha todos os campos pra gente trocar uma ideia maneira.',
        variant: 'destructive',
      });
      return;
    }

    const mailtoSubject = `Proposta de Parceria Fireroots: ${formData.name}`;
    const mailtoBody = `Olá Fireroots,

Meu nome é ${formData.name}.
Email: ${formData.email}
Perfil Social: ${formData.socialHandle}

Minha ideia de parceria é:
${formData.message}

Abraços!
`;
    const mailtoLink = `mailto:contato@fireroots.com.br?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    window.location.href = mailtoLink;

    toast({
      title: '🚀 Proposta no Forno!',
      description: 'Seu cliente de email vai abrir pra você enviar a proposta. Tamo junto!',
    });
    // Limpa o formulário após tentativa de envio
    setFormData({ name: '', email: '', socialHandle: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center">
      <div className="animate-in fade-in slide-in-from-top-10 duration-700 max-w-2xl w-full">
        <Card className="bg-card border-border shadow-xl rounded-xl">
          <CardHeader className="text-center">
            <Handshake className="mx-auto h-16 w-16 text-secondary mb-4" />
            <CardTitle className="font-headline text-4xl md:text-5xl uppercase">
              <span className="text-primary">Bora Tocar o Terror</span> <span style={{color: 'hsl(var(--custom-gray))'}}>Juntos?</span>
            </CardTitle>
            <CardDescription className="font-body text-lg text-muted-foreground mt-2">
              Se você é influencer, criador de conteúdo ou tem uma marca que é puro fogo, manda sua ideia pra gente! A Fireroots adora uma parceria que bota pra quebrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Seu Nome ou da Marca</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: João da Silva / Marca Braba"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Seu Melhor Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex: joao.brabo@email.com"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="socialHandle" className="text-sm font-medium text-muted-foreground">Seu @ no Instagram/TikTok (ou site)</Label>
                <Input
                  type="text"
                  id="socialHandle"
                  name="socialHandle"
                  value={formData.socialHandle}
                  onChange={handleChange}
                  placeholder="Ex: @fireroots_oficial"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">Sua Ideia Incendiária (Conta Tudo!)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreve aí como a gente pode botar fogo no parquinho juntos..."
                  required
                  className="mt-1 min-h-[120px]"
                />
              </div>
              {!isFormValid && (
                <div className="flex items-center text-xs text-destructive p-2 bg-destructive/10 rounded-md animate-in fade-in duration-300">
                  <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  Preencha todos os campos corretamente pra gente continuar, beleza? O email precisa ser válido.
                </div>
              )}
              <Button
                type="submit"
                size="lg"
                className="w-full font-headline uppercase bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform hover:scale-105 group disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={!isFormValid}
                aria-label={!isFormValid ? "Preencha todos os campos para enviar" : "Enviar proposta de parceria"}
              >
                <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Mandar Proposta (e Botar Fogo!)
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center pt-6">
             <Button variant="link" asChild className="text-sm text-muted-foreground hover:text-primary">
                <Link href="/">Prefiro só comprar o molho por enquanto</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
