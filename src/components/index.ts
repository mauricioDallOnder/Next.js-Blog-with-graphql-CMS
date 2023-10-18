import dynamic from 'next/dynamic';
export {default as PostCard} from './PostCard';
export {default as Categories} from './Categories';
export {default as PostWidget} from './PostWidget';
export {default as Header} from './Header';

export {default as Author} from '../components/PostDetails/Author';
export {default as Comments} from '../components/CommentsForm/Comments';
export {default as CommentsForm} from '../components/CommentsForm/CommentsForm';
export {default as  PostDetails} from '../components/PostDetails/PostDetails';



export const DynamicAdjacentPostsContainer= dynamic(()=> import ('../components/BottomCarouselPost/AdjacentPostsContainer'))
