export type TMessage = {
  id: string | number;
  message: string;
  date: string;
  type?: "sent" | "receive";
  status?: "read" | "delivered" | "sending" | "error";
  grouped?: 'top' | 'middle' | 'bottom';
  isLast?: boolean;
}

export type TUser = {
  id: string;
  name: string;
}