import { IPostCardProps } from "@/interfaces/interfaces";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PostCard = ({
  title,
  excerpt,
  featuredImage,
  slug,
  createdAt,
  author,
}: IPostCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <figure className="relative overflow-hidden shadow-md mb-6 h-auto">
        {!imageLoaded && (
          <div className="skeleton absolute top-0 left-0 w-full h-full"></div>
        )}
        <Image
          src={featuredImage.url}
          alt={`Imagem de destaque do post "${title}"`}
          layout="responsive"
          width={1536}
          height={864}
          objectFit="cover"
          objectPosition="center"
          className="rounded-t-lg lg:rounded-lg shadow-lg"
          priority={true}
          onLoad={() => setImageLoaded(true)}
        />
      </figure>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${slug}`} aria-label={`Leia o post "${title}"`}>
          {title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <Link href="/info/About" className="flex justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center group">
          <Image
            alt={`Foto do autor ${author.name}`}
            width={40}
            height={40}
            className="rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            src={author.photo.url}
          />
          <h2 className="ml-2 text-gray-700 font-medium text-lg group-hover:text-pink-600 transition-colors duration-300">
            {author.name}
          </h2>
        </Link>
        <div className="font-medium text-gray-700">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <time className="align-middle" dateTime={createdAt}>
            {moment(createdAt).format("MMM DD, YYYY")}
          </time>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${slug}`}>
          <button
            className="bg-purple-600 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-purple-700 transition-colors duration-300"
            aria-label="Leia o artigo completo..."
          >
            Leia o artigo completo...
          </button>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
