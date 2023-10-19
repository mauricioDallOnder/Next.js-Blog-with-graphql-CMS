import { PostDetailProps } from '@/interfaces/interfaces';
import React from 'react';
import Image from "next/legacy/image";

const Author: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <article className="bg-white shadow-lg rounded-lg p-8 mb-8"> {/* <article> tag adicionada */}
      <h2 className="text-xl mb-8 font-semibold border-b pb-4"> {/* h2 é mais semântico aqui */}
        Sobre o Autor
      </h2>
      <div className="relative text-center mt-20 p-2">
        <figure className="absolute left-1/2 transform -translate-x-1/2 -top-16"> 
          <Image
            unoptimized
            alt={`Foto do autor ${post.author?.name}`}  
            height={80}  
            width={80}
            className="align-middle rounded-full"
            src={post.author?.photo?.url}
          />
        </figure>
        <h3 className="text-black mt-8 mb-4 text-xl font-bold">{post.author?.name}</h3>
        <p className="text-black text-justify text-lg">{post.author?.bio}</p> {/* Ajuste no tamanho da fonte */}
      </div>
    </article>
  );
}

export default Author;
