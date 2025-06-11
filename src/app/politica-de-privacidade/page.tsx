
import type { Metadata } from 'next';    
import React from 'react';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Fireroots',
  description: 'Na Fireroots, sua privacidade é levada a sério. Entenda como coletamos, usamos e protegemos seus dados pessoais.',
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
            Levamos sua privacidade a sério. Aqui detalhamos nosso compromisso com seus dados.
        </p>
      </div>
      <div className="prose prose-invert mx-auto max-w-3xl text-foreground font-body animate-in fade-in slide-in-from-bottom-10 duration-500 delay-100">
        <p>
          Sua privacidade é importante para nós da Fireroots. É política da Fireroots respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Fireroots, e outros sites que possuímos e operamos.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">1. Coleta de Dados</h2>
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
          Os dados que podemos coletar para processar seu pedido do Mango Magma incluem:
        </p>
        <ul>
          <li>Nome completo</li>
          <li>Endereço de e-mail</li>
          <li>Número de telefone (para fins de entrega e contato sobre o pedido)</li>
          <li>Endereço de entrega completo (rua, número, complemento, bairro, CEP, cidade, estado)</li>
          <li>Informações de pagamento (processadas de forma segura por nossos parceiros de checkout)</li>
          <li>Histórico de pedidos</li>
        </ul>


        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">2. Uso dos Dados</h2>
        <p>
          Utilizamos suas informações para:
        </p>
        <ul>
          <li>Processar e gerenciar seus pedidos e pagamentos.</li>
          <li>Realizar a entrega dos produtos adquiridos.</li>
          <li>Comunicar sobre seu pedido, novidades da Fireroots e promoções (mediante seu consentimento).</li>
          <li>Fornecer suporte ao cliente e responder a suas dúvidas.</li>
          <li>Melhorar nosso site, produtos e serviços.</li>
          <li>Cumprir obrigações legais.</li>
          <li>Prevenir fraudes e garantir a segurança das transações.</li>
        </ul>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">3. Compartilhamento de Dados</h2>
        <p>
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>
        <p>
          Podemos compartilhar seus dados pessoais com as seguintes categorias de terceiros, apenas quando necessário:
        </p>
        <ul>
          <li><strong>Parceiros de Confiança:</strong> Empresas que nos auxiliam na operação do negócio, como processadores de pagamento, transportadoras e plataformas de e-mail marketing (com seu consentimento). Eles têm acesso aos seus dados apenas para realizar tarefas em nosso nome e são obrigados a não divulgá-los ou usá-los para qualquer outra finalidade.</li>
          <li><strong>Autoridades Legais:</strong> Se exigido por lei ou para proteger nossos direitos, propriedade ou segurança, ou a de outros.</li>
        </ul>
        <p>
          Não vendemos, alugamos ou trocamos suas informações pessoais com terceiros para fins de marketing sem seu consentimento explícito.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">4. Segurança dos Dados</h2>
        <p>
          A segurança dos seus dados é uma prioridade para a Fireroots. Empregamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso, uso, alteração ou destruição não autorizados.
        </p>
        <p>
          No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
        </p>
        
        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">5. Seus Direitos</h2>
        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
        </p>
        <p>
          Você pode ter os seguintes direitos sobre seus dados pessoais, dependendo da legislação aplicável:
        </p>
        <ul>
          <li><strong>Acesso:</strong> O direito de solicitar cópias dos seus dados pessoais.</li>
          <li><strong>Correção:</strong> O direito de solicitar a correção de qualquer informação que você acredite estar imprecisa ou incompleta.</li>
          <li><strong>Exclusão:</strong> O direito de solicitar a exclusão dos seus dados pessoais, sob certas condições.</li>
          <li><strong>Restrição de processamento:</strong> O direito de solicitar a restrição do processamento de seus dados pessoais, sob certas condições.</li>
          <li><strong>Portabilidade de dados:</strong> O direito de solicitar que transfiramos os dados que coletamos para outra organização, ou diretamente para você, sob certas condições.</li>
          <li><strong>Oposição ao processamento:</strong> O direito de se opor ao processamento de seus dados pessoais, sob certas condições, incluindo para marketing direto.</li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: <a href="mailto:contato@fireroots.com.br" className="text-primary hover:underline">contato@fireroots.com.br</a>. Responderemos à sua solicitação dentro de um prazo razoável.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">6. Cookies e Tecnologias Similares</h2>
        <p>
          Utilizamos cookies e tecnologias de rastreamento semelhantes para melhorar sua experiência em nosso site, entender como você o utiliza e, ocasionalmente, para fins de publicidade direcionada (com seu consentimento).
        </p>
        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Fireroots oferece no site e com caráter enunciativo, mas não limitativo: não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública; não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos; não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Fireroots, de seus fornecedores ou terceiros.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">7. Alterações Nesta Política</h2>
        <p>
          Podemos atualizar nossa política de privacidade de tempos em tempos. Notificaremos sobre quaisquer alterações publicando a nova política de privacidade nesta página e atualizando a data da "Última atualização" abaixo.
        </p>
        <p>
          Recomendamos que você revise esta política de privacidade periodicamente para quaisquer alterações. As alterações a esta política de privacidade entram em vigor quando são publicadas nesta página.
        </p>

        <h2 className="font-headline text-2xl text-secondary uppercase mt-8 mb-4">8. Contato</h2>
        <p>
          Se você tiver alguma dúvida sobre esta política de privacidade ou sobre como lidamos com seus dados, entre em contato conosco: <a href="mailto:contato@fireroots.com.br" className="text-primary hover:underline">contato@fireroots.com.br</a>.
        </p>
        {currentDate && (
          <p className="mt-6 text-sm text-muted-foreground">
            Última atualização: {currentDate}
          </p>
        )}
      </div>
    </div>
  );
}
