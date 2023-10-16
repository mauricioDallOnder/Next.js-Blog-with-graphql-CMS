import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getCategories, getPosts } from '../../services';
import xmlbuilder from 'xmlbuilder';
import { IPostCardProps, Category } from '../../interfaces/interfaces';

interface Url {
  url: string;
  changefreq: string;
  priority: number;
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Defina cabeçalhos de cache
  ctx.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  // Busque postagens e categorias da sua API GraphQL
  const posts: IPostCardProps[] = await getPosts();
  const categories: Category[] = await getCategories();

  // Crie uma lista de URLs que você deseja incluir no seu sitemap
  const urls: Url[] = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/info/About', changefreq: 'yearly', priority: 0.8 },
    { url: '/info/CookiesPolicy', changefreq: 'yearly', priority: 0.5 },
    { url: '/info/PrivacyPolicy', changefreq: 'yearly', priority: 0.5 },
    { url: '/info/TermsOfUse', changefreq: 'yearly', priority: 0.5 },
    // { url: '/404', changefreq: 'yearly', priority: 0.1 },  // Considerar não incluir no sitemap    
  ];

  // Adicione URLs dinâmicas
  posts.forEach((post) => {
    urls.push({ url: `/post/${post.slug}`, changefreq: 'daily', priority: 1.0 });
  });

  categories.forEach((category) => {
    urls.push({ url: `/category/${category.slug}`, changefreq: 'weekly', priority: 0.8 });
  });

  // Construa o sitemap XML
  const sitemap = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
  
  urls.forEach(({ url, changefreq, priority }) => {
    const urlElement = sitemap.ele('url');
    // Removendo a barra adicional e garantindo que não há barras duplicadas no final da URL base
    urlElement.ele('loc').txt(`https://cha-com-sabor.vercel.app${url}`); // substitua pelo seu domínio real
    urlElement.ele('changefreq').txt(changefreq);
    urlElement.ele('priority').txt(priority.toString());
  });

  // Defina o tipo de conteúdo como XML
  ctx.res.setHeader('Content-Type', 'text/xml');

  // Envie o sitemap como resposta
  ctx.res.write(sitemap.end({ pretty: true }));
  ctx.res.end();

  // Não retorne props
  return { props: {} };
}

const SitemapPage = () => null;
export default SitemapPage;
