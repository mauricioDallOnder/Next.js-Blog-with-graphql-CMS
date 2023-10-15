import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { IIPostsResponse } from '@/interfaces/interfaces';

const FeaturedPostCarousel = ({ posts }:IIPostsResponse) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className='mb-2'>
      <Slider {...settings}>
        {posts.map((post) => (
          <article key={post.title} className="relative h-72">
            <Image fill objectFit='cover' className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" src={post.featuredImage.url} alt={post.title}  />
            <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
            <div className="flex flex-col rounded-lg p-4 items-start justify-center absolute w-full h-full pl-5">
              <h2 className="text-white mb-4 text-shadow font-semibold text-3xl pl-5">{post.title}</h2> 
              <p className="text-white mb-4 text-shadow font-semibold text-xl pl-5">{post.excerpt}</p>
              <div className="flex items-center absolute bottom-5 w-full justify-start pl-5">
                <Link href={`/post/${post.slug}`}>
                  <button className='bg-[#6100C2] hover:bg-[#6100C2] inline-flex items-start gap-3 px-6 py-[17px] rounded-[14px] text-[#FFFFFF]'>Continuar lendo</button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedPostCarousel;
