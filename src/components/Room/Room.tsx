import classes from './Room.module.scss'
import Message from '../Message/Message'
import { ChatRoom, ChatUser } from '../../interfaces/propTypes'

interface RoomProps {
    room: ChatRoom
    selectedUser: ChatUser
    searchValue: string
}

const Room = (props : RoomProps) => {
    return(
        <section className={classes.room}>
            { props.room.messageHistory.length > 0
            ? props.room.messageHistory.map(message => {
                if (message.text) {
                    if (props.searchValue === '' || message.text.toLowerCase().includes(props.searchValue.toLocaleLowerCase())) return (
                        <Message 
                            key={message.id} 
                            message={message} 
                            isActiveUser={props.selectedUser.id === message.user.id}
                        />
                    )
                } else if (message.mediaURL) {
                    if (props.searchValue === '') return (
                        <Message 
                            key={message.id} 
                            message={message} 
                            isActiveUser={props.selectedUser.id === message.user.id}
                        />
                    )
                }
            })
            : <article className={classes.roomEmpty}>
                Тут Пусто!
            </article>
            }
        </section>
    )
}

export default Room
