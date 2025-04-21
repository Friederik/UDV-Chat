import { ChatRoom } from "../../interfaces/propTypes"
import classes from "./RoomPicker.module.scss"

interface RoomTabProps {
    room: ChatRoom
    changeRoom: (roomId: string) => void
    removeRoom: (roomId: string) => void
}

const RoomTab = (props: RoomTabProps) => {
    return(
        <article id={props.room.id} className={classes.roomTab}>
            <button id={`name-${props.room.id}`} onClick={() => props.changeRoom(props.room.id)}>
                {props.room.name}
            </button>
            <button id={`close-${props.room.id}`} onClick={() => props.removeRoom(props.room.id)}>
                &times;
            </button>
        </article>
    )
}

export default RoomTab