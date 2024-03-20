import { getGroupedMessage } from "@/utils/utils";
import ChatInput from "./ChatInput"
import Message, { MessageProps } from "./Message"

export type Message = MessageProps

type ChatProps = {
  messages: Message[];
  onNewMessageSend: (message: Message) => void;
}

const Chat = ({ messages, onNewMessageSend }: ChatProps) => {
  const messagesFormatted = messages.map((message, index) => {
    const previousMessage = messages[index - 1]
    const nextMessage = messages[index + 1]
    const grouped: 'top' | 'middle' | 'bottom' | undefined = getGroupedMessage(message.date, previousMessage?.date || '', nextMessage?.date || '')
    return {
      ...message,
      grouped
    }
  })

  const handleOnNewMessageSend = (message: string) => {
    onNewMessageSend({
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
          {messagesFormatted.map((message, index) => (
            <Message key={index} {...message} isLast={index === 0} />
          ))}
      </div>
      {/* chat box */}
      <ChatInput onNewMessage={handleOnNewMessageSend} />
    </div>
  )
}
export default Chat