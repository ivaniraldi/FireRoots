export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="font-headline text-4xl md:text-5xl uppercase text-primary mb-8 text-center">
        Política de Privacidade
      </h1>
      <div className="prose prose-invert mx-auto max-w-3xl text-foreground font-body">
        <p>
          Bem-vindo à Política de Privacidade da Fireroots. Levamos a sua privacidade a sério. Esta política descreve como coletamos, usamos, divulgamos e protegemos suas informações pessoais.
        </p>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">Informações que Coletamos</h2>
        <p>
          Podemos coletar informações pessoais que você nos fornece diretamente, como quando você:
        </p>
        <ul>
          <li>Cria uma conta (futuramente)</li>
          <li>Faz um pedido</li>
          <li>Entra em contato conosco com perguntas ou feedback</li>
          <li>Se inscreve em nossa newsletter</li>
        </ul>
        <p>
          As informações podem incluir seu nome, endereço de e-mail, endereço de entrega, informações de pagamento e outras informações que você escolher fornecer.
        </p>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">Como Usamos Suas Informações</h2>
        <p>
          Usamos as informações que coletamos para:
        </p>
        <ul>
          <li>Processar seus pedidos e fornecer nossos produtos</li>
          <li>Melhorar nossos produtos e serviços</li>
          <li>Comunicar com você sobre seu pedido, nossa empresa e promoções</li>
          <li>Responder às suas solicitações e fornecer suporte ao cliente</li>
          <li>Cumprir obrigações legais</li>
        </ul>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">Compartilhamento de Informações</h2>
        <p>
          Não vendemos, alugamos ou trocamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar suas informações com:
        </p>
        <ul>
          <li>Provedores de serviços que nos ajudam com nossas operações comerciais (por exemplo, processadores de pagamento, empresas de transporte)</li>
          <li>Autoridades legais, se exigido por lei ou para proteger nossos direitos</li>
        </ul>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">Segurança dos Dados</h2>
        <p>
          Implementamos medidas de segurança razoáveis para proteger suas informações pessoais contra acesso, uso ou divulgação não autorizados. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro.
        </p>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">Seus Direitos</h2>
        <p>
          Você pode ter certos direitos em relação às suas informações pessoais, dependendo da sua jurisdição. Estes podem incluir o direito de acessar, corrigir ou excluir suas informações. Entre em contato conosco para exercer seus direitos.
        </p>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">Alterações a Esta Política</h2>
        <p>
          Podemos atualizar esta política de privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova política em nosso site.
        </p>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">Contato</h2>
        <p>
          Se você tiver alguma dúvida sobre esta política de privacidade, entre em contato conosco em: <a href="mailto:contato@fireroots.com.br" className="text-primary hover:underline">contato@fireroots.com.br</a>.
        </p>
        <p className="mt-6">
          Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
