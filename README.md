# React UI Chat - (IN DEVELOPMENT, DO NOT USE, YET)

React UI Chat is a customizable chat component for React applications. It provides a simple and elegant interface for building chat features in your web projects.

![1711210041623](image/README/1711210041623.png)

## Features

- 📝 Easy-to-use chat interface.
- 🎨 Customizable styling and theming.
- 📦 Lightweight and dependency-free.
- ⚙️ Extensible with plugins and hooks.

## Installation

You can install `react-ui-chat` via npm:

```bash
npm install react-ui-chat
```

## Usage

```jsx
import './App.css'
import { Chat, useChat } from 'react-ui-chat'
import "react-ui-chat/tailwind.css" // if you are not using tailwind
import { TMessage } from 'react-ui-chat/types' // if you are using typescript

const initialMessages: TMessage[] = [
  {
    message: 'I need help with my order',
    date: new Date().toISOString(),
    type: "sent",
  },
  {
    message: 'Hello, how can I help you?',
    date: new Date().toISOString(),
    type: "received",
  },
]

function App() {

  const { chatComponent } = useChat({
    initialMessages,
  })

  return (
    <div>
      <Chat {...chatComponent} />
    </div>
  )
}

export default App
```

## Props

* `Chat`: The main chat container.
* `useChat`: A hook to manage the chat state.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
