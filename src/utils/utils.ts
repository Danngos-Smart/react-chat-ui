import moment from "moment";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// grouped messages by minutes using moment
export const getGroupedMessage = (currentDate: string, previousDate: string = '', nextDate: string = '', format = 'HH:mm:ss') => {
  const previous = moment(previousDate, format).format('HH:mm')
  const current = moment(currentDate, format).format('HH:mm')
  const next = moment(nextDate, format).format('HH:mm')
  if ((!previousDate || previous !== current) && current === next) return 'top'
  if (previous === current && current === next) return 'middle'
  if (previous === current && (!nextDate || current !== next)) return 'bottom'
  return undefined;  
}