import { formatDate, getGroupedMessage } from "@/utils/utils";
import ChatInput from "./ChatInput"
import Message from "./Message"
import { TMessage } from "@/types";
import useChat from "@/hooks/useChat";
import { AnimatePresence } from "framer-motion";
import { useMemo } from "react";

type ChatProps = {
  initialMessages?: TMessage[];
  messages?: TMessage[];
  messageReceived?: TMessage | null;
  onMessageSend?: (message: TMessage) => void;
}

const Chat = (props: ChatProps) => {
  const { chatComponent: { messages, onNewMessageSend } } = useChat({
    initialMessages: props.initialMessages,
    messages: props.messages,
    messageReceived: props.messageReceived,
    onMessageSend: props.onMessageSend,
  })

  const messagesFormatted = useMemo(() => messages.map((message, index) => {
    const previousMessage = messages[index - 1]
    const nextMessage = messages[index + 1]
    const grouped: 'top' | 'middle' | 'bottom' | undefined = getGroupedMessage(message, previousMessage, nextMessage)
    return {
      ...message,
      grouped,
      date: formatDate(message.date)
    }
  }), [messages])

  const handleOnNewMessageSend = (message: string) => {
    onNewMessageSend({
      id: Math.random(),
      date: new Date().toLocaleTimeString(),
      message,
      type: 'sent'
    })
    // scroll to last element with the class 'last-msg'
    const lastMsg = document.getElementById('last-msg')
    lastMsg?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="text-gray-500 bg-gray h-full flex flex-col">
      {/* chat messages */}
      <div className="flex-1 overflow-y-auto flex flex-col-reverse">
        <AnimatePresence>
          {messagesFormatted.map((message, index) => (
            <Message key={message.id} {...message} isLast={index === 0} />
          ))}
        </AnimatePresence>
      </div>
      {/* chat box */}
      <ChatInput onNewMessage={handleOnNewMessageSend} />
    </div>
  )
}
export default Chat