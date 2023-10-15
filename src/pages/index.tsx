import { PostCard, PostWidget, Categories, Header } from "../components";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getPosts } from "@/services";
import FeaturedPostCarousel from "@/components/FeaturedPostCard";
import { IPostCardProps } from "@/interfaces/interfaces";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import {
  faBackward,
  faForward,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <title>BlogNutriTri</title>
        <meta
          name="description"
          content="Um blog de nutrição com dicas de alimentação e saúde."
        />
        <meta name="keywords" content="blog, nextjs, nutrição, esporte" />
        <meta property="og:title" content="Blog de Nutrição" />
        <meta
          property="og:description"
          content="Um blog de nutrição com dicas de alimentação e saúde"
        />
        <meta
          property="og:image"
          content="URL da imagem de destaque para redes sociais"
        />
        <meta property="og:url" content="URL do seu site" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="container mx-auto px-10 mb-8">
        <FeaturedPostCarousel posts={posts} />
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
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-blue-600 transition 
            ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <FontAwesomeIcon icon={faBackward} />
          </button>
          <span className="text-lg font-semibold text-white">
            página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-blue-600 transition 
      ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <FontAwesomeIcon icon={faForward} />
          </button>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: IPostCardProps[];
}> = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};
