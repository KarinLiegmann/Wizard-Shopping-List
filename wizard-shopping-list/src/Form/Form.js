import './Form.css'

import PropTypes from 'prop-types'
import Button from '../Button/Button'


export default function Form({ onCreateShoppingItem }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target; // Get the form element by the event
        const input = form.title; // The name attribute of the input field
        onCreateShoppingItem(input.value);
        form.reset();
        input.focus();
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="shoppinglist">Add shopping item</label>
            <br />
            <input name="title" type="text" id="shoppinglist" placeholder="What else needs to be bought?"></input>
            <br />
            <Button type="submit" text="Add to List" />
        </form>
    )
}

Form.propTypes = {
    onCreateShoppingItem: PropTypes.func,
}