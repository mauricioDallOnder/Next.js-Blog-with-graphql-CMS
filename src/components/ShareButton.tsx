import React, { useEffect, useState } from "react";
import share from "../../public/share.svg";
import whatsapp from "../../public/whatsapp.svg";
import facebook from "../../public/facebook.svg";
import twiter from "../../public/twitter.svg";
import Image from "next/image";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
function ShareButton() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    // Isso garante que window.location.href é usado apenas no lado do cliente
    setCurrentPage(window.location.href);
    console.log(currentPage);
  }, []);

  return (
    <>
      <nav>
        <button className="btn-share">
          <span className="btn-text">Compartilhar</span>
          <span className="btn-icon">
            <Image
              src={share}
              width={15}
              height={15}
              alt="Ícone de compartilhamento"
            />
          </span>

          <ul className="social-icons">
            <li>
              <a href="" target="_blank">
                <FacebookShareButton
                  url={currentPage}
                  quote={"Dummy text!"}
                  hashtag="#muo"
                >
                  <Image
                    height={25}
                    width={25}
                    src={facebook}
                    alt="icone do facebook para compartilhar o post"
                  />
                </FacebookShareButton>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <WhatsappShareButton url={currentPage}>
                  <Image
                    height={25}
                    width={25}
                    src={whatsapp}
                    alt="icone do whatsapp para compartilhar o post"
                  />
                </WhatsappShareButton>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <TwitterShareButton url={currentPage}>
                  <Image
                    height={25}
                    width={25}
                    src={twiter}
                    alt="icone do twiter para compartilhar o post"
                  />
                </TwitterShareButton>
              </a>
            </li>
          </ul>
        </button>
      </nav>
    </>
  );
}

export default ShareButton;
