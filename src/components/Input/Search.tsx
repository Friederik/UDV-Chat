import { useEffect, useRef } from "react"
import classes from "./Input.module.scss"

interface SearchProps {
    isOpen: boolean
    searchValue: string
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    ereaseSearch: () => void
}

const Search = (props: SearchProps) => {
    const searchRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (searchRef.current) {
            if (props.isOpen) {
                searchRef.current.show()
            } else {
                searchRef.current.close()
            }
        }
    }, [props.isOpen])

    return(
        <dialog ref={searchRef} className={classes.inputDialog}>
            <div className={classes.search}>
                <input 
                    type="text" 
                    name="search-area" 
                    id="search-area" 
                    value={props.searchValue}
                    onChange={props.handleSearchChange}
                />
                <button onClick={props.ereaseSearch}>×</button>
            </div>
        </dialog>
    )
}

export default Search
