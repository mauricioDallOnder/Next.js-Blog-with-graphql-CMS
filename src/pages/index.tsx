import { PostCard, PostWidget, Categories } from "../components";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getPosts, getFeaturedPosts } from "@/services";
import { IFeaturedPost } from "@/interfaces/interfaces";
import { IPostCardProps } from "@/interfaces/interfaces";
import Head from "next/head";
import { useState } from "react";
import FeaturedPosts from "@/components/Sections/FeaturedPosts";
import SubscribeForm from "@/components/NewsletterForms/SubscribeForm";
import Pagination from "@/components/Pagination";

const POSTS_PER_PAGE = 5;
export default function Home({
  posts,
  featuredPosts,
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
  <FeaturedPosts featuredPosts={featuredPosts} />
  <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div className="lg:col-span-8 col-span-1">
      {paginatedPosts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
      {/* Mover a Paginação aqui */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>

    <aside className="lg:col-span-4 col-span-1">
      <div className="lg:sticky relative top-8">
        <PostWidget />
        <Categories />
        <SubscribeForm />
        <br />
      </div>
    </aside>
  </section>
</main>

    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: IPostCardProps[];
  featuredPosts: IFeaturedPost[];
}> = async () => {
  const posts = await getPosts();
  const featuredPosts = await getFeaturedPosts();
  return {
    props: { posts, featuredPosts },
    revalidate: 60,
  };
};
