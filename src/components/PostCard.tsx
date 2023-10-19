import { IPostCardProps } from "@/interfaces/interfaces";
import moment from "moment";
import Link from "next/link";
import Image from "next/legacy/image";
//update
const PostCard = ({ title, excerpt, featuredImage, slug, createdAt, author }: IPostCardProps) => {
  return (
    <article className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <figure className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src={featuredImage.url}
          alt={`Imagem de destaque do post "${title}"`}
          layout="fill"
          objectFit='cover'
          className="shadow-lg rounded-t-lg lg:rounded-lg"
          priority={false}
          quality={70}
          sizes="(min-width: 1540px) 1456px, (min-width: 1300px) 1200px, (min-width: 1160px) 944px, (min-width: 800px) 688px, (min-width: 660px) 560px, (min-width: 440px) 360px, 220px"
        />
      </figure>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${slug}`} aria-label={`Leia o post "${title}"`}>
          {title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
          <Image
            unoptimized
            alt={`Foto do autor ${author.name}`}
            height={30}
            width={30}
            className="align-middle rounded-full"
            src={author.photo.url}
          />
          <h2 className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{author.name}</h2>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time className="align-middle" dateTime={createdAt}>
            {moment(createdAt).format('MMM DD, YYYY')}
          </time>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${slug}`}>
          <button className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer" aria-label={`Continue lendo o post "${title}"`} >
            saiba mais..
          </button>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
