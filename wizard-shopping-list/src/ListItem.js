export default function ListItem({ isDone = false, item }) {
    return (
        <li>
            <label htmlFor={item}>
                <input type="checkbox" checked={isDone} />
                {item}
            </label>
        </li>
    )
}

