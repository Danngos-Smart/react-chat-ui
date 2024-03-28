import Checkmark from "@/assets/svg/Checkmark";
import CheckmarkDone from "@/assets/svg/CheckmarkDone";
import { TMessage } from "@/types";
import { classNames } from "@/utils/utils";
import { motion } from "framer-motion";

export type MessageProps = TMessage

const bottomType = {
  sent: 'rounded-br-sm rounded-tl-md rounded-tr-md',
  receive: 'rounded-bl-sm rounded-tl-md rounded-tr-md'
}

const middleType = {
  sent: 'rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md',
  receive: 'rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md'
}

const topType = {
  sent: 'rounded-b-md',
  receive: 'rounded-b-md'
}

const withoutGroup = {
  sent: 'rounded-br-sm',
  receive: 'rounded-bl-sm'
}

const padding = {
  bottom: 'pt-0',
  middle: 'py-0',
  top: 'pb-0',
  default: 'py-2'
}

const bg = {
  sent: 'bg-gray-medium',
  receive: 'bg-primary-light/20'
}

const statusIcon = {
  read: <CheckmarkDone />,
  delivered: <Checkmark />,
  sending: '🕒',
  failed: '🚫',
  error: '❌'
}

const Message = ({ message, date, type = 'sent', status, grouped, isLast }: MessageProps) => {
  return (
    <motion.div 
      layout
      className={classNames("w-full p-4 gap-2 flex flex-col", padding[grouped || 'default'], type === 'receive' ? 'items-start' : 'items-end')}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.15, type: 'just'}}
      style={{ transformOrigin: type === 'sent' ? "bottom right" : "bottom left" }}
    >
      <motion.div 
        className={classNames("p-4 text-xs rounded-t-xl max-w-[80%] rounded-xl",
          bg[type],
          grouped === 'top' ? topType[type] : '',
          grouped === 'middle' ? middleType[type] : '',
          grouped === 'bottom' ? bottomType[type] : '',
          !grouped ? withoutGroup[type] : ''
        )}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        exit={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.1, type: 'just'}}
        style={{ transformOrigin: type === 'sent' ? "bottom right" : "bottom left" }}
      >
        {message}
      </motion.div>
      <div className="text-xs text-gray-400 flex items-center gap-1">
        {type === 'sent' 
          && !(grouped === 'top' || grouped === 'middle') 
          && status 
          && <span className="text-primary-light">
          {statusIcon[status]}
        </span>}
        {!(grouped === 'top' || grouped === 'middle') && <span className='text-[10px]'>
          {date}
        </span>}
        {isLast && <span id='last-msg' />}
      </div>
    </motion.div>
  )
}
export default Message