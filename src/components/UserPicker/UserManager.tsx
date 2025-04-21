import classes from "./UserPicker.module.scss";
import UserProfile from "./UserProfile";
import { ChatUser } from "../../interfaces/propTypes";

interface UserManagerProps {
    currentUser: ChatUser
    openUserPicker: () => void
    clearStorage: () => void
}

const UserManager = (props: UserManagerProps) => {
    return (
        <section id="userManager" className={classes.userManager}>
            <UserProfile user={props.currentUser} />
            <button id="userChangeButton" onClick={props.openUserPicker}>
                <img src="/assets/picker.svg" alt="picker"/>
            </button>
            <button id="eraseLocalStorageButton" style={{backgroundColor: 'red'}} onClick={props.clearStorage}>
                <img src="/assets/picker.svg" alt="picker"/>
            </button>
        </section>
    )
}

export default UserManager