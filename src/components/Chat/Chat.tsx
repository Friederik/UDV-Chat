import Room from "../Room/Room"
import * as mock from "../../data/mock"
import * as data from '../../data/storage'
import { useState } from "react"
import classes from './Chat.module.scss'
import RoomPicker from "../RoomPicker/RoomPicker"
import UserPicker from "../UserPicker/UserPicker"
import UserProfile from "../UserPicker/UserProfile"
import { ChatMessage, ChatRoom } from "../../interfaces/propTypes"
import InputForm from "../Input/InputForm"
import useChatRooms from "../../hooks/useChatRooms"
import RoomAddWindow from "../RoomPicker/RoomAddWindow"

const Chat = () => {
    const { rooms, setRooms, currentRoom, setCurrentRoom } = useChatRooms(data.initialRoom)
    const [ currentUser, setCurrentUser ] = useState(mock.user1)
    const [ isUserPickerOpen, setIsUserPickerOpen ] = useState<boolean>(false)
    const [ isRoomAddWindowOpen, setIsRoomAddWindowOpen ] = useState<boolean>(false)

    function changeUser(userId: string): void {
        const newUser = mock.users.get(userId)
        if (newUser) {
            setCurrentUser(newUser)
        } 
    }

    function changeRoom(roomId: string): void {
        const newRoom = rooms.get(roomId)
        if(newRoom) {
            setCurrentRoom(newRoom)
        }
        console.log(rooms.get(roomId))
    }

    function addNewRoom(roomName: string): void {
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
    }

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

    const openUserPicker = () => setIsUserPickerOpen(true)
    const closeUserPicker = () => setIsUserPickerOpen(false)

    const openRoomAddWindow = () => setIsRoomAddWindowOpen(true)
    const closeRoomAddWindow = () => setIsRoomAddWindowOpen(false)

    return(
        <div className={classes.chat}>
            <div className={classes.userProfile}>
                <UserProfile user={currentUser} />
                <button onClick={openUserPicker}>
                    <img src="assets/picker.svg" alt="picker"/>
                </button>
            </div>
            <RoomPicker rooms={rooms} changeRoom={changeRoom} openRoomAddWindow={openRoomAddWindow}/>
            <Room room={currentRoom} selectedUser={currentUser}/>
            <InputForm addNewMessage={addNewMessage}/>

            <RoomAddWindow addNewRoom={addNewRoom} isOpen={isRoomAddWindowOpen} onClose={closeRoomAddWindow} />
            <UserPicker users={mock.users} changeUser={changeUser} isOpen={isUserPickerOpen} onClose={closeUserPicker}/>
        </div>
    )
}

export default Chat