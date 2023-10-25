
import { GraphQLClient } from 'graphql-request';
import type { NextApiRequest, NextApiResponse } from 'next';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

interface PostResponse {
  post: {
    id: string;
  };
}


interface CommentResponse {
  createComment: {
    id: string;
  };
}

const handleCommentCreation = async (req: NextApiRequest, res: NextApiResponse) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
    },
  });

  try {
    // obter o ID do post com base no slug
    const { post } = await graphQLClient.request<PostResponse>(`
      query getPostId($slug: String!) {
        post(where: { slug: $slug }) {
          id
        }
      }
    `, { slug: req.body.slug });

    if (!post || !post.id) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // criar o comentário usando o ID do post
    const { createComment } = await graphQLClient.request<CommentResponse>(`
    mutation CreateComment($comment: String!, $email: String!, $name: String!, $postId: ID!) {
      createComment(data: { comment: $comment, email: $email, name: $name, post: { connect: { id: $postId } } }) {
        id
        comment
        createdAt
        email
        name
      }
    }
    `, {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      postId: post.id
    });

    res.status(201).json({ id: createComment.id });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export default handleCommentCreation;
