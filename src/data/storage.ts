import { ChatRoom } from "../interfaces/propTypes"
import { messagesRoom1, messagesRoom2 } from "./mock"

export const initialRoom: ChatRoom = {
    id: 'r-1',
    name: 'Первый чат',
    messageHistory: messagesRoom1
}

export const initialRoom2: ChatRoom = {
    id: 'r-2',
    name: 'Второй чат',
    messageHistory: messagesRoom2
}