import classes from './Room.module.scss'
import Message from '../Message/Message'
import { ChatRoom, ChatUser } from '../../interfaces/propTypes'

interface RoomProps {
    room: ChatRoom
    selectedUser: ChatUser
}

// function renderMessages(room: ChatRoom) {
//     if (room.messageHistory.length > 0) {
//         room.messageHistory.map(message => (
//             <Message 
//                 key={message.id} 
//                 message={message} 
//                 isActiveUser={props.selectedUser.id === message.user.id}
//             />
//         ))
//     }
// }

const Room = (props : RoomProps) => {
    return(
        <section className={classes.room}>
            { props.room.messageHistory.length > 0
            ? props.room.messageHistory.map(message => (
                <Message 
                    key={message.id} 
                    message={message} 
                    isActiveUser={props.selectedUser.id === message.user.id}
                />
            ))
            : <article className={classes.roomEmpty}>
                Тут Пусто!
            </article>
            }
        </section>
    )
}

export default Room
