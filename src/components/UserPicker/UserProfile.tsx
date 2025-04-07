import { ChatUser } from "../../interfaces/propTypes"
import classes from './UserPicker.module.scss'

interface UserProfileProps {
    user: ChatUser
}

const UserProfile = (props: UserProfileProps) => {
    return(
        <div className={classes.userProfile}>
            <div className={classes.userAvatar} style={{backgroundColor: props.user.color}}></div>
            <h1>{props.user.name}</h1>
        </div>
    )
}

export default UserProfile