import { useState } from "react";
import { ChatUser } from "../interfaces/propTypes";
import useChatLocalStorage, { ChatTypes } from "./useChatLocalStorage";

/**
 * Хук управления пользователем
 * @param initialUser Пользователь по умолчанию
 * @returns [ МНОГО ]
 */
const useChatUsers = (
    initialUser: ChatUser
): [
    ChatUser,
    Map<string, ChatUser>,
    React.Dispatch<React.SetStateAction<Map<string, ChatUser>>>,
    boolean,
    () => void,
    () => void,
    (userId: string) => void,
    (userName: string, password: string, color: string) => void
] => {
    const [ users, setUsers, currentUser, setCurrentUser ] = useChatLocalStorage(ChatTypes.Users, initialUser)
    const [ isUserPickerOpen, setIsUserPickerOpen ] = useState(true)

    /**
     * Смена пользователя
     * @param userId ID выбранного пользователя
     */
    const changeUser = (userId: string) => {
        const newUser = users.get(userId)
        if (newUser) {
            setCurrentUser(newUser)
        } 
        console.log(`Вы выбрали пользователя ${newUser?.id} ${newUser?.name}`)
    }

    /**
     * Добавляет нового пользователя
     * @param userName Имя пользователя
     * @param password Пароль пользователя
     * @param color Цвет пользователя
     */
    const addNewUser = (userName: string, password: string, color: string) => {
        if(!userName || !password || !color) return
        const newUser: ChatUser = {
            id: `u-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
            name: userName,
            password: password,
            color: color
        }
        setUsers(prev => {
            const newUsers = new Map(prev)
            const userFound = Array.from(newUsers.values()).map(user => user.name).includes(userName)

            console.log(!userFound)
            if (!userFound) {
                newUsers.set(newUser.id, newUser)
                localStorage.setItem('users', JSON.stringify(Array.from(newUsers.entries())))
                console.log(`Добавлен пользователь ${newUser.id} ${newUser.name}!`)
                setCurrentUser(newUser)
                return newUsers
            } else console.log("Такой пользователь уже есть")
            return prev
        })
    }

    const openUserPicker = () => setIsUserPickerOpen(true)
    const closeUserPicker = () => setIsUserPickerOpen(false)

    return [
        currentUser,
        users, setUsers, isUserPickerOpen,
        openUserPicker, closeUserPicker,
        changeUser, addNewUser
    ]
}

export default useChatUsers