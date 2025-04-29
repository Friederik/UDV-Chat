import { ChatRoom } from "../../interfaces/propTypes"

import classes from "./RoomPicker.module.scss"
import globalClasses from "../../styles/App.module.scss"
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
            <button 
                id="addRoomButton" 
                className={classes.roomAddButton} 
                onClick={() => props.openRoomAddWindow()}>
                <img className={globalClasses.icon_mini} src="/assets/new_add.svg" alt="add_room"/>
            </button>
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
        </section>
    )
}

export default RoomPicker