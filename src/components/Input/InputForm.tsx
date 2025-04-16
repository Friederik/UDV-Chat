import { useRef, useState } from 'react'
import classes from './Input.module.scss'
import CustomEmojiPicker from './CustomEmojiPicker'
import Search from './Search'

interface InputFormProps {
    addNewMessage: (newMessage: { text: string }) => void
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const InputForm = (props: InputFormProps) => {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const [ isEmojiOpen, setIsEmojiOpen ] = useState(false)

    const [ isSearchOpen, setIsSearchOpen ] = useState(false)

    const openEmojiPicker = () => {
        setIsEmojiOpen(true)
        
        setIsSearchOpen(false)
    }
    const closeEmojiPicker = () => setIsEmojiOpen(false)

    const openSearch = () => {
        setIsSearchOpen(true)

        setIsEmojiOpen(false)
    }
    const closeSearch = () => setIsSearchOpen(false)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchValue(event.target.value)
    }

    const ereaseSearch = () => {
        props.setSearchValue('')
    }

    const handleEmojiClick = (emoji: string) => {
        setInputValue(prev => prev + emoji)
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
            closeEmojiPicker()

            console.log(inputValue)
        }
    }

    return (
        <div className={classes.input}>
            <input
                ref={inputRef}
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
                <img src="assets\smile.svg" alt="emoji" onClick={() => {
                    isEmojiOpen ? closeEmojiPicker() : openEmojiPicker()
                }}/>
            </button>
            <button>
                <img src="assets\attach.svg" alt="attach" />
            </button>
            <button>
                <img src="assets\search.svg" alt="search" onClick={() => {
                    isSearchOpen ? closeSearch() : openSearch()
                }}/>
            </button>
            <button>
                <img src="assets\send.svg" alt="send" onClick={() => sendMessage()}/>
            </button>
            
            <CustomEmojiPicker
                isOpen={isEmojiOpen}
                handleEmojiClick={handleEmojiClick}
            />

            <Search
                isOpen={isSearchOpen}
                searchValue={props.searchValue}
                handleSearchChange={handleSearchChange}
                ereaseSearch={ereaseSearch}
            />
        </div>
    )
}
export default InputForm