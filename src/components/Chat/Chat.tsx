import Room from "../Room/Room"
import * as mock from "../../data/mock"
import * as data from '../../data/storage'
import classes from './Chat.module.scss'
import RoomPicker from "../RoomPicker/RoomPicker"
import UserPicker from "../UserPicker/UserPicker"
import UserProfile from "../UserPicker/UserProfile"
import { ChatMessage } from "../../interfaces/propTypes"
import InputForm from "../Input/InputForm"
import RoomAddWindow from "../RoomPicker/RoomAddWindow"
import useChatRooms from "../../hooks/useChatRooms"
import useChatUsers from "../../hooks/useChatUsers"

const Chat = () => {
    const [
        currentRoom, setCurrentRoom,
        rooms, isRoomAddWindowOpen,
        openRoomAddWindow, closeRoomAddWindow,
        changeRoom, addNewRoom, removeRoom
    ] = useChatRooms(data.initialRoom)

    const [
        currentUser, setCurrentUser,
        users,
        changeUser,
        isUserPickerOpen,
        openUserPicker, closeUserPicker
    ] = useChatUsers(data.initialUser)

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
            <UserPicker users={users} changeUser={changeUser} isOpen={isUserPickerOpen} onClose={closeUserPicker}/>
        </div>
    )
}

export default Chat