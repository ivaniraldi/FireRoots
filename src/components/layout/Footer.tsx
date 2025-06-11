
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import TikTokIcon from '@/components/icons/TikTokIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const Footer = () => {
  return (
    <footer id="contato" className="bg-background border-t border-border/40 py-12 text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-headline text-xl uppercase text-primary mb-3">Fireroots</h3>
            <p className="text-sm text-muted-foreground">
              Sabor tropical. Fogo real. Molho artesanal ultra picante Mango Magma.
            </p>
          </div>
          <div>
            <h4 className="font-headline text-lg uppercase text-foreground mb-3">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#produtos" className="hover:text-primary transition-colors">O Molho</Link></li>
              <li><Link href="/#sobre-marca" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="/carrinho" className="hover:text-primary transition-colors">Carrinho</Link></li>
              <li><Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg uppercase text-foreground mb-3">Contato & Social</h4>
            <p className="text-sm mb-3 text-muted-foreground">contato@fireroots.com.br</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Fireroots" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok da Fireroots" className="text-muted-foreground hover:text-primary transition-colors">
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Fireroots" className="text-muted-foreground hover:text-primary transition-colors">
                <WhatsAppIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 pt-8 text-center">
          <p className="font-headline text-lg uppercase text-primary mb-2">&quot;Sinta o calor do Mango Magma. Honre as raízes.&quot;</p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Fireroots. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
