/**
 * optimizeScripts.js
 * Script optimizado para mejorar el rendimiento del sitio
 */

console.log('✅ Script de optimización cargado correctamente');

// Asegurar que dataLayer existe para prevenir errores
window.dataLayer = window.dataLayer || [];

// Configuración de optimización
const config = {
  // Opciones de rendimiento
  performance: {
    useRequestIdleCallback: 'requestIdleCallback' in window,
    useIntersectionObserver: 'IntersectionObserver' in window,
    optimizeEventListeners: true
  }
};

/**
 * Sistema de carga optimizada que prioriza el contenido crítico
 */
class OptimizedScriptLoader {
  constructor(config) {
    this.config = config;
    this.loadedScripts = new Set();
    this.performanceMetrics = {
      loadStartTime: performance.now(),
      scriptLoadTimes: {},
      pageLoadTime: null,
      firstInputDelay: null
    };
    
    // Monitor de interacciones para FID
    this.setupInteractionMonitoring();
  }
  
  /**
   * Inicializa el sistema de carga optimizada
   */
  init() {
    console.log('🚀 Inicializando optimizador de scripts');
    
    // Establecer monitor de rendimiento
    this.setupPerformanceMonitoring();
    
    // Optimizar imágenes con lazy loading
    this.setupLazyImages();
    
    // Optimizar los event listeners
    if (this.config.performance.optimizeEventListeners) {
      this.optimizeEventListeners();
    }
  }
  
  /**
   * Configura el monitoring de rendimiento para diagnóstico
   */
  setupPerformanceMonitoring() {
    // Registrar tiempo de carga de la página
    window.addEventListener('load', () => {
      this.performanceMetrics.pageLoadTime = performance.now() - this.performanceMetrics.loadStartTime;
      
      // No intentamos enviar métricas al servidor para evitar errores 404
      console.log('📊 Métricas de rendimiento:', this.performanceMetrics);
    });
    
    // Reportar Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.performanceMetrics.largestContentfulPaint = lastEntry.startTime;
        });
        
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        console.warn('PerformanceObserver para LCP no soportado', e);
      }
    }
  }
  
  /**
   * Monitoriza el primer input del usuario para medir FID
   */
  setupInteractionMonitoring() {
    // No aplicar en dispositivos que no admiten táctil/ratón
    if (!('ontouchstart' in window) && !('onmousedown' in window)) return;
    
    const captureFirstInput = (delay) => {
      // Solo registrar el primer input
      if (this.performanceMetrics.firstInputDelay === null) {
        this.performanceMetrics.firstInputDelay = delay;
      }
    };
    
    // Monitorizar eventos de interacción
    const eventTypes = ['pointerdown', 'mousedown', 'touchstart', 'keydown'];
    
    // Monitor basado en callbacks
    if ('PerformanceObserver' in window && PerformanceObserver.supportedEntryTypes.includes('first-input')) {
      // Usar la API moderna para medir FID
      const firstInputObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          const delay = entry.processingStart - entry.startTime;
          captureFirstInput(delay);
        });
      });
      
      firstInputObserver.observe({ type: 'first-input', buffered: true });
    } else {
      // Fallback para navegadores sin soporte para PerformanceObserver
      const fallbackMonitoring = (e) => {
        const now = performance.now();
        
        // Simulación simplista del FID
        window.requestAnimationFrame(() => {
          const delay = performance.now() - now;
          captureFirstInput(delay);
        });
        
        // Eliminar listeners después del primer evento
        eventTypes.forEach(type => {
          window.removeEventListener(type, fallbackMonitoring, { capture: true });
        });
      };
      
      // Agregar listeners para eventos de interacción
      eventTypes.forEach(type => {
        window.addEventListener(type, fallbackMonitoring, { capture: true, passive: true });
      });
    }
  }
  
  /**
   * Configura la optimización de imágenes con lazy loading
   */
  setupLazyImages() {
    if (!this.config.performance.useIntersectionObserver) return;
    
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if (images.length === 0) return;
    
    console.log(`🖼️ Optimizando ${images.length} imágenes con lazy loading`);
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Si la imagen tiene data-src, cargarla
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          
          // Aplicar clase para animación
          img.classList.add('loaded');
          
          // Dejar de observar
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '100px',
      threshold: 0.1
    });
    
    // Observar cada imagen
    images.forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  /**
   * Optimiza los event listeners para mejorar rendimiento
   */
  optimizeEventListeners() {
    // Implementar delegación de eventos para escuchar eventos en contenedores
    // en lugar de elementos individuales
    
    // Delegación para clics
    document.addEventListener('click', (e) => {
      // Buttons with data-action
      if (e.target.closest('[data-action]')) {
        const actionEl = e.target.closest('[data-action]');
        const action = actionEl.getAttribute('data-action');
        
        // Ejecutar acción correspondiente si existe una función con ese nombre
        if (typeof window[action] === 'function') {
          window[action](e);
        }
      }
    });
    
    // Throttling para eventos de scroll para evitar bloqueos
    let isScrolling = false;
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        isScrolling = true;
        window.requestAnimationFrame(() => {
          // Ejecutar funciones de scroll
          if (typeof window.onOptimizedScroll === 'function') {
            window.onOptimizedScroll();
          }
          isScrolling = false;
        });
      }
    }, { passive: true });
  }
}

// Crear e iniciar el optimizador cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const scriptOptimizer = new OptimizedScriptLoader(config);
  scriptOptimizer.init();
  
  // Esto solo es para que podamos acceder al optimizador desde la consola para depuración
  window.scriptOptimizer = scriptOptimizer;
});