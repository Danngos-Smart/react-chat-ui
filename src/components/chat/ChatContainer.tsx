import Chat, { Message } from "./Chat"
import useChat from "@/hooks/useChat"

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
  const chat = useChat({
    initialMessages: initMsgExample
  })

  return (
    <div className="w-full sm:w-96 bg-slate-400 h-full rounded-xl overflow-hidden">
      <Chat {...chat.chatComponent} />
    </div>
  )
}
export default ChatContainer