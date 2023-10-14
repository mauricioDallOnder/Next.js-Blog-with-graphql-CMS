import React from 'react';
import moment from 'moment';
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
    <div className='mb-2'>
    <Slider {...settings}>
        {posts.map((post) => (
          <div key={post.title} className="relative h-72">
            <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
            <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
            <div className="flex flex-col rounded-lg p-4 items-start justify-center absolute w-full h-full pl-5"> {/* Alterado 'items-center' para 'items-start' */}
              <p className="text-white mb-4 text-shadow font-semibold text-3xl pl-5">{post.title}</p>
              <p className="text-white mb-4 text-shadow font-semibold text-xl pl-5">{post.excerpt}</p>
              <div className="flex items-center absolute bottom-5 w-full justify-start pl-5"> {/* Alterado 'justify-center' para 'justify-start' */}
              <Link href={`/post/${post.slug}`}>
              <button className='bg-[#6100C2] hover:bg-[#6100C2] inline-flex items-start gap-3 px-6 py-[17px] rounded-[14px] text-[#FFFFFF]'>Continuar lendo</button>
              </Link>
               
              </div>
            </div>
           
           
          </div>
        ))}
      </Slider>
      </div>
  );
};
//bg-[#6100C2]

export default FeaturedPostCarousel;