import messageHistory from './MessageHistory.module.scss'
import Message from '../Message/Message'
import { messages } from '../../data-test'

interface MessageHistoryProps {
    name: string
}

const MessageHistory = ( props : MessageHistoryProps) => {
    return(
        <section className={messageHistory.body}>
            {messages.map(message => <Message key={message.id} {...message}/>)}
        </section>
    )
}

export default MessageHistory
export type { MessageHistoryProps }