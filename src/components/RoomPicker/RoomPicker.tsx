import { ChatRoom } from "../../interfaces/propTypes"
import RoomAddButton from "./RoomAddButton"
import classes from "./RoomPicker.module.scss"
import RoomTab from "./RoomTab"

interface RoomPickerProps {
    rooms: Map<string, ChatRoom>
    changeRoom: (roomId: string) => void
    addNewRoom: () => void
}

const RoomPicker = (props: RoomPickerProps) => {
    return(
        <div className={classes.roomPicker}>
            <nav className={classes.roomPickerScroll}>
                {Array.from(props.rooms).map(([roomId, room]) => 
                    <RoomTab key={roomId} room={room} changeRoom={props.changeRoom}/>
                )}
            </nav>
            <RoomAddButton addNewRoom={props.addNewRoom}/>
        </div>
    )
}

export default RoomPicker