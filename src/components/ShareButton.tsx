/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import whatsapp from "../../public/whatsapp.svg";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import Image from "next/image";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";

function ShareButton() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(window.location.href);
  }, []);

  return (
    <nav className="share-nav">
      <h1>Compartilhe esse artigo em suas redes sociais</h1>
      <ul className="share-buttons">
        <li>
          <FacebookShareButton
            url={currentPage}
            quote={"chá com sabor, sua melhor página de chás!"}
            hashtag="#CháComSaborBlog"
          >
            <Image height={35} width={35} src={facebook} alt="Compartilhar no Facebook" />
          </FacebookShareButton>
        </li>
        <li>
          <WhatsappShareButton url={currentPage}>
            <Image height={35} width={35} src={whatsapp} alt="Compartilhar no WhatsApp" />
          </WhatsappShareButton>
        </li>
        <li>
          <TwitterShareButton url={currentPage}>
            <Image height={35} width={35} src={twitter} alt="Compartilhar no Twitter" />
          </TwitterShareButton>
        </li>
      </ul>
    </nav>
  );
}

export default ShareButton;