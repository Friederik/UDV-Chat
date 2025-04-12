import { useState } from 'react'
import classes from './Input.module.scss'

interface InputFormProps {
    addNewMessage: (newMessage: { text: string }) => void
}

const InputForm = (props: InputFormProps) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            sendMessage()
        }
    }

    const sendMessage = () => {
        if (inputValue.trim() !== '') {
            props.addNewMessage({text: inputValue})
            setInputValue('')
        }
    }

    return (
        <div className={classes.input}>
            <input
                id='inputMessage' 
                className={classes.input__message}
                type="text" 
                name="type-message-field"
                autoComplete="off"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder='Введите сообщение'
            />
            <button>
                <img src="assets\smile.svg" alt="emoji" onClick={() => console.log("Выбор эмоции")}/>
            </button>
            <button>
                <img src="assets\attach.svg" alt="emoji" onClick={() => console.log("Выбор эмоции")}/>
            </button>
            <button>
                <img src="assets\search.svg" alt="emoji" onClick={() => console.log("Выбор эмоции")}/>
            </button>
            <button>
                <img src="assets\send.svg" alt="emoji" onClick={() => sendMessage()}/>
            </button>
        </div>
    )
}

export default InputForm