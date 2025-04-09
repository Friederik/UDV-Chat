import { ChatRoom } from "../../interfaces/propTypes"
import classes from "./RoomPicker.module.scss"

interface RoomTabProps {
    room: ChatRoom
    changeRoom: (roomId: string) => void
    removeRoom: (roomId: string) => void
}

const RoomTab = (props: RoomTabProps) => {
    return(
        <article className={classes.roomTab}>
            <button onClick={() => props.changeRoom(props.room.id)}>
                {props.room.name}
            </button>
            <button onClick={() => props.removeRoom(props.room.id)}>
                &times;
            </button>
        </article>
    )
}

export default RoomTab