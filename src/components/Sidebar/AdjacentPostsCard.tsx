import React from "react";
import moment from "moment";
import Link from "next/link";
import { AdjacentPostCardProps } from "@/interfaces/interfaces";
import Image from "next/image";


const AdjacentPostCard = ({ post, position }: AdjacentPostCardProps) => (
  <article className="relative w-full h-72 rounded-lg shadow-md">
    <figure className="absolute rounded-lg w-full h-72">
      <Image
        fill
        objectFit="cover"
        src={post.featuredImage.url}
        alt={`Background image for post titled ${post.title}`}
      />
      <figcaption className="text-white text-xs mt-2 shadow-md mb-6">
        {post.title}
      </figcaption>
    </figure>
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white text-shadow font-semibold text-xs">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className="text-white text-shadow font-semibold text-2xl text-center">
        {post.title}
      </p>
    </div>
    <Link href={`/post/${post.slug}`}>
      <button
        aria-label={`Link to ${post.title}`}
        className="z-10 cursor-pointer absolute w-full h-full"
      />
    </Link>
    {position === 'LEFT' && (
      <button className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 left-4 rounded-full" aria-label="artigo anterior">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6  text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
    )}
    {position === 'RIGHT' && (
      <button className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 right-4 rounded-full" aria-label="próximo artigo">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    )}
  </article>
);

export default AdjacentPostCard;
