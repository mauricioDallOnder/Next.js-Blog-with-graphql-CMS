import React, { useEffect, useState } from "react";
import { submitComment } from "../../services";
import { useForm } from "react-hook-form";
import { ICommentSubmit, PostDetailProps } from "@/interfaces/interfaces";

export default function CommentsForm({post}:PostDetailProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors,isSubmitted,isSubmitting },
  } = useForm<ICommentSubmit>();
  useEffect(() => {
    setValue("slug", post.slug); // Definindo o valor do campo "slug".
  }, [setValue]);


  const onSubmit = handleSubmit((data) => submitComment(data));
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Deixe seu comentário
      </h3>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            {...register("name",{ required: true })}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Nome"
            aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p className="text-xs text-red-500">* Campo obrigatório</p>
            )}

          <input
            {...register("email")}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea
            {...register("comment")}
            className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            name="comment"
            placeholder="Comentário"
          />
        </div>
        <div className="mt-8">
        <input {...register("slug")} type="hidden" />
        </div>
       
         
        <button
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting?"enviando comentário":"postar comentário"}
        </button>
        {isSubmitted && (
    <span className="text-xl float-right font-semibold mt-3 text-green-500">Comentario enviado e aguardando moderação</span>
  )}
      </form>
    </div>
  );
}
