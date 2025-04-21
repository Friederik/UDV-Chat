import { useEffect, useRef, useState } from "react"
import { ChatUser } from "../interfaces/propTypes"


const useChatUserManager = (): [
    string, React.Dispatch<React.SetStateAction<string>>,
    ChatUser | null, React.Dispatch<React.SetStateAction<ChatUser | null>>,
    React.RefObject<HTMLDialogElement | null>, React.RefObject<HTMLDivElement | null>, React.RefObject<HTMLDialogElement | null>,
    () => void, () => void, () => void, () => void
] => {
    const [ isCreateWindowOpen, setIsCreateWindowOpen ] = useState(false)
    const [ isCheckPasswordWindowOpen, setIsCheckPasswordWindowOpen ] = useState(false)
    const [ passwordCheckValue, setPasswordCheckValue ] = useState('')
    const [ checkingUser, setCheckingUser ] = useState<ChatUser | null>(null)
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    const createWindowRef = useRef<HTMLDivElement>(null)
    const checkPasswordRef = useRef<HTMLDialogElement | null>(null)
    
    const openCreateWindow = () => setIsCreateWindowOpen(true)
    const closeCreateWindow = () => setIsCreateWindowOpen(false)

    const openCheckPasswordWindow = () => setIsCheckPasswordWindowOpen(true)
    const closeCheckPasswordWindow = () => {
        setPasswordCheckValue('')
        setIsCheckPasswordWindowOpen(false)
    }

    useEffect(() => {
        if (isCreateWindowOpen) {
            if (createWindowRef.current) {
                createWindowRef.current.style.display = 'block'
            }
        } else {
            if (createWindowRef.current) {
                createWindowRef.current.style.display = 'none'
            }
        }
    }, [isCreateWindowOpen])

    useEffect(() => {
        if (checkPasswordRef.current) {
            if (isCheckPasswordWindowOpen) {
                checkPasswordRef.current.showModal()
            } else {
                checkPasswordRef.current.close()
            }
        }
    }, [isCheckPasswordWindowOpen])

    return [
        passwordCheckValue, setPasswordCheckValue,
        checkingUser, setCheckingUser,
        dialogRef, createWindowRef, checkPasswordRef,
        openCreateWindow, closeCreateWindow,
        openCheckPasswordWindow, closeCheckPasswordWindow
    ]
}

export default useChatUserManager