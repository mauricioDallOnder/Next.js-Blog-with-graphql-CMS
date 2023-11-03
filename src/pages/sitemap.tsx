// pages/sitemap.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import xml2js from 'xml2js';
import Head from 'next/head';

interface UrlItem {
  loc: string; // Localização da URL
  // Adicione mais propriedades conforme necessário
}

interface SitemapSection {
  title: string;
  urls: UrlItem[];
}

interface SitemapProps {
  sections: SitemapSection[];
}

// O seu componente SitemapPage recebe as seções já processadas
const SitemapPage: React.FC<SitemapProps> = ({ sections }) => {
  return (
    <>
      <Head>
        <title>Mapa do Site - Chá com Sabor</title>
        <meta name="description" content="Mapa do site Chá com Sabor com links para todas as páginas importantes." />
      </Head>
      <main className="container mx-auto px-10 mb-16 max-w-7xl flex flex-col justify-start">
        <nav aria-label="Mapa do site detalhado">
          <article className="bg-white shadow-lg rounded-lg p-8 mb-8 privacy-section">
            <h1 className="text-3xl font-bold mb-6 text-left">Chá com Sabor Site Map</h1>
            <hr />
            <br />
            <div className="flex flex-wrap -mx-4">
              {sections.map((section, index) => (
                <div key={index} className="md:w-1/3 px-4 mb-8">
                  <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                  <ul className="list-none pl-0">
                    {section.urls.map((url, urlIndex) => {
                      // Aqui dividimos a URL pelo '/' e pegamos o último elemento do array
                      const urlParts = url.loc.split('/');
                      const lastPart = urlParts[urlParts.length - 1] || urlParts[urlParts.length - 2]; // Caso o último elemento seja vazio
                      return (
                        <li key={urlIndex} className="mb-2">
                          <a href={url.loc} className="text-[#06c] text-base font-semibold hover:underline">
                            {lastPart}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </nav>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch your sitemap
  const sitemapRes = await fetch('https://cha-com-sabor.vercel.app/sitemap-0.xml');
  const sitemapXml = await sitemapRes.text();
  const parsedSitemap = await xml2js.parseStringPromise(sitemapXml, {
    explicitArray: false,
  });

  // Categorize your URLs
  const allUrls: UrlItem[] = parsedSitemap.urlset.url.map((url: { loc: any; }) => ({
    loc: url.loc,
  }));

  // A função para categorizar URLs pode ser personalizada conforme necessário
  const aboutUrls = allUrls.filter((url) => url.loc.includes('info'));
  const categoryUrls = allUrls.filter((url) => url.loc.includes('categoria'));
  const postUrls = allUrls.filter((url) => url.loc.includes('post'));

  // Criar seções
  const sections: SitemapSection[] = [
    { title: 'Sobre', urls: aboutUrls },
    { title: 'Categorias', urls: categoryUrls },
    { title: 'Posts', urls: postUrls },
    // Adicione mais seções conforme necessário
  ];

  return { props: { sections } };
};

export default SitemapPage;
