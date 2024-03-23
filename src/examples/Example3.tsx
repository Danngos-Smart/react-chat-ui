import { TMessage } from '@/types'
import CustomChat from './Example2/CustomChat'
import { useState } from 'react'

type Conversation = {
  id: string | number,
  text: string,
  owner: string,
  date: string,
}

// simulate a chat between two clients, passing the ALL messages
function Example3() {
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

  

  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      width: '100%',
      height: '100vh',
    }}>
      <CustomChat
        client={'Albert'}
        sendMessage={handleOnMessageSend}
      />
      <CustomChat
        client={'Nina'}
        sendMessage={handleOnMessageSend}
      />
    </div>
  )
}

export default Example3