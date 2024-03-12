import { getGroupedMessage } from "@/utils/utils";
import ChatInput from "./ChatInput"
import Message, { MessageProps } from "./Message"

export type Message = MessageProps

type ChatProps = {
  messages: Message[];
  onNewMessage: (message: Message) => void;
}

const Chat = ({ messages, onNewMessage }: ChatProps) => {
  const messagesFormatted = messages.map((message, index) => {
    const previousMessage = messages[index - 1]
    const nextMessage = messages[index + 1]
    const grouped: 'top' | 'middle' | 'bottom' | undefined = getGroupedMessage(message.date, previousMessage?.date || '', nextMessage?.date || '')
    return {
      ...message,
      grouped
    }
  })

  const handleOnNewMessage = (message: string) => {
    onNewMessage({
      date: new Date().toLocaleTimeString(),
      message,
      type: 'sent'
    })
  }
  
  return (
    <div className="text-gray-500 bg-gray h-full flex flex-col">
      {/* chat messages */}
      <div className="flex-1 flex flex-col justify-end overflow-y-auto">
        {messagesFormatted.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </div>
      {/* chat box */}
      <ChatInput onNewMessage={handleOnNewMessage} />
    </div>
  )
}
export default Chat