/* eslint-disable react/no-unescaped-entities */

import { NextSeo } from "next-seo";


export default function CookiesPolicy () {
  return (
    <>
      <NextSeo
        title="Política de Cookies"
        description="Saiba mais sobte nossa politica de Cookies."
        canonical="https://cha-com-sabor.vercel.app/politica-de-privacidade"
        openGraph={{
          type: "website",
          url: "https://cha-com-sabor.vercel.app/politica-de-privacidade",
          title: "Política de Cookies",
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
            Política de Cookies
          </h1>
          <section aria-labelledby="WhatAreCookies">
            <h2
              id="WhatAreCookies"
              className="text-black mt-4 mb-4 text-xl font-bold"
            >
              {" "}
              {/* Alterado para h2 e adicionado id */}O que são Cookies?
            </h2>
            <p className="text-black text-justify text-ls mb-2">
              Cookies são pequenos arquivos que coletam dados pessoais enquanto
              você navega na internet.
            </p>
          </section>
          <div className="overflow-x-auto">
            <table className="min-w-fit bg-yellow-300 rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    className="py-4 px-6 bg-yellow-500 text-left text-xl uppercase font-bold border"
                  >
                    PRINCIPAIS TIPOS DE COOKIES
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 bg-yellow-400 text-left font-bold border">
                    COOKIES NECESSÁRIOS
                  </td>
                  <td className="py-4 px-6 border">
                    Esses cookies são essenciais para que os sites carreguem
                    corretamente e permita que você navegue e faça uso de todas
                    as funcionalidades disponíveis, normalmente.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 bg-yellow-400 text-left font-bold border">
                    COOKIES FUNCIONAIS
                  </td>
                  <td className="py-4 px-6 border">
                    Esses cookies permitem que os Sites se lembrem das escolhas
                    dos Usuários, para proporcionar uma experiência mais
                    personalizada. Também, possibilitam que os Usuários assistam
                    a vídeos e utilizem ferramentas sociais, campos para
                    comentários, fóruns, entre outros.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 bg-yellow-400 text-left font-bold border">
                    COOKIES ESTATÍSTICOS
                  </td>
                  <td className="py-4 px-6 border">
                    Esses cookies permitem que os Sites coletem dados
                    relacionados às interações dos Usuários de forma anônima,
                    para geração de relatórios estatísticos de utilização e
                    performance de cada funcionalidade
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 bg-yellow-400 text-left font-bold border">
                    COOKIES MARKETING
                  </td>
                  <td className="py-4 px-6 border">
                    Esses cookies são utilizados para fornecer mais conteúdo
                    relevante e do interesse dos Usuários. Podem ser utilizados
                    para apresentar publicidade direcionada ou limitar sua
                    veiculação na Plataforma.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <section className="cookies-use">
            <h3 className="subsection-title text-black text-xl font-bold">
              Como nós usamos cookies
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Podemos utilizar cookies para facilitar o uso e melhor adaptar o
              blog aos seus interesses e necessidades, bem como para compilarmos
              informações sobre a utilização de nosso site, auxiliando a
              melhorar suas estruturas e seus conteúdos.
            </p>
          </section>

          <section className="How-to-refuse-or-disable-cookies">
            <h3 className="subsection-title text-black text-xl font-bold">
              Como recusar ou desabilitar cookies
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Ao entrar em nosso site pela primeira vez de um dispositivo, nós
              coletaremos seu consentimento para a utilização de cookies. Após
              esse consentimento, poderemos armazenar cookies em seu dispositivo
              para lembrar de você na próxima sessão.
            </p>
            <p className="subsection-text text-black text-justify mb-2">
              A qualquer momento você poderá revogar seu consentimento quanto
              aos cookies, utilizando para tanto as configurações de seu
              navegador de preferência. Para mais informações sobre como
              proceder em relação à gestão dos cookies nos navegadores acesse:
            </p>
            <div className="flex-col text-blue-500 font-bold">
              <a href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies">
                1 - Internet Explorer
              </a>
              <br />
              <a href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam">
                2 - Mozilla Firefox
              </a>
              <br />
              <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=pt-BR">
                3 - Google Chrome
              </a>
              <br />
              <a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac">
                4 - Safari
              </a>
            </div>
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
        </article>
      </main>
    </>
  );
};


