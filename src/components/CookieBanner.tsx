// components/CookieConsent.tsx
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,  // Always true, since these are essential cookies.
    performance: false,
    marketing: false
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent');
    if (!storedConsent) {
      setIsVisible(true);
    } else {
      setConsent(JSON.parse(storedConsent));
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <p>Usamos cookies para melhorar sua experiência. Selecione os cookies que deseja permitir:</p>
      <label>
        <input type="checkbox" checked disabled /> NECESSÁRIOS
      </label>
      <label>
        <input 
          type="checkbox" 
          checked={consent.performance} 
          onChange={() => setConsent(prev => ({ ...prev, performance: !prev.performance }))} 
        /> FUNCIONAIS
      </label>
      <label>
        <input 
          type="checkbox" 
          checked={consent.marketing} 
          onChange={() => setConsent(prev => ({ ...prev, marketing: !prev.marketing }))} 
        /> ESTATÍSTICOS
      </label>
      <label>
        <input 
          type="checkbox" 
          checked={consent.marketing} 
          onChange={() => setConsent(prev => ({ ...prev, marketing: !prev.marketing }))} 
        /> MARKETING
      </label>
      <button onClick={handleConsent} className="mt-2 bg-blue-500 px-4 ml-2 py-2 rounded">
        Salvar preferencias
      </button>
    </div>
  );
};

export default CookieConsent;
