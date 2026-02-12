
import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: 'all' | 'essential') => {
    localStorage.setItem('cookie_consent', JSON.stringify({ accepted: true, type, timestamp: new Date().toISOString() }));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[20px] p-6 z-[100] border border-slate-100 animate-slide-up">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><circle cx="12" cy="12" r="1"/></svg>
        </div>
        <h3 className="font-extrabold text-slate-900">Política de Cookies</h3>
      </div>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed">
        Utilizamos cookies para personalizar conteúdo e analisar o nosso tráfego. 
        Ao clicar em "Aceitar Todos", concorda com o uso de todas as tecnologias.
      </p>
      <div className="flex flex-col gap-2">
        <button 
          onClick={() => handleConsent('all')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm"
        >
          Aceitar Todos
        </button>
        <button 
          onClick={() => handleConsent('essential')}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors text-sm"
        >
          Apenas Essenciais
        </button>
      </div>
      <p className="text-[10px] text-slate-400 mt-4 text-center">
        Pode alterar as suas preferências a qualquer momento nas definições.
      </p>
    </div>
  );
};

export default CookieBanner;
