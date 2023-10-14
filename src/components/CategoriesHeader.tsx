// CategoriesHeader.tsx
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// Define o tipo para as props que o componente espera
type CategoriesHeaderProps = {
  category: string
};

const CategoriesHeader: React.FC<CategoriesHeaderProps> = ({ category }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg mb-8">
      <div className="bg-[#3399cc] h-[5px]"></div> {/* Esta div representa a linha azul no topo */}
      <header className="py-8 px-8 border-b border-gray-200">
        <div className="flex items-center">
          <div className="text-4xl text-gray-700 mr-4">
            <FontAwesomeIcon icon={faFolderOpen} />
          </div>
          {/* Ajuste para exibir o nome da categoria em vez do slug */}
          <h1 className="text-4xl leading-snug text-gray-800 font-semibold">Categoria: {category }</h1>
        </div>
      </header>
    </div>
  );
};

export default CategoriesHeader;
