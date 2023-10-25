import { PostCard, PostWidget, Categories } from "../components";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getPosts } from "@/services";
import FeaturedPostCarousel from "@/components/FeaturedPostCard";
import { IPostCardProps } from "@/interfaces/interfaces";
import Head from "next/head";
import { useState } from "react";
import ReactPaginate from 'react-paginate';
const POSTS_PER_PAGE = 5;
export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Handler para mudar a página
  // Handler para mudar a página
const handlePageClick = (data: { selected: number }) => {
  setCurrentPage(data.selected + 1);
};


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

        <section className="flex justify-center items-center mt-8">
        <ReactPaginate
        
         nextLabel="próximo>"
         onPageChange={handlePageClick}
         pageRangeDisplayed={3}
         marginPagesDisplayed={2}
         pageCount={pageCount}
         previousLabel="<anterior"
         pageClassName="page-item"
         pageLinkClassName="page-link"
         previousClassName="page-item"
         previousLinkClassName="page-link"
         nextClassName="page-item"
         nextLinkClassName="page-link"
         breakLabel="..."
         breakClassName="page-item"
         breakLinkClassName="page-link"
         containerClassName="pagination"
         activeClassName="active"
         renderOnZeroPageCount={null}
        />
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
//posts: IPostCardProps[];
