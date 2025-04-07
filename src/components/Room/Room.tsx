import classes from './Room.module.scss'
import Message from '../Message/Message'
import { ChatRoom, ChatUser } from '../../interfaces/propTypes'

interface RoomProps {
    room: ChatRoom
    selectedUser: ChatUser
}

const Room = (props : RoomProps) => {
    return(
        <section className={classes.room}>
            {props.room.messageHistory.map(message => (
                <Message 
                    key={message.id} 
                    message={message} 
                    isActiveUser={props.selectedUser.id === message.user.id}
                />
            ))}
        </section>
    )
}

export default Room
