import { useEffect, useRef } from "react"
import classes from './UserPicker.module.scss'
import { ChatUser } from "../../interfaces/propTypes"
import UserProfile from "./UserProfile"


interface UserPickerProps {
    users: Map<string, ChatUser>
    changeUser: (userId: string) => void
    isOpen: boolean
    onClose: () => void
}

const UserPicker = (props: UserPickerProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

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
            <div >
                <nav style={{marginLeft: 0, marginRight: "auto"}}>
                    {Array.from(props.users).map(([userId, user]) => 
                        <button key={userId} onClick={() => { 
                            props.changeUser(userId) 
                            props.onClose()
                            }}>
                            <UserProfile user={user}/>
                        </button>
                    )}
                </nav>
                <button onClick={props.onClose}>Закрыть</button>
            </div>
        </dialog>
    )
}

export default UserPicker