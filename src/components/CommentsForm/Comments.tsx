import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../../services";
import { Comment } from "@/interfaces/interfaces";

interface CommentsProps {
  slug: string;
}

const Comments: React.FC<CommentsProps> = ({ slug }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, [slug]);
  console.log(comments);
  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comentários
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> em{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
