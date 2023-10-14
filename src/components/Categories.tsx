import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';

import { useRouter } from 'next/router';

const Categories: React.FC = () => { // Removida a prop onCategoryClick
  const [categories, setCategories] = useState<{ name: string; slug: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  // Handler para clique nas categorias
 const handleCategoryClick = (category: { name: string; slug: string }) => {
      // Se a categoria for "todos-os-artigos", redirecione para a página inicial
  if (category.slug === "todos-os-artigos") {
    router.push('/');
    return;
  }
  // Senão, vá para a página da categoria
  router.push(`/categoria/${category.slug}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categorias</h3>
      {categories.map((category, index) => (
        <span 
          key={index} 
          onClick={() => handleCategoryClick(category)}
          className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>
          {category.name}
        </span>
      ))}
    </div>
  );
};

export default Categories;
