// ChatbotApiAdapter.ts
// Este archivo proporciona una interfaz para comunicarse con la API de Nexito Chatbot

/**
 * Tipos para las respuestas de la API
 */
export interface ChatbotResponse {
    answer: string;
    modules_recommended?: string[];
    total_price?: {
      pago_unico?: number;
      mensual?: number;
    };
    document_types?: string[];
    suggested_followup?: string[];
    processing_time?: number;
  }
  
  /**
   * Opciones para la configuración del adaptador de API
   */
  export interface ChatbotApiAdapterOptions {
    apiUrl: string;
    apiKey: string;
    collection: string;
    sessionId: string;
    onError?: (error: Error) => void;
    retryCount?: number;
    retryDelay?: number;
    timeout?: number;
  }
  
  /**
   * Clase para manejar las comunicaciones con la API del chatbot
   */
  export class ChatbotApiAdapter {
    private options: ChatbotApiAdapterOptions;
    private messageHistory: Array<{question: string, answer: string}> = [];
    
    constructor(options: ChatbotApiAdapterOptions) {
      // Configuración por defecto
      this.options = {
        retryCount: 2,
        retryDelay: 1000,
        timeout: 30000,
        ...options
      };
      
      // Cargar historial del localStorage si existe
      this.loadConversationFromStorage();
    }
    
    /**
     * Carga la conversación previa desde localStorage
     */
    private loadConversationFromStorage(): void {
      try {
        const storageKey = `nexito_chat_${this.options.collection}_${this.options.sessionId}`;
        const savedChat = localStorage.getItem(storageKey);
        
        if (savedChat) {
          const parsedChat = JSON.parse(savedChat);
          
          // Convertir el formato de almacenamiento al formato de historial de mensajes
          this.messageHistory = [];
          let currentQuestion = '';
          
          for (const msg of parsedChat) {
            if (msg.isUser) {
              currentQuestion = msg.content;
            } else if (currentQuestion) {
              this.messageHistory.push({
                question: currentQuestion,
                answer: msg.content
              });
              currentQuestion = '';
            }
          }
        }
      } catch (error) {
        console.error('Error cargando conversación del almacenamiento:', error);
      }
    }
    
    /**
     * Guarda un mensaje en el historial y localStorage
     */
    private saveMessage(question: string, answer: string): void {
      // Añadir al historial interno
      this.messageHistory.push({ question, answer });
      
      // Limitar el historial a los últimos 10 mensajes para no sobrecargar la API
      if (this.messageHistory.length > 10) {
        this.messageHistory = this.messageHistory.slice(this.messageHistory.length - 10);
      }
    }
    
    /**
     * Envía un mensaje a la API del chatbot con reintentos
     */
    public async sendMessage(question: string): Promise<ChatbotResponse> {
      let attempts = 0;
      let lastError: Error | null = null;
      
      while (attempts <= this.options.retryCount!) {
        try {
          const response = await this.makeApiRequest(question);
          
          // Guardar en el historial
          if (response.answer) {
            this.saveMessage(question, response.answer);
          }
          
          return response;
        } catch (error) {
          lastError = error as Error;
          attempts++;
          
          if (attempts <= this.options.retryCount!) {
            // Esperar antes de reintentar
            await new Promise(resolve => setTimeout(resolve, this.options.retryDelay!));
          }
        }
      }
      
      // Si llegamos aquí, todos los intentos fallaron
      if (this.options.onError && lastError) {
        this.options.onError(lastError);
      }
      
      return {
        answer: "Lo siento, ha ocurrido un error al conectar con el servicio. Por favor, intenta de nuevo más tarde."
      };
    }
    
    /**
     * Realiza la petición real a la API
     */
    private async makeApiRequest(question: string): Promise<ChatbotResponse> {
      // Crear un controlador de tiempo de espera
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.options.timeout);
      
      try {
        const response = await fetch(this.options.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': this.options.apiKey
          },
          body: JSON.stringify({
            question,
            session_id: this.options.sessionId,
            collection_name: this.options.collection,
            k: 8
          }),
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error en la respuesta del servidor (${response.status}): ${errorText}`);
        }
        
        const data = await response.json();
        return data as ChatbotResponse;
      } catch (error) {
        clearTimeout(timeoutId);
        
        if ((error as Error).name === 'AbortError') {
          throw new Error('La petición ha excedido el tiempo máximo de espera');
        }
        
        throw error;
      }
    }
    
    /**
     * Limpia el historial de mensajes
     */
    public clearHistory(): void {
      this.messageHistory = [];
      
      // Limpiar también localStorage
      try {
        const storageKey = `nexito_chat_${this.options.collection}_${this.options.sessionId}`;
        localStorage.removeItem(storageKey);
      } catch (error) {
        console.error('Error al limpiar el historial de localStorage:', error);
      }
    }
    
    /**
     * Obtiene el historial de mensajes actual
     */
    public getMessageHistory(): Array<{question: string, answer: string}> {
      return [...this.messageHistory];
    }
    
    /**
     * Cambia la colección actual (útil para cambiar el ámbito del chatbot sin recargar)
     */
    public setCollection(collection: string): void {
      this.options.collection = collection;
      // Recargamos el historial para la nueva colección
      this.loadConversationFromStorage();
    }
  }
  
  export default ChatbotApiAdapter;