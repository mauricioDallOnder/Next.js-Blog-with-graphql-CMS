
import Link from 'next/link';
import * as React from 'react';
import {ArrowBackIcon} from '@chakra-ui/icons'
export default function NotFoundPage() {
  return (
    
      
      <main>
        <section >
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <div
             
              className='drop-shadow-glow animate-flicker text-red-500'
            >
             
            </div>
            <h1 className='mt-8 text-4xl md:text-6xl'>Página não encontrada</h1>
            <Link className='mt-4 md:text-lg' href='/'>
            <ArrowBackIcon/> Voltar a pagina inicial
            </Link>
          </div>
        </section>
      </main>
    
  );
}
