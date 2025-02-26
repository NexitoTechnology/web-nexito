// src/components/CookieConsent.jsx
import { useEffect, useState } from 'react';

// Puedes personalizar estos textos fácilmente
const texts = {
  title: "Este sitio web usa cookies",
  description: "Usamos cookies para personalizar contenido y anuncios, para proporcionar funciones de redes sociales y para analizar nuestro tráfico. También compartimos información sobre el uso de nuestro sitio con nuestros socios de redes sociales, publicidad y análisis, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado de su uso de sus servicios.",
  acceptAll: "Permitir todo",
  acceptNecessary: "Rechazar",
  acceptSelection: "Permitir selección",
  savePreferences: "Guardar preferencias",
  privacySettings: "Configuración de privacidad",
  tabs: {
    consent: "Consentimiento",
    details: "Detalles",
    about: "Acerca de"
  },
  cookieTypes: {
    necessary: {
      title: "Necesarias",
      description: "Las cookies necesarias son absolutamente esenciales para que el sitio web funcione correctamente."
    },
    preferences: {
      title: "Preferencias",
      description: "Las cookies de preferencias permiten recordar información que cambia la forma en que se comporta o se ve el sitio web."
    },
    statistics: {
      title: "Estadísticas",
      description: "Las cookies estadísticas ayudan a los propietarios de sitios web a comprender cómo interactúan los visitantes con los sitios al recopilar y reportar información de forma anónima."
    },
    marketing: {
      title: "Marketing",
      description: "Las cookies de marketing se utilizan para rastrear a los visitantes en los sitios web con el fin de mostrar anuncios relevantes y atractivos."
    }
  }
};

// ID de GTM - Reemplazar con el ID real
const gtmId = "GTM-XXXXXX";

