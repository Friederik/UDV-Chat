import { useEffect, useState } from "react"

import * as data from '../../data/storage'
import { ChatMessage, ChatRoom, ChatUser } from "../../interfaces/propTypes"
import { ChatTypes } from "../../hooks/useChatLocalStorage"
import classes from './Chat.module.scss'

import useChatRooms from "../../hooks/useChatRooms"
import useChatUsers from "../../hooks/useChatUsers"
import useChatUtilities from "../../hooks/useChatUtilities"

import Room from "../Room/Room"
import RoomPicker from "../RoomPicker/RoomPicker"
import RoomAddWindow from "../RoomPicker/RoomAddWindow"
import UserPicker from "../UserPicker/UserPicker"
import UserManager from "../UserPicker/UserManager"
import InputForm from "../Input/InputForm"


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

    const [
        searchValue, setSearchValue,
        replyMessage, setReplyMessage,
        removeReplyMessage
    ] = useChatUtilities()

    const [ isJustCleared, setIsJustCleared ] = useState(false)

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

    return(
        <div id="chatWindow" className={classes.chat}>
            <UserManager 
                currentUser={currentUser} 
                openUserPicker={openUserPicker} 
                clearStorage={clearStorage}
            />
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
            <InputForm 
                addNewMessage={addNewMessage}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                replyMessage={replyMessage}
                removeReplyMessage={removeReplyMessage}
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