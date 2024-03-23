import { TMessage } from "@/types"
import { Chat } from ".."

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

const Example1 = () => <Chat initialMessages={initialMessages}/>

export default Example1
