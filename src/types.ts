export type TMessage = {
  id: string | number;
  message: string;
  date: string;
  type?: "sent" | "received";
  status?: "read" | "delivered" | "sent" | "error";
  grouped?: 'top' | 'middle' | 'bottom';
  isLast?: boolean;
}