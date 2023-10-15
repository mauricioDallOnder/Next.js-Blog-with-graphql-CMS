import React from "react";
import moment from "moment";
import Link from "next/link";
import { AdjacentPostCardProps } from "@/interfaces/interfaces";
import Image from "next/image";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    {position === "LEFT" && (
      <button
        aria-label="Previous post"
        className="arrow-btn absolute top-[144px] left-4 rounded-full bg-pink-600 p-3"
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{color: "#fdffe8",}} />
      </button>
    )}
    {position === "RIGHT" && (
      <button
        aria-label="Next post"
        className="arrow-btn absolute top-[144px] right-4 rounded-full bg-pink-600 p-3"
      >
        <FontAwesomeIcon icon={faArrowRight} style={{color: "#fdffe8",}} />
      </button>
    )}
  </article>
);

export default AdjacentPostCard;
