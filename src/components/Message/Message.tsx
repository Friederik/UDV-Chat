import { ChatMessage } from '../../interfaces/propTypes'
import classes from './Message.module.scss'

interface MessageProps {
  message: ChatMessage
  isActiveUser: boolean
  addReplyMessage?: (messageId: string) => void
}

const Message = ( props: MessageProps ) => {
    const dateStr = props.message.timestamp
    const date = new Date(dateStr)   

    return (
      <article onDoubleClick={() => props.addReplyMessage && props.addReplyMessage(props.message.id)} className={`${classes.message} ${props.isActiveUser ? classes['message--active'] : ''}`}>
        <header style={{backgroundColor: props.message.user.color}} className={classes.message__header}>
          <span>{props.message.user.name}</span>
          <span> {date.toLocaleTimeString()}</span>
        </header>  
        {props.message.reply && 
          <Message
            key={`reply-${props.message.id}`} 
            message={props.message.reply} 
            isActiveUser={false}  
          />
        }      
        {props.message.text && <p className={classes.message__p}>{props.message.text}</p>}
        {props.message.mediaURL &&
          <img 
            src={props.message.mediaURL}
            className={classes.message__p} 
            alt="media" 
            style={{width: "90%"}}
            onError={(e) => {
              e.currentTarget.outerHTML = `<p class=${classes.message__p}>🔥 Картинка сгорела</p>`
            }}
          />
        }
      </article>
    )
}

export default Message