export default function CookieConsent() {
  const [activeTab, setActiveTab] = useState('consent');
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Siempre activado
    preferences: true,
    statistics: true,
    marketing: true
  });

  useEffect(() => {
    // Comprobar si ya existe consentimiento
    const consentCookie = getCookie('user_consent');
    
    if (!consentCookie) {
      // Si no hay consentimiento previo, mostrar el banner después de un pequeño retraso
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // Si ya hay consentimiento, inicializar GTM
      const consentData = JSON.parse(consentCookie);
      initializeGTM(consentData);
      
      // Actualizar el estado de preferencias
      if (consentData.selections) {
        setPreferences({
          necessary: true,
          preferences: consentData.selections.preferences || false,
          statistics: consentData.selections.statistics || false,
          marketing: consentData.selections.marketing || false
        });
      }
    }
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const cookiePart = parts.pop();
      return cookiePart ? cookiePart.split(';').shift() || null : null;
    }
    return null;
  };

  const giveConsent = (consentType) => {
    console.log(`Dando consentimiento tipo: ${consentType}`);
    
    // Determinar las selecciones basadas en el tipo de consentimiento
    let selections = {
      preferences: preferences.preferences,
      statistics: preferences.statistics,
      marketing: preferences.marketing
    };
    
    if (consentType === 'all') {
      selections = {
        preferences: true,
        statistics: true,
        marketing: true
      };
      
      // Actualizar el estado de UI para reflejar la selección de "todas"
      setPreferences(prev => ({ ...prev, preferences: true, statistics: true, marketing: true }));
    } else if (consentType === 'necessary') {
      selections = {
        preferences: false,
        statistics: false,
        marketing: false
      };
      
      // Actualizar el estado de UI para reflejar solo necesarias
      setPreferences(prev => ({ ...prev, preferences: false, statistics: false, marketing: false }));
    }
    
    // Objeto de consentimiento
    const consentData = {
      type: consentType,
      selections: selections,
      timestamp: new Date().toISOString()
    };
    
    // Guardar en cookie (expira en 6 meses)
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    document.cookie = `user_consent=${JSON.stringify(consentData)}; expires=${sixMonthsFromNow.toUTCString()}; path=/; SameSite=Lax`;
    
    // Inicializar GTM con los niveles de consentimiento adecuados
    initializeGTM(consentData);
    
    // Cerrar el banner
    setShowBanner(false);
  };

  const initializeGTM = (consentData) => {
    // Configurar dataLayer para GTM con el consentimiento adecuado
    window.dataLayer = window.dataLayer || [];
    
    // Configurar las variables de consentimiento para GTM según las elecciones del usuario
    const gtmConsent = {
      ad_storage: consentData.selections.marketing ? 'granted' : 'denied',
      analytics_storage: consentData.selections.statistics ? 'granted' : 'denied',
      functionality_storage: consentData.selections.preferences ? 'granted' : 'denied',
      personalization_storage: consentData.selections.preferences ? 'granted' : 'denied',
      security_storage: 'granted' // Siempre permitido por seguridad
    };
    
    // Enviar evento de consentimiento a GTM para activar el disparador correspondiente
    window.dataLayer.push({
      event: 'consent_update',
      consent: gtmConsent
    });
    
    // Inicializar GTM si aún no se ha hecho
    if (!window.google_tag_manager) {
      // Insertar el código de GTM con configuración de consentimiento predeterminada
      (function(w, d, s, l, i) {
        // Inicializar dataLayer con configuración de consentimiento por defecto
        w[l] = w[l] || [];
        w[l].push({
          'consent': {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
          },
          'event': 'default_consent'
        });
        
        // Código estándar de GTM
        w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        const f = d.getElementsByTagName(s)[0];
        const j = d.createElement(s);
        const dl = l !== 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        if (f && f.parentNode) {
          f.parentNode.insertBefore(j, f);
        }
      })(window, document, 'script', 'dataLayer', gtmId);
    }
  };

  // Manejar el cambio de preferencias
  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  // Si el banner no debe mostrarse, solo renderizar el botón flotante
  if (!showBanner) {
    return (
      <div className="privacy-settings-container fixed bottom-4 left-4 z-40">
        <a 
          href="#" 
          className="privacy-settings-link flex items-center justify-center bg-black rounded-full w-10 h-10 shadow-md hover:shadow-lg transition duration-150"
          onClick={(e) => {
            e.preventDefault();
            setShowBanner(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <>
      {/* Botón flotante (siempre visible) */}
      <div className="privacy-settings-container fixed bottom-4 left-4 z-40">
        <a 
          href="#" 
          className="privacy-settings-link flex items-center justify-center bg-black rounded-full w-10 h-10 shadow-md hover:shadow-lg transition duration-150"
          onClick={(e) => {
            e.preventDefault();
            setShowBanner(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
          </svg>
        </a>
      </div>

      {/* Banner de consentimiento */}
      <div className="fixed inset-0 z-50 consent-flex-container p-4">
        <div className="w-full max-w-4xl bg-black text-white rounded shadow-xl border border-gray-700">
          {/* Cabecera con logo */}
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <div className="text-lg font-semibold">TU LOGO</div>
          </div>
          
          {/* Navegación por pestañas */}
          <div className="border-b border-gray-700">
            <div className="flex">
              <button 
                type="button" 
                className={`px-6 py-3 text-center focus:outline-none ${activeTab === 'consent' ? 'active-tab' : ''}`}
                onClick={() => setActiveTab('consent')}
              >
                {texts.tabs.consent}
              </button>
              <button 
                type="button" 
                className={`px-6 py-3 text-center focus:outline-none ${activeTab === 'details' ? 'active-tab' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                {texts.tabs.details}
              </button>
              <button 
                type="button" 
                className={`px-6 py-3 text-center focus:outline-none ${activeTab === 'about' ? 'active-tab' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                {texts.tabs.about}
              </button>
            </div>
          </div>
          
          {/* Contenido de la pestaña de consentimiento */}
          {activeTab === 'consent' && (
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{texts.title}</h3>
              <p className="mb-6 text-gray-300">{texts.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {/* Toggle Necesarias */}
                <div className="bg-gray-800 p-4 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{texts.cookieTypes.necessary.title}</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        className="opacity-0 absolute w-0 h-0" 
                        checked={preferences.necessary} 
                        disabled 
                      />
                      <span className="toggle-slider toggle-active"></span>
                    </label>
                  </div>
                </div>
                
                {/* Toggle Preferencias */}
                <div className="bg-gray-800 p-4 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{texts.cookieTypes.preferences.title}</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        className="opacity-0 absolute w-0 h-0" 
                        checked={preferences.preferences} 
                        onChange={(e) => handlePreferenceChange('preferences', e.target.checked)} 
                      />
                      <span className={`toggle-slider ${preferences.preferences ? 'toggle-active' : ''}`}></span>
                    </label>
                  </div>
                </div>
                
                {/* Toggle Estadísticas */}
                <div className="bg-gray-800 p-4 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{texts.cookieTypes.statistics.title}</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        className="opacity-0 absolute w-0 h-0" 
                        checked={preferences.statistics} 
                        onChange={(e) => handlePreferenceChange('statistics', e.target.checked)} 
                      />
                      <span className={`toggle-slider ${preferences.statistics ? 'toggle-active' : ''}`}></span>
                    </label>
                  </div>
                </div>
                
                {/* Toggle Marketing */}
                <div className="bg-gray-800 p-4 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{texts.cookieTypes.marketing.title}</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        className="opacity-0 absolute w-0 h-0" 
                        checked={preferences.marketing} 
                        onChange={(e) => handlePreferenceChange('marketing', e.target.checked)} 
                      />
                      <span className={`toggle-slider ${preferences.marketing ? 'toggle-active' : ''}`}></span>
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Botones de acción */}
              <div className="flex flex-wrap gap-3">
                <button 
                  type="button" 
                  className="flex-1 min-w-[120px] bg-gray-700 border border-gray-600 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-150 font-medium"
                  onClick={() => giveConsent('necessary')}
                >
                  {texts.acceptNecessary}
                </button>
                <button 
                  type="button" 
                  className="flex-1 min-w-[120px] bg-gray-700 border border-gray-600 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-150 font-medium"
                  onClick={() => giveConsent('custom')}
                >
                  {texts.acceptSelection}
                </button>
                <button 
                  type="button" 
                  className="flex-1 min-w-[120px] bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-150 font-medium"
                  onClick={() => giveConsent('all')}
                >
                  {texts.acceptAll}
                </button>
              </div>
            </div>
          )}
          
          {/* Contenido de la pestaña de detalles */}
          {activeTab === 'details' && (
            <div className="p-6">
              {/* Sección Necesarias */}
              <div className="mb-6 border-b border-gray-700 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <button type="button" className="mr-2 text-gray-400 focus:outline-none" aria-label="Expandir">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <span className="font-medium">{texts.cookieTypes.necessary.title}</span>
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      className="opacity-0 absolute w-0 h-0" 
                      checked={preferences.necessary} 
                      disabled 
                    />
                    <span className="toggle-slider toggle-active"></span>
                  </label>
                </div>
                <p className="text-gray-300 mb-4 pl-7">{texts.cookieTypes.necessary.description}</p>
              </div>
              
              {/* Sección Preferencias */}
              <div className="mb-6 border-b border-gray-700 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <button type="button" className="mr-2 text-gray-400 focus:outline-none" aria-label="Expandir">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <span className="font-medium">{texts.cookieTypes.preferences.title}</span>
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      className="opacity-0 absolute w-0 h-0" 
                      checked={preferences.preferences} 
                      onChange={(e) => handlePreferenceChange('preferences', e.target.checked)} 
                    />
                    <span className={`toggle-slider ${preferences.preferences ? 'toggle-active' : ''}`}></span>
                  </label>
                </div>
                <p className="text-gray-300 mb-4 pl-7">{texts.cookieTypes.preferences.description}</p>
              </div>
              
              {/* Sección Estadística */}
              <div className="mb-6 border-b border-gray-700 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <button type="button" className="mr-2 text-gray-400 focus:outline-none" aria-label="Expandir">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <span className="font-medium">{texts.cookieTypes.statistics.title}</span>
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      className="opacity-0 absolute w-0 h-0" 
                      checked={preferences.statistics} 
                      onChange={(e) => handlePreferenceChange('statistics', e.target.checked)} 
                    />
                    <span className={`toggle-slider ${preferences.statistics ? 'toggle-active' : ''}`}></span>
                  </label>
                </div>
                <p className="text-gray-300 mb-4 pl-7">{texts.cookieTypes.statistics.description}</p>
              </div>
              
              {/* Sección Marketing */}
              <div className="mb-6 border-b border-gray-700 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <button type="button" className="mr-2 text-gray-400 focus:outline-none" aria-label="Expandir">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <span className="font-medium">{texts.cookieTypes.marketing.title}</span>
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      className="opacity-0 absolute w-0 h-0" 
                      checked={preferences.marketing} 
                      onChange={(e) => handlePreferenceChange('marketing', e.target.checked)} 
                    />
                    <span className={`toggle-slider ${preferences.marketing ? 'toggle-active' : ''}`}></span>
                  </label>
                </div>
                <p className="text-gray-300 mb-4 pl-7">{texts.cookieTypes.marketing.description}</p>
              </div>
              
              {/* Sección No Clasificados */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <button type="button" className="mr-2 text-gray-400 focus:outline-none" aria-label="Expandir">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <span className="font-medium">No clasificados</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 pl-7">Las cookies no clasificadas son cookies para las que todavía estamos en proceso de clasificar, junto con los proveedores de cookies individuales.</p>
              </div>
            </div>
          )}
          
          {/* Contenido de la pestaña de acerca de */}
          {activeTab === 'about' && (
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Acerca de las cookies</h3>
              <p className="mb-4 text-gray-300">Las cookies son pequeños archivos de texto que se almacenan en su ordenador cuando visita un sitio web. Utilizamos cookies para diversos fines y para mejorar su experiencia online en nuestro sitio web.</p>
              <p className="mb-4 text-gray-300">Puede cambiar sus preferencias y rechazar que algunos tipos de cookies sean almacenadas mientras navega por nuestro sitio web. También puede eliminar cualquier cookie ya almacenada en su ordenador, pero tenga en cuenta que eliminar cookies puede impedirle utilizar partes de nuestro sitio web.</p>
              <p className="text-gray-300">Para obtener más información sobre nuestra política de cookies, visite nuestra página de <a href="#" className="text-blue-400 hover:underline">Política de Privacidad</a>.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }
        
        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #444;
          border-radius: 24px;
          transition: .4s;
        }
        
        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: .4s;
        }
        
        .toggle-active {
          background-color: #3182ce;
        }
        
        .toggle-active:before {
          transform: translateX(20px);
        }
        
        input:disabled + .toggle-slider {
          opacity: 0.9;
          cursor: not-allowed;
        }
        
        .toggle-disabled {
          background-color: #444;
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .active-tab {
          color: white;
          border-bottom: 2px solid #3182ce;
        }
        
        .consent-flex-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}