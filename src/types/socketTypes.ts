export interface ServerToClientEvents {
  'receive-message': (message: string) => void;
}

export interface ClientToServerEvents {
  'send-message': (message: string, room: string) => void
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  content: string;
}