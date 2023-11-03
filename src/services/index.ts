import {
  ICategoriesResponse,
  IGraphQLResponse,
  IPostCardProps,
  IPostDetails,
  IPostDetailsResponse,
  IIPostsResponse,
  ICommentResponse,
  ICommentSubmit,
  Comment,
  GetPostWithCommentsResponse,
  IAdjacentPostsResponse,
  IPost,
  IFeaturedPost,
  IFeaturedPostsResponse,
} from "@/interfaces/interfaces";

import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;
export const getPosts = async (): Promise<IPostCardProps[]> => {
  const query = gql`
    query MyQuery {
      postsConnection(first: 70){
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request<IGraphQLResponse>(graphqlAPI, query);
  if (!result.postsConnection || !result.postsConnection.edges) {
    return []; // Retorna um array vazio em caso de erro
  }
  //console.log(result)
  return result.postsConnection.edges.map((edge) => edge.node);
};

export const getRecentPosts = async (): Promise<IPostCardProps[]> => {
  const query = gql`
    query GetPostsDetails {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request<IIPostsResponse>(graphqlAPI, query);
  if (!result.posts || result.posts.length === 0) {
    return []; // Retorna um array vazio em caso de erro ou resposta vazia
  }
  return result.posts; // result.posts já é um array de IPostCardProps
};

export const getSimilarPosts = async (
  slug: string,
  categories: string[]
): Promise<IPostCardProps[]> => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request<IIPostsResponse>(graphqlAPI, query, {
    slug,
    categories,
  });

  if (!result.posts || result.posts.length === 0) {
    return []; // Retorna um array vazio em caso de erro ou resposta vazia
  }
  return result.posts;
};

export const getCategories = async (): Promise<
  { name: string; slug: string }[]
> => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request<ICategoriesResponse>(graphqlAPI, query);

  if (!result.categories || result.categories.length === 0) {
    return []; // Retorna um array vazio em caso de erro ou resposta vazia
  }

  return result.categories;
};

export const getPostDetails = async (
  slug: string
): Promise<IPostDetails | null> => {
  console.log("Slug value:", slug);
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
          text
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request<IPostDetailsResponse>(graphqlAPI, query, {
    slug,
  });

  if (!result.post) {
    return null; // Retorne null ou outro valor padrão em caso de erro ou resposta vazia
  }

  return result.post;
};

export const submitComment = async (
  obj: ICommentSubmit
): Promise<ICommentResponse> => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug: string): Promise<Comment[]> => {
  const query = gql`
    query GetPostWithComments($slug: String!) {
      post(where: { slug: $slug }) {
        comments {
          name
          createdAt
          comment
        }
      }
    }
  `;

  try {
    // Execute a consulta e espere pela resposta
    const result = await request<GetPostWithCommentsResponse>(
      graphqlAPI,
      query,
      { slug }
    );

    // Se a consulta foi bem-sucedida e os comentários estão disponíveis, retorne-os
    return result.post.comments;
  } catch (error) {
    // Lidar com erros aqui, por exemplo, imprimir no console e retornar um array vazio
    console.error("Error fetching comments:", error);
    return [];
  }
};


export const getAdjacentPosts = async (createdAt: string, slug: string): Promise<{ next: IPost | null; previous: IPost | null }> => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request<IAdjacentPostsResponse>(graphqlAPI, query, { slug, createdAt });

  return { 
    next: result.next.length > 0 ? result.next[0] : null, 
    previous: result.previous.length > 0 ? result.previous[0] : null 
  };
};

export const getPostsByCategory = async (categorySlug: string): Promise<IPostCardProps[]> => {
  const query = gql`
    query GetPostsByCategory($categorySlug: String!) {
      posts(where: { categories_some: { slug: $categorySlug } },first: 70) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request<IIPostsResponse>(graphqlAPI, query, {
    categorySlug,
  });

  if (!result.posts || result.posts.length === 0) {
    return []; // Return an empty array in case of error or empty response
  }

  return result.posts;
};

export const getFeaturedPosts = async (): Promise<IFeaturedPost[]> => {
  const query = gql`
    query GetCategoryPost {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }
  `;

  const result = await request<IFeaturedPostsResponse>(graphqlAPI, query);

  return result.posts;
};



export const searchPostsDirectlyInDataSource = async (searchQuery: string): Promise<IPostCardProps[]> => {
  const query = gql`
    query SearchPosts($searchQuery: String!) {
      postsConnection(
        where: { OR: [{ title_contains: $searchQuery }, { excerpt_contains: $searchQuery }] }
        first: 10
      ) {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request<IGraphQLResponse>(graphqlAPI, query, {
      searchQuery,
    });
    
    if (!result.postsConnection || !result.postsConnection.edges) {
      return []; // Retorna um array vazio em caso de resposta inválida
    }

    return result.postsConnection.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching search results:", error);
    return []; // Retorna um array vazio em caso de erro
  }
};