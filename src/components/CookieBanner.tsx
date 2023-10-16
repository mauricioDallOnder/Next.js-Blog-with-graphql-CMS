// components/CookieBanner.tsx
import React from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <p>
        Este site usa cookies para melhorar a experiência do usuário. Ao continuar navegando,
        você concorda com a nossa política de cookies.
      </p>
      <button onClick={handleConsent} className="mt-2 bg-blue-500 px-4 py-2 rounded">
        Entendi
      </button>
    </div>
  );
};

export default CookieBanner;
