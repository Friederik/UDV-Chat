import { useState } from "react";
import { ChatUser } from "../interfaces/propTypes";
import useChatLocalStorage, { ChatTypes } from "./useChatLocalStorage";

const useChatUsers = (
    initialUser: ChatUser
): [
    ChatUser,
    React.Dispatch<React.SetStateAction<ChatUser>>,
    Map<string, ChatUser>,
    (userId: string) => void,
    boolean,
    () => void,
    () => void
] => {
    const [ users, setUsers, currentUser, setCurrentUser ] = useChatLocalStorage(ChatTypes.Users, initialUser)
    const [ isUserPickerOpen, setIsUserPickerOpen ] = useState(false)


    const changeUser = (userId: string) => {
        const newUser = users.get(userId)
        if (newUser) {
            setCurrentUser(newUser)
        } 
        console.log(users.get(userId))
    }

    const openUserPicker = () => setIsUserPickerOpen(true)
    const closeUserPicker = () => setIsUserPickerOpen(false)

    return [
        currentUser, setCurrentUser,
        users,
        changeUser,
        isUserPickerOpen,
        openUserPicker, closeUserPicker
    ]
}

export default useChatUsers