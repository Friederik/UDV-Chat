import { ChatRoom, ChatUser, ChatMessage } from "../interfaces/propTypes"

export const initialUser: ChatUser = {
    id: 'u-1',
    name: 'Илья',
    password: '1234',
    color: 'green'
}

const fakeUser: ChatUser = {
    id: 'u-2',
    name: 'Незнакомец',
    password: '1234',
    color: 'gray'
}

export const messagesRoom: ChatMessage[] = [
    {
        id: 'm-1',
        user: fakeUser,
        text: "Добро пожаловать в мой чат 🔥🔥🔥.",
        timestamp: "2025-04-12T14:30:00.000Z",
        mediaURL: "/assets/welcome.png"
    },
    {
        id: 'm-2',
        user: initialUser,
        text: "Всем привет 🙌.",
        timestamp: "2025-04-12T14:35:00.000Z",
    }
]

export const initialRoom: ChatRoom = {
    id: 'r-1',
    name: 'Первый чат',
    messageHistory: messagesRoom
}

export const customEmojis = [
    { id: 'smile', src: '😀' }, 
    { id: 'tears_of_joy', src: '😂' }, 
    { id: 'heart_eyes', src: '😍' }, 
    { id: 'sunglasses', src: '😎' }, 
    { id: 'cry', src: '😢' }, 
    { id: 'angry', src: '😡' }, 
    { id: 'screaming', src: '😱' }, 
    { id: 'sleeping', src: '😴' }, 
    { id: 'thinking', src: '🤔' }, 
    { id: 'innocent', src: '😇' }, 
    { id: 'heart', src: '❤️' }, 
    { id: 'broken_heart', src: '💔' },  
    { id: 'hundred', src: '💯' }, 
    { id: 'sparkles', src: '✨' }, 
    { id: 'fire', src: '🔥' }, 
    { id: 'thumbs_up', src: '👍' }, 
    { id: 'thumbs_down', src: '👎' }, 
    { id: 'wave', src: '👋' }, 
    { id: 'raised_hands', src: '🙌' }, 
    { id: 'pray', src: '🙏' }, 
    { id: 'pizza', src: '🍕' }, 
    { id: 'burger', src: '🍔' }, 
    { id: 'doughnut', src: '🍩' }, 
    { id: 'apple', src: '🍎' }, 
    { id: 'coffee', src: '☕' }, 
    { id: 'tada', src: '🎉' }, 
    { id: 'clock', src: '🕒' }, 
    { id: 'pushpin', src: '📌' }, 
    { id: 'memo', src: '📝' }, 
    { id: 'speech_balloon', src: '💬' }
]