import Room from "../Room/Room"
import Input from "../Input/Input"
import * as data from "../../data/mock"
import { useState } from "react"
import classes from './Chat.module.scss'
import RoomPicker from "../RoomPicker/RoomPicker"
import UserPicker from "../UserPicker/UserPicker"
import UserProfile from "../UserPicker/UserProfile"

const Chat = () => {
    const [currentRoom, setCurrentRoom] = useState(data.room1)
    const [currentUser, setCurrentUser] = useState(data.user1)
    const [isUserPickerOpen, setIsUserPickerOpen] = useState<boolean>(false)

    function changeUser(userId: string): void {
        const newUser = data.users.get(userId)
        if (newUser) {
            setCurrentUser(newUser)
        } 
    }

    function changeRoom(roomId: string): void {
        const newRoom = data.rooms.get(roomId)
        if(newRoom) {
            setCurrentRoom(newRoom)
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
            <RoomPicker rooms={data.rooms} changeRoom={changeRoom} />
            <UserPicker users={data.users} changeUser={changeUser} isOpen={isUserPickerOpen} onClose={closeUserPicker}/>
            <Room room={currentRoom} selectedUser={currentUser}/>
            <Input/>
            
        </div>
    )
}

export default Chat