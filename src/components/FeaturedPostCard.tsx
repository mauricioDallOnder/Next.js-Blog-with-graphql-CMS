import React from 'react';
import Image from "next/legacy/image";
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
        style={{ height: '500px' }} // Defina a altura do Swiper aqui
      >
        {posts.map((post) => (
          <SwiperSlide key={post.title} className="relative" style={{ height: '500px' }}> {/* Ajuste a altura aqui */}
            <Link href={`/post/${post.slug}`} aria-label={post.title}>
              <figure className="block relative h-full overflow-hidden"> {/* Aqui usamos h-full para garantir que o link ocupe toda a altura do slide */}
                <Image 
                  src={post.featuredImage.url} 
                  alt={post.title} 
                  layout="fill"
                  objectFit='cover'
                  priority={true}
                  quality={70}
                  sizes="(min-width: 1540px) 1456px, (min-width: 1300px) 1200px, (min-width: 1160px) 944px, (min-width: 800px) 688px, (min-width: 660px) 560px, (min-width: 440px) 360px, 220px"
                  className="transition-transform duration-500 ease-out transform hover:scale-110" 
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
                  <h2 className="font-bold text-3xl">{post.title}</h2>
                  <p className="text-md font-bold">{post.excerpt}</p>
                </div>
              </figure>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedPostCarousel;
