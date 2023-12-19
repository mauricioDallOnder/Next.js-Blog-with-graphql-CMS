/* eslint-disable @next/next/no-img-element */
//build again
import { ReactNode } from "react";
import moment from "moment";
import { IChild, IContentType, PostDetailProps } from "@/interfaces/interfaces";
import Image from "next/legacy/image";
import Calendar from "@/svg/calendar";
import ShareButton from "../ShareButton";
import React from "react";


const calculateReadingTime = (text: string): number => {
    const wordsPerMinute = 200; // Média de palavras por minuto
    const textLength = text.split(/\s+/).length; // Contagem do número de palavras
    const readingTime = Math.ceil(textLength / wordsPerMinute);
    return readingTime;
  };

export default function PostDetail({ post }: PostDetailProps) {
  const readingTime = calculateReadingTime(post.content.text);
  const getContentFragment = (
    index: number,
    typeObj: IContentType | IChild
  ) => {
    // Verificando se estamos lidando com IContentType
    if ('type' in typeObj) {
      switch (typeObj.type) {
        case "bulleted-list":
        return (
          <ul key={index} className="list-disc list-inside my-4">
            {typeObj.children.map((listItem, listItemIndex) =>
              getContentFragment(listItemIndex, listItem)
            )}
          </ul>
        );
      case "numbered-list":
        return (
          <ol key={index} className="list-decimal list-inside my-4">
            {typeObj.children.map((listItem, listItemIndex) =>
              getContentFragment(listItemIndex, listItem)
            )}
          </ol>
        );
      case "list-item":
        return (
          <li key={index}>
            {typeObj.children.map((listItemChild, listItemChildIndex) =>
              getContentFragment(listItemChildIndex, listItemChild)
            )}
          </li>
        );
      case "list-item-child":
        return (
          <React.Fragment key={index}>
            {typeObj.children.map((child, childIndex) =>
              getContentFragment(childIndex, child)
            )}
          </React.Fragment>
        );
        case "heading-one":
          return (
            <h1 key={index} className="mb-8 text-3xl font-semibold">
              {typeObj.children.map((child, childIndex) => 
                getContentFragment(childIndex, child)
              )}
            </h1>
          );
        case "paragraph":
          return (
            <p key={index} className="text-lg text-justify mb-8">
              {typeObj.children.map((child, childIndex) => 
                getContentFragment(childIndex, child)
              )}
            </p>
          );
        case "heading-two":
          return (
            <h2 key={index} className="text-2xl font-semibold mb-4">
              {typeObj.children.map((child, childIndex) => 
                getContentFragment(childIndex, child)
              )}
            </h2>
          );
          case "heading-three":
            return (
              <h2 key={index} className="text-2xl font-semibold mb-4">
                {typeObj.children.map((child, childIndex) => 
                  getContentFragment(childIndex, child)
                )}
              </h2>
          );
        case "image":
          return (
            <figure key={index}>
              <img
                alt={typeObj.title || "Imagem relacionada ao post"}
                height={typeObj.height || undefined}
                width={typeObj.width || undefined}
                src={typeObj.src || ""}
                className="my-4 rounded shadow-lg w-full object-cover"
              />
            </figure>
          );
        case "video":
          return (
            <div key={index} className="video-wrapper">
              <video
                controls
                src={typeObj.src}
                className="my-4 rounded shadow-lg w-full"
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>
          );
       
        default:
          return null; // tratamento  para tipos desconhecidos
      }
    } else {
      // Processando IChild
      let content: ReactNode = typeObj.text;
    if (typeObj.bold) content = <strong key={index}>{content}</strong>;
    if (typeObj.italic) content = <em key={index}>{content}</em>;
    if (typeObj.underline) content = <u key={index}>{content}</u>;
  
      return content;
    }
  };
  
  
  return (
    <article className="bg-white/90 shadow-lg  backdrop-blur-md rounded-lg lg:p-8 pb-12 mb-8">
      <figure className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage?.url}
          alt={post.title}
          className="object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
        <figcaption className="text-gray-600 text-xs mt-2">
          {post.title}
        </figcaption>
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
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {post.author?.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 flex flex-row items-center ">
            <Calendar />
            <time className="align-middle">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </time>
            <span className="ml-2"> - {readingTime} min de leitura</span>
          </div>
        </header>
      
        {post.content.raw.children.map((typeObj, index) =>
          getContentFragment(index, typeObj)
        )}
      </div>
      <ShareButton />
    </article>
  );
}
