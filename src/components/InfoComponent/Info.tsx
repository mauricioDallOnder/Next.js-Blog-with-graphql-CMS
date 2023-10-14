import React from "react";
import Image, { StaticImageData } from "next/image";
interface IIInfoProps {
  informationProps: {
    info_avatar?: StaticImageData;
    author_name?: string;
    info_description: string;
  };
}
const Info = ({ informationProps }: IIInfoProps) => {
  return (
    <main className="container mx-auto px-10 mb-16 max-w-5xl flex flex-col justify-start h-screen overflow-y-hidden">
      <div className="bg-white shadow-lg rounded-lg p-8  mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Sobre o Autor
        </h3>
        <div className="relative text-center mt-20 mb-8 p-2 ">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-14">
            <Image
              unoptimized
              alt="nome do autor"
              height={60}
              width={60}
              className="align-middle rounded-full"
              src={informationProps.info_avatar!}
            />
          </div>
          <h3 className="text-black mt-4 mb-4 text-xl font-bold">
            {informationProps.author_name}
          </h3>
          <p className="text-black text-justify text-ls">
            {informationProps.info_description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Info;
