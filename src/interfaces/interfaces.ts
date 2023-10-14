// Author Interfaces
export interface Author {
  name: string;
  bio: string;
  id?: string;
  photo: {
    url: string;
  };
}

// Categories Interfaces
export interface Category {
  name: string;
  slug: string;
}

// Post Interfaces
export interface FeaturedImage {
  url: string;
}

export interface IChild {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  title?: string;
  src?: string;
  height?: string;
  width?: string;
}

export interface IContentType {

  data?: any; // Para qualquer tipo de data extra que possa existir no objeto
  type: string;
  children: IChild[];
  src?: string;   
  title?: string; 
  width?: number;
  height?: number;
  mimeType?: string;
  
}

export interface IPostDetails {
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  author: Author;
  createdAt: string;
  slug: string;
  content: {
    raw: {
      children: IContentType[];
    };
    text: string;
  };
  categories: Category[];
}

export interface IPostCardProps {
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  author: Author;
  createdAt: string;
  slug: string;
  categories: Category[];
}

// Responses Interfaces
export interface IGraphQLResponse {
  postsConnection: {
    edges: Array<{
      node: IPostCardProps;
    }>;
  };
}

export interface IIPostsResponse {
  posts: IPostCardProps[];
}

export interface ICategoriesResponse {
  categories: Category[];
}

export interface IPostDetailsResponse {
  post: IPostDetails;
}

// Props Interfaces
export type PostWidgetProps = {
  categories?: string[];
  slug?: string;
};

export interface PostDetailProps {
  post: IPostDetails;
}



//Interfaces comentarios:
// para o método submitComment
export interface ICommentSubmit {
  name: string;
  email: string; 
  comment: string;
  slug:string
}

export interface ICommentResponse {
  success?: boolean;
  error?: string;
 slug:string
}

// Define a estrutura de um comentário
export interface Comment {
  name: string;
  createdAt: string;
  comment: string;
}

// interface da estrutura da resposta 
export interface GetPostWithCommentsResponse {
  post: {
    comments: Comment[];
  };
}


//interface dos posts adjacentes:
export interface IPost {
  title: string;
  featuredImage: {
    url: string;
  };
  createdAt: string;
  slug: string;
}
export interface IAdjacentPostsResponse {
  next: IPost[];
  previous: IPost[];
}


export interface AdjacentPostCardProps {
  post: IPost;
  position: 'LEFT' | 'RIGHT';
}

export interface IAdjacentPosts {
  next: IPost | null;
  previous: IPost | null;
}

export interface AdjacentPostsProps {
  createdAt: string; // ou Date, dependendo de como você está lidando com datas
  slug: string;
}
