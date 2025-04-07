export interface ChatUser {
    id: string
    name: string
    password: string
    color: string
}

export interface ChatMessage {
    id: string
    user: ChatUser
    text: string
    timestamp: string
}

export interface ChatRoom {
    id: string
    name: string
    messageHistory: ChatMessage[]
}
