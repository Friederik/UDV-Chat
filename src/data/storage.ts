import { ChatRoom, ChatUser, ChatMessage } from "../interfaces/propTypes"

export const initialUser: ChatUser = {
    id: 'u-1',
    name: 'Илья',
    password: '1234',
    color: 'green'
}

export const messagesRoom: ChatMessage[] = [
    {
        id: 'm-1',
        user: initialUser,
        text: "Добро пожаловать в мой чат.",
        timestamp: "2025-04-12T14:30:00.000Z"
    }
]

export const initialRoom: ChatRoom = {
    id: 'r-1',
    name: 'Первый чат',
    messageHistory: messagesRoom
}