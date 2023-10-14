import React from "react";
import { NextSeo } from 'next-seo';
import fotoPessoal from "../../assets/foto-pessoal.jpg";
import Info from "@/components/InfoComponent/Info";

const About = () => {
  return (
    <>
    <NextSeo
        title="Informações sobre o autor do blog "
        description="Obtenha informações sobre o autor do blog"
      />
   
    <Info
      informationProps={{
        info_avatar: fotoPessoal,
        author_name: "Mauricio Dall Onder",
        info_description:
          "Olá! Sou Mauricio, sou desenvolvedor web há 3 anos formado em Análise de Sistemas.Criar soluções inovadoras e intuitivas é minha paixão.Além de compartilhar meus projetos, busco também trocar ideias, aprender com a comunidade e contribuir para um mundo digital mais acessível e funcional. Seja bem-vindo e sinta-se à vontade para interagir e compartilhar suas ideias!",
      }}
    />
     </>
  );
};

export default About;
