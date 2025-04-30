import classes from "./UserPicker.module.scss";
import globalClasses from "../../styles/App.module.scss"
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
            <button id="userChangeButton" style={{borderRadius: '0.4rem'}} onClick={props.openUserPicker}>
                <img className={globalClasses.icon} src="/assets/new_picker.svg" alt="picker"/>
            </button>
            <button id="eraseLocalStorageButton" className={classes.resetBtn} style={{borderRadius: '0.4rem'}} onClick={props.clearStorage}>
                <img className={globalClasses.icon} src="/assets/new_reboot.svg" alt="picker"/>
            </button>
        </section>
    )
}

export default UserManager