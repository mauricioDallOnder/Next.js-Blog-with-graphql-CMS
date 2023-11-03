const accentMap: { [key: string]: string } = {
  'todos-os-artigos': 'Todos os Artigos',
  'tipos-de-cha': 'Tipos de Chás',
  'receitas': 'Receitas com chá',
  'acessorios-para-chas': 'Acessórios para chás',
  'historia-e-cultura': 'História e cultura',
  'novidades': 'Novidades sobre chás',

};

type CategoriesHeaderProps = {
  name: string;
};

export default function CategoriesHeader({ name }: CategoriesHeaderProps) {
  // Utilizar o mapeamento para obter a versão correta da palavra
  const title = accentMap[name] || name.replace(/-/g, ' ');

  return (
    <section className="bg-white shadow-lg rounded-lg mb-8"> 
      <div className="bg-[#3399cc] h-[5px]"></div>
      <header className="py-8 px-8 border-b border-gray-200">
        <div className="flex items-center">
          <h2 className="text-4xl leading-snug text-gray-800 font-semibold">
            Categoria: {title}
          </h2>
        </div>
      </header>
    </section>
  );
};
