import { Message } from "./message";

export interface ServerToClientEvents {
  'receive-messages': (messages: Message[]) => void;
  'receive-message': (message: Message) => void;
  disconnected: (id: string) => void
  connected: (id: string) => void
}

export interface ClientToServerEvents {
  'send-message': (content: string) => void
}