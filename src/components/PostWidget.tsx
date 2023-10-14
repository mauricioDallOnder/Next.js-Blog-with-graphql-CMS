/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "@/services";
import { IPostCardProps, PostWidgetProps } from "@/interfaces/interfaces";
import Image from "next/image";

const PostWidget: React.FC<PostWidgetProps> = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState<IPostCardProps[]>([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories!).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <aside className="bg-white shadow-lg rounded-lg p-6 mb-8 space-y-4">
      <h2 className="text-2xl font-semibold border-b pb-2 tracking-wide">
        {slug ? "Posts Relacionados" : "Posts Recentes"}
      </h2>
      {relatedPosts.map((post, index) => (
        <article key={index} className="flex items-start space-x-4">
          {" "}
          {/* Aqui foi alterado de items-center para items-start */}
          <div className="w-16 h-16 flex-shrink-0">
            <Image
              alt={`Imagem de destaque do post "${post.title}"`}
              height={64}
              width={64}
              unoptimized
              className="object-cover rounded-md"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow flex flex-col justify-center">
            {" "}
            {/* Adicionado flex e flex-col para centralizar verticalmente */}
            <time
              className="block text-gray-500 text-xs mb-1"
              dateTime={post.createdAt}
            >
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </time>
            <Link
              href={`/post/${post.slug}`}
              className="text-black hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {post.title}
            </Link>
          </div>
        </article>
      ))}
    </aside>
  );
};

export default PostWidget;
