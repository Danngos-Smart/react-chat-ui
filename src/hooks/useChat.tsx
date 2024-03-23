import { TMessage } from "@/types";
import { useCallback, useEffect, useState } from "react"

type useChatProps = {
  initialMessages?: TMessage[]; // initial, default, not refreshed de messages in the chat
  messages?: TMessage[]; // messages in the chat, update all messages if this prop changes
  messageReceived?: TMessage | null; // new message received
  onMessageSend?: (message: TMessage) => void; // callback to send message
}

const useChat = (props?: useChatProps) => {
  const [messages, setMessages] = useState<TMessage[]>(props?.initialMessages || props?.messages || [])

  // add new message to the chat
  const onNewMessage = useCallback((message: TMessage) => {
    setMessages([
      message,
      ...messages,
    ])
  }, [messages])

  // send new message
  const onNewMessageSend = useCallback((message: TMessage) => {
    if (props?.onMessageSend) {
      props?.onMessageSend(message)
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

  const searchMessage = useCallback((id: string | number) => {
    return messages.find((message) => message.id === id)
  }, [messages])
  
  // effect to receive message from the server
  useEffect(() => {
    if (props?.messageReceived?.id && !searchMessage(props.messageReceived.id)) {
      onNewMessageReceived(props.messageReceived)
    }
  }, [onNewMessageReceived, props?.messageReceived, props?.messageReceived?.id, searchMessage])

  useEffect(() => {
    if (props?.messages) {
      setMessages(props.messages)
    }
  }, [props?.messages])

  return {
    chatComponent: {
      messages,
      onNewMessageSend,
    },
    // onMessageReceived: onNewMessageReceived,
  }
}
export default useChat