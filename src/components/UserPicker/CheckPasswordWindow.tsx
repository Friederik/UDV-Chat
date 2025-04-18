import { ChatUser } from "../../interfaces/propTypes"

interface CheckPasswordProps {
    currentCheckingUser: ChatUser | null
    passwordCheckValue: string
    setPasswordCheckValue: React.Dispatch<React.SetStateAction<string>>
    checkPasswordRef: React.RefObject<HTMLDialogElement | null>
    closeCheckPasswordWindow: () => void
    changeUser: (userId: string) => void    
    closeUserPicker: () => void
}

const CheckPasswordWindow = (props: CheckPasswordProps) => {

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setPasswordCheckValue(event.target.value)
        console.log(event.target.value)
    }

    return(
        <dialog ref={props.checkPasswordRef}>
            <input 
                type="password" 
                value={props.passwordCheckValue}
                onChange={handlePasswordChange}
            />
            <button onClick={() => {
                if (props.currentCheckingUser?.password === props.passwordCheckValue) {
                    props.changeUser(props.currentCheckingUser.id)
                    props.closeCheckPasswordWindow()
                    props.closeUserPicker()
                }
            }}>Войти</button>
            <button onClick={() => props.closeCheckPasswordWindow()}>Закрыть</button>
        </dialog>
    )
}

export default CheckPasswordWindow