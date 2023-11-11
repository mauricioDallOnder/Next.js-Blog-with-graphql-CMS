/* eslint-disable react/no-unescaped-entities */
// components/CookieConsentBanner.tsx
import { useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import { setLocalStorage } from "@/lib/storageHelper";
import Link from "next/link";

export default function CookieConsentBanner () {
  // Verificar o valor de consentimento do cookie no carregamento do componente
  const hasConsent = getCookieConsentValue("myCookieConsent");

  useEffect(() => {
    if (hasConsent === "true") {
      // O usuário já deu consentimento
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }, [hasConsent]);

  const handleAcceptCookie = () => {
    setLocalStorage("cookie_consent", true);
    window.gtag("consent", "update", {
      analytics_storage: "granted",
    });
    console.log("Cookie Consent: ", true);
  };

  const handleDeclineCookie = () => {
    setLocalStorage("cookie_consent", false);
    Cookies.remove("myCookieConsent");
    window.gtag("consent", "update", {
      analytics_storage: "denied",
    });
    console.log("Cookie Consent: ", false);
  };

  return (
    <>
      {!hasConsent && (
        <CookieConsent
          location="bottom"
          buttonText="Aceitar Todos"
          enableDeclineButton
          declineButtonText="Rejeitar Todos"
          cookieName="myCookieConsent"
          style={{
            display: "flex",
            position: "fixed",
            right: "0",
            bottom: "0",
            left: "0",
            flexDirection: "row",
            flexWrap: "wrap", 
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",  
            backgroundColor: "rgba(0, 0, 0, 0.87)",
            boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          }}
          buttonStyle={{
            margin: "0 0 10px 10px",  
            padding: "10px 20px",  
            borderRadius: "0.375rem",
            backgroundColor:"#2e7d32",
            color: "#rgb(255, 255, 255)",
            whiteSpace: 'nowrap',
            boxShadow:'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;',
            textAlign:'center' 
          }}
          declineButtonStyle={{
            margin: "0 0 10px 10px",  
            padding: "10px 20px",  
            borderRadius: "0.375rem",
            backgroundColor:'#rgb(211, 47, 47);',
            color: "#rgb(255, 255, 255)",
            whiteSpace: 'nowrap',
            boxShadow:'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;',
            textAlign:'center' 
          }}
          expires={150}
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
        >
          <div style={{ margin: '0 10px', textAlign: 'left', flex: '1 1 auto' }}> 
          <h1 className="section-title  mb-4 text-2xl font-bold">
            {" "}
            Valorizamos a sua privacidade
          </h1> 
            <Link href="/info/CookiesPolicy">
              <p>
              Usamos{" "}
                <Link href="/info/CookiesPolicy">
              
                <span className="font-bold text-sky-400">
                  Cookies{" "}
                </span>
              
            </Link> 
              para melhorar sua experiência de navegação, veicular anúncios ou conteúdo personalizado e analisar nosso tráfego. Ao clicar em "Aceitar Todos", você concorda com o uso de cookies.
              </p>
            </Link>
            <Link href="/info/PrivacyPolicy">
              <p>  {/* estiliza o link */}
              Para mais informações, leia a nossa{" "}
                <span className="font-bold text-sky-400">
                  Política de Privacidade.
                </span>
              </p>
            </Link>
          </div>
        </CookieConsent>
      )}
    </>
  );
};


// <Link
