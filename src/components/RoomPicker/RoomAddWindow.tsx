import { useEffect, useRef, useState } from "react"

interface RoomAddWindowProps {
    addNewRoom: (roomName: string) => void
    isOpen: boolean
    onClose: () => void
}

const RoomAddWindow = (props: RoomAddWindowProps) => {
    const [inputValue, setInputValue] = useState('')
    const roomAddWindowRef = useRef<HTMLDialogElement | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const addNewRoom = () => {
        if (inputValue.trim() !== '') {
            props.addNewRoom(inputValue)
            setInputValue('')
            props.onClose()
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            addNewRoom()
        }
    }

    useEffect(() => {
        if (roomAddWindowRef.current) {
            if (props.isOpen) {
                setInputValue(`Комната-${Math.floor(Date.now()/10000000000 * Math.random() * 9)}`)
                roomAddWindowRef.current.showModal()
            } else {
                roomAddWindowRef.current.close()
            }
        }
    }, [props.isOpen])

    return(
        <dialog ref={roomAddWindowRef}>
            <input 
                id="roomAddInput"
                type="text" 
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => addNewRoom()}>Добавить</button>
            <button onClick={props.onClose}>Закрыть</button>
        </dialog>
    )
}

export default RoomAddWindow