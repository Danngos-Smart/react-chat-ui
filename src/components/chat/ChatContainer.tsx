import Chat, { Message } from "./Chat"
import useChat from "@/hooks/useChat"
import { useEffect } from "react"
// testing socket.io
import io from "socket.io-client"

const socket = io('http://localhost:3000')

const initMsgExample: Message[] = [
  {
    date: "12:01",
    message: "Me alegra saber q estas bien! Sigue usando esta librería para tus proyectos!",
    status: "read"
  },
  {
    date: "12:00",
    message: "Todo bien, gracias por escribirme!",
    type: "received"
  },
  {
    date: "12:00",
    message: "Hola, como estas!",
  },
]

const ChatContainer = () => {
  const { chatComponent, onMessageReceived } = useChat({
    initialMessages: initMsgExample,
    onMessageSend: (message) => {
      socket.emit('send-message', message)
    },
  })

  useEffect(() => {
    socket.on('receive-message', (message: Message) => {
      onMessageReceived(message)
    })
  }, [onMessageReceived])

  return (
    <div className="w-full sm:w-96 bg-slate-400 h-full rounded-xl overflow-hidden">
      <Chat {...chatComponent} />
    </div>
  )
}
export default ChatContainer