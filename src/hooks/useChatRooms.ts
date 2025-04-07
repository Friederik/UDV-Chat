import { useState, useEffect } from "react"
import { ChatRoom } from "../interfaces/propTypes"

const useChatRooms = (initialRoom: ChatRoom) => {
    const [rooms, setRooms] = useState<Map<string, ChatRoom>>(() => {
        const stored = localStorage.getItem('rooms')
        console.log(stored)
        if (stored) {
            return new Map<string, ChatRoom>(JSON.parse(stored))
        }
        return new Map([])
    })

    const [currentRoom, setCurrentRoom] = useState(() => {
        const stored = Array.from(rooms)
        if (stored && stored.length > 0) {
            return stored[0][1]
        }
        rooms.set(initialRoom.id, initialRoom)
        return initialRoom
    })

    useEffect(() => {
        if (!currentRoom) return

        setRooms(prev => {
            const newRooms = new Map(prev)
            newRooms.set(currentRoom.id, currentRoom)
            localStorage.setItem('rooms', JSON.stringify(Array.from(newRooms.entries())))
            return newRooms
        })
        
    }, [currentRoom])

    useEffect(() => {
        const stored = localStorage.getItem('rooms')
        if (stored) {
            const roomsMap: Map<string, ChatRoom> = new Map(JSON.parse(stored))
            setRooms(roomsMap)
        }
        console.log('Чат загружен!')
    }, [])

    return{
        rooms,
        setRooms,
        currentRoom,
        setCurrentRoom
    }
}

export default useChatRooms