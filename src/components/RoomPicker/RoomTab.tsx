import { ChatRoom } from "../../interfaces/propTypes"
import classes from "./RoomPicker.module.scss"

interface RoomTabProps {
    room: ChatRoom
    changeRoom: (roomId: string) => void
}

const RoomTab = (props: RoomTabProps) => {
    return(
        <button className={classes.roomTab} onClick={() => props.changeRoom(props.room.id)}>
            {props.room.name}
        </button>
    )
}

export default RoomTab