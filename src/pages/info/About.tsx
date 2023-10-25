/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { NextSeo } from "next-seo";
import Image from "next/image";


export default function About () {
  return (
    <>
      <NextSeo
        title="Informações sobre o autor do blog"
        description="Obtenha informações sobre o autor do blog"
        canonical="https://cha-com-sabor.vercel.app/politica-de-privacidade"
        openGraph={{
          type: "website",
          url: "https://cha-com-sabor.vercel.app/politica-de-privacidade",
          title: "Informações sobre o autor do blog",
          description: "Obtenha informações sobre o autor do blog.",
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
       <main className="container mx-auto px-10 my-16 max-w-5xl flex flex-col justify-start">
       
        <article
          className="bg-white shadow-lg rounded-lg p-8 mb-8"
          aria-labelledby="main-heading"
        >
          <h1 id="main-heading" className="text-black mb-4 text-2xl font-bold">
            Sobre Nós
          </h1>
          <section>
          <figcaption className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/geradorimagens-27342.appspot.com/o/blog-cha%2Fcup-829527_1920.jpg?alt=media&token=66be3181-8310-4654-bc14-4a8d7ef6135a&_gl=1*i95t5o*_ga*MTA2NDY5MTI4MS4xNjk3MzkyMDc0*_ga_CW55HF8NVT*MTY5NzM5MjA3NC4xLjEuMTY5NzM5NTMyNi41MS4wLjA."
          alt="Um bule e uma xícara fumegantes em um terraço ao ar livre com montanhas ao longe"
          layout="fill"
          objectFit="cover"
          className="shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </figcaption>
            <p className="text-black text-justify text-ls mb-2">
              Bem-vindo ao CháComSabor, sua principal fonte de informação
              dedicada inteiramente ao maravilhoso mundo dos chás. Este blog tem
              a missão de educar, inspirar e unir amantes do chá de todos os
              cantos do mundo.
            </p>

            <p className="text-black text-justify text-ls mb-2">
              No CháComSabor, estamos empenhados em fornecer a você informações
              confiáveis e bem pesquisadas, abrangendo uma ampla gama de
              tópicos, incluindo os diversos tipos de chás, seus benefícios para
              a saúde, receitas deliciosas, resenhas de produtos, notícias e
              tendências do setor, e muito mais.
            </p>
            <p className="text-black text-justify text-ls mb-2">
              Obrigado por visitar e esperamos que você encontre inspiração,
              conhecimento e comunidade aqui no CháComSabor. Pegue sua xícara
              favorita, selecione seu chá, e junte-se a nós nesta viagem
              revigorante. Saúde e felicidade!
            </p>
            </section>
          <h2
            className="text-black mt-4 mb-2 text-xl font-bold"
          >
            MAURICIO DALL ONDER
          </h2>
          <h3
            className="text-black mb-4 text-3xs font-semibold"
          >
            Autor do Blog
          </h3>
        </article>
      </main>
    </>
  );
};


