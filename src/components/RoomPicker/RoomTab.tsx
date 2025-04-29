import { ChatRoom } from "../../interfaces/propTypes"
import classes from "./RoomPicker.module.scss"
import globalClasses from "../../styles/App.module.scss"

interface RoomTabProps {
    room: ChatRoom
    changeRoom: (roomId: string) => void
    removeRoom: (roomId: string) => void
}

const RoomTab = (props: RoomTabProps) => {
    return(
        <article id={props.room.id} className={classes.roomTab}>
            <button className={classes.tab_name} id={`name-${props.room.id}`} onClick={() => props.changeRoom(props.room.id)}>
                {props.room.name}
            </button>
            <button className={classes.tab_delete} id={`close-${props.room.id}`} onClick={() => props.removeRoom(props.room.id)}>
                <img className={globalClasses.icon_mini} src="/assets/new_delete.svg" alt="delete_room"/>
            </button>
        </article>
    )
}

export default RoomTab