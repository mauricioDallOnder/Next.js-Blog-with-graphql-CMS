/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState} from "react";
import { submitComment } from "../../services";
import { useForm } from "react-hook-form";
import { ICommentSubmit, PostDetailProps } from "@/interfaces/interfaces";

export default function CommentsForm({ post }: PostDetailProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm<ICommentSubmit>();
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  useEffect(() => {
    setValue("slug", post.slug); // Definindo o valor do campo "slug".
  }, [setValue]);
  
  const onSubmit = async (data:ICommentSubmit) => {
    try {
      await submitComment(data);
      setIsSubmittedSuccessfully(true);
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
      setIsSubmittedSuccessfully(false);
    }
  };
  //data:ICommentSubmit
  return (
    <section
    className="bg-white shadow-lg rounded-lg p-8 mb-8"
    aria-labelledby="comment-section-title"
    >
      <h3
        id="comment-section-title"
        className="text-xl mb-8 font-semibold border-b pb-4"
      >
        Deixe seu comentário
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            {...register("name", { required: "O nome é obrigatório." })}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Nome"
            aria-label="Nome"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <p className="text-xs text-red-500 mt-2">* Nome é obrigatório</p>
          )}

          <input
           {...register("email", {
            required: "O e-mail é obrigatório.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Endereço de e-mail inválido",
            },
          })}
          
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Email"
            aria-label="Email"
            name="email"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea
           {...register("comment", { required: "O comentário é obrigatório." })}
            className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            name="comment"
            placeholder="Comentário"
            aria-label="Comentário"
          />
        </div>
        <div className="mt-8">
          <input {...register("slug")} type="hidden" />
        </div>

        <button
        className="bg-purple-600 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-purple-700 transition-colors duration-300"
        type="submit"
        disabled={isSubmitting}
        aria-label="submit button"
      >
        {isSubmitting ? "enviando comentário" : "postar comentário"}
      </button>
      <div className="w-full text-center mt-3">
        {isSubmittedSuccessfully && (
          <span className="text-xs font-semibold text-green-500">
            Comentário enviado com sucesso e aguardando moderação!
          </span>
        )}
      </div>
      </form>
    </section>
  );
}
//fix issues on submit this comment form 01/11/2023