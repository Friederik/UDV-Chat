export interface RoomProps {
    selectedUser: User
    messageHistory: MessageProps[]
}

export interface User {
    id: string
    name: string
    password: string
    color: string
}

export interface MessageProps {
    id: string
    user: User
    activeUser: User
    text: string
  }