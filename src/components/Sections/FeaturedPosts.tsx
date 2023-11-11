import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedPostCard from "./FeaturedPostCard";
import { IFeaturedPost } from "@/interfaces/interfaces";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = ({
  featuredPosts,
}: {
  featuredPosts: IFeaturedPost[];
}) => {
  const customLeftArrow = (
    <nav className="absolute inline-flex -space-x-px rounded-md shadow-lg cursor-pointer bg-pink-600 dark:text-gray-100">
    <button
      aria-label="botao de scroll"
      className="inline-flex items-center px-2 py-2 text-sm font-semibold rounded-md shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-pink-600 dark:text-gray-100 dark:hover:bg-pink-700 dark:hover:border-pink-700 border border-transparent hover:border-current"
    >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </nav>
  );

  const customRightArrow = (
    <nav className="absolute inline-flex -space-x-px rounded-md shadow-lg dark:bg-pink-600 dark:text-gray-100 right-0">
    <button
      aria-label="botao de scroll"
      className="inline-flex items-center px-2 py-2 text-sm font-semibold rounded-md shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-pink-600 dark:text-gray-100 dark:hover:bg-pink-700 dark:hover:border-pink-700 border border-transparent hover:border-current"
    >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </nav>
  );

  return (
    <div className="mb-8">
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="px-4"
      >
        {featuredPosts.map((post, index) => (
          <FeaturedPostCard
            key={index}
            title={post.title}
            featuredImage={post.featuredImage}
            author={post.author}
            createdAt={post.createdAt}
            slug={post.slug}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
