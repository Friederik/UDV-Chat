import Room from "../Room/Room"
import * as mock from "../../data/mock"
import * as data from '../../data/storage'
import { useEffect, useState } from "react"
import classes from './Chat.module.scss'
import RoomPicker from "../RoomPicker/RoomPicker"
import UserPicker from "../UserPicker/UserPicker"
import UserProfile from "../UserPicker/UserProfile"
import { ChatMessage, ChatRoom } from "../../interfaces/propTypes"
import InputForm from "../Input/InputForm"
import RoomAddWindow from "../RoomPicker/RoomAddWindow"
import useChatLocalStorage, { ChatTypes } from "../../hooks/useChatLocalStorage"
import useChatRooms from "../../hooks/useChatRooms"

const Chat = () => {
    const [
        currentRoom, setCurrentRoom,
        rooms, isRoomAddWindowOpen,
        openRoomAddWindow, closeRoomAddWindow,
        changeRoom, addNewRoom, removeRoom
    ] = useChatRooms(data.initialRoom)

    const [
        users,
        setUsers,
        currentUser,
        setCurrentUser 
    ] = useChatLocalStorage(ChatTypes.Users, data.initialUser)
    const [ isUserPickerOpen, setIsUserPickerOpen ] = useState(false)

    // КОМНАТЫ ---------------------------------------------------------------------------------

    const addNewMessage = (newMessage: { text: string }) => {
        if (currentRoom) {
            const message: ChatMessage = { 
                id: `m-${currentRoom.messageHistory.length+1}`, 
                user: currentUser,
                text: newMessage.text,
                timestamp: new Date().toISOString()
            }
            console.log(currentRoom.id, message)
            const newMessageHistory = [...currentRoom.messageHistory, message]
            const newRoom = {...currentRoom, messageHistory: newMessageHistory}
            setCurrentRoom(newRoom)
        }
    }

    // ПОЛЬЗОВАТЕЛИ ---------------------------------------------------------------------------------

    function changeUser(userId: string): void {
        const newUser = mock.users.get(userId)
        if (newUser) {
            setCurrentUser(newUser)
        } 
    }

    const openUserPicker = () => setIsUserPickerOpen(true)
    const closeUserPicker = () => setIsUserPickerOpen(false)

    return(
        <div className={classes.chat}>
            <div className={classes.userProfile}>
                <UserProfile user={currentUser} />
                <button onClick={openUserPicker}>
                    <img src="assets/picker.svg" alt="picker"/>
                </button>
            </div>
            <RoomPicker rooms={rooms} changeRoom={changeRoom} removeRoom={removeRoom} openRoomAddWindow={openRoomAddWindow}/>
            <Room room={currentRoom} selectedUser={currentUser}/>
            <InputForm addNewMessage={addNewMessage}/>

            <RoomAddWindow addNewRoom={addNewRoom} isOpen={isRoomAddWindowOpen} onClose={closeRoomAddWindow} />
            <UserPicker users={mock.users} changeUser={changeUser} isOpen={isUserPickerOpen} onClose={closeUserPicker}/>
        </div>
    )
}

export default Chat