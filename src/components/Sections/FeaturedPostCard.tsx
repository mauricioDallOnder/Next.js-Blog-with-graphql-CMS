import { useRouter } from 'next/router';
import Link from 'next/link';
import { IFeaturedPost } from '@/interfaces/interfaces';
import moment from "moment";
import { useAmp } from 'next/amp'
import Image from 'next/image';

export const config = {amp: true}

function FeaturedPostCard({ title, featuredImage, author, createdAt, slug }: IFeaturedPost) {
  const isAmp = useAmp();

  return (
    <Link href={`/post/${slug}`} passHref>
      <article className='mb-2 cursor-pointer' title={`Read more about ${title}`}>
        <div className="relative h-72">
          <div className="absolute rounded-lg shadow-md inline-block w-full h-72">
            {isAmp ? (
              <amp-img 
                layout="responsive"
                width={100} 
                height={100} 
                style={{borderRadius:"0.5rem"}} 
                src={featuredImage.url} 
                alt={title} 
              />
            ) : (
              <Image
                src={featuredImage.url}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            )}
          </div>
          <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
          <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
            <time className="text-white mb-4 text-shadow font-semibold text-xs">{moment(createdAt).format('MMM DD, YYYY')}</time>
            <h2 className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{title}</h2>
            <div className="flex items-center absolute bottom-5 w-full justify-center">
              {isAmp ? (
                <amp-img 
                  layout="responsive" 
                  alt={author.name} 
                  width={30} 
                  height={30} 
                  style={{"borderRadius":"9999px","verticalAlign":"middle","dropShadow":"drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))"}} 
                  src={author.photo.url} 
                />
              ) : (
                <Image 
                  alt={author.name} 
                  width={30} 
                  height={30} 
                  className="align-middle drop-shadow-lg rounded-full" 
                  src={author.photo.url} 
                />
              )}
              <p className="inline align-middle text-white text-shadow ml-2 font-medium">{author.name}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
export default React.memo(FeaturedPostCard);
