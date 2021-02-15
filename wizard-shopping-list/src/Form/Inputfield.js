import './Inputfield.css'

export default function Inputfield({ type, label, placeholder = "" }) {
    return (
        <label htmlFor={label}>
            <input type={type} placeholder={placeholder}></input>
        </label>
    )
}