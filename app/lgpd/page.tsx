"use client";

import { SectionContainer } from "@/components/ui/section-container";

export default function LgpdPage() {
  return (
    <SectionContainer>
      <article className="prose lg:prose-lg max-w-4xl mx-auto py-16">
        <h1>LGPD — Direitos do Titular</h1>
        <p><em>Última atualização: 01 de setembro de 2025</em></p>

        <p>
          Esta página resume, de forma objetiva, os seus direitos como titular de dados pessoais,
          conforme a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong>, e explica
          como exercê-los junto à <strong>SOUL BRASIL ESPORTES</strong>.
        </p>

        <h2>Base legal e princípios</h2>
        <p>
          Tratamos dados pessoais com base em consentimento ou demais hipóteses legais aplicáveis (execução de
          contrato, cumprimento de obrigação legal/regulatória, legítimo interesse, entre outras), observando
          os princípios de finalidade, necessidade, adequação, transparência e segurança.
        </p>

        <h2>Seus direitos (art. 18 da LGPD)</h2>
        <ul>
          <li><strong>Confirmação de tratamento:</strong> saber se realizamos tratamento de seus dados.</li>
          <li><strong>Acesso:</strong> obter acesso aos dados pessoais que possuímos a seu respeito.</li>
          <li><strong>Correção:</strong> solicitar correção de dados incompletos, inexatos ou desatualizados.</li>
          <li><strong>Anonimização, bloqueio ou eliminação:</strong> quando os dados forem desnecessários, excessivos ou tratados em desconformidade.</li>
          <li><strong>Portabilidade:</strong> solicitar portabilidade a outro fornecedor, nos termos da regulamentação.</li>
          <li><strong>Informação sobre compartilhamento:</strong> saber com quais entidades públicas ou privadas realizamos uso compartilhado de dados.</li>
          <li><strong>Informação sobre o não consentimento:</strong> as consequências de não fornecer consentimento quando ele for necessário.</li>
          <li><strong>Revogação do consentimento:</strong> a qualquer momento, mediante manifestação expressa.</li>
          <li><strong>Oposição:</strong> se discordar de tratamento realizado com base em hipóteses legais que não dependam de consentimento, quando houver descumprimento da lei.</li>
          <li><strong>Peticionar à ANPD:</strong> apresentar reclamação à Autoridade Nacional de Proteção de Dados.</li>
        </ul>

        <h2>Como exercer seus direitos</h2>
        <p>
          Para exercer qualquer direito listado acima, entre em contato pelo e-mail{" "}
          <a href="mailto:contato@soulbrasil.co">contato@soulbrasil.co</a>. 
          Responderemos em até 15 (quinze) dias, informando o andamento e, quando aplicável,
          fornecendo os dados solicitados de forma clara e gratuita.
        </p>

        <h2>Compartilhamento e transferência internacional</h2>
        <p>
          Podemos compartilhar dados com parceiros que nos auxiliam na operação do site e serviços,
          sempre observando as finalidades informadas e as salvaguardas necessárias. 
          Caso haja transferência internacional de dados, ela ocorrerá de acordo com os mecanismos previstos na LGPD.
        </p>

        <h2>Segurança e retenção</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados,
          perdas e incidentes. Os dados são mantidos pelo tempo necessário às finalidades informadas ou conforme exigências legais.
        </p>

        <h2>Transparência e atualizações</h2>
        <p>
          Poderemos atualizar este conteúdo periodicamente para refletir mudanças legais ou operacionais.
          A versão vigente será sempre esta página, com a respectiva data de atualização.
        </p>

        <h2>Canal com a ANPD</h2>
        <p>
          Se desejar, você também pode contatar a <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noreferrer">Autoridade Nacional de Proteção de Dados (ANPD)</a>.
        </p>
      </article>
    </SectionContainer>
  );
}