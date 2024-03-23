import Chat from "@/components/chat/Chat"
import useChat from "@/hooks/useChat"
import { TMessage } from "@/types"
// import "react-ui-chat/tailwind.css" // if you are not using tailwind

type CustomChatProps = {
  client: string,
  messageReceived?: TMessage | null,
  sendMessage: (message: TMessage, client: string) => void,
}

function CustomChat({ client, messageReceived, sendMessage }: CustomChatProps) {
  const { chatComponent } = useChat({
    onMessageSend: (message: TMessage) => sendMessage(message, client), 
    messageReceived, // new message received from the server. Do not pass all messages here, just the new one
  })
  
  return (
      <Chat {...chatComponent} />
  )
}

export default CustomChat
