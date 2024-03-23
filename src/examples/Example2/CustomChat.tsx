import Chat from "@/components/chat/Chat"
import useChat from "@/hooks/useChat"
import { TMessage } from "@/types"
import { useEffect, useState } from "react"
// import "react-ui-chat/tailwind.css" // if you are not using tailwind

type CustomChatProps = {
  client: string,
  messageReceived?: TMessage | null,
  sendMessage: (message: TMessage, client: string) => void,
}

function CustomChat({ client, messageReceived, sendMessage }: CustomChatProps) {
  const [msgSending, setMsgSending] = useState<TMessage[]>([])

  const { chatComponent, updateMessageStatus } = useChat({
    onMessageSend: (message: TMessage) => {
      setMsgSending([...msgSending, message])
      sendMessage(message, client)
    },
    messageReceived, // new message received from the server. Do not pass all messages here, just the new one
  })

  // simulate update status of the message sended to 'delivered' after 1 second
  useEffect(() => {
    if (!msgSending.length) return
    const updateMsg = () => {
      msgSending.forEach((message) => {
        updateMessageStatus(message.id, 'delivered')
        setMsgSending(msgSending.filter((msg) => msg.id !== message.id))
      })
    }

    const timer = setTimeout(() => {
      updateMsg()
    }, 1000)

    return () => clearTimeout(timer) // cleanup
  }, [msgSending, updateMessageStatus])

  return (
    <Chat {...chatComponent} />
  )
}

export default CustomChat
