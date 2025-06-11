
import Link from 'next/link';
import { Instagram, Flame } from 'lucide-react';
import TikTokIcon from '@/components/icons/TikTokIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border/40 py-12 text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-start">
          <div>
            <div className="flex items-center gap-2 text-2xl font-headline uppercase text-primary mb-3">
                <Flame className="h-7 w-7" style={{ color: '#D73908' }} />
                <span style={{ color: '#FDA302' }}>Fire</span><span style={{ color: '#C2BDC0' }}>roots</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sabor que incendeia, feito no Brasil! Molho artesanal ultra picante Mango Magma. A pimenta que faltava na sua vida.
            </p>
          </div>
          <div>
            <h4 className="font-headline text-lg uppercase text-secondary mb-4">Links da Hora</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#produtos" className="hover:text-secondary transition-colors">O Brabo (Nosso Molho)</Link></li>
              <li><Link href="/#sobre-marca" className="hover:text-secondary transition-colors">Quem Manda na Brasa</Link></li>
              <li><Link href="/carrinho" className="hover:text-secondary transition-colors">Meu Rango Picante</Link></li>
              <li><Link href="/politica-de-privacidade" className="hover:text-secondary transition-colors">Papo Sério (Privacidade)</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg uppercase text-secondary mb-4">Manda um Zap & Segue Aí</h4>
            <p className="text-sm mb-1 text-muted-foreground">Tem alguma ideia genial ou só quer bater um papo ardente?</p>
            <p className="text-sm mb-3 text-muted-foreground font-semibold"><a href="mailto:contato@fireroots.com.br" className="hover:text-secondary">contato@fireroots.com.br</a></p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Fireroots" className="text-muted-foreground hover:text-secondary transition-colors">
                <Instagram size={26} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok da Fireroots" className="text-muted-foreground hover:text-secondary transition-colors">
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a href="https://wa.me/554892058069" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Fireroots" className="text-muted-foreground hover:text-secondary transition-colors">
                <WhatsAppIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 pt-8 text-center">
          <p className="font-headline text-xl uppercase text-primary mb-2">&quot;Mango Magma: O calor que te pega de jeito!&quot;</p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Fireroots. Todos os direitos reservados. Feito com pimenta e paixão no Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
