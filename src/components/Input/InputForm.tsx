import classes from './Input.module.scss'
import globalClasses from '../../styles/App.module.scss'
import CustomEmojiPicker from './CustomEmojiPicker'
import Search from './Search'
import { ChatMessage } from '../../interfaces/propTypes'
import useChatInput from '../../hooks/useChatInput'

interface InputFormProps {
    addNewMessage: (newMessage: { text: string, mediaURL: string }) => void
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    replyMessage: ChatMessage | null
}

const InputForm = (props: InputFormProps) => {
    const [
        inputValue, setInputValue,
        mediaURL, setMediaURL,
        inputRef, attachRef,
        isEmojiOpen, isSearchOpen,
        openEmojiPicker, closeEmojiPicker,
        openSearch, closeSearch,
        handleChange, 
        handleEmojiClick,
        handleFileChange
    ] = useChatInput()

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

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchValue(event.target.value)
    }

    const ereaseSearch = () => {
        props.setSearchValue('')
    }

    return (
        <>
            {props.replyMessage && <article>{props.replyMessage.user.name}</article>}
            <section id='input' className={classes.input}>
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
                <button id='emojiButton'>
                    <img className={globalClasses.icon} src="/assets/new_smile.svg" alt="emoji" onClick={() => {
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
                <button id='fileAttachButton' onClick={() => inputRef.current?.click()}>
                    <label htmlFor="file">
                        <img className={globalClasses.icon} src="/assets/new_attach.svg" alt="attach" />
                    </label>
                </button>
                <button id='searchButton'>
                    <img className={globalClasses.icon} src="/assets/new_search.svg" alt="search" onClick={() => {
                        isSearchOpen ? closeSearch() : openSearch()
                    }}/>
                </button>
                <button id='sendButton' className={inputValue ? classes.sendActive : ''}>
                    <img className={globalClasses.icon} src="/assets/new_send.svg" alt="send" onClick={() => sendMessage()}/>
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
            </section>
        </>
        
    )
}
export default InputForm