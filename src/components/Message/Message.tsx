import { MessageProps } from '../../utilities/propTypes'
import classes from './Message.module.scss'

const Message = ( props: MessageProps ) => {
    const isActive = props.user.id === props.activeUser.id

    const now = new Date()   

    return (
      <article className={`${classes.message} ${isActive ? classes['message--active'] : ''}`}>
        <header style={{backgroundColor: props.user.color}} className={classes.message__header}>
          <span>{props.user.name}</span>
          <span> {now.toLocaleTimeString()}</span>
        </header>
        <p className={classes.message__p}>{props.text}</p>
      </article>
    )
}

export default Message