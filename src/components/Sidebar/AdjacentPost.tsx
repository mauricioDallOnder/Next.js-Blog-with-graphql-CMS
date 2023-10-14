import { AdjacentPostsProps, IAdjacentPosts } from '@/interfaces/interfaces';
import { getAdjacentPosts } from '@/services';
import React, { useState, useEffect, FunctionComponent } from 'react';
import AdjacentPostCard from './AdjacentPostsCard';

const AdjacentPostsContainer: FunctionComponent<AdjacentPostsProps> = ({ createdAt, slug }) => {
  const [adjacentPost, setAdjacentPost] = useState<IAdjacentPosts | null>(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [createdAt, slug]); // incluído createdAt no array de dependências

  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
      {dataLoaded && (
        <>
          {adjacentPost?.previous && (
            <div className={`${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
              <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
            </div>
          )}
          {adjacentPost?.next && (
            <div className={`${adjacentPost.previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
              <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdjacentPostsContainer;