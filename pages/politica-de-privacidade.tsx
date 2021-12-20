import Head from "next/head";
import * as React from "react";
import { AppDownload } from "../src/components/app-download";
import { Wrapper } from "../src/components/wrapper";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Política de privacidade | Na Praia</title>
      </Head>
      <div className="bg-[#f1f1f1] py-6 mb-6">
        <Wrapper>
          <h2>POLÍTICA DE PRIVACIDADE</h2>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="grid gap-4">
          <p>
            Este aplicativo é mantido e operado pela Building Ideas Ltda, CNPJ
            41.989.759/0001-26.
          </p>
          <p>
            Nós coletamos e utilizamos alguns dados pessoais que pertencem
            àqueles que utilizam nosso aplicativo. Ao fazê-lo, agimos na
            qualidade de controlador desses dados e estamos sujeitos às
            disposições da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de
            Dados Pessoais - LGPD).
          </p>
          <p>
            Nós cuidamos da proteção de seus dados pessoais e, por isso,
            disponibilizamos esta política de privacidade, que contém
            informações importantes sobre:
          </p>
          <ul className="list-disc pl-8">
            <li>Quem deve utilizar nosso aplicativo;</li>
            <li>Quais dados coletamos e o que fazemos com eles;</li>
            <li>Seus direitos em relação aos seus dados pessoais;</li>
            <li>Como entrar em contato conosco;</li>
          </ul>
          <h3 className="font-bold">1. Quem deve utilizar nosso aplicativo</h3>
          <p>
            Nosso aplicativo só deve ser utilizado por pessoas com mais de
            dezoito anos de idade. Sendo assim, crianças e adolescentes não
            devem utilizá-lo.
          </p>
          <h3 className="font-bold">
            2. Dados que coletamos e motivos da coleta
          </h3>
          <p>
            Nosso aplicativo coleta e utiliza alguns dados pessoais de nossos
            usuários, de acordo com o disposto nesta seção.
          </p>
          <p>A. Dados pessoais fornecidos expressamente pelo usuário:</p>
          <p>
            Nós coletamos os seguintes dados pessoais que nossos usuários nos
            fornecem expressamente ao utilizar nosso aplicativo:
          </p>
          <ul className="list-disc pl-8">
            <li>CPF ou CNPJ;</li>
            <li>Endereço de email;</li>
            <li>Nome Completo;</li>
            <li>Telefone celular;</li>
            <li>Data de nascimento;</li>
            <li>Dados bancários (no caso de usuário "vendedor");</li>
          </ul>
          <p>A coleta destes dados ocorre no seguinte momento:</p>
          <ul className="list-disc pl-8">
            <li>Cadastro dos usuários.</li>
          </ul>
          <p>
            Os dados fornecidos por nossos usuários são coletados com as
            seguintes finalidades:
          </p>
          <ul className="list-disc pl-8">
            <li>Identificação e autenticidade dos usuários;</li>
            <li>
              Comunicação com os usuários, através de email e SMS, para envio de
              informações transacionais da Plataforma (criação de usuário,
              pedidos realizados, troca de senha, etc), ou para envio de
              comunicações promocionais;
            </li>
          </ul>
          <p>B. Dados pessoais obtidos de outras formas:</p>
          <p>Nós coletamos os seguintes dados pessoais de nossos usuários:</p>
          <ul className="list-disc pl-8">
            <li>Dados de geolocalização;</li>
            <li>Endereço IP;</li>
            <li>Modelo do dispositivo;</li>
            <li>Operadora de telefonia;</li>
          </ul>
          <p>A coleta destes dados ocorre nos seguintes momentos:</p>
          <ul className="list-disc pl-8">
            <li>Realização de login;</li>
            <li>Durante a navegação dos usuários nos aplicativos;</li>
            <li>Realização de um novo chamado, pedido;</li>
          </ul>
          <p>Estes dados são coletados com as seguintes finalidades:</p>
          <ul className="list-disc pl-8">
            <li>Garantir a segurança e autenticidade dos usuários;</li>
            <li>Facilitar a localização e transação dos usuários;</li>
          </ul>
          <p>C. Dados sensíveis:</p>
          <p>
            <b>Não</b> serão coletados dados sensíveis de nossos usuários, assim
            entendidos aqueles definidos nos arts. 11 e seguintes da Lei de
            Proteção de Dados Pessoais. Assim, <b>não</b> haverá coleta de dados
            sobre origem racial ou étnica, convicção religiosa, opinião
            política, filiação a sindicato ou a organização de caráter
            religioso, filosófico ou político, dado referente à saúde ou à vida
            sexual, dado genético ou biométrico, quando vinculado a uma pessoa
            natural.
          </p>
          <p>D. Coleta de dados não previstos expressamente:</p>

          <p>
            Eventualmente, outros tipos de dados não previstos expressamente
            nesta Política de Privacidade poderão ser coletados, desde que sejam
            fornecidos com o consentimento do usuário, ou, ainda, que a coleta
            seja permitida com fundamento em outra base legal prevista em lei.{" "}
            <br />
            Em qualquer caso, a coleta de dados e as atividades de tratamento
            dela decorrentes serão informadas aos usuários do aplicativo.
          </p>
          <h3 className="font-bold">
            3. Compartilhamento de dados pessoais com terceiros
          </h3>
          <p>
            Nós não compartilhamos seus dados pessoais com terceiros. Apesar
            disso, é possível que o façamos para cumprir alguma determinação
            legal ou regulatória, ou, ainda, para cumprir alguma ordem expedida
            por autoridade pública.
          </p>
          <h3 className="font-bold">
            4. Por quanto tempo seus dados pessoais serão armazenados
          </h3>
          <p>
            Os dados pessoais coletados pelo aplicativo são armazenados e
            utilizados por período de tempo que corresponda ao necessário para
            atingir as finalidades elencadas neste documento e que considere os
            direitos de seus titulares, os direitos do controlador do aplicativo
            e as disposições legais ou regulatórias aplicáveis.
            <br />
            Uma vez expirados os períodos de armazenamento dos dados pessoais,
            eles são removidos de nossas bases de dados ou anonimizados, salvo
            nos casos em que houver a possibilidade ou a necessidade de
            armazenamento em virtude de disposição legal ou regulatória.
          </p>
          <h3 className="font-bold">
            5. Bases legais para o tratamento de dados pessoais
          </h3>
          <p>
            Cada operação de tratamento de dados pessoais precisa ter um
            fundamento jurídico, ou seja, uma base legal, que nada mais é que
            uma justificativa que a autorize, prevista na Lei Geral de Proteção
            de Dados Pessoais.
            <br />
            Todas as nossas atividades de tratamento de dados pessoais possuem
            uma base legal que as fundamenta, dentre as permitidas pela
            legislação. Mais informações sobre as bases legais que utilizamos
            para operações de tratamento de dados pessoais específicas podem ser
            obtidas a partir de nossos canais de contato, informados ao final
            desta Política.
          </p>
          <h3 className="font-bold">6. Direitos do usuário</h3>
          <p>
            O usuário do aplicativo possui os seguintes direitos, conferidos
            pela Lei de Proteção de Dados Pessoais:
          </p>
          <ul className="list-disc pl-8">
            <li> Confirmação da existência de tratamento;</li>
            <li>Acesso aos dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>
              Anonimização, bloqueio ou eliminação de dados desnecessários,
              excessivos ou tratados em desconformidade com o disposto na lei;
            </li>
            <li>
              Portabilidade dos dados a outro fornecedor de serviço ou produto,
              mediante requisição expressa, de acordo com a regulamentação da
              autoridade nacional, observados os segredos comercial e
              industrial;
            </li>
            <li>
              Eliminação dos dados pessoais tratados com o consentimento do
              titular, exceto nos casos previstos em lei;
            </li>
            <li>
              Informação das entidades públicas e privadas com as quais o
              controlador realizou uso compartilhado de dados;
            </li>
            <li>
              Informação sobre a possibilidade de não fornecer consentimento e
              sobre as consequências da negativa;
            </li>
          </ul>
          <p>
            É importante destacar que, nos termos da LGPD, não existe um direito
            de eliminação de dados tratados com fundamento em bases legais
            distintas do consentimento, a menos que os dados sejam
            desnecessários, excessivos ou tratados em desconformidade com o
            previsto na lei.
          </p>
          <p>
            <i>A. Como o titular pode exercer seus direitos</i>
          </p>
          <p>
            Os titulares de dados pessoais tratados por nós poderão exercer seus
            direitos por meio do formulário disponibilizado no seguinte endereço
            eletrônico: contato@napraia.app. Alternativamente, se desejar, o
            titular poderá enviar uma correspondência ao nosso Encarregado de
            Proteção de Dados Pessoais. As informações necessárias para isso
            estão na seção "Como entrar em contato conosco" desta Política de
            Privacidade.
            <br />
            Os titulares de dados pessoais tratados por nós poderão exercer seus
            direitos a partir do envio de mensagem ao nosso Encarregado de
            Proteção de Dados Pessoais, seja por e-mail ou por correspondência.
            As informações necessárias para isso estão na seção "Como entrar em
            contato conosco" desta Política de Privacidade.
            <br />
            Para garantir que o usuário que pretende exercer seus direitos é, de
            fato, o titular dos dados pessoais objeto da requisição, poderemos
            solicitar documentos ou outras informações que possam auxiliar em
            sua correta identificação, a fim de resguardar nossos direitos e os
            direitos de terceiros. Isto somente será feito, porém, se for
            absolutamente necessário, e o requerente receberá todas as
            informações relacionadas.
          </p>
          <h3 className="font-bold">
            7. Medidas de segurança no tratamento de dados pessoais
          </h3>
          <p>
            Empregamos medidas técnicas e organizativas aptas a proteger os
            dados pessoais de acessos não autorizados e de situações de
            destruição, perda, extravio ou alteração desses dados.
            <br />
            As medidas que utilizamos levam em consideração a natureza dos
            dados, o contexto e a finalidade do tratamento, os riscos que uma
            eventual violação geraria para os direitos e liberdades do usuário,
            e os padrões atualmente empregados no mercado por empresas
            semelhantes à nossa.
            <br />
            Entre as medidas de segurança adotadas por nós, destacamos as
            seguintes:
          </p>
          <p>
            Ainda que adote tudo o que está ao seu alcance para evitar
            incidentes de segurança, é possível que ocorra algum problema
            motivado exclusivamente por um terceiro - como em caso de ataques de
            hackers ou crackers ou, ainda, em caso de culpa exclusiva do
            usuário, que ocorre, por exemplo, quando ele mesmo transfere seus
            dados a terceiro. Assim, embora sejamos, em geral, responsáveis
            pelos dados pessoais que tratamos, nos eximimos de responsabilidade
            caso ocorra uma situação excepcional como essas, sobre as quais não
            temos nenhum tipo de controle.
            <br />
            De qualquer forma, caso ocorra qualquer tipo de incidente de
            segurança que possa gerar risco ou dano relevante para qualquer de
            nossos usuários, comunicaremos os afetados e a Autoridade Nacional
            de Proteção de Dados acerca do ocorrido, em conformidade com o
            disposto na Lei Geral de Proteção de Dados.
          </p>
          <h3 className="font-bold">
            8. Reclamação a uma autoridade de controle
          </h3>
          <p>
            Sem prejuízo de qualquer outra via de recurso administrativo ou
            judicial, os titulares de dados pessoais que se sentirem, de
            qualquer forma, lesados, podem apresentar reclamação à Autoridade
            Nacional de Proteção de Dados.
          </p>
          <h3 className="font-bold">9. Alterações nesta política</h3>
          <p>
            A presente versão desta Política de Privacidade foi atualizada pela
            última vez em: 29/11/2021.
            <br />
            Reservamo-nos o direito de modificar, a qualquer momento, as
            presentes normas, especialmente para adaptá-las às eventuais
            alterações feitas em nosso aplicativo, seja pela disponibilização de
            novas funcionalidades, seja pela supressão ou modificação daquelas
            já existentes.
            <br />
            Sempre que houver uma modificação, nossos usuários serão notificados
            acerca da mudança.
          </p>
          <h3 className="font-bold">10. Como entrar em contato conosco</h3>
          <p>
            Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade
            ou sobre os dados pessoais que tratamos, entre em contato com nosso
            Encarregado de Proteção de Dados Pessoais, por algum dos canais
            mencionados abaixo:
            <br />
            E-mail: contato@napraia.app
            <br />
            Endereço postal: Rua Almirante Saddock de Sá, nº 154
            <br />
            CEP 22411-040
          </p>
        </div>
      </Wrapper>
    </>
  );
}
