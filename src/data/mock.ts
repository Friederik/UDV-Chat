import { ChatUser, ChatMessage, ChatRoom } from "../interfaces/propTypes";

export const user1: ChatUser = {
    id: 'u-1',
    name: 'Илья',
    password: '1234',
    color: 'green'
}

const user2: ChatUser = {
    id: 'u-2',
    name: 'Анна',
    password: '4321',
    color: 'orchid'
}

const user3: ChatUser = {
    id: 'u-3',
    name: 'Валентин',
    password: '1111',
    color: 'red'
}

const user4: ChatUser = {
    id: 'u-4',
    name: 'Геннадий',
    password: 'fortniteswag727',
    color: 'purple'
}

let myUsers: Map<string, ChatUser> = new Map()
myUsers.set('u-1', user1)
myUsers.set('u-2', user2)
myUsers.set('u-3', user3)
myUsers.set('u-4', user4)

export const users = myUsers

let m1: ChatMessage[] = [
    {
        id: 'm-1',
        user: user1,
        text: "Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА",
        timestamp: "2025-04-07T14:30:00.000Z"
    },
    {
        id: 'm-3',
        user: user1,
        text: "Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА",
        timestamp: "2025-04-07T14:30:00.000Z"
    },
    {
        id: 'm-4',
        user: user1,
        text: "Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА",
        timestamp: "2025-04-07T14:30:00.000Z"
    },
    {
        id: 'm-5',
        user: user3,
        text: "Я ем двойной чизбургир",
        timestamp: "2025-04-07T14:30:00.000Z"
    },
    {
        id: 'm-5',
        user: user3,
        text: "Без всего",
        timestamp: "2025-04-07T14:30:00.000Z"
    },
    {
        id: 'm-6',
        user: user2,
        text: "Бро...",
        timestamp: "2025-04-07T14:30:00.000Z"
    },
    {
        id: 'm-7',
        user: user1,
        text: "Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА",
        timestamp: "2025-04-07T14:30:00.000Z"
    },
    {
        id: 'm-4',
        user: user1,
        text: "Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА",
        timestamp: "2025-04-07T14:30:00.000Z"
    },
    {
        id: 'm-9',
        user: user4,
        text: "Неделю на чебупицце сижу",
        timestamp: "2025-04-07T14:30:00.000Z"
    },
    {
        id: 'm-10',
        user: user2,
        text: "Ты нормальный? Все в порядке?",
        timestamp: "2025-04-07T14:30:00.000Z"
    }
]

let m2 : ChatMessage[] = [
    // {
    //     id: 'm-9',
    //     user: user1,
    //     text: "Дорогой дневник",
    //     timestamp: "2025-04-07T14:30:00.000Z"
    // },
    // {
    //     id: 'm-10',
    //     user: user1,
    //     text: "Я стал чикатилло",
    //     timestamp: "2025-04-07T14:31:00.000Z"
    // }
]

for(let i = 0; i < m1.length; i++) {
    m1[i].id = `m-${i+1}`
}

for(let i = 0; i < m2.length; i++) {
    m2[i].id = `m-${i+1}`
}

export const messagesRoom1 = m1
export const messagesRoom2 = m2

export const room1: ChatRoom = {
    id: 'r-1',
    name: 'Первый чат',
    messageHistory: messagesRoom1
}

export const room2: ChatRoom = {
    id: 'r-2',
    name: 'Второй чат',
    messageHistory: messagesRoom2
}

let myRooms: Map<string, ChatRoom> = new Map()
myRooms.set(room1.id, room1)
myRooms.set(room2.id, room2)
myRooms.set("Третий чат", room2)
myRooms.set("Четвертый чат", room2)
myRooms.set("Пятый чат", room2)
myRooms.set("Шестой чат", room2)
myRooms.set("Седьмой чат", room2)
myRooms.set("Восьмой чат", room2)
myRooms.set("22", room2)
myRooms.set("224", room2)
myRooms.set("424", room2)


export const rooms = myRooms
