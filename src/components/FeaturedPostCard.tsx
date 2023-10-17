import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { IIPostsResponse } from '@/interfaces/interfaces';

const FeaturedPostCarousel = ({ posts }: IIPostsResponse) => {
  return (
    <section className='mb-2'>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
     navigation={true}
     autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={500}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
  
      >
        {posts.map((post) => (
          <SwiperSlide key={post.title}>
            <Link href={`/post/${post.slug}`} aria-label={post.title} className="block relative h-72">
              
                <Image 
                  src={post.featuredImage.url} 
                  alt={post.title} 
                  layout='fill' 
                  objectFit='cover' 
                  className="absolute rounded-lg z-0" 
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
                  <h2 className="font-semibold text-3xl">{post.title}</h2>
                  <p className="text-md">{post.excerpt}</p>
                </div>
              
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedPostCarousel;