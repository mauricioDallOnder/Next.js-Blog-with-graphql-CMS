/* eslint-disable react/no-unescaped-entities */

import { NextSeo } from "next-seo";

export default function PrivacyPolicy () {
  return (
    <>
      <NextSeo
        title="Política de Privacidade"
        description="Descubra como tratamos seus dados pessoais."
        canonical="https://cha-com-sabor.vercel.app/politica-de-privacidade"
        openGraph={{
          type: "website",
          url: "https://cha-com-sabor.vercel.app/politica-de-privacidade",
          title: "Política de Privacidade",
          description: "Descubra como tratamos seus dados pessoais.",
          images: [
            {
              url: "https://firebasestorage.googleapis.com/v0/b/geradorimagens-27342.appspot.com/o/blog-cha%2Fcha.jpeg?alt=media&token=06fbdb29-4e42-4e71-ba89-6b58a5ecb3b9&_gl=1*5cjsr3*_ga*MTA2NDY5MTI4MS4xNjk3MzkyMDc0*_ga_CW55HF8NVT*MTY5NzM5MjA3NC4xLjEuMTY5NzM5MjI0NS4yNy4wLjA.",
              width: 800,
              height: 600,
              alt: "Descrição da Imagem",
            },
          ],
          site_name: "CháComSabor",
        }}
      />
      <main className="container mx-auto px-10 mb-16 max-w-5xl flex flex-col justify-start">
        <article
          className="bg-white shadow-lg rounded-lg p-8 mb-8 privacy-section"
          aria-label="Política de Privacidade"
        >
          <h1 className="section-title text-black mt-4 mb-4 text-2xl font-bold">
            {" "}
            Política de Privacidade
          </h1>
          <section aria-labelledby="legalNotice">
            <h2
              id="legalNotice"
              className="text-black mt-4 mb-4 text-xl font-bold"
            >
              {" "}
              {/* Alterado para h2 e adicionado id */}
              AVISO LEGAL:
            </h2>
            <p className="text-black text-justify text-ls mb-2">
              Em nosso blog, valorizamos sua confiança ao compartilhar seus
              dados pessoais conosco e reconhecemos que você pode querer saber
              como lidamos com essas informações. Este Aviso de Privacidade
              (“Aviso”) é destinado a todos aqueles que visitam ou que interagem
              com este blog (“Site”). Este Aviso define os termos sob os quais o
              site pode tratar seus Dados Pessoais (“Dados Pessoais”), com total
              transparência e em conformidade com as leis e regulamentos
              aplicáveis, especialmente a Lei Geral de Proteção de Dados
              Pessoais (Lei nº 13.709/2018 “LGPD”).
            </p>
          </section>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-yellow-300 rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    className="py-4 px-6 bg-yellow-500 text-left text-xl uppercase font-bold border"
                  >
                    PRINCIPAIS PONTOS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 bg-yellow-400 text-left font-bold border">
                    MÉTODO DE COLETA DE INFORMAÇÕES
                  </td>
                  <td className="py-4 px-6 border">
                    Durante a sua navegação em nosso site
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 bg-yellow-400 text-left font-bold border">
                    RESTRITIVIDADE NA COLETA DE DADOS
                  </td>
                  <td className="py-4 px-6 border">
                    Somente coletamos e processamos o essencial para atender aos
                    propósitos informados.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 bg-yellow-400 text-left font-bold border">
                    MOTIVOS LEGAIS PARA O TRATAMENTO DE SEUS DADOS
                  </td>
                  <td className="py-4 px-6 border">
                    Utilizamos seus dados pessoais com base em:
                    <ul className="list-disc pl-5 mt-2">
                      <li>Exigências legais e regulatórias</li>
                      <li>
                        Interesses legítimos, assegurando sempre ética e
                        conformidade legal
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 bg-yellow-400 text-left font-bold border">
                    DADOS QUE VOCÊ NOS FORNECE
                  </td>
                  <td className="py-4 px-6 border">
                    <ul className="list-disc pl-5">
                      <li>Nome de usuário</li>
                      <li>Endereço de e-mail</li>
                      <li>
                        <h4 className="text-black-600 text-justify font-bold">
                          Comentários postados por você: Lembre-se de que todos
                          os comentários são revisados e aprovados pela nossa
                          equipe antes de serem publicados.
                        </h4>
                      </li>
                      <li>
                        Informações compartilhadas via redes sociais ou e-mail
                      </li>
                      <li>
                        Quaisquer outras informações que você optar por
                        compartilhar
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 bg-yellow-400 text-left font-bold border">
                    DADOS COLETADOS DURANTE A NAVEGAÇÃO
                  </td>
                  <td className="py-4 px-6 border">
                    <ul className="list-disc pl-5 pb-2">
                      <li>Registro de interações no site</li>
                      <li>Detalhes do dispositivo e navegador utilizado</li>
                      <li>Endereço IP e horário de acesso</li>
                      <li>Origem do IP</li>
                      <li>Ações, páginas e conteúdos acessados</li>
                      <li>Termos de pesquisa relacionados ao site</li>
                    </ul>
                    Utilizamos tecnologias como cookies, pixel tags, beacons e
                    local shared objects para aprimorar sua experiência de
                    navegação, considerando seus hábitos e preferências.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 bg-yellow-400 text-left font-bold border">
                    COMO NOS CONTATAR
                  </td>
                  <td className="py-4 px-6 border">
                    Para mais informações ou exercer seus direitos sobre seus
                    dados, entre em contato conosco pelas seguintes opções:
                    <ul>
                      <li>
                        <a
                          className="text-blue-600 font-semibold"
                          href="https://www.facebook.com/mauricio.dallonder"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blue-600 font-semibold"
                          href="https://www.linkedin.com/in/mauricio-dall-onder-40876a25b/"
                        >
                          Linkedin
                        </a>
                      </li>
                      <li>
                        <p className="text-blue-600 font-semibold">
                          Ou envie um e-mail para: londer11@icloud.com
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <section className="privacy-subsection">
            <h3 className="subsection-title text-black text-xl font-bold">
              Por que tratamos seus dados pessoais?
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Utilizamos seus dados pessoais com as seguintes finalidades:
            </p>
            <ul className="subsection-list list-disc pl-5 pb-2">
              <li>Responder a solicitações feitas através de redes sociais</li>
              <li>Promover a segurança e prevenir fraudes</li>
              <li>Manter a integridade de nossos sistemas</li>
              <li>
                Cumprir obrigações legais e defender em processos judiciais
              </li>
              <li>Finalidades comerciais legítimas permitidas por lei</li>
            </ul>
          </section>

          <section className="privacy-subsection">
            <h3 className="subsection-title text-black text-xl font-bold">
              Onde seus dados são tratados?
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Preferencialmente no Brasil. Contudo, podem ser processados
              internacionalmente por sistemas e provedores parceiros.
            </p>
            <p className="subsection-text text-black text-justify mb-2">
              Garantimos a segurança dos seus dados em todos os locais.
            </p>
          </section>

          <section className="privacy-subsection">
            <h3 className="subsection-title text-black text-xl font-bold">
              Por quanto tempo retemos seus dados pessoais?
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Retemos apenas pelo tempo necessário ou até que você solicite a
              remoção.
            </p>
            <p className="subsection-text text-black text-justify mb-2">
              Alguns dados podem ser guardados devido a:
            </p>
            <ul className="subsection-list list-disc pl-5 pb-2">
              <li>Relações jurídicas com o titular</li>
              <li>Obrigações legais ou regulatórias</li>
              <li>Outras justificativas legítimas</li>
            </ul>
          </section>

          <section className="privacy-subsection">
            <h3 className="subsection-title text-black text-xl font-bold">
              Com quem compartilhamos seus dados pessoais?
            </h3>
            <p className="subsection-text text-black text-justify mb-2 font-semibold">
              Seus dados podem ser compartilhados com:
            </p>
            <ul className="subsection-list list-disc pl-5 pb-2 mb-2">
              <li>
                <strong>Prestadores de serviços e Operadores: </strong>
                Colaboradores na execução dos nossos serviços, incluindo:
                <ol>
                  <li>Agências de marketing</li>
                  <li>Provedores de análise de dados</li>
                  <li>Serviços de hospedagem</li>
                </ol>
              </li>
              <li>
                <strong>Terceiros por exigência legal: </strong>
                Quando necessário, para cumprir a lei ou proteger direitos e
                segurança.
              </li>
            </ul>
          </section>

          <section aria-labelledby="UserRights">
            <h2
              id="UserRights"
              className="text-black mt-4 mb-4 text-xl font-bold"
            >
              Direitos do Usuário
            </h2>
            <p className="text-black text-justify text-ls mb-2">
              De acordo com o GDPR e CCPA/CPRA, você tem vários direitos em
              relação aos seus dados:
              <ul>
                <li>Direito de acesso aos seus dados</li>
                <li>Direito de retificação dos seus dados</li>
                <li>Direito de exclusão dos seus dados</li>
                <li>Direito de restringir o processamento dos seus dados</li>
                <li>Direito de objeção ao processamento dos seus dados</li>
                <li>Direito à portabilidade dos dados</li>
              </ul>
            </p>
          </section>

          <section aria-labelledby="ExerciseRights">
            <h2
              id="ExerciseRights"
              className="text-black mt-4 mb-4 text-xl font-bold"
            >
              Como Exercer Seus Direitos
            </h2>
            <p className="text-black text-justify text-ls mb-2">
              Se você deseja exercer qualquer um dos direitos mencionados acima,
              entre em contato conosco através do email "londer11@icloud.com".
              Estamos comprometidos em responder a todas as solicitações em um
              prazo de 30 dias.
            </p>
          </section>

          <section className="privacy-subsection">
            <h3 className="subsection-title text-black text-xl font-bold">
              Atualizações desta Política
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Este aviso pode ser atualizado. Sempre verifique nosso site para a
              versão mais recente.
            </p>
          </section>

          <section className="privacy-subsection">
            <h3 className="subsection-title text-black text-xl font-bold">
              Legislação e foro
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Regido pelas Leis Brasileiras, especialmente a Lei nº 13.709/2018.
              Eventuais disputas serão resolvidas no Brasil.
            </p>
          </section>
        </article>
      </main>
    </>
  );
};


