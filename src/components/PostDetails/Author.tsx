import { PostDetailProps } from '@/interfaces/interfaces';
import React from 'react';
import Image from 'next/image';

const Author: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8  mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            Sobre o Autor
          </h3>
    <div className="relative text-center mt-20 mb-8 p-2 ">
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-14">
        <Image
          unoptimized
          alt={post.author?.name}
          height={60}
          width={60}
          className="align-middle rounded-full"
          src={post.author?.photo?.url}
        />
      </div>
      <h3 className="text-black mt-4 mb-4 text-xl font-bold">{post.author?.name}</h3>
      <p className="text-black text-justify text-ls">{post.author?.bio}</p>
    </div>
    </div>
  );
}

export default Author;
