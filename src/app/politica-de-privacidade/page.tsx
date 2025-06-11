
import type { Metadata } from 'next';    
import React from 'react'; // Explicit import for React

export const metadata: Metadata = {
  title: 'Papo Sério: Política de Privacidade - Fireroots',
  description: 'Aqui a gente leva sua privacidade a sério (tão sério quanto nossa pimenta!). Saiba como cuidamos dos seus dados.',
};

export default function PrivacyPolicyPage() {
  // Helper to avoid hydration mismatch for the date
  const [currentDate, setCurrentDate] = React.useState('');
  React.useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);


  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="animate-in fade-in slide-in-from-top-10 duration-500">
        <h1 className="font-headline text-4xl md:text-5xl uppercase text-center mb-4">
          <span className="text-primary">Política de Privacidade</span> <span style={{color: '#FDA302'}}>da Fireroots</span>
        </h1>
        <p className="font-body text-lg text-center text-muted-foreground mb-10">
            Na Fireroots, a gente brinca com fogo, mas com seus dados o papo é reto!
        </p>
      </div>
      <div className="prose prose-invert mx-auto max-w-3xl text-foreground font-body animate-in fade-in slide-in-from-bottom-10 duration-500 delay-100">
        <p>
          Sua privacidade é sagrada pra gente aqui na Fireroots. Nossa política é respeitar sua privacidade em relação a qualquer informação sua que a gente possa coletar no nosso site e em outros que a gente manda ver.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">1. Que Dados a Gente Pega?</h2>
        <p>
          A gente só pede seus dados pessoais quando realmente precisa pra te entregar um produto ou serviço daquele jeito. Fazemos isso de forma justa e transparente, com seu total conhecimento e consentimento. E pode crer, a gente sempre avisa o porquê e como vamos usar.
        </p>
        <p>
          Guardamos as informações coletadas só pelo tempo necessário pra te fornecer o serviço solicitado. E quando armazenamos, protegemos com as melhores ferramentas pra evitar perdas, roubos e acessos não autorizados, tipo ninja!
        </p>
        <p>
          Não saímos por aí espalhando seus dados pessoais pra geral, nem pra terceiros, a não ser que a lei mande (aí não tem jeito, né?).
        </p>
        <p>
          Os dados que a gente pode coletar são:
        </p>
        <ul>
          <li>Seu nome completo (pra gente saber quem é o corajoso da pimenta)</li>
          <li>Seu e-mail (pra gente te mandar novidades quentes, se você quiser)</li>
          <li>Número de telefone (opcional, mas ajuda na hora da entrega)</li>
          <li>Endereço de entrega e cobrança (pra pimenta chegar no lugar certo)</li>
          <li>Informações de pagamento (processadas com segurança máxima pelos nossos parceiros)</li>
          <li>Histórico de pedidos (pra você lembrar de quantas vezes encarou o calor)</li>
        </ul>


        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">2. Como a Gente Usa Seus Dados?</h2>
        <p>
          Usamos seus dados pra várias paradas importantes, como:
        </p>
        <ul>
          <li>Processar e gerenciar seus pedidos e pagamentos (a parte chata, mas necessária).</li>
          <li>Entregar os produtos que você comprou (a melhor parte!).</li>
          <li>Trocar uma ideia com você sobre seu pedido, novidades, promoções (só se você autorizar, claro).</li>
          <li>Te dar aquele suporte gente boa e responder suas dúvidas.</li>
          <li>Melhorar nosso site, produtos e serviços (pra ficar cada vez mais top).</li>
          <li>Cumprir as obrigações legais (porque a gente é do bem).</li>
          <li>Evitar fraudes e garantir que as transações sejam seguras pra todo mundo.</li>
        </ul>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">3. Compartilhamento de Dados (Só o Necessário!)</h2>
        <p>
          Nosso site pode ter links pra sites de terceiros que não são nossos. Fica esperto, porque a gente não tem controle sobre o conteúdo e as práticas deles, então não podemos nos responsabilizar pelas políticas de privacidade de cada um.
        </p>
        <p>
          Podemos compartilhar seus dados pessoais com algumas categorias de terceiros, mas só o essencial:
        </p>
        <ul>
          <li><strong>Nossos Parceiros de Confiança:</strong> Empresas que nos ajudam a tocar o barco, como processadores de pagamento (tipo Stripe, PayPal), transportadoras, plataformas de e-mail marketing (com seu OK) e análise de dados. Eles só acessam seus dados pra fazer o trabalho deles e são obrigados a manter tudo em segredo.</li>
          <li><strong>Autoridades Legais:</strong> Se a lei mandar, ou pra proteger nossos direitos, propriedade ou segurança, ou de outras pessoas.</li>
        </ul>
        <p>
          Pode relaxar: não vendemos, alugamos nem trocamos seus dados pessoais com terceiros pra eles fazerem marketing sem seu consentimento explícito. Aqui não tem essa!
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">4. Segurança dos Dados (Nossa Fortaleza!)</h2>
        <p>
          A segurança dos seus dados é prioridade máxima na Fireroots. Usamos as melhores tecnologias e práticas pra proteger suas informações contra acesso, uso, alteração ou destruição não autorizados. Isso inclui criptografia pra dados de pagamento e outras paradas de segurança padrão.
        </p>
        <p>
          Mas ó, mesmo assim, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% à prova de falhas. A gente se esforça pra caramba, mas segurança total é tipo receita de bolo da avó: todo mundo tenta, mas igual não fica.
        </p>
        
        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">5. Seus Direitos (Você Manda Nessa Parada!)</h2>
        <p>
          Você tem total liberdade pra recusar nosso pedido de informações pessoais, mas aí pode ser que a gente não consiga te oferecer alguns dos nossos serviços picantes.
        </p>
        <p>
          Dependendo de onde você mora, você pode ter os seguintes direitos sobre seus dados:
        </p>
        <ul>
          <li><strong>Acesso:</strong> Direito de pedir pra ver os dados que a gente tem sobre você.</li>
          <li><strong>Correção:</strong> Direito de pedir pra corrigir dados errados ou incompletos.</li>
          <li><strong>Exclusão:</strong> Direito de pedir pra gente apagar seus dados (com algumas exceções legais, claro).</li>
          <li><strong>Restrição:</strong> Direito de pedir pra gente limitar o uso dos seus dados em certas situações.</li>
          <li><strong>Portabilidade:</strong> Direito de receber seus dados num formato organizado e levar pra outro lugar.</li>
          <li><strong>Oposição:</strong> Direito de dizer "não" pro uso dos seus dados em algumas situações, incluindo marketing.</li>
        </ul>
        <p>
          Pra exercer qualquer um desses direitos, manda um e-mail pra gente em: <a href="mailto:contato@fireroots.com.br" className="text-primary hover:underline">contato@fireroots.com.br</a>. Responderemos o mais rápido possível, dentro da lei.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">6. Cookies e Outras Tecnologias (Os Biscoitinhos da Web)</h2>
        <p>
          Usamos cookies e tecnologias parecidas pra coletar e usar informações sobre você, inclusive pra te mostrar anúncios que combinam mais com seu estilo. Pra saber mais sobre os tipos de cookies que usamos, por que e como você pode controlar essa parada, dá uma olhada na nossa Política de Cookies (se tiver uma, ou a gente detalha aqui).
        </p>
        <p>
          Compromisso do Usuário: Você, como usuário gente fina, se compromete a usar nosso site e conteúdos na moral, sem fazer nada ilegal ou que vá contra a boa fé e a ordem pública. Sem disseminar propaganda racista, xenofóbica, pornografia ilegal, apologia ao terrorismo ou qualquer coisa que desrespeite os direitos humanos. E, por favor, não tente hackear nossos sistemas ou espalhar vírus, beleza?
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">7. Mudanças Nessa Política (Porque a Vida é Dinâmica)</h2>
        <p>
          De vez em quando, a gente pode precisar atualizar esta política de privacidade, seja pra refletir mudanças nas nossas práticas ou por motivos legais. Quando isso acontecer, a gente avisa publicando a nova política aqui e atualizando a data da "Última atualização" lá embaixo.
        </p>
        <p>
          Dá uma espiada nesta política de vez em quando pra ficar por dentro das novidades. As mudanças entram em vigor assim que são publicadas aqui.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">8. Fale com a Gente!</h2>
        <p>
          Se tiver qualquer dúvida sobre esta política de privacidade ou sobre como a gente cuida dos seus dados, manda um salve em: <a href="mailto:contato@fireroots.com.br" className="text-primary hover:underline">contato@fireroots.com.br</a>.
        </p>
        {currentDate && (
          <p className="mt-6">
            Última atualização: {currentDate} (Quase ontem!)
          </p>
        )}
      </div>
    </div>
  );
}
