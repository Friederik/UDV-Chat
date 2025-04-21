import { ChatRoom } from "../../interfaces/propTypes"

import classes from "./RoomPicker.module.scss"
import RoomTab from "./RoomTab"

interface RoomPickerProps {
    rooms: Map<string, ChatRoom>
    changeRoom: (roomId: string) => void
    openRoomAddWindow: () => void
    removeRoom: (roomId: string) => void
}

const RoomPicker = (props: RoomPickerProps) => {
    return(
        <section id="roomPicker" className={classes.roomPicker}>
            <nav id="rooms" className={classes.roomPickerScroll}>
                {Array.from(props.rooms).map(([roomId, room]) => 
                    <RoomTab 
                        key={roomId} 
                        room={room} 
                        changeRoom={props.changeRoom}
                        removeRoom={props.removeRoom}
                    />
                )}
            </nav>
            <button 
                id="addRoomButton" 
                className={classes.roomAddButton} 
                onClick={() => props.openRoomAddWindow()}
            >+</button>
        </section>
    )
}

export default RoomPicker