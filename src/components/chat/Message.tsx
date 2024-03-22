import { classNames } from "@/utils/utils";

export type MessageProps = {
  message: string;
  date: string;
  type?: "sent" | "received";
  status?: "read" | "delivered" | "sent" | "error";
  grouped?: 'top' | 'middle' | 'bottom';
  isLast?: boolean;
}

const bottomType = {
  sent: 'rounded-br-sm rounded-tl-md rounded-tr-md',
  received: 'rounded-bl-sm rounded-tl-md rounded-tr-md'
}

const middleType = {
  sent: 'rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md',
  received: 'rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md'
}

const topType = {
  sent: 'rounded-b-md',
  received: 'rounded-b-md'
}

const withoutGroup = {
  sent: 'rounded-br-sm',
  received: 'rounded-bl-sm'
}

const padding = {
  bottom: 'pt-0',
  middle: 'py-0',
  top: 'pb-0',
  default: 'py-2'
}

const bg = {
  sent: 'bg-gray-medium',
  received: 'bg-primary-light/20'
}

const Message = ({ message, date, type = 'sent', status, grouped, isLast }: MessageProps) => {
  return (
    <div className={classNames("w-full p-4 gap-2 flex flex-col", padding[grouped || 'default'], type === 'received' ? 'items-start' : 'items-end')}>
      <div className={classNames("p-4 text-xs rounded-t-xl max-w-[80%] rounded-xl",
        bg[type],
        grouped === 'top' ? topType[type] : '',
        grouped === 'middle' ? middleType[type] : '',
        grouped === 'bottom' ? bottomType[type] : '',
        !grouped ? withoutGroup[type] : ''
      )}>
        {message}
      </div>
      <div className="text-xs text-gray-400 flex gap-1">
        {status && <span className="text-primary-light">
          {status === 'read'
            ? '✓✓'
            : status === 'delivered'
              ? '✓'
              : status === 'sent'
                ? '🕒'
                : '🚫'
          }
        </span>}
        {!(grouped === 'top' || grouped === 'middle') && <span>
          {date}
        </span>}
        {isLast && <span id='last-msg' />}
      </div>
    </div>
  )
}
export default Message