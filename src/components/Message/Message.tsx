import message from './Message.module.scss'

interface MessageProps {
    author: string
    authorColor: string
    text: string
}

const now = new Date()

const Message: React.FC<MessageProps> = ({ author, authorColor, text }) => {
    return (
      <article className={message.body}>
        <header style={{backgroundColor: authorColor}} className={message.header}>
          <span>{author}</span>
          <span> {now.toLocaleTimeString()}</span>
        </header>
        <p>{text}</p>
      </article>
    );
  };

export default Message