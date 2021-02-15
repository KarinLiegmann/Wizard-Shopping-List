export default function ListItem({ isDone = false, item }) {

    return (
        <label>
            <input type="checkbox" checked={isDone} />
            {item}
        </label>
    )
}

