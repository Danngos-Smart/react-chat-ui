import { Message } from "@/components/chat/Chat"
import { useCallback, useState } from "react"

type useChatProps = {
  initialMessages?: Message[];
  onMessageSend?: (message: Message) => void;
}

const useChat = (props : useChatProps) => {
  const [messages, setMessages] = useState<Message[]>(props.initialMessages || [])

  // add new message to the chat
  const onNewMessage = useCallback((message: Message) => {
    setMessages([
      message,
      ...messages,
    ])
  }, [messages])

  // send new message
  const onNewMessageSend = useCallback((message: Message) => {
    if (props.onMessageSend) {
      props.onMessageSend(message)
    }
    onNewMessage({
      ...message,
      status: "sent",
    })
  }, [onNewMessage, props])

  // receive new message
  const onNewMessageReceived = useCallback((message: Message) => {
    onNewMessage({
      ...message,
      type: "received",
    })
  }, [onNewMessage])

  return {
    chatComponent: {
      messages,
      onNewMessageSend,
    },
    onMessageReceived: onNewMessageReceived,
  }
}
export default useChat