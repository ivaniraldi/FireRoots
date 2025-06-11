
'use client';

import type { Metadata } from 'next';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Handshake, Send, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export const dynamic = 'force-static';
const pageTitle = 'Parcerias Fireroots - Vamos Crescer Juntos!';
const pageDescription = 'Tem uma ideia de parceria ou quer colaborar com a Fireroots? Entre em contato conosco e vamos explorar oportunidades juntos!';

export function generateMetadata(): Metadata {
  return {
    title: pageTitle,
    description: pageDescription,
    keywords: 'parceria fireroots, influencer molho de pimenta, marketing de influencia, mango magma, contato comercial, colaboração',
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
        title: '✋ Atenção!',
        description: 'Por favor, preencha todos os campos para enviar sua proposta.',
        variant: 'destructive',
      });
      return;
    }

    const mailtoSubject = `Proposta de Parceria Fireroots: ${formData.name}`;
    const mailtoBody = `Olá Fireroots,

Meu nome é ${formData.name}.
Email: ${formData.email}
Perfil Social/Site: ${formData.socialHandle}

Minha proposta de parceria é:
${formData.message}

Atenciosamente,
${formData.name}
`;
    const mailtoLink = `mailto:contato@fireroots.com.br?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    window.location.href = mailtoLink;

    toast({
      title: '🚀 Proposta Enviada!',
      description: 'Seu cliente de e-mail abrirá para você enviar a proposta. Agradecemos o contato!',
    });
    setFormData({ name: '', email: '', socialHandle: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center">
      <div className="animate-in fade-in slide-in-from-top-10 duration-700 max-w-2xl w-full">
        <Card className="bg-card border-border shadow-xl rounded-xl">
          <CardHeader className="text-center">
            <Handshake className="mx-auto h-16 w-16 text-secondary mb-4" />
            <CardTitle className="font-headline text-4xl md:text-5xl uppercase">
              <span className="text-primary">Vamos Colaborar</span> <span style={{color: 'hsl(var(--custom-gray))'}}>e Crescer Juntos?</span>
            </CardTitle>
            <CardDescription className="font-body text-lg text-muted-foreground mt-2">
              Se você é influencer, criador de conteúdo, ou representa uma marca com sinergia com a Fireroots, adoraríamos ouvir sua proposta de parceria!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Seu Nome ou Nome da Marca</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: João Silva / Marca XYZ"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Seu Melhor Email de Contato</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex: contato@email.com"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="socialHandle" className="text-sm font-medium text-muted-foreground">Seu Perfil Principal (Instagram, TikTok, Site, etc.)</Label>
                <Input
                  type="text"
                  id="socialHandle"
                  name="socialHandle"
                  value={formData.socialHandle}
                  onChange={handleChange}
                  placeholder="Ex: @seuperfil ou www.seusite.com"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">Sua Ideia de Parceria (Conte-nos Mais!)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva sua proposta de colaboração, seus objetivos e como podemos trabalhar juntos..."
                  required
                  className="mt-1 min-h-[120px]"
                />
              </div>
              {!isFormValid && (
                <div className="flex items-center text-xs text-destructive p-2 bg-destructive/10 rounded-md animate-in fade-in duration-300">
                  <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  Por favor, preencha todos os campos. O email deve ser válido.
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
                Enviar Proposta
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center pt-6">
             <Button variant="link" asChild className="text-sm text-muted-foreground hover:text-primary">
                <Link href="/">Voltar para a loja</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
