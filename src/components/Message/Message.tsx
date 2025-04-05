import message from './Message.module.scss'

interface MessageProps {
    id: number
    author: string
    authorColor: string
    text: string
}

const now = new Date()

const Message = ( props: MessageProps ) => {
    return (
      <article className={message.body}>
        <header style={{backgroundColor: props.authorColor}} className={message.header}>
          <span>{props.author}</span>
          <span> {now.toLocaleTimeString()}</span>
        </header>
        <p>{props.text}</p>
      </article>
    );
  };

export default Message