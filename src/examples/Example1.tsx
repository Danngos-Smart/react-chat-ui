import { TMessage } from "@/types"
import "react-ui-chat/tailwind.css" // if you are not using tailwind
import { Chat, useChat } from ".."

const initialMessages: TMessage[] = [
  {
    id: 1,
    message: 'I need help with my order',
    date: new Date().toISOString(),
    type: "sent",
  },
  {
    id: 2,
    message: 'Hello, how can I help you?',
    date: new Date().toISOString(),
    type: "receive",
  },
]

function Example1() {
  const { chatComponent } = useChat({
    initialMessages,
  })

  return (
      <Chat {...chatComponent} />
  )
}

export default Example1
