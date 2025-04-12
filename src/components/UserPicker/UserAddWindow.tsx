import useCreateChatUser from "../../hooks/useCreateChatUser"
import { HexColorPicker } from "react-colorful"

interface UserAddWindowProps {
    addNewUser: (userName: string, password: string, color: string) => void
    onClick: () => void
    createWindowRef: React.RefObject<HTMLDivElement | null>,
    openCreateWindow: () => void,
    closeCreateWindow: () => void
}

const UserAddWindow = (props: UserAddWindowProps) => {
    const [
        userName, userPassword, userColor,
        handleNameChange, handlePasswordChange, handleColorChange,
        userNameRef, userPasswordRef,
        validationNewUser,
    ] = useCreateChatUser()

    return(
        <div>
            <button onClick={props.openCreateWindow}>+</button>
            <main ref={props.createWindowRef}>
                <input 
                    ref={userNameRef}
                    id="nameInput"
                    type="text" 
                    placeholder="Имя"
                    value={userName}
                    onChange={handleNameChange}
                />
                <input 
                    ref={userPasswordRef}
                    id="passwordInput"
                    type="text" 
                    placeholder="Пароль"
                    value={userPassword}
                    onChange={handlePasswordChange}
                />
                <div style={{ backgroundColor:userColor, display: 'inline-block', padding: '0.4rem', border: '0.2rem white solid' }}>
                    0⏟0
                </div>
                <HexColorPicker
                    color={userColor}
                    onChange={handleColorChange}
                    style={{
                        border: '2px solid #ddd',
                        borderRadius: '12px',
                        padding: '15px',
                        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                    }}
                />
                <button onClick={() => {
                    if (validationNewUser()) {
                        props.addNewUser(userName, userPassword, userColor)
                        props.onClick()
                        props.closeCreateWindow()
                    }
                }}>
                    Добавить
                </button>
            </main>
        </div>
    )
}

export default UserAddWindow