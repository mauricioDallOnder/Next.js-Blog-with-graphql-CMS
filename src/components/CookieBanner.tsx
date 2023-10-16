// components/CookieConsentBanner.tsx
import React, { useState } from 'react';
import CookieConsent,{getCookieConsentValue} from "react-cookie-consent";
import Cookies from 'js-cookie'; 
import Link from 'next/link';

const CookieConsentBanner: React.FC = () => {
  const [necessary, setNecessary] = useState(true); // Sempre verdadeiro, pois são cookies necessários
  const [functional, setFunctional] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const handleSave = () => {
    // Salvando as escolhas do usuário em cookies
    Cookies.set('functionalCookies', functional.toString());
    Cookies.set('statisticsCookies', statistics.toString());
    Cookies.set('marketingCookies', marketing.toString());
  };
 
  return (
    <CookieConsent
    location="bottom"
    buttonText="Aceitar"
    enableDeclineButton
    declineButtonText="Rejeitar todos"
    cookieName="chacomsabor-userConsent"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#4e503b", fontSize: "16px", background: "#88a0b9", borderRadius: "5px" }}
    declineButtonStyle={{ background: "red", borderRadius: "5px", marginLeft: "10px" }}
    expires={150}
      onAccept={handleSave}
    >
      Este site armazena dados como cookies para permitir funcionalidades essenciais do site, bem como marketing, personalização e análises. Você pode alterar suas configurações a qualquer momento ou aceitar as configurações padrão.<br/> 
      <Link href="/info/PrivacyPolicy" style={{color: "#88a0b9", textDecoration: "underline"}}>Política de Privacidade</Link>
      <br/>
      <Link href="/info/CookiesPolicy" style={{color: "#88a0b9", textDecoration: "underline"}}>Política de Cookies</Link>
      <div>
        <label>
          <input type="checkbox" checked={necessary} readOnly /> NECESSÁRIOS
        </label>
        <label>
          <input type="checkbox" checked={functional} onChange={(e) => setFunctional(e.target.checked)} /> FUNCIONAIS
        </label>
        <label>
          <input type="checkbox" checked={statistics} onChange={(e) => setStatistics(e.target.checked)} /> ESTATÍSTICOS
        </label>
        <label>
          <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} /> MARKETING
        </label>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
