import classes from './Room.module.scss'
import Message from '../Message/Message'
import { ChatRoom, ChatUser } from '../../interfaces/propTypes'
import { useEffect, useRef } from 'react'

interface RoomProps {
    room: ChatRoom
    selectedUser: ChatUser
    searchValue: string
    addReplyMessage: (messageId: string) => void
}

const Room = (props : RoomProps) => {
    const chatContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const chat = chatContainerRef.current
        if (chat) {
            chat.scrollTop = chat.scrollHeight
        }
    }, [props.room])

    return(
        <section id='currentRoom' ref={chatContainerRef} className={classes.room}>
            { props.room.messageHistory.length > 0
            ? props.room.messageHistory.map(message => {
                if (message.text) {
                    if (props.searchValue === '' || message.text.toLowerCase().includes(props.searchValue.toLocaleLowerCase())) return (
                        <Message 
                            key={message.id} 
                            message={message} 
                            isActiveUser={props.selectedUser.id === message.user.id}
                            addReplyMessage={props.addReplyMessage}
                        />
                    )
                } else if (message.mediaURL) {
                    if (props.searchValue === '') return (
                        <Message 
                            key={message.id} 
                            message={message} 
                            isActiveUser={props.selectedUser.id === message.user.id}
                            addReplyMessage={props.addReplyMessage}
                        />
                    )
                }
            })
            : <article className={classes.roomEmpty}>
                Пока тут пусто 👋
            </article>
            }
        </section>
    )
}

export default Room
