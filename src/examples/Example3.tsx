import { TMessage } from '@/types'
import { useEffect, useState } from 'react'
import { Chat } from '..'

type Conversation = {
  id: string | number,
  text: string,
  owner: string,
  date: string,
  status: TMessage['status']
}

// simulate a chat between two users, passing ALL messages
function Example3() {
  const [conversation, setConversation] = useState<Conversation[]>([])

  // simulate the message delivery status
  useEffect(() => {
    if (!conversation.length || conversation[conversation.length - 1].status === 'delivered') return;

    const time = setTimeout(() => {
      setConversation((prev) => {
        return prev.map((message) => {
          if (message.status === 'sending') {
            return {
              ...message,
              status: 'delivered'
            }
          }
          return message
        })
      })
    }, 1000)

    return () => clearTimeout(time)
  }, [conversation])

  // simulate the message sending
  const handleOnMessageSend = (message: TMessage, owner: string) => {
    setConversation([
      ...conversation,
      {
        id: conversation.length + 1,
        text: message.message,
        owner,
        date: message.date,
        status: 'sending',
      }
    ])
  }

  // reformat the conversation to be used in the Chat component
  const messagesByOwner: (owner: string) => TMessage[] = (owner) => 
    conversation.map((message, index) => ({
      id: index +1,
      message: message.text,
      date: message.date,
      type: message.owner === owner ? 'sent' : 'receive',
      status: message.status
    }))
    

  return (
    <div className="container">
      <Chat 
        messages={messagesByOwner('Albert')}
        onMessageSend={(message) => handleOnMessageSend(message, 'Albert')}
      />
      <Chat 
        messages={messagesByOwner('Nina')}
        onMessageSend={(message) => handleOnMessageSend(message, 'Nina')}
      />
    </div>
  )
}

export default Example3