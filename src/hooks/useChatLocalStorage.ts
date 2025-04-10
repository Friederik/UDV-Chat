import { useEffect, useState } from "react";

export enum ChatTypes {
    Rooms = 'rooms',
    Users = 'users'
}

/**
 * Хук для данных пользователей и комнат
 * @param key Ключ, для типа данных
 * @param initialItem Элемент по умолчанию
 */
function useChatLocalStorage<T extends { id: string }>(
    key: ChatTypes, 
    initialItem: T
): [
    Map<string, T>,
    React.Dispatch<React.SetStateAction<Map<string, T>>>,
    T,
    React.Dispatch<React.SetStateAction<T>>
] {
    const [items, setItems] = useState<Map<string, T>>(() => {
        const stored = localStorage.getItem(key)
        console.log(stored)
        if (stored) {
            return new Map<string, T>(JSON.parse(stored))
        }
        return new Map([])
    })

    const [currentItem, setCurrentItem] = useState(() => {
        const stored = Array.from(items)
        if (stored && stored.length > 0) {
            return stored[0][1]
        }
        setItems(new Map(items.set(initialItem.id, initialItem)))
        return initialItem
    })

    useEffect(() => {
        if (!currentItem) return

        setItems(prev => {
            const newItems = new Map(prev)
            setItems(new Map(newItems.set(currentItem.id, currentItem)))
            localStorage.setItem(key, JSON.stringify(Array.from(newItems.entries())))
            return newItems
        })
    }, [currentItem])

    useEffect(() => {
        const stored = localStorage.getItem(key)
        if (stored) {
            setItems(new Map(JSON.parse(stored)))
        }
        console.log(`Загружен ${key}!`)
    }, [])

    return [
        items,
        setItems,
        currentItem, 
        setCurrentItem
    ]
}

export default useChatLocalStorage