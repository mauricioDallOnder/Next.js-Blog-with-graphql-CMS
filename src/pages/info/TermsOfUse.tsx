/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { NextSeo } from "next-seo";

const TermsOfUse = () => {
  return (
    <>
      <NextSeo
        title="Termos de uso"
        description="Saiba mais sobre os nossos Termos de uso."
        canonical="https://www.seusite.com/politica-de-privacidade"
        openGraph={{
          type: "website",
          url: "https://www.seusite.com/politica-de-privacidade",
          title: "Política de Cookies",
          description: "Saiba mais sobre os nossos Termos de uso.",
          images: [
            {
              url: "https://www.seusite.com/uma-imagem.jpg",
              width: 800,
              height: 600,
              alt: "Descrição da Imagem",
            },
          ],
          site_name: "BlogNutriITri",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <main className="container mx-auto px-10 mb-16 max-w-5xl flex flex-col justify-start">
        <article
          className="bg-white shadow-lg rounded-lg p-8 mb-8 privacy-section"
          aria-label="Termos de uso."
        >
          <h1 className="section-title text-black mt-4 mb-4 text-2xl font-bold">
            {" "}
            Termos de uso
          </h1>
          <section aria-labelledby="TermsOfUse">
            <h2
              id="TermsOfUse"
              className="text-black mt-4 mb-4 text-xl font-bold"
            >
              {" "}
              {/* Alterado para h2 e adicionado id */}1. Termos
            </h2>
            <p className="text-black text-justify text-ls mb-2">
              Ao acessar nosso blog, você concorda em cumprir estes termos de
              serviço, todas as leis e regulamentos aplicáveis ​​e concorda que
              é responsável pelo cumprimento de todas as leis locais aplicáveis.
              Se você não concordar com algum desses termos, está proibido de
              usar ou acessar este site. Os materiais contidos neste site são
              protegidos pelas leis de direitos autorais e marcas comerciais
              aplicáveis.
            </p>
          </section>
          <div className="overflow-x-auto"></div>
          <section className="licence-use">
            <h3 className="subsection-title text-black text-xl font-bold">
              2. Uso de Licença
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
             É concedida permissão para baixar temporariamente uma cópia
              dos materiais (informações ou software) deste blog, apenas para
              visualização transitória pessoal e não comercial. Esta é a
              concessão de uma licença, não uma transferência de título e, sob
              esta licença, você não pode:
            </p>
            <ul className="subsection-list list-disc pl-5 pb-2 mb-2">
              <li>modificar ou copiar os materiais</li>
              <li>
                usar os materiais para qualquer finalidade comercial ou para
                exibição pública (comercial ou não comercial)
              </li>
              <li>
                tentar descompilar ou fazer engenharia reversa de qualquer
                software contido neste site
              </li>
              <li>
                remover quaisquer direitos autorais ou outras notações de
                propriedade dos materiais
              </li>
              <li>
                transferir os materiais para outra pessoa ou ‘espelhe’ os
                materiais em qualquer outro servidor.
              </li>
            </ul>
            <p className="subsection-text text-black text-justify mb-2">
              Esta licença será automaticamente rescindida se você violar alguma
              dessas restrições e poderá ser rescindida por este blog a qualquer
              momento. Ao encerrar a visualização desses materiais ou após o
              término desta licença, você deve apagar todos os materiais
              baixados em sua posse, seja em formato eletrónico ou impresso.
            </p>
          </section>

          <section className="disclaimer">
            <h3 className="subsection-title text-black text-xl font-bold">
              3. Isenção de responsabilidade
            </h3>

            <ul className="subsection-list list-disc pl-5 pb-2 mb-2">
              <li>
                Os materiais deste website são fornecidos ‘como estão’. Este
                blog e seus administradores não oferecem garantias, expressas ou
                implícitas, e, por este meio, isenta e nega todas as outras
                garantias, incluindo, sem limitação, garantias implícitas ou
                condições de comercialização, adequação a um fim específico ou
                não violação de propriedade intelectual ou outra violação de
                direitos.
              </li>
              <li>
                Além disso, este blog e seus administradores não garantem ou faz
                qualquer representação relativa à precisão, aos resultados
                prováveis ​​ou à confiabilidade do uso dos materiais em seu site
                ou de outra forma relacionado a esses materiais ou em sites
                vinculados a este site.
              </li>
            </ul>
          </section>
          <section className="limitations">
            <h3 className="subsection-title text-black text-xl font-bold">
              3. Limitações de uso
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Em nenhum caso este blog e seus administradores serão responsáveis
              ​​por quaisquer danos (incluindo, sem limitação, danos por perda
              de dados ou lucro ou devido a interrupção dos negócios)
              decorrentes do uso ou da incapacidade de usar os materiais
              contidos neste blog, mesmo que este blog ou um representante
              autorizado tenha sido notificado oralmente ou por escrito da
              possibilidade de tais danos. Como algumas jurisdições não permitem
              limitações em garantias implícitas, ou limitações de
              responsabilidade por danos conseqüentes ou incidentais, essas
              limitações podem não se aplicar a você.
            </p>
          </section>
          <section className="material-precision">
            <h3 className="subsection-title text-black text-xl font-bold">
              5. Precisão dos materiais
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Os materiais exibidos neste site podem incluir erros técnicos,
              tipográficos ou fotográficos. este blog e seus administradores não
              garantem que qualquer material em seu site seja preciso, completo
              ou atual. Este blog e seus administradores podem fazer alterações
              nos materiais contidos em seu site a qualquer momento, sem aviso
              prévio. No entanto, este blog e seus administradores se
              comprometem a atualizar os materiais caso se faça necessário.
            </p>
          </section>
          <section className="links">
            <h3 className="subsection-title text-black text-xl font-bold">
              6. Links
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              este blog e seus administradores não analisam todos os sites
              vinculados ao seu site e não é responsável pelo conteúdo de nenhum
              site vinculado. A inclusão de qualquer link não implica endosso
              pelos administradores desse blog. O uso de qualquer site vinculado
              é por conta e risco do usuário.
            </p>
          </section>
          <section className="modifications-on-the-blog">
            <h3 className="subsection-title text-black text-xl font-bold">
              7. Modificações
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Este blog pode revisar estes termos de serviço do site a qualquer
              momento, sem aviso prévio. Ao usar este site, você concorda em
              ficar vinculado à versão atual desses termos de serviço.
            </p>
          </section>
          <section className="modifications-on-the-blog">
            <h3 className="subsection-title text-black text-xl font-bold">
              8. Modificações
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Este blog pode revisar estes termos de serviço do site a qualquer
              momento, sem aviso prévio. Ao usar este site, você concorda em
              ficar vinculado à versão atual desses termos de serviço.
            </p>
          </section>
          <section className="laws">
            <h3 className="subsection-title text-black text-xl font-bold">
              9. Lei aplicável
            </h3>
            <p className="subsection-text text-black text-justify mb-2">
              Estes termos e condições são regidos e interpretados de acordo com
              as leis aplicaveis no território brasileiro e você se submete irrevogavelmente à
              jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default TermsOfUse;
