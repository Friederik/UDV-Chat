import { useRef, useState } from "react"

/**
 * Хук создания нового пользователя
 * @returns [ МНОГО ]
 */
const useCreateChatUser = (): [
    string, 
    string,
    string,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (newColor: string) => void,
    React.RefObject<HTMLInputElement | null>,
    React.RefObject<HTMLInputElement | null>,
    () => boolean
] => {
    const [ userName, setUserName ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')
    const [ userColor, setUserColor ] = useState('#0011ff')

    const userNameRef = useRef<HTMLInputElement | null>(null)
    const userPasswordRef = useRef<HTMLInputElement | null>(null)

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(event.target.value)
    }

    const handleColorChange = (newColor: string) => {
        setUserColor(newColor)
    }

    /**
     * Проверка на корректность данных пользователя
     * @returns `true`, если корректны, иначе `false`
     */
    const validationNewUser = () => {
        let flag = true
        const nameInput = userNameRef.current
        const passwordInput = userPasswordRef.current
        if (nameInput?.value === '') {
            nameInput.style.borderColor = 'red'
            flag = false
        }
        if (passwordInput?.value === '') {
            passwordInput.style.borderColor = 'red'
            flag = false
        }
        if (!flag) {
            console.log('Некорректные данные')
            return flag
        } else {
            if (nameInput) nameInput.style.borderColor = 'white'
            if (passwordInput) passwordInput.style.borderColor = 'white'
        }
        return flag
    }

    return [
        userName, userPassword, userColor,
        handleNameChange, handlePasswordChange, handleColorChange,
        userNameRef, userPasswordRef,
        validationNewUser
    ]
}

export default useCreateChatUser