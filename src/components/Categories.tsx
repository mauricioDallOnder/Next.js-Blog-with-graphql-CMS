import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import { useRouter } from 'next/router';
import Link from 'next/link';  // Importado o Link do Next.js

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<{ name: string; slug: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <nav className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categorias</h3>
      <ul>
        {categories.map((category, index) => (
          <li 
            key={index} 
            className={`mb-3 ${(index === categories.length - 1) ? '' : 'border-b pb-2'}`}>
            <Link href={category.slug === "todos-os-artigos" ? '/' : `/categoria/${category.slug}`}>
              <button className="cursor-pointer block hover:text-[#3399cc] focus:outline-none focus:underline">
                {category.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
