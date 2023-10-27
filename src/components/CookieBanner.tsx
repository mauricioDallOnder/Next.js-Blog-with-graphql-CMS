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
          buttonText="Permitir Cookies"
          enableDeclineButton
          declineButtonText="Rejeitar Cookies"
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
            margin: "0 10px", 
            padding: "10px 20px",  
            borderRadius: "0.5rem",
            color: "#ffffff",
            backgroundColor: "#2e7d32",
            whiteSpace: 'nowrap', 
            boxShadow:'0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);'
          }}
          declineButtonStyle={{
            margin: "0 10px",  
            padding: "10px 20px",  
            borderRadius: "0.375rem",
            backgroundColor:'#rgb(211, 47, 47);',
            color: "#rgb(255, 255, 255)",
            whiteSpace: 'nowrap',
            boxShadow:'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;' 
          }}
          expires={150}
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
        >
          <div style={{ margin: '0 10px', textAlign: 'left', flex: '1 1 auto' }}>  {/* adiciona margem e alinha o texto */}
            <Link href="/info/CookiesPolicy">
              <p>
                Este site armazena dados como{" "}
                <span className="font-bold text-[#rgb(255, 255, 255)]">Cookies</span> para
                permitir funcionalidades essenciais do site, bem como marketing,
                personalização e análises.
              </p>
            </Link>
            <Link href="/info/PrivacyPolicy">
              <p>  {/* estiliza o link */}
              Para mais informações, leia nossa Política de Privacidade.
                <span className="font-bold text-sky-400">
                  Política de Privacidade
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
