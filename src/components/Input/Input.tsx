import { useState } from 'react'
import classes from './Input.module.scss'

const Input = () => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const sendMessage = () => {
        console.log(inputValue)
    }

    return (
        <div className={classes.input}>
            <input
                id='inputMessage' 
                className={classes.input__message}
                type="text" 
                value={inputValue}
                onChange={handleChange}
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

export default Input