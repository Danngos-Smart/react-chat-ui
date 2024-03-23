import { TMessage } from '@/types'
import CustomChat from './Example2/CustomChat'
import { useState } from 'react'

type Conversation = {
  id: string | number,
  text: string,
  owner: string,
  date: string,
}

function Example2() {
  const [conversation, setConversation] = useState<Conversation[]>([])

  const handleOnMessageSend = (message: TMessage, owner: string) => {
    setConversation([
      ...conversation,
      {
        id: conversation.length + 1,
        text: message.message,
        owner,
        date: message.date
      }
    ])
  }

  const getLastMessage = (owner: string) => {
    // get the last message from the requested owner
    const lastMessage = conversation.filter((message) => message.owner === owner).pop()
    // validate
    if (!lastMessage) return undefined
    // return the last message in the format that the chat component expects
    return {
      id: lastMessage.id,
      date: lastMessage.date,
      message: lastMessage.text,
      type: 'received',
    } as TMessage
  }

  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      width: '100%',
      height: '100vh',
    }}>
      <CustomChat
        client={'Albert'}
        messageReceived={getLastMessage('Nina')}
        sendMessage={handleOnMessageSend}
      />
      <CustomChat
        client={'Nina'}
        messageReceived={getLastMessage('Albert')}
        sendMessage={handleOnMessageSend}
      />
    </div>
  )
}

export default Example2
