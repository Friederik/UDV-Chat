import { MessageProps, RoomProps, User } from "./propTypes";

export const user1: User = {
    id: 'u-1',
    name: 'Илья',
    password: '1234',
    color: 'green'
}

const user2: User = {
    id: 'u-2',
    name: 'Анна',
    password: '4321',
    color: 'orchid'
}

const user3: User = {
    id: 'u-3',
    name: 'Валентин',
    password: '1111',
    color: 'red'
}

const user4: User = {
    id: 'u-4',
    name: 'Геннадий',
    password: 'fortniteswag727',
    color: 'purple'
}

let myUsers: Map<string, User> = new Map()
myUsers.set('u-1', user1)
myUsers.set('u-2', user2)
myUsers.set('u-3', user3)
myUsers.set('u-4', user4)

export const users = myUsers

let m1: MessageProps[] = [
    {
        id: 'm-1',
        user: user1,
        activeUser: user2,
        text: "Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА"
    },
    {
        id: 'm-3',
        user: user1,
        activeUser: user2,
        text: "Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА"
    },
    {
        id: 'm-4',
        user: user1,
        activeUser: user2,
        text: "Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА"
    },
    {
        id: 'm-5',
        user: user3,
        activeUser: user2,
        text: "Я ем двойной чизбургир"
    },
    {
        id: 'm-5',
        user: user3,
        activeUser: user2,
        text: "Без всего"
    },
    {
        id: 'm-6',
        user: user2,
        activeUser: user2,
        text: "Бро..."
    },
    {
        id: 'm-7',
        user: user1,
        activeUser: user2,
        text: "Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА"
    },
    {
        id: 'm-4',
        user: user1,
        activeUser: user2,
        text: "Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА\
        Шух Шух Шух БАА"
    },
    {
        id: 'm-9',
        user: user4,
        activeUser: user2,
        text: "Неделю на чебупицце сижу"
    },
    {
        id: 'm-10',
        user: user2,
        activeUser: user2,
        text: "Ты нормальный? Все в порядке?"
    }
]

for(let i = 0; i < m1.length; i++) {
    m1[i].id = `m-${i+1}`
}

export const messagesRoom1 = m1

export const room1: RoomProps = {
    selectedUser: user1,
    messageHistory: messagesRoom1
}

export const room2: RoomProps = {
    selectedUser: user2,
    messageHistory: messagesRoom1
}

export const room3: RoomProps = {
    selectedUser: user3,
    messageHistory: messagesRoom1
}

export const room4: RoomProps = {
    selectedUser: user4,
    messageHistory: messagesRoom1
}
