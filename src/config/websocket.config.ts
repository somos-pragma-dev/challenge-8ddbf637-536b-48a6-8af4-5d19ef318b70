import { Server } from 'http';
import { Server as SocketServer } from 'socket.io';

export let io: SocketServer | null = null;

export const setupWebSocket = (httpServer: Server) => {
  io = new SocketServer(httpServer, {
    cors: {
      origin: '*',
    },
  });
  io.on('connection', (socket) => {
    console.log('A user connected');
  });
};