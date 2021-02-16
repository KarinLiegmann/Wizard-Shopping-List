export default function ShoppingItem({ isDone, title, toggleCheckbox }) {
    return (
        <li>
            <label htmlFor={title}>
                <input type="checkbox" checked={isDone} onChange={toggleCheckbox} />
                {title}
            </label>
        </li>
    )
}

