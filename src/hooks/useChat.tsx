import { TMessage } from "@/types";
import { useCallback, useState } from "react"

type useChatProps = {
  initialMessages?: TMessage[];
  onMessageSend?: (message: TMessage) => void;
}

const useChat = (props : useChatProps) => {
  const [messages, setMessages] = useState<TMessage[]>(props.initialMessages || [])

  // add new message to the chat
  const onNewMessage = useCallback((message: TMessage) => {
    setMessages([
      message,
      ...messages,
    ])
  }, [messages])

  // send new message
  const onNewMessageSend = useCallback((message: TMessage) => {
    if (props.onMessageSend) {
      props.onMessageSend(message)
    }
    onNewMessage({
      ...message,
      status: "sent",
    })
  }, [onNewMessage, props])

  // receive new message
  const onNewMessageReceived = useCallback((message: TMessage) => {
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