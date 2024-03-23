import Chat from "@/components/chat/Chat"
import { TMessage } from "@/types"

type CustomChatProps = {
  client: string,
  messageReceived?: TMessage | null,
  sendMessage: (message: TMessage, client: string) => void,
}

function CustomChat({ client, messageReceived, sendMessage }: CustomChatProps) {
  const config = {
    onMessageSend: (message: TMessage) => sendMessage(message, client),
    messageReceived, // new message received, not ALL messages
  }

  return (
    <Chat {...config}/>
  )
}

export default CustomChat
