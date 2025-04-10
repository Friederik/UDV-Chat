import { useEffect, useState } from "react"
import { ChatRoom } from "../interfaces/propTypes"
import useChatLocalStorage, { ChatTypes } from "./useChatLocalStorage"

/**
 * Хук для управления комнатами
 * @param initialRoom Комната по умолчанию
 * @returns [ МНОГО ]
 */
const useChatRooms = (
    initialRoom: ChatRoom
): [
    ChatRoom,
    React.Dispatch<React.SetStateAction<ChatRoom>>,
    Map<string, ChatRoom>,
    boolean,
    () => void,
    () => void,
    (roomId: string) => void,
    (roomName: string) => void,
    (roomId: string) => void
] => {
    const [ rooms, setRooms, currentRoom, setCurrentRoom ] = useChatLocalStorage(ChatTypes.Rooms, initialRoom)
    const [ isRoomAddWindowOpen, setIsRoomAddWindowOpen ] = useState(false) // Управление добавлением комнаты
    const [ isRoomJustDeleted,  setIsRoomJustDeleted ] = useState(false)    // Управление удалением комнаты

    /**
     * Поменять комнату
     * @param roomId ID новой комнаты
     */
    const changeRoom = (roomId: string) => {
        const newRoom = rooms.get(roomId)
        if(newRoom) {
            setCurrentRoom(newRoom)
        }
        console.log(rooms.get(roomId))
    }

    /**
     * Добавить новую комнату
     * @param roomName Название новой комнаты
     */
    const addNewRoom = (roomName: string) => {
        const newRoom: ChatRoom = {
            id: `r-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
            name: roomName,
            messageHistory: []
        }
        setRooms(prev => {
            const newRooms = new Map(prev)
            newRooms.set(newRoom.id, newRoom)
            localStorage.setItem('rooms', JSON.stringify(Array.from(newRooms.entries())))
            return newRooms
        })
        setCurrentRoom(newRoom)
    }

    /**
     * Удаление выбранной комнаты
     * @param roomId ID удаляемой комнаты
     */
    const removeRoom = (roomId: string) => {
        if (rooms.size <= 1) return
        setRooms(prev => {
            const newRooms = new Map(prev)
            newRooms.delete(roomId)
            localStorage.setItem('rooms', JSON.stringify(Array.from(newRooms.entries())))
            return newRooms
        })
        setIsRoomJustDeleted(true)
    }

    const openRoomAddWindow = () => setIsRoomAddWindowOpen(true)
    const closeRoomAddWindow = () => setIsRoomAddWindowOpen(false)

    /**
     * Перемещение в другую комнату при удалении текущей
     */
    useEffect(() => {
            const firstKey = rooms.keys().next().value
            if (firstKey) changeRoom(firstKey)
            setIsRoomJustDeleted(false)
        }, [isRoomJustDeleted])

    return [
        currentRoom, setCurrentRoom,
        rooms, isRoomAddWindowOpen,
        openRoomAddWindow, closeRoomAddWindow,
        changeRoom, addNewRoom, removeRoom
    ]
}

export default useChatRooms

