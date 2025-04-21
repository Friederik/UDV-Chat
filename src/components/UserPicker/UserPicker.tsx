import { useEffect } from "react"
import classes from './UserPicker.module.scss'
import { ChatUser } from "../../interfaces/propTypes"
import UserProfile from "./UserProfile"
import UserAddWindow from "./UserAddWindow"
import CheckPasswordWindow from "./CheckPasswordWindow"
import useChatUserManager from "../../hooks/useChatUserManager"


interface UserPickerProps {
    users: Map<string, ChatUser>
    currentUser: ChatUser
    changeUser: (userId: string) => void
    addNewUser: (userName: string, password: string, color: string) => void
    isOpen: boolean
    onClose: () => void
}
const UserPicker = (props: UserPickerProps) => {
    const [
        passwordCheckValue, setPasswordCheckValue,
        checkingUser, setCheckingUser,
        dialogRef, createWindowRef, checkPasswordRef,
        openCreateWindow, closeCreateWindow,
        openCheckPasswordWindow, closeCheckPasswordWindow
    ] = useChatUserManager()

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
                        setCheckingUser(user)
                        openCheckPasswordWindow()
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
            <CheckPasswordWindow
                currentCheckingUser={checkingUser}
                passwordCheckValue={passwordCheckValue}
                setPasswordCheckValue={setPasswordCheckValue}
                checkPasswordRef={checkPasswordRef}
                closeCheckPasswordWindow={closeCheckPasswordWindow}
                changeUser={props.changeUser}
                closeUserPicker={() => {
                    props.onClose()
                    closeCreateWindow()
                }}
            />
        </dialog>
    )
}

export default UserPicker