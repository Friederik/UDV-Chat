import Room from "../Room/Room"
import * as data from '../../data/storage'
import classes from './Chat.module.scss'
import RoomPicker from "../RoomPicker/RoomPicker"
import UserPicker from "../UserPicker/UserPicker"
import UserProfile from "../UserPicker/UserProfile"
import { ChatMessage, ChatRoom, ChatUser } from "../../interfaces/propTypes"
import InputForm from "../Input/InputForm"
import RoomAddWindow from "../RoomPicker/RoomAddWindow"
import useChatRooms from "../../hooks/useChatRooms"
import useChatUsers from "../../hooks/useChatUsers"
import { useEffect, useState } from "react"
import { ChatTypes } from "../../hooks/useChatLocalStorage"


const Chat = () => {
    const [
        currentRoom, setCurrentRoom,
        rooms, setRooms, isRoomAddWindowOpen,
        openRoomAddWindow, closeRoomAddWindow,
        changeRoom, addNewRoom, removeRoom
    ] = useChatRooms(data.initialRoom)

    const [
        currentUser, 
        users, setUsers, isUserPickerOpen,
        openUserPicker, closeUserPicker,
        changeUser, addNewUser
    ] = useChatUsers(data.initialUser)

    const [ isJustCleared, setIsJustCleared ] = useState(false)

    const [ searchValue, setSearchValue ] = useState('')
    const [ replyMessage, setReplyMessage ] = useState<ChatMessage | null>(null)

    /**
     * Добавить новое сообщение в текущую комнату
     * @param newMessage Новое сообщение
     */
    const addNewMessage = (newMessage: { text: string, mediaURL: string }) => {
        if (currentRoom) {
            const message: ChatMessage = { 
                id: `m-${currentRoom.messageHistory.length+1}`, 
                user: currentUser,
                text: newMessage.text || '',
                timestamp: new Date().toISOString(),
                mediaURL: newMessage.mediaURL || undefined,
                reply: replyMessage || undefined
            }
            console.log(currentRoom.id, message)
            const newMessageHistory = [...currentRoom.messageHistory, message]
            const newRoom = {...currentRoom, messageHistory: newMessageHistory}
            setCurrentRoom(newRoom)

            removeReplyMessage()
        }
    }

    /**
     * Добавляет ответ на сообщение
     * @param messageId ID сообщения в комнате
     */
    const addReplyMessage = (messageId: string) => {
        if (currentRoom.messageHistory.length > 0) {
            setReplyMessage(currentRoom.messageHistory[Number(messageId.slice(2))-1])
            console.log(currentRoom.messageHistory[Number(messageId.slice(2))-1])
        }
    }

    /**
     * Очищает ответ
     */
    const removeReplyMessage = () => {
        setReplyMessage(null)
    }

    /**
     * Очищение localStorage
     */
    const clearStorage = () => {
        localStorage.clear()

        setRooms(() => {
            const storedRooms = localStorage.getItem(ChatTypes.Rooms)
            console.log(storedRooms)
            if (storedRooms) {
                return new Map<string, ChatRoom>(JSON.parse(storedRooms))
            }
            return new Map<string, ChatRoom>([[data.initialRoom.id, data.initialRoom]])
        })

        setUsers(() => {
            const storedUsers = localStorage.getItem(ChatTypes.Users)
            console.log(storedUsers)
            if (storedUsers) {
                return new Map<string, ChatUser>(JSON.parse(storedUsers))
            }
            return new Map<string, ChatUser>([[data.initialUser.id, data.initialUser]])
        })

        const firstKeyRooms = rooms.keys().next().value
        if (firstKeyRooms) changeRoom(firstKeyRooms)
            
        const firstKeyUsers = users.keys().next().value
        if (firstKeyUsers) changeUser(firstKeyUsers)

        setIsJustCleared(true)
    }

    useEffect(() => {
        setIsJustCleared(false)
    }, [isJustCleared])

    /**
     * Сброс комнаты при очищении
     */
    useEffect(() => {
        const firstKeyRooms = rooms.keys().next().value
        if (firstKeyRooms) changeRoom(firstKeyRooms)
            
        const firstKeyUsers = users.keys().next().value
        if (firstKeyUsers) changeUser(firstKeyUsers)
    }, [isJustCleared])

    /**
     * Отмена Esc
     */
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault()
            }
        }
    
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return(
        <div className={classes.chat}>
            <div className={classes.userProfile}>
                <UserProfile user={currentUser} />
                <button onClick={openUserPicker}>
                    <img src="/assets/picker.svg" alt="picker"/>
                </button>
                <button style={{backgroundColor: 'red'}} onClick={clearStorage}>
                    <img src="/assets/picker.svg" alt="picker"/>
                </button>
            </div>
            <RoomPicker 
                rooms={rooms} 
                changeRoom={changeRoom} 
                removeRoom={removeRoom} 
                openRoomAddWindow={openRoomAddWindow}
            />
            <Room 
                room={currentRoom} 
                selectedUser={currentUser}
                searchValue={searchValue}
                addReplyMessage={addReplyMessage}
            />
            {replyMessage && <p>{replyMessage.user.name}</p>}
            <InputForm 
                addNewMessage={addNewMessage}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <RoomAddWindow 
                addNewRoom={addNewRoom} 
                isOpen={isRoomAddWindowOpen} 
                onClose={closeRoomAddWindow} 
            />
            <UserPicker 
                users={users} 
                currentUser={currentUser}
                changeUser={changeUser} 
                addNewUser={addNewUser}
                isOpen={isUserPickerOpen} 
                onClose={closeUserPicker}
            />
        </div>
    )
}

export default Chat