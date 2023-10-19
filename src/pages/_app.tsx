import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { DefaultSeo } from 'next-seo';
import CookieConsentBanner from "@/components/CookieBanner";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <DefaultSeo
        title="CháComSabor"
        description="Um blog de com dicas de chás,saúde e bem estar."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'cha-com-sabor.vercel.app/',
          site_name: 'ChaComSabor',
        }}
      />
      
    <Layout>
   
      <Component {...pageProps} />;
      
    </Layout>
    </>
  )
}

export default App;
