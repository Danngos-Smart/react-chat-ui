import { useState } from "react"

type ChatInputProps = {
  onNewMessage: (message: string) => void;
}

const ChatInput = ({ onNewMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!message) return
    onNewMessage(message)
    setMessage('')
  }

  return (
    <form onSubmit={handleSendMessage} className="bg-white p-4 rounded-t-2xl text-sm relative">
      <input
        type="text"
        placeholder="Type a message"
        className="w-full bg-gray-light focus:outline-none text-gray-500 placeholder:text-gray-400 pr-10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="absolute right-4 inset-y-0 flex justify-center items-center">
        <button type="submit" className="text-primary-light hover:text-primary/80 rounded-full p-1 outline-primary-light/20 ">
          {/* arrow */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.34 7.32001L4.34 0.320006C3.78749 0.0450154 3.16362 -0.0528833 2.55344 0.0396579C1.94326 0.132199 1.37646 0.410676 0.930335 0.837122C0.484207 1.26357 0.180456 1.81723 0.060496 2.42262C-0.059464 3.02801 0.0102046 3.65566 0.260003 4.22001L2.66 9.59001C2.71446 9.71984 2.74251 9.85922 2.74251 10C2.74251 10.1408 2.71446 10.2802 2.66 10.41L0.260003 15.78C0.0567034 16.2367 -0.029241 16.737 0.00998036 17.2354C0.0492018 17.7337 0.212345 18.2144 0.484585 18.6337C0.756825 19.053 1.12953 19.3976 1.56883 19.6362C2.00812 19.8748 2.50009 19.9999 3 20C3.46823 19.9953 3.92949 19.886 4.35 19.68L18.35 12.68C18.8466 12.4302 19.264 12.0473 19.5557 11.5741C19.8474 11.1009 20.0018 10.5559 20.0018 10C20.0018 9.44411 19.8474 8.89915 19.5557 8.42593C19.264 7.9527 18.8466 7.56982 18.35 7.32001H18.34ZM17.45 10.89L3.45 17.89C3.26617 17.9783 3.05973 18.0082 2.85839 17.9759C2.65705 17.9435 2.47041 17.8503 2.32352 17.7089C2.17662 17.5674 2.07648 17.3844 2.03653 17.1844C1.99658 16.9845 2.01873 16.777 2.1 16.59L4.49 11.22C4.52094 11.1483 4.54766 11.0748 4.57 11H11.46C11.7252 11 11.9796 10.8946 12.1671 10.7071C12.3546 10.5196 12.46 10.2652 12.46 10C12.46 9.73479 12.3546 9.48044 12.1671 9.2929C11.9796 9.10536 11.7252 9.00001 11.46 9.00001H4.57C4.54766 8.92517 4.52094 8.85172 4.49 8.78001L2.1 3.41001C2.01873 3.22297 1.99658 3.01556 2.03653 2.81558C2.07648 2.6156 2.17662 2.43261 2.32352 2.29115C2.47041 2.1497 2.65705 2.05654 2.85839 2.02416C3.05973 1.99178 3.26617 2.02174 3.45 2.11001L17.45 9.11001C17.6138 9.19392 17.7513 9.32142 17.8473 9.47845C17.9433 9.63548 17.994 9.81596 17.994 10C17.994 10.1841 17.9433 10.3645 17.8473 10.5216C17.7513 10.6786 17.6138 10.8061 17.45 10.89Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </form>
  )
}
export default ChatInput