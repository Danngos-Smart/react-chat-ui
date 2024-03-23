import { TMessage } from "@/types";
import moment from "moment";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const compareMessageByProps = (firstMsg: TMessage | undefined, secondMsg: TMessage | undefined, prop: ('date' | 'type' | 'status')[]) => {
  if (!firstMsg || !secondMsg) return false
  const isEquals = true;
  for (const key of prop) {
    if (firstMsg[key] !== secondMsg[key]) return false
  }
  return isEquals
}

// grouped messages by minutes using moment
export const getGroupedMessage = (currentMsg: TMessage, previousMsg?: TMessage, nextMsg?: TMessage, format = 'HH:mm:ss') => {
  const previous = previousMsg && moment(previousMsg.date, format).format('HH:mm')
  const current = moment(currentMsg.date, format).format('HH:mm')
  const next = nextMsg && moment(nextMsg.date, format).format('HH:mm')
  if ((!previousMsg || previous !== current) && current === next 
    && compareMessageByProps(currentMsg, nextMsg, ['type', 'status'])) return 'bottom'
  if (previous === current && current === next 
    && compareMessageByProps(previousMsg, currentMsg, ['type', 'status'])
    && compareMessageByProps(currentMsg, nextMsg, ['type', 'status'])) return 'middle'
  if (previous === current && (!nextMsg || current !== next) 
    && compareMessageByProps(previousMsg, currentMsg, ['type', 'status'])) return 'top'
  return undefined;  
}

export const formatDate = (date: string, format = 'HH:mm:ss', formatOutput = 'HH:mm') => {
  // validate date
  if (!moment(date, format).isValid()) return ''
  return moment(date, format).format(formatOutput)
}