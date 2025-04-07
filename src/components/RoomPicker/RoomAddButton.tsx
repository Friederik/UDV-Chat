import classes from './RoomPicker.module.scss'

interface RoomAddButtonProps {
    addNewRoom: () => void
}

const RoomAddButton = (props: RoomAddButtonProps) => {
    return(
        <button className={classes.roomAddButton} onClick={() => props.addNewRoom()}>+</button>
    )
}

export default RoomAddButton