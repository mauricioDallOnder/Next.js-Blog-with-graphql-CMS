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

  return (
    <>
      {comments.length > 0 && (
        <section className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8"> {/* Uso da tag <section> */}
          <h2 className="text-xl mb-8 font-semibold border-b pb-4"> {/* Mudança para <h2> para melhor flow de headings */}
            {comments.length} Comentário(s)
          </h2>
          {comments.map((comment,index) => (
            <div key={index || comment.createdAt} className="border-b border-gray-200 mb-4 pb-4"> {/* Uso de key mais único e ajuste de cor de borda */}
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> em{" "}
                <time dateTime={moment(comment.createdAt).format("YYYY-MM-DD")}> {/* Uso da tag <time> */}
                  {moment(comment.createdAt).format("MMM DD, YYYY")}
                </time>
              </p>
              <p className="whitespace-pre-line text-gray-700 w-full"> {/* Ajuste de cor para melhor contraste */}
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Comments;
