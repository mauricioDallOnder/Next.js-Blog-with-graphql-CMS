/* eslint-disable @next/next/no-img-element */
//build again
import React, { ReactNode } from "react";
import moment from "moment";
import { IChild, IContentType, PostDetailProps } from "@/interfaces/interfaces";
import Image from "next/legacy/image";
import Calendar from "@/svg/calendar";

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {

  const getContentFragment = (index: number, children: IChild[], typeObj?: IContentType) => {
    return children.map((child, childIndex) => {
      let content: ReactNode = child.text;

      if (child.bold) content = <strong key={childIndex}>{content}</strong>;
      if (child.italic) content = <em key={childIndex}>{content}</em>;
      if (child.underline) content = <u key={childIndex}>{content}</u>;

      switch (typeObj?.type) {
        case 'heading-three':
          return <h3 key={childIndex} className="text-xl font-semibold mb-4">{content}</h3>;
        case 'paragraph':
          return <p key={childIndex} className="text-lg text-justify mb-8">{content}</p>;
        case 'heading-four':
          return <h4 key={childIndex} className="text-lg font-medium mb-4">{content}</h4>;
        case 'image':
          return (
            <figure key={index}>
              <img
                alt={typeObj.title || "Imagem relacionada ao post"}
                height={typeObj.height || undefined}
                width={typeObj.width || undefined}
                src={typeObj.src || ""}
                className="my-4 rounded shadow-lg"
              />
              <figcaption className="text-gray-500 text-sm mt-2">{typeObj.title}</figcaption>
            </figure>
          );
        default:
          return content;
      }
    });
  };
  return (
    <article className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <figure className="relative overflow-hidden shadow-md mb-6">
        <img src={post.featuredImage?.url} alt={post.title} className="object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
        <figcaption className="text-gray-600 text-xs mt-2">{post.title}</figcaption>
      </figure>
      <div className="px-4 lg:px-0">
        <header className="flex items-center mb-8 w-full">
          <div className="hidden md:flex justify-center lg:mb-0 lg:w-auto mr-8 items-center">
            <Image
              alt={post.author?.name}
              height={30}
              width={30}
              className="align-middle rounded-full"
              src={post.author?.photo?.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author?.name}</p>
          </div>
          <div className="font-medium text-gray-700">
           <Calendar/>
            <time className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</time>
          </div>
        </header>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => getContentFragment(index, typeObj.children, typeObj))}
      </div>
    </article>
  );
};


export default PostDetail;