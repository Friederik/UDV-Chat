import { useRef, useState } from 'react'
import classes from './Input.module.scss'
import CustomEmojiPicker from './CustomEmojiPicker'
import Search from './Search'

interface InputFormProps {
    addNewMessage: (newMessage: { text: string, mediaURL: string }) => void
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const InputForm = (props: InputFormProps) => {
    const [ inputValue, setInputValue ] = useState('')
    const [ mediaURL, setMediaURL ] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const attachRef = useRef<HTMLInputElement>(null)

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
        if (mediaURL || inputValue.trim() !== '') {
            props.addNewMessage({text: inputValue, mediaURL: mediaURL})
            setInputValue('')
            setMediaURL('')

            closeEmojiPicker()
            console.log(inputValue)
            console.log(mediaURL)
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
          const tempUrl = URL.createObjectURL(file);
          setMediaURL(tempUrl)
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
                <img src="/assets/smile.svg" alt="emoji" onClick={() => {
                    isEmojiOpen ? closeEmojiPicker() : openEmojiPicker()
                }}/>
            </button>
            <input
                id="file"
                type="file"
                accept="image/*"
                ref={attachRef}
                onChange={handleFileChange}
                style={{display: 'none'}}
            />
            <button onClick={() => inputRef.current?.click()}>
                <label htmlFor="file">
                    <img src="/assets/attach.svg" alt="attach" />
                </label>
            </button>
            <button>
                <img src="/assets/search.svg" alt="search" onClick={() => {
                    isSearchOpen ? closeSearch() : openSearch()
                }}/>
            </button>
            <button>
                <img src="/assets/send.svg" alt="send" onClick={() => sendMessage()}/>
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