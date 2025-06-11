
import type { Metadata } from 'next';    
import React from 'react';

export const metadata: Metadata = {
  title: 'Papo Reto: Política de Privacidade - Fireroots',
  description: 'Aqui na Fireroots a gente brinca com fogo, mas com seus dados a conversa é séria (tão séria quanto nossa pimenta Scorpion!). Saca só como cuidamos da sua privacidade.',
  keywords: 'política de privacidade fireroots, segurança de dados, proteção de dados, lgpd, termos de uso molho de pimenta',
};

export default function PrivacyPolicyPage() {
  const [currentDate, setCurrentDate] = React.useState('');
  React.useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="animate-in fade-in slide-in-from-top-10 duration-500">
        <h1 className="font-headline text-4xl md:text-5xl uppercase text-center mb-4">
          <span className="text-primary">Política de Privacidade</span> <span style={{color: 'hsl(var(--secondary))'}}>da Fireroots</span>
        </h1>
        <p className="font-body text-lg text-center text-muted-foreground mb-10">
            Na Fireroots, a gente brinca com fogo, mas com seus dados o papo é reto e sem enrolação!
        </p>
      </div>
      <div className="prose prose-invert mx-auto max-w-3xl text-foreground font-body animate-in fade-in slide-in-from-bottom-10 duration-500 delay-100">
        <p>
          Sua privacidade é sagrada pra gente aqui na Fireroots. Nossa política é simples: respeito total pela sua privacidade em relação a qualquer informação sua que a gente possa coletar no nosso site e em outros canais que a gente manda ver.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">1. Que Dados a Gente Pega (Só o Básico, Fera)?</h2>
        <p>
          A gente só pede seus dados pessoais quando realmente precisa pra te entregar um produto ou serviço daquele jeito (no caso, nosso Mango Magma delicioso). Fazemos isso de forma justa e transparente, com seu total conhecimento e consentimento. E pode crer, a gente sempre avisa o porquê e como vamos usar essa parada.
        </p>
        <p>
          Guardamos as informações coletadas só pelo tempo necessário pra te fornecer o serviço solicitado. E quando armazenamos, protegemos com as melhores ferramentas pra evitar perdas, roubos e acessos não autorizados, tipo segurança de banco, só que mais legal.
        </p>
        <p>
          Não saímos por aí espalhando seus dados pessoais pra geral, nem pra terceiros, a não ser que a lei mande (aí não tem choro nem vela).
        </p>
        <p>
          Os dados que a gente pode coletar pra você receber seu Mango Magma são:
        </p>
        <ul>
          <li>Seu nome completo (pra gente saber quem é o corajoso(a) da pimenta)</li>
          <li>Seu e-mail (pra gente te mandar novidades quentes e rastreio, se você quiser)</li>
          <li>Número de telefone (pra entrega ser suave e pra gente te ligar se o motoboy se perder)</li>
          <li>Endereço de entrega (pro Mango Magma chegar no lugar certo e não na casa do vizinho fofoqueiro)</li>
          <li>CEP, bairro, cidade, estado (o kit completo do endereço)</li>
          <li>Informações de pagamento (processadas com segurança máxima pelos nossos parceiros de checkout, a gente nem encosta nesses dados sensíveis)</li>
          <li>Histórico de pedidos (pra você lembrar de quantas vezes encarou o calor e pra gente saber se você é cliente VIP)</li>
        </ul>


        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">2. Como a Gente Usa Seus Dados (Pra Coisa Boa, Pode Crer)?</h2>
        <p>
          Usamos seus dados pra várias paradas importantes, como:
        </p>
        <ul>
          <li>Processar e gerenciar seus pedidos de Mango Magma e pagamentos (a parte chata, mas essencial).</li>
          <li>Entregar os produtos que você comprou (a melhor parte, quando o carteiro sorri pra você!).</li>
          <li>Trocar uma ideia com você sobre seu pedido, novidades quentes da Fireroots, promoções (só se você autorizar, claro, nada de spam!).</li>
          <li>Te dar aquele suporte gente boa e responder suas dúvidas existenciais sobre pimenta.</li>
          <li>Melhorar nosso site, produtos e serviços (pra ficar cada vez mais top, tipo versão 2.0).</li>
          <li>Cumprir as obrigações legais (porque a gente é do bem e segue as regras).</li>
          <li>Evitar fraudes e garantir que as transações sejam seguras pra todo mundo (xô, malandragem!).</li>
        </ul>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">3. Compartilhamento de Dados (Só o Necessário e com os Parças Certos!)</h2>
        <p>
          Nosso site pode ter links pra sites de terceiros que não são nossos. Fica esperto(a), porque a gente não tem controle sobre o conteúdo e as práticas deles, então não podemos nos responsabilizar pelas políticas de privacidade de cada um. É tipo rolê: cada um cuida do seu copo.
        </p>
        <p>
          Podemos compartilhar seus dados pessoais com algumas categorias de terceiros, mas só o essencial pra coisa funcionar:
        </p>
        <ul>
          <li><strong>Nossos Parceiros de Confiança:</strong> Empresas que nos ajudam a tocar o barco, como processadores de pagamento (tipo PagSeguro, Mercado Pago - exemplos), transportadoras (Correios, motoboys parceiros), plataformas de e-mail marketing (só com seu OK). Eles só acessam seus dados pra fazer o trabalho deles e são obrigados a manter tudo em segredo, tipo pacto de sangue.</li>
          <li><strong>Autoridades Legais:</strong> Se a lei mandar (tipo ordem judicial), ou pra proteger nossos direitos, propriedade ou segurança, ou de outras pessoas. Aí não tem jeito, a gente colabora.</li>
        </ul>
        <p>
          Pode relaxar: não vendemos, alugamos nem trocamos seus dados pessoais com terceiros pra eles fazerem marketing sem seu consentimento explícito. Aqui não tem essa de leilão de dados!
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">4. Segurança dos Dados (Nossa Fortaleza Digital!)</h2>
        <p>
          A segurança dos seus dados é prioridade máxima na Fireroots. Usamos as melhores tecnologias e práticas pra proteger suas informações contra acesso, uso, alteração ou destruição não autorizados. Isso inclui paradas de segurança padrão da indústria.
        </p>
        <p>
          Mas ó, mesmo assim, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% à prova de falhas. A gente se esforça pra caramba, mas segurança total é tipo unicórnio: todo mundo fala, mas ninguém nunca viu um de verdade. O que a gente garante é o nosso melhor esforço.
        </p>
        
        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">5. Seus Direitos (Você Manda Nessa Parada!)</h2>
        <p>
          Você tem total liberdade pra recusar nosso pedido de informações pessoais, mas aí pode ser que a gente não consiga te oferecer alguns dos nossos serviços picantes (tipo, entregar o Mango Magma na sua casa, né?).
        </p>
        <p>
          Dependendo de onde você mora, você pode ter os seguintes direitos sobre seus dados:
        </p>
        <ul>
          <li><strong>Acesso:</strong> Direito de pedir pra ver os dados que a gente tem sobre você.</li>
          <li><strong>Correção:</strong> Direito de pedir pra corrigir dados errados ou incompletos (tipo o CEP que você digitou correndo).</li>
          <li><strong>Exclusão:</strong> Direito de pedir pra gente apagar seus dados (com algumas exceções legais, tipo guardar nota fiscal).</li>
          <li><strong>Restrição:</strong> Direito de pedir pra gente limitar o uso dos seus dados em certas situações.</li>
          <li><strong>Portabilidade:</strong> Direito de receber seus dados num formato organizado e levar pra outro lugar (se bem que, pra quê sair da Fireroots, né?).</li>
          <li><strong>Oposição:</strong> Direito de dizer "não" pro uso dos seus dados em algumas situações, incluindo marketing direto.</li>
        </ul>
        <p>
          Pra exercer qualquer um desses direitos, manda um e-mail pra gente em: <a href="mailto:contato@fireroots.com.br" className="text-primary hover:underline">contato@fireroots.com.br</a>. Responderemos o mais rápido possível, dentro da lei e do bom senso.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">6. Cookies e Outras Tecnologias (Os Biscoitinhos da Web)</h2>
        <p>
          Usamos cookies e tecnologias parecidas pra melhorar sua experiência no site, entender como você usa e, às vezes, pra te mostrar anúncios que combinam mais com seu estilo (tipo, mais pimenta!). Pra saber mais sobre os tipos de cookies que usamos, por que e como você pode controlar essa parada, dá uma olhada na nossa Política de Cookies (se tivermos uma específica, senão é isso aqui mesmo).
        </p>
        <p>
          Compromisso do Usuário: Você, como usuário gente fina, se compromete a usar nosso site e conteúdos na moral, sem fazer nada ilegal ou que vá contra a boa fé e a ordem pública. Sem disseminar propaganda esquisita, fake news, nem tentar hackear nossos sistemas ou espalhar vírus, beleza? Respeito acima de tudo.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">7. Mudanças Nessa Política (Porque a Vida é Dinâmica, Igual Pimenta Malagueta)</h2>
        <p>
          De vez em quando, a gente pode precisar atualizar esta política de privacidade, seja pra refletir mudanças nas nossas práticas ou por motivos legais (tipo, se o governo inventar uma lei nova sobre pimenta e dados). Quando isso acontecer, a gente avisa publicando a nova política aqui e atualizando a data da "Última atualização" lá embaixo.
        </p>
        <p>
          Dá uma espiada nesta política de vez em quando pra ficar por dentro das novidades. As mudanças entram em vigor assim que são publicadas aqui. Se você continuar usando o site depois disso, é porque concordou com as novidades.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">8. Fale com a Gente (Se For pra Elogiar a Pimenta, Melhor Ainda!)</h2>
        <p>
          Se tiver qualquer dúvida sobre esta política de privacidade ou sobre como a gente cuida dos seus dados (ou se só quiser trocar uma receita picante), manda um salve em: <a href="mailto:contato@fireroots.com.br" className="text-primary hover:underline">contato@fireroots.com.br</a>.
        </p>
        {currentDate && (
          <p className="mt-6 text-sm text-muted-foreground">
            Última atualização: {currentDate} (Quase ontem, se o ontem fosse hoje!)
          </p>
        )}
      </div>
    </div>
  );
}
