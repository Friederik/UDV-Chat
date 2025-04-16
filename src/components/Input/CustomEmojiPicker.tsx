import { useEffect, useRef } from "react"
import classes from "./Input.module.scss"
import { customEmojis } from "../../data/storage"

interface CustomEmojiPickerProps {
    isOpen: boolean
    handleEmojiClick: (emoji: string) => void
}

const CustomEmojiPicker = (props: CustomEmojiPickerProps) => {
    const emojiPickerRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (emojiPickerRef.current) {
            if (props.isOpen) {
                emojiPickerRef.current.show()
            } else {
                emojiPickerRef.current.close()
            }
        }
    }, [props.isOpen])

    return(
        <dialog ref={emojiPickerRef} className={classes.inputDialog}>
            <div className={classes.emojis}>
                {
                    customEmojis.map(emoji => (
                        <button key={emoji.id} id={emoji.id} onClick={() => props.handleEmojiClick(emoji.src)}>{emoji.src}</button>
                    ))
                }
            </div>
        </dialog>
    )
}

export default CustomEmojiPicker
