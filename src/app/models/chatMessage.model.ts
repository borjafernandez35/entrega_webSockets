export interface ChatMessage {
    message: string;
    type: 'sent' | 'received'; // Solo estos dos tipos
    date: Date;
  }