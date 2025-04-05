import classes from './MessageHistory.module.scss'
import Message from '../Message/Message'
import { RoomProps } from '../../utilities/propTypes'

const MessageHistory = (props : RoomProps) => {
    props.messageHistory.map(message => {
        message.activeUser = props.selectedUser
    })

    return(
        <section className={classes.messageHistory}>
            {props.messageHistory.map(message => <Message key={message.id} {...message}/>)}
        </section>
    )
}

export default MessageHistory
