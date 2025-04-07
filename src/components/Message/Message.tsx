import { ChatMessage } from '../../interfaces/propTypes'
import classes from './Message.module.scss'

interface MessageProps {
  message: ChatMessage
  isActiveUser: boolean
}

const Message = ( props: MessageProps ) => {
    const dateStr = props.message.timestamp
    const date = new Date(dateStr)   

    return (
      <article onDoubleClick={() => console.log(props.message.id)} className={`${classes.message} ${props.isActiveUser ? classes['message--active'] : ''}`}>
        <header style={{backgroundColor: props.message.user.color}} className={classes.message__header}>
          <span>{props.message.user.name}</span>
          <span> {date.toLocaleTimeString()}</span>
        </header>
        <p className={classes.message__p}>{props.message.text}</p>
      </article>
    )
}

export default Message