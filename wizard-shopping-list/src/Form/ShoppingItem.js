import './ShoppingList.css'

export default function ShoppingItem({ isDone, title, onToggleItem }) {
    return (
        <li>            
                <input type="checkbox" checked={isDone} onChange={onToggleItem} />
                {title}            
        </li>
    )
}

