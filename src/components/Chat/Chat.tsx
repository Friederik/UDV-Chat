import MessageHistory from "../MessageHistory/MessageHistory"
import Input from "../Input/Input"
import * as data from "../../utilities/data-test"
import { useState } from "react"
import classes from './Chat.module.scss'

const Chat = () => {
    const [currentUser, setCurrentUser] = useState(data.user1)

    function changeUser(userid: string): void {
        const user = data.users.get(userid)
        if (user) setCurrentUser(user)
    }

    return(
        <div className={classes.chat}>
            <nav style={{marginLeft: 0, marginRight: "auto"}}>
                {Array.from(data.users).map(([key, value]) => 
                    <button onClick={() => changeUser(key)}>
                        {value.name}
                    </button>) }
            </nav>
            <MessageHistory 
                selectedUser={currentUser}
                messageHistory={data.room1.messageHistory}
            />
            <Input/>
        </div>
    )
}

export default Chat