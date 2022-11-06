import { PrismaClient } from "@prisma/client";
import { Server } from "socket.io";
import { ClientToServerEvents, ServerToClientEvents } from "./types/socketTypes";

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents
>(3000, {
  cors: {
    origin: ['http://localhost:5173']
  }
})

const prisma = new PrismaClient()

io.on('connection', async (socket) => {
  socket.on('send-message', async (content) => {
    const message = await prisma.message.create({
      data: {
        content: content,
        userId: socket.id
      }
    })

    io.emit('receive-message', message)
  })
})