import type { Meta, StoryObj } from '@storybook/react';
import Chat from '../components/chat/Chat';

const meta = {
  title: 'Example/Chat',
  component: Chat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChatExample: Story = {
  args: {
    messages: [
      {
        date: "12:00",
        message: "Hola, como estas!",
      },
      {
        date: "12:00",
        message: "Todo bien, gracias por escribirme!",
        type: "received"
      },
      {
        date: "12:01",
        message: "Me alegra saber q estas bien! Sigue usando esta libreria para tus proyectos!",
        status: "read"
      }
    ],
    onNewMessage: (message) => console.log(message)
  },
};
