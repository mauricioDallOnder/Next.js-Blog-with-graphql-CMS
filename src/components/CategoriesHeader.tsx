import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type CategoriesHeaderProps = {
  name: string
};
export default function CategoriesHeader({ name }:CategoriesHeaderProps){

  return (
    <section className="bg-white shadow-lg rounded-lg mb-8"> 
      <div className="bg-[#3399cc] h-[5px]"></div>
      <header className="py-8 px-8 border-b border-gray-200">
        <div className="flex items-center">
          <div className="text-4xl text-gray-700 mr-4">
            <FontAwesomeIcon icon={faFolderOpen} aria-hidden="true" /> {/* Adiciona aria-hidden para ícones para melhor acessibilidade */}
          </div>
         
          <h2 className="text-4xl leading-snug text-gray-800 font-semibold">Categoria: {name}</h2>
        </div>
      </header>
    </section>
  );
};


