import { useRef, useState } from "react"


const useChatInput = (): [
    string, React.Dispatch<React.SetStateAction<string>>,
    string, React.Dispatch<React.SetStateAction<string>>,
    React.RefObject<HTMLInputElement | null>, React.RefObject<HTMLInputElement | null>,
    boolean, boolean,
    () => void, () => void, () => void, () => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (emoji: string) => void,
    (e: React.ChangeEvent<HTMLInputElement>) => void
] => {
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

    const handleEmojiClick = (emoji: string) => {
        setInputValue(prev => prev + emoji)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
          const tempUrl = URL.createObjectURL(file);
          setMediaURL(tempUrl)
        }
    }

    return [
        inputValue, setInputValue,
        mediaURL, setMediaURL,
        inputRef, attachRef,
        isEmojiOpen, isSearchOpen,
        openEmojiPicker, closeEmojiPicker,
        openSearch, closeSearch,
        handleChange, 
        handleEmojiClick,
        handleFileChange
    ]
}

export default useChatInput