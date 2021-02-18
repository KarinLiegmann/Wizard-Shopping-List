import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../Button/Button'


export default function Form({ onCreateShoppingItem, onClickFunction }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target; // Get the form element by the event
        const input = form.title; // The name attribute of the input field
        if (input.value !== '') onCreateShoppingItem(input.value);
        form.reset();
        input.focus();
    }


    return (
        <FormWrapper onSubmit={handleSubmit}>
            <label htmlFor="shoppinglist">Add shopping item</label>
            <br />
            <input name="title" type="text" id="shoppinglist" placeholder="What else needs to be bought?"></input>
            <br />
            <Button text="Add to List" />            
        </FormWrapper>
    )
}

Form.propTypes = {
    onCreateShoppingItem: PropTypes.func,
}

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;

    input {
        font-size: 1rem;
        padding: 0.4rem 1.2rem;
        }

    label {
        font-size: 1.3rem;
    }
`
