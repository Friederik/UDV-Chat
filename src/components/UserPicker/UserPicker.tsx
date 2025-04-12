import { useEffect, useRef, useState } from "react"
import classes from './UserPicker.module.scss'
import { ChatUser } from "../../interfaces/propTypes"
import UserProfile from "./UserProfile"
import UserAddWindow from "./UserAddWindow"


interface UserPickerProps {
    users: Map<string, ChatUser>
    changeUser: (userId: string) => void
    addNewUser: (userName: string, password: string, color: string) => void
    isOpen: boolean
    onClose: () => void
}
const UserPicker = (props: UserPickerProps) => {
    const [ isCreateWindowOpen, setIsCreateWindowOpen ] = useState(false)
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    const createWindowRef = useRef<HTMLDivElement>(null)
    
    const openCreateWindow = () => setIsCreateWindowOpen(true)
    const closeCreateWindow = () => setIsCreateWindowOpen(false)

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
        if (dialogRef.current) {
            if (props.isOpen) {
                dialogRef.current.showModal()
            } else {
                dialogRef.current.close()
            }
        }
    }, [props.isOpen])
    
    return(
        <dialog className={classes.userPicker} ref={dialogRef}>
            <nav style={{marginLeft: 0, marginRight: "auto"}}>
                {Array.from(props.users).map(([userId, user]) => 
                    <button key={userId} onClick={() => { 
                        props.changeUser(userId) 
                        props.onClose()
                        closeCreateWindow()
                        }}>
                        <UserProfile user={user}/>
                    </button>
                )}
            </nav>
            <nav style={{display:"flex", flexDirection: "column", margin: '0.5rem auto'}}>
                <UserAddWindow 
                    addNewUser={props.addNewUser} 
                    onClick={props.onClose}
                    createWindowRef={createWindowRef}
                    openCreateWindow={openCreateWindow}
                    closeCreateWindow={closeCreateWindow}
                />
                <button onClick={() => {
                    props.onClose()
                    closeCreateWindow()
                }}>Закрыть</button>
            </nav>
        </dialog>
    )
}

export default UserPicker