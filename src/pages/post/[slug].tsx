// src/pages/posts/[slug].tsx
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { IPostDetails } from "@/interfaces/interfaces";
import { getPostDetails, getPosts } from "@/services";
import { AdjacentPostsContainer, Author, Comments, CommentsForm, PostWidget } from "@/components";
import PostDetail from "@/components/PostDetails/PostDetails";
import { NextSeo } from 'next-seo'; // Importar o NextSeo

interface PostPageProps {
  post: IPostDetails;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  const contentText = post.content.text || post.excerpt;
  return (
    <>
   
      <NextSeo
        openGraph={{
          title: post.title,
          description: contentText,
          url: `https://cha-com-sabor.vercel.app/posts/${post.slug}`,
          images: [
            {
              url: post.featuredImage.url, 
              alt: post.title,
            }
          ],
          type: 'article',
        }}
      />
      <main className="container mx-auto px-10 mb-8"> 
    
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <article className="col-span-1 lg:col-span-8"> 
            <PostDetail post={post} />
            <section> 
              <AdjacentPostsContainer createdAt={post.createdAt} slug={post.slug}  />
              <CommentsForm post={post} />
              <Comments slug={post.slug} />
            </section>
          </article>
          <aside className="col-span-1 lg:col-span-4"> 
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Author post={post} />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};


export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: 'blocking', // Gera páginas estáticas no primeiro acesso para novos slugs
  };
};



export const getStaticProps: GetServerSideProps<PostPageProps> = async (
  context
) => {
  const { slug } = context.params as { slug: string };
  const post = await getPostDetails(slug);

  if (!post) {
    return {
      notFound: true, // Isso retornará uma página 404 se o post não for encontrado.
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60
  };
};
export default PostPage;

