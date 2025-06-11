
import type { Metadata } from 'next';    

export const metadata: Metadata = {
  title: 'Política de Privacidade - Fireroots',
  description: 'Conheça nossa política de privacidade e como lidamos com seus dados ao comprar nossos molhos de pimenta artesanais.',
};

export default function PrivacyPolicyPage() {
  // Helper to avoid hydration mismatch for the date
  const [currentDate, setCurrentDate] = React.useState('');
  React.useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);


  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="font-headline text-4xl md:text-5xl uppercase text-primary mb-8 text-center">
        Política de Privacidade da Fireroots
      </h1>
      <div className="prose prose-invert mx-auto max-w-3xl text-foreground font-body">
        <p>
          A sua privacidade é importante para nós da Fireroots. É política da Fireroots respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Fireroots, e outros sites que possuímos e operamos.
        </p>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">1. Informações que Coletamos</h2>
        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </p>
        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>
        <p>
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </p>
        <p>
          As informações que podemos coletar incluem:
        </p>
        <ul>
          <li>Nome completo</li>
          <li>Endereço de e-mail</li>
          <li>Número de telefone (opcional)</li>
          <li>Endereço de entrega e cobrança</li>
          <li>Informações de pagamento (processadas de forma segura por nosso gateway de pagamento)</li>
          <li>Histórico de pedidos</li>
        </ul>


        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">2. Como Usamos Suas Informações</h2>
        <p>
          Usamos as informações que coletamos para diversos fins, incluindo:
        </p>
        <ul>
          <li>Processar e gerenciar seus pedidos e pagamentos.</li>
          <li>Entregar os produtos adquiridos.</li>
          <li>Comunicar com você sobre seu pedido, atualizações de produtos, ofertas e promoções (com seu consentimento).</li>
          <li>Fornecer suporte ao cliente e responder às suas dúvidas.</li>
          <li>Melhorar nosso site, produtos e serviços.</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
          <li>Prevenir fraudes e garantir a segurança de nossas transações.</li>
        </ul>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">3. Compartilhamento de Informações</h2>
        <p>
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>
        <p>
          Podemos compartilhar suas informações pessoais com as seguintes categorias de terceiros:
        </p>
        <ul>
          <li><strong>Provedores de Serviços:</strong> Empresas que nos auxiliam na operação do nosso negócio, como processadores de pagamento (ex: Stripe, PayPal), empresas de transporte e logística, provedores de e-mail marketing (com seu consentimento) e plataformas de análise de dados. Esses provedores têm acesso às suas informações apenas para realizar tarefas em nosso nome e são obrigados a não divulgá-las ou usá-las para qualquer outra finalidade.</li>
          <li><strong>Autoridades Legais:</strong> Se exigido por lei, intimação, ordem judicial ou outro processo legal, ou para proteger nossos direitos, propriedade ou segurança, ou os direitos, propriedade ou segurança de outros.</li>
        </ul>
        <p>
          Não vendemos, alugamos ou trocamos suas informações pessoais com terceiros para seus próprios fins de marketing sem o seu consentimento explícito.
        </p>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">4. Segurança dos Dados</h2>
        <p>
          A segurança de suas informações pessoais é uma prioridade para a Fireroots. Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações contra acesso, uso, alteração, divulgação ou destruição não autorizados. Isso inclui o uso de criptografia para dados de pagamento e outras práticas de segurança padrão do setor.
        </p>
        <p>
          No entanto, lembre-se que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
        </p>
        
        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">5. Seus Direitos de Privacidade</h2>
        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
        </p>
        <p>
          Dependendo da sua jurisdição, você pode ter os seguintes direitos em relação às suas informações pessoais:
        </p>
        <ul>
          <li><strong>Acesso:</strong> O direito de solicitar acesso às informações pessoais que temos sobre você.</li>
          <li><strong>Correção:</strong> O direito de solicitar a correção de informações pessoais imprecisas ou incompletas.</li>
          <li><strong>Exclusão:</strong> O direito de solicitar a exclusão de suas informações pessoais, sujeito a certas exceções legais.</li>
          <li><strong>Restrição de Processamento:</strong> O direito de solicitar a restrição do processamento de suas informações pessoais em determinadas circunstâncias.</li>
          <li><strong>Portabilidade de Dados:</strong> O direito de receber suas informações pessoais em um formato estruturado, de uso comum e legível por máquina, e de transmiti-las a outro controlador.</li>
          <li><strong>Oposição:</strong> O direito de se opor ao processamento de suas informações pessoais em determinadas circunstâncias, incluindo para fins de marketing direto.</li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: <a href="mailto:contato@fireroots.com.br" className="text-primary hover:underline">contato@fireroots.com.br</a>. Responderemos à sua solicitação dentro do prazo legal aplicável.
        </p>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">6. Cookies e Tecnologias de Rastreamento</h2>
        <p>
          Utilizamos cookies e tecnologias de rastreamento semelhantes para coletar e usar informações pessoais sobre você, inclusive para veicular publicidade baseada em interesses. Para mais informações sobre os tipos de cookies que usamos, por que e como você pode controlar os cookies, consulte nossa Política de Cookies (se aplicável, ou detalhe aqui).
        </p>
        <p>
          Compromisso do Usuário: O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Fireroots oferece no site e com caráter enunciativo, mas não limitativo:
        </p>
        <ul>
            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Fireroots, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
        </ul>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">7. Alterações a Esta Política de Privacidade</h2>
        <p>
          Podemos atualizar esta política de privacidade de tempos em tempos para refletir, por exemplo, mudanças em nossas práticas ou por outras razões operacionais, legais ou regulatórias. Notificaremos você sobre quaisquer alterações publicando a nova política de privacidade nesta página e atualizando a data da "Última atualização" abaixo.
        </p>
        <p>
          Recomendamos que você revise esta política de privacidade periodicamente para quaisquer alterações. As alterações a esta política de privacidade entram em vigor quando são publicadas nesta página.
        </p>

        <h2 className="font-headline text-2xl uppercase mt-8 mb-4">8. Contato</h2>
        <p>
          Se você tiver alguma dúvida sobre esta política de privacidade ou sobre nossas práticas de privacidade, entre em contato conosco em: <a href="mailto:contato@fireroots.com.br" className="text-primary hover:underline">contato@fireroots.com.br</a>.
        </p>
        {currentDate && (
          <p className="mt-6">
            Última atualização: {currentDate}
          </p>
        )}
      </div>
    </div>
  );
}

// Adicionar import React no topo se não existir
import React from 'react';
