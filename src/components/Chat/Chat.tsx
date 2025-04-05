import MessageHistory from "../MessageHistory/MessageHistory"
import * as data from "../../utilities/data-test"
import { useState } from "react"
import classes from './Chat.module.scss'

const Chat = () => {
    const [currentUser, setCurrentUser] = useState(data.user1)

    function changeUser(userName: string): void {
        if (userName === data.user1.name) {
            setCurrentUser(data.user1)
        } else if (userName === data.user2.name) {
            setCurrentUser(data.user2)
        } else if (userName === data.user3.name) {
            setCurrentUser(data.user3)
        }
    }

    return(
        <div className={classes.body}>
            <button onClick={() => changeUser('Илья')}>Илья</button>
            <button onClick={() => changeUser('Анна')}>Анна</button>
            <button onClick={() => changeUser('Валентин')}>Валентин</button>
            <MessageHistory 
                selectedUser={currentUser}
                messageHistory={data.room1.messageHistory}
            />
        </div>
    )
}

export default Chat