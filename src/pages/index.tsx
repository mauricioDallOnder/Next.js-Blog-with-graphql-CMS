import { PostCard, PostWidget, Categories } from "../components";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getPosts, getFeaturedPosts } from "@/services";

import { IPostCardProps } from "@/interfaces/interfaces";
import Head from "next/head";
import { useState } from "react";

import FeaturedPosts from "@/components/Sections/FeaturedPosts";

const POSTS_PER_PAGE = 3;
export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      <Head>
        <title>ChaComSabor</title>
        <meta
          name="description"
          content="Um blog de com dicas de chás,saúde e bem estar."
        />
        <meta name="keywords" content="blog, chá, saúde, bem estar" />
        <meta property="og:title" content="CháComSabor" />
        <meta
          property="og:description"
          content="Um blog de com dicas de chás,saúde e bem estar."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/geradorimagens-27342.appspot.com/o/blog-cha%2Fcha.jpeg?alt=media&token=06fbdb29-4e42-4e71-ba89-6b58a5ecb3b9&_gl=1*5cjsr3*_ga*MTA2NDY5MTI4MS4xNjk3MzkyMDc0*_ga_CW55HF8NVT*MTY5NzM5MjA3NC4xLjEuMTY5NzM5MjI0NS4yNy4wLjA."
        />
        <meta property="og:url" content="https://cha-com-sabor.vercel.app" />
      </Head>
      <main className="container mx-auto px-10 mb-8">
        <FeaturedPosts />
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {paginatedPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
          <aside className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </aside>
        </section>

        {/* Controles de paginação */}

        <section className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`text-center py-3 cursor-pointer px-3 bg-pink-600 rounded-full  arrow-btn
            ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label="página anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6  text-white w-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <span className="text-lg font-semibold text-white">
            página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`text-center py-3 px-3 cursor-pointer bg-pink-600 rounded-full 
      ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label="próxima pagina"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6  text-white w-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: IPostCardProps[];
  featuredPosts: IFeaturedPost[];  // <-- Adicione esta linha
}> = async () => {
  const posts = await getPosts();
  const featuredPosts = await getFeaturedPosts();  // <-- Adicione esta linha
  return { props: { posts, featuredPosts } };  // <-- Passe featuredPosts como prop também
};
