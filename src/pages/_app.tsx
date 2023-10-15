import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/components/layout/Layout";
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react'
function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <DefaultSeo
        title="Blog de Nutrição"
        description="Um blog de nutrição com dicas de alimentação e saúde"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.seusite.com.br/',
          site_name: 'blogNutriTri',
        }}
      />
    <Layout>
   
      <Component {...pageProps} />;
     
    </Layout>
    </>
  )
}

export default App;
