export default function ShoppingItem({ isDone, title }) {
    return (
        <li>
            <label htmlFor={title}>
                <input type="checkbox" checked={isDone} />
                {title}
            </label>
        </li>
    )
}

