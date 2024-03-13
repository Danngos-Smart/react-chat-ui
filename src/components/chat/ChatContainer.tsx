import { useState } from "react"
import Chat, { Message } from "./Chat"

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      date: "12:00",
      message: "Hola, como estas!",
    },
    {
      date: "12:00",
      message: "Todo bien, gracias por escribirme!",
      type: "received"
    },
    {
      date: "12:01",
      message: "Me alegra saber q estas bien! Sigue usando esta libreria para tus proyectos!",
      status: "read"
    }
  ])

  const handleNewMessage = (message: Message) => {
    setMessages([
      ...messages,
      message
    ])
  }

  return (
    <div className="w-full sm:w-96 bg-slate-400 h-full rounded-xl overflow-hidden">
      <Chat messages={messages} onNewMessage={handleNewMessage} />
    </div>
  )
}
export default ChatContainer