import { TMessage } from "@/types";
import moment from "moment";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// grouped messages by minutes using moment
export const getGroupedMessage = (currentMsg: TMessage, previousMsg?: TMessage, nextMsg?: TMessage, format = 'HH:mm:ss') => {
  const previous = previousMsg && moment(previousMsg.date, format).format('HH:mm')
  const current = moment(currentMsg.date, format).format('HH:mm')
  const next = nextMsg && moment(nextMsg.date, format).format('HH:mm')
  if ((!previousMsg || previous !== current) && current === next && currentMsg.type === nextMsg?.type) return 'bottom'
  if (previous === current && current === next && currentMsg.type === previousMsg?.type && currentMsg.type === nextMsg?.type) return 'middle'
  if (previous === current && previousMsg === currentMsg.type && (!nextMsg || current !== next)) return 'top'
  return undefined;  
}

export const formatDate = (date: string, format = 'HH:mm:ss', formatOutput = 'HH:mm') => {
  // validate date
  if (!moment(date, format).isValid()) return ''
  return moment(date, format).format(formatOutput)
}