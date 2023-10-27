

type CategoriesHeaderProps = {
  name: string
};
export default function CategoriesHeader({ name }:CategoriesHeaderProps){

  return (
    <section className="bg-white shadow-lg rounded-lg mb-8"> 
      <div className="bg-[#3399cc] h-[5px]"></div>
      <header className="py-8 px-8 border-b border-gray-200">
        <div className="flex items-center">
          
         
          <h2 className="text-4xl leading-snug text-gray-800 font-semibold">Categoria: {name}</h2>
        </div>
      </header>
    </section>
  );
};


