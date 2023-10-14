import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const socialIcons = [
  {
    link: "https://github.com/mauricioDallOnder",
    icon: faGithub,
    key: "github",
  },
  {
    link: "https://www.facebook.com/mauricio.dallonder",
    icon: faFacebook,
    key: "facebook",
  },
  {
    link: "https://www.linkedin.com/in/mauricio-dall-onder-40876a25b/",
    icon: faLinkedin,
    key: "linkedin",
  },
  {
    link: "https://mauriciodallonder-64688.web.app/",
    icon: faCircleUser,
    key: "portifolio",
  },
];
//
const Footer = () => {
  return (
    <>

    <footer
      className="relative pt-8 pb-6"
      style={{
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">Entre em contato</h4>
            <p className="text-lg mt-0 mb-2 text-gray-200">Encontre-nos pelas nossas redes sociais</p>
            <div className="mt-6 lg:mb-0 mb-6 flex items-center">
              {socialIcons.map((social) => (
                <Link key={social.key} href={social.link}>
                  <button
                    className="text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                    aria-label={`Visit ${social.key}`}
                    
                  >
                    <FontAwesomeIcon icon={social.icon} size='2xl' color="white"/>
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <nav className="w-full lg:w-6/12 px-4">
            <h5 className="flex-col w-full text-white text-sm font-semibold mb-5 ">Páginas</h5>
            <ul className="flex-col w-full  text-white text-sm font-semibold mb-2">
              <li><Link href='/info/PrivacyPolicy' role="link">Política de Privacidade</Link></li>
              <li><Link href='/info/CookiesPolicy' role="link">Política de Cookies</Link></li>
              <li><Link href='/info/TermsOfUse' role="link">Termos de uso</Link></li>
              <li><Link href='/info/About' role="link">Sobre</Link></li>
            </ul>
          </nav>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <p className="text-sm text-gray-300 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span> Mauricio Dall Onder
            </p>
          </div>
        </div>
        
      </div>
    </footer>
    </>
  );
};

export default Footer;
