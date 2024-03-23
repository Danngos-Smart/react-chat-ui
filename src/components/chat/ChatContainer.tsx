import { TMessage } from "@/types"
import Chat from "./Chat"
import useChat from "@/hooks/useChat"

const ChatContainer = () => {
  const { 
    chatComponent, 
    // onMessageReceived // callback to receive message from the server
  } = useChat({
    initialMessages: [
      {
        id: 1,
        message: 'Hello, how can I help you?',
        date: new Date().toISOString(),
        type: "receive",
      },
      {
        id: 2,
        message: 'I need help with my order',
        date: new Date().toISOString(),
        type: "sent",
      },
    ],
    onMessageSend: (message: TMessage) => {
      message
      // console.log('message sent', message) // send message to the server
    },
  })

  // useEffect(() => {
  //   socket.on('receive-message', (message: Message) => {
  //     onMessageReceived(message)
  //   })
  // }, [onMessageReceived])

  return (
    <div className="w-full sm:w-96 bg-slate-400 h-full rounded-xl overflow-hidden">
      <Chat {...chatComponent} />
    </div>
  )
}
export default ChatContainer