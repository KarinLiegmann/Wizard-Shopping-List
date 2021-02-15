import './Button.css'
import './Input.css'

export default function Form({ inputId, placeholdertext, buttontext }) {
    return (
        <label htmlFor={inputId}>
            <input type="text" id={inputId} placeholder={placeholdertext}></input>
            <button>{buttontext}</button>
        </label>
    )
}