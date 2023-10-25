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
          declineButtonText="Rejeitar todos"
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
            backgroundColor: "#374151",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          }}
          buttonStyle={{
            margin: "0 10px", 
            padding: "10px 20px",  
            borderRadius: "0.5rem",
            color: "#ffffff",
            backgroundColor: "#111827",
            whiteSpace: 'nowrap', 
          }}
          declineButtonStyle={{
            margin: "0 10px",  
            padding: "10px 20px",  
            borderRadius: "0.375rem",
            borderColor: "#111827",
            color: "#D1D5DB",
            whiteSpace: 'nowrap', 
          }}
          expires={150}
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
        >
          <div style={{ margin: '0 10px', textAlign: 'left', flex: '1 1 auto' }}>  {/* adiciona margem e alinha o texto */}
            <Link href="/info/CookiesPolicy">
              <p>
                Este site armazena dados como{" "}
                <span className="font-bold text-sky-400">Cookies</span> para
                permitir funcionalidades essenciais do site, bem como marketing,
                personalização e análises.
              </p>
            </Link>
            <Link href="/info/PrivacyPolicy">
              <p style={{ color: "#88a0b9", textDecoration: "underline" }}>  {/* estiliza o link */}
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
