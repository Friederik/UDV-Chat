import Room from "../Room/Room"
import Input from "../Input/Input"
import * as data from "../../data/mock"
import { useState } from "react"
import classes from './Chat.module.scss'
import RoomPicker from "../RoomPicker/RoomPicker"

const Chat = () => {
    const [currentRoom, setCurrentRoom] = useState(data.room1)
    const [currentUser, setCurrentUser] = useState(data.user1)

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

    return(
        <div className={classes.chat}>
            <nav style={{marginLeft: 0, marginRight: "auto"}}>
                {Array.from(data.users).map(([key, value]) => 
                    <button key={key} onClick={() => changeUser(key)}>
                        {value.name}
                    </button>) }
            </nav>
            <RoomPicker rooms={data.rooms} changeRoom={changeRoom} />
            <Room room={currentRoom} selectedUser={currentUser}/>
            <Input/>
        </div>
    )
}

export default Chat