import { useEffect, useState } from "react"
import { ChatMessage } from "../interfaces/propTypes"

const useChatUtilities = (): [
    string,
    React.Dispatch<React.SetStateAction<string>>,
    ChatMessage | null,
    React.Dispatch<React.SetStateAction<ChatMessage | null>>,
    () => void
] => {
    const [ searchValue, setSearchValue ] = useState('')
    const [ replyMessage, setReplyMessage ] = useState<ChatMessage | null>(null)

    /**
     * Очищает ответ
     */
    const removeReplyMessage = () => {
        setReplyMessage(null)
    }

    /**
     * Отмена Esc
     */
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault()
            }
        }
    
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return [
        searchValue, setSearchValue,
        replyMessage, setReplyMessage,
        removeReplyMessage
    ]
}

export default useChatUtilities