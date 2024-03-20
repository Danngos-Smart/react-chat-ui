import { Message } from "@/components/chat/Chat"
import { useState } from "react"

type useChatProps = {
  initialMessages?: Message[]
}

const useChat = (props : useChatProps) => {
  const [messages, setMessages] = useState<Message[]>(props.initialMessages || [])

  const onNewMessageSend = (message: Message) => {
    setMessages([
      message,
      ...messages,
    ])
  }

  return {
    messages,
    onNewMessageSend,
  }
}
export default useChat