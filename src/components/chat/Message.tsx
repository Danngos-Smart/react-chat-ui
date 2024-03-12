import { classNames } from "@/utils/utils";

export type MessageProps = {
  message: string;
  date: string;
  type?: "sent" | "received";
  status?: "read" | "delivered" | "sent" | "error";
  grouped?: 'top' | 'middle' | 'bottom';
}

const bottomType = {
  sent: 'rounded-br-sm rounded-t-md',
  received: 'rounded-bl-sm rounded-t-md'
}

const middleType = {
  sent: 'rounded-t-md rounded-b-md',
  received: 'rounded-t-md rounded-b-md'
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

const Message = ({ message, date, type = 'sent', status, grouped }: MessageProps) => {
  return (
    <div className={classNames("w-full p-4 gap-2 flex flex-col", padding[grouped || 'default'], type === 'received' ? 'items-start' : 'items-end')}>
      <div className={classNames("p-4 text-xs bg-gray-medium rounded-t-xl max-w-[80%] rounded-xl",
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
      </div>
    </div>
  )
}
export default Message